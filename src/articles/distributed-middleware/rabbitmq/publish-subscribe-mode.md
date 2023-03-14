---
title: 发布订阅模式
date: 2023-03-04
category:
 - 分布式中间件
tag: 
 - RabbitMQ
timeline: true
order: 3
---
::: tip ✨✨✨✨✨
发布/订阅模式（Publish-Subscribe Model）是 RabbitMQ 中常见的消息模式之一，它允许多个消费者接收同一个消息，每个消费者都会获得该消息的副本。在这种模式下，生产者只需将消息发送到交换机，由交换机将消息传递给所有订阅了该交换机的队列。因此，这种模式也被称为广播模式。
:::

<!-- more -->

## 介绍

发布/订阅模式（Publish-Subscribe Model）是 RabbitMQ 中常见的消息模式之一，它允许多个消费者接收同一个消息，每个消费者都会获得该消息的副本。在这种模式下，生产者只需将消息发送到交换机，由交换机将消息传递给所有订阅了该交换机的队列。因此，这种模式也被称为广播模式。

![发布订阅](./image/publish-subscribe-mode/1678775676522.png)

## 交换机

交换机是 RabbitMQ 中一个非常重要的概念，它负责接收从生产者发来的消息，并将消息路由到相应的队列中。RabbitMQ 定义了多种类型的交换机，如下所示：

- **Direct Exchange**：直连式交换机，根据消息的 Routing Key 直接匹配到相应的队列。
- **Fanout Exchange**：扇形交换机，将消息广播到绑定到这个交换机上的所有队列。
- **Topic Exchange**：主题交换机，根据消息的 Routing Key 进行匹配，可以支持通配符。
- **Headers Exchange**：头交换机，使用消息头部的键值对进行匹配。

在发布/订阅模式中，我们通常会使用 Fanout Exchange 进行消息的广播。

## 使用场景

发布/订阅模式适用于需要将消息广播给多个消费者的场景，例如新闻订阅、日志记录等。

## 代码示例

:::tabs
@tab 生产者

```cs
using RabbitMQ.Client;
using System.Text;

// 创建连接工厂对象，指定主机名和登录凭据信息
ConnectionFactory factory = new()
{
    HostName = "192.168.3.100",
    Port = 5672,
    UserName = "guest",
    Password = "guest"
};

// 创建连接和通道
using var connection = factory.CreateConnection();
using var channel = connection.CreateModel();

// 声明交换机，指定交换机类型为 fanout
channel.ExchangeDeclare(
    exchange: "logs",
    type: ExchangeType.Fanout);

// 发送消息到交换机
for (int i = 0; i < 10; i++)
{
    string message = $"Log 消息 {i}";
    byte[] body = Encoding.UTF8.GetBytes(message);

    channel.BasicPublish(
        exchange: "logs", // 指定交换机名称
        routingKey: string.Empty, // 发送到 fanout 类型的交换机时，routingKey 不起作用，可以设置为空字符串
        basicProperties: null,
        body: body);

    Console.WriteLine(" [生产者] 发送消息：{0}", message);
}

Console.WriteLine("按[Enter]键退出");
Console.ReadLine();
```

@tab 消费者1
```cs
using RabbitMQ.Client.Events;
using RabbitMQ.Client;
using System.Text;

// 创建连接工厂对象，指定主机名和登录凭据信息
ConnectionFactory factory = new()
{
    HostName = "192.168.3.100",
    Port = 5672,
    UserName = "guest",
    Password = "guest"
};
// 创建连接和通道
using var connection = factory.CreateConnection();
using var channel = connection.CreateModel();

// 声明交换机，指定交换机类型为 fanout
channel.ExchangeDeclare(
    exchange: "logs",
    type: ExchangeType.Fanout);

// 声明队列，让系统随机生成队列名
// 当我们不向 QueueDeclare（） 提供任何参数时，我们会创建一个具有生成名称的非持久、独占、自动删除队列：
var queueName = channel.QueueDeclare().QueueName;

// 将队列绑定到交换机
channel.QueueBind(
    queue: queueName,  // 队列名称
    exchange: "logs",  // 交换机名称
    routingKey: "");   // 发送到 fanout 类型的交换机时，routingKey 不起作用，可以设置为空字符串

Console.WriteLine(" [消费者1] 等待消息中...");

// 创建事件消费者，用于处理接收到的消息
var consumer = new EventingBasicConsumer(channel);

// 处理接收到的消息
consumer.Received += (model, ea) =>
{
    ReadOnlyMemory<byte> body = ea.Body.ToArray();
    string message = Encoding.UTF8.GetString(body.Span);
    Console.WriteLine(" [消费者1] 收到消息：{0}", message);
};

// 订阅队列
channel.BasicConsume(
    queue: queueName,  // 队列名称
    autoAck: true,     // 是否自动发送确认消息
    consumer: consumer);

Console.WriteLine("按[Enter]键退出");
Console.ReadLine();
```

@tab 消费者2
```cs
using RabbitMQ.Client.Events;
using RabbitMQ.Client;
using System.Text;

// 创建连接工厂对象，指定主机名和登录凭据信息
ConnectionFactory factory = new()
{
    HostName = "192.168.3.100",
    Port = 5672,
    UserName = "guest",
    Password = "guest"
};
// 创建连接和通道
using var connection = factory.CreateConnection();
using var channel = connection.CreateModel();

// 声明交换机，指定交换机类型为 fanout
channel.ExchangeDeclare(
    exchange: "logs",
    type: ExchangeType.Fanout);

// 声明队列，让系统随机生成队列名
// 当我们不向 QueueDeclare（） 提供任何参数时，我们会创建一个具有生成名称的非持久、独占、自动删除队列：
var queueName = channel.QueueDeclare().QueueName;

// 将队列绑定到交换机
channel.QueueBind(
    queue: queueName,  // 队列名称
    exchange: "logs",  // 交换机名称
    routingKey: "");   // 发送到 fanout 类型的交换机时，routingKey 不起作用，可以设置为空字符串

Console.WriteLine(" [消费者2] 等待消息中...");

// 创建事件消费者，用于处理接收到的消息
var consumer = new EventingBasicConsumer(channel);

// 处理接收到的消息
consumer.Received += (model, ea) =>
{
    ReadOnlyMemory<byte> body = ea.Body.ToArray();
    string message = Encoding.UTF8.GetString(body.Span);
    Console.WriteLine(" [消费者2] 收到消息：{0}", message);
};

// 订阅队列
channel.BasicConsume(
    queue: queueName,  // 队列名称
    autoAck: true,     // 是否自动发送确认消息
    consumer: consumer);

Console.WriteLine("按[Enter]键退出");
Console.ReadLine();
```
:::

分别启动消费者及生产者客户端，得到如下输出：

:::tabs
@tab 生产者
```shell
[生产者] 发送消息：Log 消息 0
[生产者] 发送消息：Log 消息 1
[生产者] 发送消息：Log 消息 2
[生产者] 发送消息：Log 消息 3
[生产者] 发送消息：Log 消息 4
[生产者] 发送消息：Log 消息 5
[生产者] 发送消息：Log 消息 6
[生产者] 发送消息：Log 消息 7
[生产者] 发送消息：Log 消息 8
[生产者] 发送消息：Log 消息 9
按[Enter]键退出
```
@tab 消费者1
```shell
[消费者1] 等待消息中...
按[Enter]键退出
[消费者1] 收到消息：Log 消息 0
[消费者1] 收到消息：Log 消息 1
[消费者1] 收到消息：Log 消息 2
[消费者1] 收到消息：Log 消息 3
[消费者1] 收到消息：Log 消息 4
[消费者1] 收到消息：Log 消息 5
[消费者1] 收到消息：Log 消息 6
[消费者1] 收到消息：Log 消息 7
[消费者1] 收到消息：Log 消息 8
[消费者1] 收到消息：Log 消息 9
```
@tab 消费者2
```shell
[消费者2] 等待消息中...
按[Enter]键退出
[消费者2] 收到消息：Log 消息 0
[消费者2] 收到消息：Log 消息 1
[消费者2] 收到消息：Log 消息 2
[消费者2] 收到消息：Log 消息 3
[消费者2] 收到消息：Log 消息 4
[消费者2] 收到消息：Log 消息 5
[消费者2] 收到消息：Log 消息 6
[消费者2] 收到消息：Log 消息 7
[消费者2] 收到消息：Log 消息 8
[消费者2] 收到消息：Log 消息 9
```
:::

从输出结果中我们可以看到，生产者发出的消息被所有订阅者收到。