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
发布/订阅模式（Publish-Subscribe Model）是一种常见的消息队列模式，用于将消息从一个生产者发送到多个消费者。在该模式中，消息生产者将消息发布到一个或多个主题（Topic），而消息消费者则可以订阅一个或多个主题来接收感兴趣的消息。
:::

<!-- more -->

## 介绍

发布/订阅模式（Publish-Subscribe）是一种常见的消息队列模式，用于将消息从一个生产者发送到多个消费者。在该模式中，消息生产者将消息发布到一个或多个主题（Topic），而消息消费者则可以订阅一个或多个主题来接收感兴趣的消息。

在 RabbitMQ 中，发布/订阅模式通常使用交换机（Exchange）来实现。生产者将消息发送到交换机中，而每个消费者则创建自己的队列，并通过绑定（Binding）将队列与交换机关联起来。当有消息发送到交换机时，交换机会根据绑定规则将消息分发给相应的队列，从而实现消息的广播和多路复用。

## 使用场景

- 多个消费者需要处理相同的消息。例如，一个消息需要同时被推送到多个订阅者进行处理，比如新闻订阅服务。
- 消息生产者需要将消息广播给多个消费者。例如，系统需要将某个事件通知给所有在线用户。
- 系统需要支持动态监听和添加/移除订阅者。例如，用户可以随时订阅/取消订阅某些主题，而无需停止整个系统。
- 系统需要支持消息过滤和选择性接收。例如，不同的订阅者可能只对特定主题或特定类型的消息感兴趣。

## 优缺点

### 优点

- 实现了消息的广播和多路复用，能够同时处理多个订阅者的请求。
- 支持动态监听和添加/移除订阅者，使得系统具备良好的扩展性和灵活性。
- 支持消息过滤和选择性接收，能够根据不同的订阅者的需求进行定制化推送。
- 提高了系统的可靠性和鲁棒性，即使某个消费者出现问题或下线，也不会影响其他消费者的正常运行。

### 缺点

- 可能存在消息重复或丢失的问题，需要进行幂等性处理或消息确认机制。
- 系统架构较为复杂，需要考虑交换机、队列和绑定等各种配置参数和规则。
- 系统的实时性和可靠性取决于网络延迟、消息传输速度和消费者的处理能力等因素。

## 代码示例

:::tabs
@tab 生产者

```cs
class Producer
{
    static void Main(string[] args)
    {
        // 创建连接工厂对象，指定主机名和登录凭据信息
        ConnectionFactory factory = new()
        {
            HostName = "192.168.3.100",
            Port = 5672,
            UserName = "guest",
            Password = "guest"
        };

        // 创建连接对象
        using var connection = factory.CreateConnection();
        // 创建信道对象
        using var channel = connection.CreateModel();
            
        var exchangeName = "logs"; // 定义交换机名称
        // 声明一个 fanout 类型的交换机，用于广播消息
        channel.ExchangeDeclare(exchange: exchangeName, type: ExchangeType.Fanout);

        string[] messages = new string[]
        {
            "Hello", "World", "Welcome", "to", "RabbitMQ"
        };

        // 向队列中发送多个消息，并设置消息持久化
        foreach (var message in messages)
        {
            var body = Encoding.UTF8.GetBytes(message); // 将消息内容转换成字节数组
            var properties = channel.CreateBasicProperties();
            properties.Persistent = true; // 设置消息持久化

            // 发布消息到交换机中
            channel.BasicPublish(exchange: exchangeName, routingKey: "", basicProperties: null, body: body);

            Console.WriteLine(" [生产者] 发送： {0}", message);
        }

        Console.WriteLine(" 按 [enter] 键退出");
        Console.ReadLine();
    }
}
```

@tab 消费者1
```cs
class Consumer
{
    static void Main(string[] args)
    {
        // 创建连接工厂对象，指定主机名和登录凭据信息
        ConnectionFactory factory = new()
        {
            HostName = "192.168.3.100",
            Port = 5672,
            UserName = "guest",
            Password = "guest"
        };
        using var connection = factory.CreateConnection();
        using var channel = connection.CreateModel();

        var exchangeName = "logs"; // 定义交换机名称

        // 声明一个 fanout 类型的交换机，用于广播消息
        channel.ExchangeDeclare(exchange: exchangeName, type: ExchangeType.Fanout);

        // 创建一个临时队列，并绑定到指定的交换机上
        var queueName = channel.QueueDeclare().QueueName;
        channel.QueueBind(queue: queueName, exchange: exchangeName, routingKey: "");

        Console.WriteLine("[消费者1] 等待队列.");

        // 构造一个消费者对象，并设置 Received 事件回调函数
        var consumer = new EventingBasicConsumer(channel);
        consumer.Received += (model, ea) =>
        {
            var message = Encoding.UTF8.GetString(ea.Body.ToArray());
            Console.WriteLine($"[消费者1] Received '{message}'");
            //成功时手动确认消息
            channel.BasicAck(deliveryTag: ea.DeliveryTag, multiple: false);
            //失败时打回队列
            //channel.BasicNack(deliveryTag: ea.DeliveryTag, multiple: false, requeue: true);
        };

        // 启动消费者，并指定要消费的队列
        channel.BasicConsume(queue: queueName, autoAck: false, consumer: consumer);

        Console.WriteLine("按 [enter] 键退出");
        Console.ReadLine();
    }
}
```

@tab 消费者2
```cs
class Consumer
{
    static void Main(string[] args)
    {
        // 创建连接工厂对象，指定主机名和登录凭据信息
        ConnectionFactory factory = new()
        {
            HostName = "192.168.3.100",
            Port = 5672,
            UserName = "guest",
            Password = "guest"
        };
        using var connection = factory.CreateConnection();
        using var channel = connection.CreateModel();

        var exchangeName = "logs"; // 定义交换机名称

        // 声明一个 fanout 类型的交换机，用于广播消息
        channel.ExchangeDeclare(exchange: exchangeName, type: ExchangeType.Fanout);

        // 创建一个临时队列，并绑定到指定的交换机上
        var queueName = channel.QueueDeclare().QueueName;
        channel.QueueBind(queue: queueName, exchange: exchangeName, routingKey: "");

        Console.WriteLine("[消费者2] 等待队列.");

        // 构造一个消费者对象，并设置 Received 事件回调函数
        var consumer = new EventingBasicConsumer(channel);
        consumer.Received += (model, ea) =>
        {
            var message = Encoding.UTF8.GetString(ea.Body.ToArray());
            Console.WriteLine($"[消费者2] Received '{message}'");
            //成功时手动确认消息
            channel.BasicAck(deliveryTag: ea.DeliveryTag, multiple: false);
            //失败时打回队列
            //channel.BasicNack(deliveryTag: ea.DeliveryTag, multiple: false, requeue: true);
        };

        // 启动消费者，并指定要消费的队列
        channel.BasicConsume(queue: queueName, autoAck: false, consumer: consumer);

        Console.WriteLine("按 [enter] 键退出");
        Console.ReadLine();
    }
}
```
:::

在生产者中，我们首先创建了一个 ConnectionFactory 实例，并指定了 RabbitMQ 服务的主机名。然后，使用该实例创建了一个连接对象，并创建了一个通道（Channel）对象。

接下来，我们定义了交换机的名称，并通过 ExchangeDeclare 方法声明了一个类型为 fanout 的交换机，并将消息通过指定的交换机发出。

在消费者中，我们使用 QueueDeclare 方法创建了一个临时队列，并使用 QueueBind 方法将该队列绑定到指定的交换机上。这里需要注意，如果没有指定 routingKey，则会将队列与交换机上的所有绑定进行匹配。

接下来，我们构造了一个 EventingBasicConsumer 对象，并定义了 Received 事件回调函数。当消费者从队列中收到消息时，就会触发该事件回调函数，并将消息的内容输出到控制台上。

最后，我们通过 BasicConsume 方法启动消费者，并指定要消费的队列。其中，queue 参数表示要从哪个队列获取消息，autoAck 参数表示是否自动确认消息已经被消费，这里我们使用默认值 true，表示自动确认消息，consumer 参数表示要使用的消费者对象。

## 定制化推送

在 RabbitMQ 的发布订阅模式中，可以通过绑定不同的队列和交换机来实现针对不同订阅者需求的消息推送。

具体来说，我们可以为每个订阅者创建一个独立的队列，并将该队列绑定到指定的交换机上。当发布者向这个交换机发送一条消息时，该消息会被广播到所有的队列中，从而满足订阅者的定制化推送需求。

例如，假设我们有三个订阅者，分别希望接收不同类型的消息：

- 订阅者 A：只希望接收网站用户注册相关的消息；
- 订阅者 B：只希望接收网站订单支付相关的消息；
- 订阅者 C：希望接收所有类型的消息。

那么我们可以分别为这三个订阅者创建不同的队列，并将它们分别绑定到专门处理网站用户注册、网站订单支付以及所有类型消息的交换机上。

接着，当发布者要向订阅者 A 推送一条网站用户注册相关的消息时，它只需要将这条消息发送到处理网站用户注册的交换机即可；当发布者要向订阅者 B 推送一条网站订单支付相关的消息时，它只需要将这条消息发送到处理网站订单支付的交换机即可。

而对于订阅者 C，由于它希望接收所有类型的消息，因此我们可以为它创建一个新的队列，并将该队列绑定到所有类型消息的交换机上。

以下是一个示例代码，展示了如何使用 .NET 6 创建一个带有多个订阅者的 RabbitMQ 发布订阅模式：

```cs
// 创建连接工厂对象，指定主机名和登录凭据信息
ConnectionFactory factory = new()
{
    HostName = "192.168.3.100",
    Port = 5672,
    UserName = "guest",
    Password = "guest"
};
using var connection = factory.CreateConnection();
using var channel = connection.CreateModel();

// 创建并配置处理网站用户注册的交换机和队列
var exchangeA = "exchange_A";
channel.ExchangeDeclare(exchange: exchangeA, type: ExchangeType.Fanout);
var queueA = channel.QueueDeclare().QueueName;
channel.QueueBind(queue: queueA, exchange: exchangeA, routingKey: "user_signup");

// 创建并配置处理网站订单支付的交换机和队列
var exchangeB = "exchange_B";
channel.ExchangeDeclare(exchange: exchangeB, type: ExchangeType.Fanout);
var queueB = channel.QueueDeclare().QueueName;
channel.QueueBind(queue: queueB, exchange: exchangeB, routingKey: "order_pay");

// 创建并配置处理所有类型消息的交换机和队列
var exchangeC = "exchange_C";
channel.ExchangeDeclare(exchange: exchangeC, type: ExchangeType.Fanout);
var queueC = channel.QueueDeclare().QueueName;
channel.QueueBind(queue: queueC, exchange: exchangeC, routingKey: "");

// 启动消费者 A，接收处理网站用户注册相关的消息
var consumerA = new EventingBasicConsumer(channel);
consumerA.Received += (model, ea) =>
{
    var message = Encoding.UTF8.GetString(ea.Body.ToArray());
    Console.WriteLine($"接收到用户注册的消息: {message}");
};
channel.BasicConsume(queue: queueA, autoAck: true, consumer: consumerA);

// 启动消费者 B，接收处理网站订单支付相关的消息
var consumerB = new EventingBasicConsumer(channel);
consumerB.Received += (model, ea) =>
{
    var message = Encoding.UTF8.GetString(ea.Body.ToArray());
    Console.WriteLine($"接收到订单支付的消息: {message}");
};
channel.BasicConsume(queue: queueB, autoAck: true, consumer: consumerB);

// 启动消费者 C，接收所有类型的消息
var consumerC = new EventingBasicConsumer(channel);
consumerC.Received += (model, ea) =>
{
    var message = Encoding.UTF8.GetString(ea.Body.ToArray());
    Console.WriteLine($"接收到所有类型的消息: {message}");
};
channel.BasicConsume(queue: queueC, autoAck: true, consumer: consumerC);

// 发布消息到交换机 A，通知所有订阅者用户已注册成功
var messageA = "注册成功!";
var bodyA = Encoding.UTF8.GetBytes(messageA);
channel.BasicPublish(exchange: exchangeA, routingKey: "user_signup", basicProperties: null, body: bodyA);

// 发布消息到交换机 B，通知所有订阅者订单已支付成功
var messageB = "订单已支付!";
var bodyB = Encoding.UTF8.GetBytes(messageB);
channel.BasicPublish(exchange: exchangeB, routingKey: "order_pay", basicProperties: null, body: bodyB);

// 发布消息到交换机 C，通知所有订阅者有新的活动推出
var messageC = "新活动推出!";
var bodyC = Encoding.UTF8.GetBytes(messageC);
channel.BasicPublish(exchange: exchangeC, routingKey: "", basicProperties: null, body: bodyC);

Console.WriteLine("按 [enter] 键退出.");
Console.ReadLine();
```