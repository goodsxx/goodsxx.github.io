---
title: 简单模式
date: 2023-03-04
category:
 - 分布式中间件
tag: 
 - RabbitMQ
timeline: true
order: 1
---

::: tip ✨✨✨✨✨
RabbitMQ 简单模式（Simple Mode）是 RabbitMQ 最基础的一种使用模式，也称为点对点模式。在简单模式中，一个生产者向一个消费者发送消息，消费者从队列中获取并处理该消息。这种模式非常适用于只有一个消费者需要处理任务的场景，如日志处理、计算任务等。
:::

<!-- more -->

## 介绍

RabbitMQ 简单模式（Simple Mode）是 RabbitMQ 最基础的一种使用模式，也称为“Hello World”模式，它包括一个生产者将消息发送到队列中，然后一个消费者从该队列接收并处理该消息。

![简单模式](./image/simple-mode/1678761415001.png)

## 使用场景

简单队列模式适用于需要单个消费者处理任务的场景，例如：

- 异步处理任务：通过将任务放入队列中，让消费者异步处理任务，从而提高系统的吞吐量和性能。
- 消息传递：通过消息代理传递消息，使得不同的应用程序可以异步地进行解耦合的通信。

## 代码示例

:::tabs
@tab 生产者

```cs
using RabbitMQ.Client;
using System.Text;

// 创建ConnectionFactory实例，设置RabbitMQ节点的主机名
ConnectionFactory factory = new() 
{ 
    HostName = "192.168.3.100", 
    Port=5672, 
    UserName = "guest", 
    Password = "guest" 
};
using var connection = factory.CreateConnection(); // 创建连接
using var channel = connection.CreateModel(); // 创建通道

// 声明队列，如果该队列不存在，则会自动创建
channel.QueueDeclare(queue: "hello",
                     durable: false,
                     exclusive: false,
                     autoDelete: false,
                     arguments: null);

string message = "Hello World!"; // 待发送的消息
var body = Encoding.UTF8.GetBytes(message); // 将消息转换成字节数组

// 发布消息到队列中，exchange参数为空表示默认交换器
channel.BasicPublish(exchange: "",
                     routingKey: "hello", // 消息的路由键为hello
                     basicProperties: null,
                     body: body);
Console.WriteLine("[生产者] 发送消息：{0}", message); // 输出发送的消息内容

Console.WriteLine("按[Enter]键退出");
Console.ReadLine();
```

**参数说明**

>  **QueueDeclare：**
> - **`queue`** : 队列的名称，用于标识要发送或消费的消息队列。
> - **`durable`** : 是否持久化，如果为 true，则 RabbitMQ 会将该队列存储在磁盘中，即使 RabbitMQ 服务重启也不会丢失。默认为 false。
> - **`exclusive`** : 是否排他性，如果为 true，则该队列只能被当前连接使用，并在连接关闭时删除。默认为 false。
> - **`autoDelete`** : 是否自动删除，如果为 true，则当队列没有任何消费者时，RabbitMQ 会自动删除该队列。默认为 false。
> - **`arguments`** : 队列参数，用于设置队列的特定参数选项。

> **BasicPublish：**
> - **`exchange`** : 交换机的名称，用于标识要发送消息的目标交换机。在简单模式下通常为空字符串。
> - **`routingKey`** : 路由键，用于指定消息的路由规则，在简单模式下通常与队列名称相同。
> - **`basicProperties`** : 消息属性对象，用于设置消息的各种属性，如消息的优先级、过期时间、持久化等。在简单模式下通常为 null。
> - **`body`** : 消息体，即要发送的消息内容，可以是二进制数据流或 UTF-8 编码的文本。

@tab 消费者

```cs
using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using System.Text;

// 创建连接工厂对象，指定主机名和登录凭据信息
ConnectionFactory factory = new()
{
    HostName = "192.168.3.100",
    Port = 5672,
    UserName = "guest",
    Password = "guest"
};
using var connection = factory.CreateConnection(); // 创建连接
using var channel = connection.CreateModel(); // 创建通道

// 声明队列，如果该队列不存在，则会自动创建
channel.QueueDeclare(queue: "hello",
                     durable: false,
                     exclusive: false,
                     autoDelete: false,
                     arguments: null);

// 创建一个事件基本消费者
var consumer = new EventingBasicConsumer(channel);
consumer.Received += (model, ea) =>
{
    ReadOnlyMemory<byte> body = ea.Body.ToArray(); // 获取消息体的字节数组
    string message = Encoding.UTF8.GetString(body.Span); // 将字节数组转换成字符串
    Console.WriteLine(" [消费者] 收到消息：{0}", message); // 输出接收到的消息
    //成功时手动确认消息
    channel.BasicAck(deliveryTag: ea.DeliveryTag, multiple: false);
    //失败时打回队列
    //channel.BasicNack(deliveryTag: ea.DeliveryTag, multiple: false, requeue: true);
};

// 启动消费者
channel.BasicConsume(queue: "hello",
                     autoAck: false, // 是否自动确认消息已经被消费
                     consumer: consumer); // 指定消费者

Console.WriteLine("按[Enter]键退出");
Console.ReadLine(); 
```
**参数说明**

> **EventingBasicConsumer.Received：**
> - **`model`** : 消费者对象所在的信道，用于处理消息确认等操作。
> - **`ea`** : BasicDeliverEventArgs 对象，包含了接收到的消息信息，如消息体、消息属性、消息标识符等。
> - **`body`** : 字节数组类型，表示消息体的二进制数据流。
> - **`message`** : string 类型，表示将消息体转换为字符串后得到的文本内容。

> **BasicConsume：**
> - **`autoAck`** : 是否自动确认消息，如果为 true，则 RabbitMQ 在向该消费者发送一条消息时，会自动将该消息标记为已经确认（ack），无需手动调用 BasicAck 方法进行确认。默认为 false。
> - **`consumer`** : EventingBasicConsumer 对象，用于实现消费者的事件处理和状态管理。
:::

简单队列模式是 RabbitMQ 中最简单的消息模式之一，适用于需要单个消费者处理任务的场景。本文演示了如何使用 RabbitMQ 实现简单队列模式，包括生产者将消息发送到队列中，消费者从队列中接收并处理该消息。