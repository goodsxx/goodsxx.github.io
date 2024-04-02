---
title: 发布者确认模式
date: 2023-03-04
category:
 - 分布式中间件
tag: 
 - RabbitMQ
timeline: true
order: 7
---
::: tip ✨✨✨✨✨
发布者确认模式是一种确保消息传递成功的机制，在 RabbitMQ 中，可以通过开启 Publisher Confirms 功能来实现。当开启 Publisher Confirms 后，生产者发送消息时，RabbitMQ 会对消息进行确认，以确保消息已被正确接收和处理。
:::

<!-- more -->

## 介绍

发布者确认模式是一种确保消息传递成功的机制，在 RabbitMQ 中，可以通过开启 Publisher Confirms 功能来实现。当开启 Publisher Confirms 后，生产者发送消息时，RabbitMQ 会对消息进行确认，以确保消息已被正确接收和处理。

发布者确认模式有三种策略：

1. 逐个发布消息
2. 批量发布消息
3. 异步处理发布者确认
   
## 逐个发布消息

### 使用场景

逐个发布消息适用于需要在确保每条消息可靠传输的情况下发送消息的场景，例如在需要向多个消费者发送不同的消息时，可以使用 Publisher Confirms 来确保每个消息都能被准确地传递。

### 优缺点

- **优点**：逐个发布消息可以确保每条消息都能够可靠地传输。
- **缺点**：由于每个消息都要等待确认结果后才能进行后续操作，可能会增加处理时间和网络负载。

### 代码示例

:::tabs
@tab 生产者
```cs
using RabbitMQ.Client;

var factory = new ConnectionFactory() { HostName = "localhost" };

// 创建连接和通道
using var connection = factory.CreateConnection();
using var channel = connection.CreateModel();

// 开启 Publisher Confirms 功能
channel.ConfirmSelect();

// 发布第一条消息，并等待确认
var body1 = Encoding.UTF8.GetBytes("Message 1");
channel.BasicPublish(exchange: "",
                     routingKey: "queue1",
                     basicProperties: null,
                     body: body1);

if (channel.WaitForConfirms())
{
    Console.WriteLine("Message 1 published successfully.");
}

// 发布第二条消息，并等待确认
var body2 = Encoding.UTF8.GetBytes("Message 2");
channel.BasicPublish(exchange: "",
                     routingKey: "queue2",
                     basicProperties: null,
                     body: body2);

if (channel.WaitForConfirms())
{
    Console.WriteLine("Message 2 published successfully.");
}
```
以上代码中，我们首先创建了一个连接和通道，并开启了 Publisher Confirms 功能。接着，我们使用 BasicPublish 方法分别向两个不同的队列 queue1 和 queue2 发送消息，并使用 WaitForConfirms 方法等待每个消息被确认。

@tab 消费者
```cs
using RabbitMQ.Client;

var factory = new ConnectionFactory() { HostName = "localhost" };

// 创建连接和通道
using var connection = factory.CreateConnection();
using var channel = connection.CreateModel();

// 声明队列1
channel.QueueDeclare(queue: "queue1",
                     durable: false,
                     exclusive: false,
                     autoDelete: false,
                     arguments: null);

// 创建事件基本消费者，并接收队列1的消息
var consumer1 = new EventingBasicConsumer(channel);
consumer1.Received += (model, ea) =>
{
    ReadOnlyMemory<byte> body = ea.Body.ToArray();
    string message = Encoding.UTF8.GetString(body.Span);
    Console.WriteLine(" [x] Received from queue1 '{0}'", message);
};

channel.BasicConsume(queue: "queue1",
                     autoAck: true,
                     consumer: consumer1);

// 声明队列2
channel.QueueDeclare(queue: "queue2",
                     durable: false,
                     exclusive: false,
                     autoDelete: false,
                     arguments: null);

// 创建事件基本消费者，并接收队列2的消息
var consumer2 = new EventingBasicConsumer(channel);
consumer2.Received += (model, ea) =>
{
    ReadOnlyMemory<byte> body = ea.Body.ToArray();
    string message = Encoding.UTF8.GetString(body.Span);
    Console.WriteLine(" [x] Received from queue2 '{0}'", message);
};

channel.BasicConsume(queue: "queue2",
                     autoAck: true,
                     consumer: consumer2);
```
以上代码中，我们创建了两个事件基本消费者，分别用于接收 queue1 和 queue2 队列中的消息。当有消息到达时，我们可以解析消息体并输出消息内容。
:::

## 批量发布消息

### 使用场景

批量发布消息适用于需要同时发送多条消息的场景，例如在向多个消费者广播同一消息时，可以使用 Publisher Confirms 来提高消息发送效率。

### 优缺点

- 优点：批量发布消息可以提高消息发送效率，减少网络负载和处理时间。
- 缺点：由于需要等待所有消息被确认后才能进行后续操作，可能会增加处理时间和网络负载。

### 代码示例

:::tabs
@tab 生产者
```cs
using RabbitMQ.Client;

var factory = new ConnectionFactory() { HostName = "localhost" };

// 创建连接和通道
using var connection = factory.CreateConnection();
using var channel = connection.CreateModel();

// 开启 Publisher Confirms 功能
channel.ConfirmSelect();

// 发布三条消息，并等待全部确认
var body1 = Encoding.UTF8.GetBytes("Message 1");
var body2 = Encoding.UTF8.GetBytes("Message 2");
var body3 = Encoding.UTF8.GetBytes("Message 3");

channel.BasicPublish(exchange: "",
                     routingKey: "batch_queue",
                     basicProperties: null,
                     body: body1);

channel.BasicPublish(exchange: "",
                     routingKey: "batch_queue",
                     basicProperties: null,
                     body: body2);

channel.BasicPublish(exchange: "",
                     routingKey: "batch_queue",
                     basicProperties: null,
                     body: body3);

if (channel.WaitForConfirms())
{
    Console.WriteLine("All messages published successfully.");
}
```
以上代码中，我们首先创建了一个连接和通道，并开启了 Publisher Confirms 功能。接着，我们使用 BasicPublish 方法批量发布三条消息，并使用 WaitForConfirms 方法等待所有消息被确认。

@tab 消费者
```cs
using RabbitMQ.Client;

var factory = new ConnectionFactory() { HostName = "localhost" };

// 创建连接和通道
using var connection = factory.CreateConnection();
using var channel = connection.CreateModel();

// 声明队列
channel.QueueDeclare(queue: "batch_queue",
                     durable: false,
                     exclusive: false,
                     autoDelete: false,
                     arguments: null);

// 创建事件基本消费者，并接收消息
var consumer = new EventingBasicConsumer(channel);
consumer.Received += (model, ea) =>
{
    ReadOnlyMemory<byte> body = ea.Body.ToArray();
    string message = Encoding.UTF8.GetString(body.Span);
    Console.WriteLine(" [x] Received '{0}'", message);
};

channel.BasicConsume(queue: "batch_queue",
                     autoAck: true,
                     consumer: consumer);
```
以上代码中，我们创建了一个事件基本消费者，用于接收 batch_queue 队列中的消息。当有消息到达时，我们可以解析消息体并输出消息内容。
:::

## 异步处理发布者确认

### 使用场景

批量发布消息适用于需要同时发送多条消息的场景，例如在向多个消费者广播同一消息时，可以使用 Publisher Confirms 来提高消息发送效率。

### 优缺点

- 优点：异步处理发布者确认可以减少生产者线程的阻塞时间，提高生产者的并发能力。
- 缺点：由于需要额外的事件处理程序来处理确认结果，可能会增加代码复杂度。

### 代码示例

:::tabs
@tab 生产者
```cs
using RabbitMQ.Client;
using System.Threading.Tasks;

var factory = new ConnectionFactory() { HostName = "localhost" };

// 创建连接和通道
using var connection = factory.CreateConnection();
using var channel = connection.CreateModel();

// 开启 Publisher Confirms 功能
channel.ConfirmSelect();

// 发布一条消息，并处理确认结果
var body = Encoding.UTF8.GetBytes("Hello, RabbitMQ!");

channel.BasicAcks += (sender, args) =>
{
    Console.WriteLine("Message published successfully: {0}", args.DeliveryTag);
};

channel.BasicNacks += (sender, args) =>
{
    Console.WriteLine("Message failed to publish: DeliveryTag={0}, multiple={1}", args.DeliveryTag, args.Multiple);
};

channel.BasicPublish(exchange: "",
                     routingKey: "hello",
                     basicProperties: null,
                     body: body);

await Task.Delay(1000); // 等待异步确认事件处理完成
```
以上代码中，我们使用 BasicAcks 和 BasicNacks 事件处理程序来分别处理消息发布成功和失败的情况。在使用 BasicPublish 发布消息后，我们等待异步确认事件处理程序执行完成，以确保获取到确认结果。

@tab 消费者
```cs
using RabbitMQ.Client;

var factory = new ConnectionFactory() { HostName = "localhost" };

// 创建连接和通道
using var connection = factory.CreateConnection();
using var channel = connection.CreateModel();

// 声明队列
channel.QueueDeclare(queue: "hello",
                     durable: false,
                     exclusive: false,
                     autoDelete: false,
                     arguments: null);

// 创建事件基本消费者，并接收消息
var consumer = new EventingBasicConsumer(channel);
consumer.Received += (model, ea) =>
{
    ReadOnlyMemory<byte> body = ea.Body.ToArray();
    string message = Encoding.UTF8.GetString(body.Span);
    Console.WriteLine(" [x] Received '{0}'", message);
};

channel.BasicConsume(queue: "hello",
                     autoAck: true,
                     consumer: consumer);
```
以上代码中，我们创建了一个事件基本消费者，用于接收 hello 队列中的消息。当有消息到达时，我们可以解析消息体并输出消息内容。
:::

Publisher Confirms 是 RabbitMQ 中一种确保消息传递成功的机制，能够提高消息传递可靠性和效率。通过设置 Publisher Confirms 功能和处理异步确认事件，生产者可以在确保每条消息被正确接收和处理的同时，避免阻塞线程和提高并发能力。同时，消费者可以通过创建事件基本消费者并监听指定队列，实现对消息的接收和处理。