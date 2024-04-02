---
title: FreeRedis
date: 2023-07-09
order: 1
category:
 - 分布式中间件
---

::: tip ✨✨✨✨✨
FreeRedis 是一款面向 .NET 的 Redis 客户端开源组件，支持 .NET Core 2.1+、.NET Framework 4.0+，支持 Redis 2.6+ 版本的所有功能。

本文将介绍 FreeRedis 的基本使用方法和常用方法封装。
:::

<!-- more -->

## 快速入门

```cs
public static RedisClient cli = new RedisClient("127.0.0.1:6379,password=123,defaultDatabase=13");
//cli.Serialize = obj => JsonConvert.SerializeObject(obj);
//cli.Deserialize = (json, type) => JsonConvert.DeserializeObject(json, type);
cli.Notice += (s, e) => Console.WriteLine(e.Log); //打印命令日志

cli.Set("key1", "value1");
cli.MSet("key1", "value1", "key2", "value2");

string value1 = cli.Get("key1");
string[] vals = cli.MGet("key1", "key2");
```

## String 读写缓存

```cs
/// <summary>
/// 写入缓存
/// </summary>
/// <typeparam name="T"></typeparam>
/// <param name="key"></param>
/// <param name="value"></param>
/// <param name="seconds">过期时间(秒)</param>
/// <returns></returns>
public async void StringSetAsync<T>(string key, T value, int seconds)
{
    await redisClient.SetAsync(key, JsonConvert.SerializeObject(value), seconds);
}

/// <summary>
/// 获取单个Key的值
/// </summary>
/// <param name="key"></param>
/// <returns></returns>
public async Task<string> StringGetAsync(string key)
{
    return await redisClient.GetAsync(key);
}

/// <summary>
/// 删除指定Key的缓存
/// </summary>
/// <param name="key"></param>
public async Task<long> StringDelAsync(string key)
{
    return await redisClient.DelAsync(key);
}

/// <summary>
/// 判断指定的key是否存在
/// </summary>
/// <param name="key"></param>
/// <returns></returns>
public async Task<bool> KeyExistsAsync(string key)
{
    return await redisClient.ExistsAsync(key);
}
/// <summary>
/// 判断指定类型的key是否存在
/// </summary>
/// <param name="key"></param>
/// <param name="keyType"></param>
/// <returns></returns>
public async Task<bool> KeyExistsAsync(string key, KeyType keyType)
{
    return await redisClient.TypeAsync(key) == keyType;
}
```

## Set 集合操作

```cs
/// <summary>
/// 添加一个或多个元素到集合的 key 中
/// 添加一个或多个指定的member元素到集合的 key中.指定的一个或者多个元素member 如果已经在集合key中存在则忽略.如果集合key 不存在，则新建集合key,并添加member元素到集合key中.
/// 如果key 的类型不是集合则返回错误.
/// </summary>
/// <typeparam name="T"></typeparam>
/// <param name="key"></param>
/// <param name="value"></param>
public Task<long> SetAddAsync<T>(string key, params T[] value)
{
    if (typeof(T).IsValueType || typeof(T) == typeof(string))
    {
        var v = value.Select(x => x.ToString()).ToArray();
        return redisClient.SAddAsync(key, v);
    }
    else
    {
        var v = value.Select(x => JsonConvert.SerializeObject(x)).ToArray();
        return redisClient.SAddAsync(key, v);
    }
}

/// <summary>
/// 获取集合内的元素数量
/// </summary>
/// <param name="key"></param>
public async Task<long> SetLengthAsync(string key)
{
    return await redisClient.SCardAsync(key);
}

/// <summary>
/// 获取集合内的所有元素
/// 返回key集合所有的元素.
/// </summary>
/// <param name="key"></param>
/// <returns></returns>
public async Task<string[]> SetMembersAsync(string key)
{
    return await redisClient.SMembersAsync(key);
}

/// <summary>
/// 确定一个给定的值是否在集合内
/// 返回成员 member 是否是存储的集合 key的成员
/// </summary>
/// <typeparam name="T"></typeparam>
/// <param name="key"></param>
/// <param name="value"></param>
/// <returns></returns>
public async Task<bool> SetContainsAsync<T>(string key, T value)
{
    if (typeof(T).IsValueType || typeof(T) == typeof(string))
    {
        return await redisClient.SIsMemberAsync(key, value.ToString());
    }
    else
    {
        return await redisClient.SIsMemberAsync(key, JsonConvert.SerializeObject(value));
    }
}

/// <summary>
/// 从集合中移除指定的元素
/// 在key集合中移除指定的元素. 如果指定的元素不是key集合中的元素则忽略 如果key集合不存在则被视为一个空的集合，该命令返回0.
/// 如果key的类型不是一个集合,则返回错误.
/// </summary>
/// <typeparam name="T"></typeparam>
/// <param name="key"></param>
/// <param name="value"></param>
/// <returns></returns>
public async Task<long> SetRemoveAsync<T>(string key, params T[] value)
{
    if (typeof(T).IsValueType || typeof(T) == typeof(string))
    {
        var v = value.Select(x => x.ToString()).ToArray();
        return await redisClient.SRemAsync(key, v);
    }
    else
    {
        var v = value.Select(x => JsonConvert.SerializeObject(x)).ToArray();
        return await redisClient.SRemAsync(key, v);
    }
}
```

## Stream 消息队列

```cs
/// <summary>
/// 创建Stream(指定默认消费者)
/// </summary>
/// <returns></returns>
public async Task CreateStreamAsync(string stream, string group = defaultGroup)
{
    //判断当前分组是否存在
    if (!await KeyExistsAsync(stream, KeyType.stream))
    {
        await redisClient.XGroupCreateAsync(stream, group, MkStream: true);
    }
}

/// <summary>
/// 发送消息(自动创建stream队列)
/// </summary>
/// <typeparam name="T"></typeparam>
/// <param name="stream"></param>
/// <param name="key"></param>
/// <param name="value"></param>
public async Task AddMessageAsync<T>(string stream, string key, T value)
{
    //创建队列
    await CreateStreamAsync(stream);
    if (typeof(T).IsValueType || typeof(T) == typeof(string))
    {
        await redisClient.XAddAsync(stream, key, value.ToString());
    }
    else
    {
        await redisClient.XAddAsync(stream, key, JsonConvert.SerializeObject(value));
    }

}

/// <summary>
/// 接收指定stream中的任意消息(单条)
/// </summary>
/// <param name="stream"></param>
/// <param name="group"></param>
/// <param name="consumerName"></param>
/// <returns></returns>
public async Task<(string id, string key, string value)?> ReadSingleMessageAsync(string stream, string group = defaultGroup, string consumerName = defaultConsumer)
{
    if (await redisClient.XLenAsync(stream) == 0) return null;
    var message = await redisClient.XReadGroupAsync(group, consumerName, 0, stream, ">");
    if (message?.fieldValues?.Length >= 2)
    {
        return (message.id, message.fieldValues[0].ToString(), message.fieldValues[1].ToString());
    }
    return null;
}

/// <summary>
/// 接收指定stream中的任意消息(多条)
/// </summary>
/// <param name="stream">stream队列名</param>
/// <param name="maxCount">一次性读取的最大消息数量</param>
/// <param name="group">消费者组</param>
/// <param name="consumerName">消费者</param>
/// <returns></returns>
public async Task<List<(string id, string key, string value)>> ReadMessagesAsync(string stream, int count, string group = defaultGroup, string consumerName = defaultConsumer)
{
    if (await redisClient.XLenAsync(stream) == 0) return null;
    var results = new List<(string id, string key, string value)>();
    var streamMsgs = await redisClient.XReadGroupAsync(group, consumerName, count, 0, false, stream, ">");
    if (streamMsgs?.Length > 0)
    {
        if (streamMsgs[0]?.entries?.Length > 0)
        {
            foreach (var entity in streamMsgs[0]?.entries)
            {
                if (entity?.fieldValues?.Length >= 2)
                {
                    results.Add((entity.id, entity.fieldValues[0].ToString(), entity.fieldValues[1].ToString()));
                }
            }
        }
    }
    return results;
}

/// <summary>
/// 读取未确认消息(单条)
/// 超过5处理失败的消息将删除并自动加入失败队列
/// </summary>
/// <param name="stream"></param>
/// <param name="group"></param>
/// <param name="consumerName"></param>
/// <returns></returns>
public async Task<(string id, string key, string value)?> ReadSingleNoAckMessageAsync(string stream, string group = defaultGroup, string consumerName = defaultConsumer)
{
    if (await redisClient.XLenAsync(stream) == 0) return null;
    var message = await redisClient.XReadGroupAsync(group, consumerName, 0, stream, "0");
    if (message?.fieldValues?.Length >= 2)
    {
        //从pending中读取该消息
        var pedings = await redisClient.XPendingAsync(stream, group, message.id, message.id, 1, consumerName);
        if (pedings?.Length > 0)
        {
            if (pedings[0].deliveredTimes > 10)//处理失败次数超过10次将确认该条消息并加入失败队列
            {
                await redisClient.XAddAsync($"faild_stream_{stream}", message.fieldValues[0].ToString(), message.fieldValues[1]);
                await redisClient.XDelAsync(stream, pedings[0].id);
            }
            else
            {
                return (message.id, message.fieldValues[0].ToString(), message.fieldValues[1].ToString());
            }
        }
    }
    return null;
}

/// <summary>
/// 读取未确认消息(多条)
/// 超过5处理失败的消息将删除并自动加入失败队列
/// 已删除的消息将不会返回，故返回的消息数量可能小于count
/// </summary>
/// <param name="stream"></param>
/// <param name="count"></param>
/// <param name="group"></param>
/// <param name="consumerName"></param>
/// <returns></returns>
public async Task<List<(string id, string key, string value)>> ReadNoAckMessagesAsync(string stream, int count, string group = defaultGroup, string consumerName = defaultConsumer)
{
    if (await redisClient.XLenAsync(stream) == 0) return null;
    var results = new List<(string id, string key, string value)>();
    var streamMsgs = await redisClient.XReadGroupAsync(group, consumerName, count, 0, false, stream, "0");

    if (streamMsgs?.Length > 0)
    {
        if (streamMsgs[0]?.entries?.Length > 0)
        {
            //过滤出有效的消息
            var list = streamMsgs[0]?.entries?.Where(x => x?.fieldValues?.Length >= 2).ToArray();
            if (list.Length > 0)
            {
                var firstId = list.FirstOrDefault()?.id;
                var lastId = list.LastOrDefault()?.id;
                //从pending中读取消息
                var pedings = redisClient.XPending(stream, group, firstId, lastId, count, consumerName);
                if (pedings?.Length > 0)
                {
                    foreach (var faildMsg in pedings)
                    {
                        var message = list.FirstOrDefault(x => x.id == faildMsg.id);
                        if (faildMsg.deliveredTimes > 5)//处理失败次数超过10次将确认该条消息并加入失败队列
                        {
                            await redisClient.XAddAsync($"faild_stream_{stream}", message.fieldValues[0].ToString(), message.fieldValues[1]);
                            await redisClient.XDelAsync(stream, faildMsg.id);
                        }
                        else//未超过的未确认消息将返回
                        {
                            results.Add((faildMsg.id, message.fieldValues[0].ToString(), message.fieldValues[1].ToString()));
                        }
                    }
                }
            }
        }
    }
    return results;
}


/// <summary>
/// 确认消息(有消费者组才需要)
/// </summary>
/// <param name="stream"></param>
/// <param name="group"></param>
/// <param name="messageId"></param>
public async Task<long> AckMessageAsync(string stream, string messageId, string group = defaultGroup)
{
    return await redisClient.XAckAsync(stream, group, messageId);
}

/// <summary>
/// 删除消息
/// </summary>
/// <param name="stream"></param>
/// <param name="messageId"></param>
public async Task DeleteMessageAsync(string stream, string messageId)
{
    await redisClient.XDelAsync(stream, messageId);
}
```