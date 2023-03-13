---
title: 路由模式
date: 2023-03-04
category:
 - 分布式中间件
tag: 
 - RabbitMQ
timeline: true
order: 4
---
::: tip ✨✨✨✨✨
在 RabbitMQ 中，路由模式（Routing Model）是一种消息传递方式，它允许发布者将消息发送到指定的队列中，并且只有符合特定条件的消费者才能接收到该消息。这种方式通常被用于需要将消息根据不同的路由键进行过滤和分类的场景。
:::

<!-- more -->

## 介绍

在 RabbitMQ 中，路由模式（Routing）是一种消息传递方式，它允许发布者将消息发送到指定的队列中，并且只有符合特定条件的消费者才能接收到该消息。这种方式通常被用于需要将消息根据不同的路由键进行过滤和分类的场景。

在路由模式中，通常需要使用到交换机和多个队列。发布者向交换机发送一条带有路由键的消息，该消息会被转发到匹配的队列中，然后被对应的消费者接收和处理。为了实现该功能，RabbitMQ 提供了两种不同的路由模式：Direct 和 Topic。

## Direct 模式

Direct 模式是最简单的路由模式之一，它通过精确匹配消息的路由键来确定消息应该被路由到哪个队列中。在 Direct 模式中，通常使用的是 Direct 类型的交换机，它会将消息发送到与指定路由键完全匹配的队列中。

### 使用场景

- 需要将消息根据不同的路由键进行精准分类和过滤的场景；
- 需要将消息发送给特定的一个或少数几个消费者的场景。

### 优缺点

#### 优点

- 精确匹配消息的路由键，可以有效地将消息发送到目标队列中，避免不必要的消息转发和浪费；
- 可以满足对消息传递的精细控制需求。

#### 缺点

- 不支持基于模糊匹配的路由键过滤；
- 当有大量的订阅者时，需要创建大量的队列和交换机，管理起来较为复杂。

### 代码示例

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
        using var connection = factory.CreateConnection();
        using var channel = connection.CreateModel();

        // 定义并配置 Direct 类型的交换机
        var exchangeName = "direct_exchange";
        channel.ExchangeDeclare(exchange: exchangeName, type: ExchangeType.Direct);

        // 发布消息到交换机，并根据不同的路由键选择发送到不同的队列中
        var messageA = "发送到 queue A 的消息";
        var bodyA = Encoding.UTF8.GetBytes(messageA);
        channel.BasicPublish(exchange: exchangeName, routingKey: "key_A", basicProperties: null, body: bodyA);

        var messageB = "发送到 queue B 的消息";
        var bodyB = Encoding.UTF8.GetBytes(messageB);
        channel.BasicPublish(exchange: exchangeName, routingKey: "key_B", basicProperties: null, body: bodyB);

        var messageC = "发送到 queue C 的消息";
        var bodyC = Encoding.UTF8.GetBytes(messageC);
        channel.BasicPublish(exchange: exchangeName, routingKey: "key_C", basicProperties: null, body: bodyC);

        Console.WriteLine("按 [enter] 键退出.");
        Console.ReadLine();
    }
}
```

@tab 消费者
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

        // 定义并配置 Direct 类型的交换机
        var exchangeName = "direct_exchange";
        channel.ExchangeDeclare(exchange: exchangeName, type: ExchangeType.Direct);

        // 定义并配置多个队列，分别绑定到不同的路由键
        var queueA = "queue_A";
        channel.QueueDeclare(queue: queueA, durable: false, exclusive: false, autoDelete: false, arguments: null);
        channel.QueueBind(queue: queueA, exchange: exchangeName, routingKey: "key_A");

        var queueB = "queue_B";
        channel.QueueDeclare(queue: queueB, durable: false, exclusive: false, autoDelete: false, arguments: null);
        channel.QueueBind(queue: queueB, exchange: exchangeName, routingKey: "key_B");

        var queueC = "queue_C";
        channel.QueueDeclare(queue: queueC, durable: false, exclusive: false, autoDelete: false, arguments: null);
        channel.QueueBind(queue: queueC, exchange: exchangeName, routingKey: "key_C");

        // 启动消费者 A，从队列 A 中接收和处理消息
        var consumerA = new EventingBasicConsumer(channel);
        consumerA.Received += (model, ea) =>
        {
            var message = Encoding.UTF8.GetString(ea.Body.ToArray());
            Console.WriteLine($"收到来自 queue A 的消息: {message}");
        };
        channel.BasicConsume(queue: queueA, autoAck: true, consumer: consumerA);

        // 启动消费者 B，从队列 B 中接收和处理消息
        var consumerB = new EventingBasicConsumer(channel);
        consumerB.Received += (model, ea) =>
        {
            var message = Encoding.UTF8.GetString(ea.Body.ToArray());
            Console.WriteLine($"收到来自 queue B 的消息: {message}");
        };
        channel.BasicConsume(queue: queueB, autoAck: true, consumer: consumerB);

        // 启动消费者 C，从队列 C 中接收和处理消息
        var consumerC = new EventingBasicConsumer(channel);
        consumerC.Received += (model, ea) =>
        {
            var message = Encoding.UTF8.GetString(ea.Body.ToArray());
            Console.WriteLine($"收到来自 queue C 的消息: {message}");
        };
        channel.BasicConsume(queue: queueC, autoAck: true, consumer: consumerC);

        Console.WriteLine("按 [enter] 键退出.");
        Console.ReadLine();
    }
}
```
:::

在上述示例中，我们首先创建了一个 Direct 类型的交换机，并定义了三个队列，并将它们分别绑定到交换机上。随后，我们启动了三个消费者，并使用 `BasicConsume` 方法开始接收和处理从交换机发送过来的消息。

接着，我们使用 `BasicPublish` 方法向交换机发送了三条带有不同路由键的消息，并期望它们能被正确地路由到相应的队列中。由于我们已经在创建队列时将其绑定到对应的路由键上，因此只有与这些路由键匹配的消息才会被发送到对应的队列中。

最后，当有新的消息到达时，三个消费者分别接收并输出自己所需要的消息，从而实现了根据不同的路由键进行精准分类和过滤的功能。

## Topic 模式

Topic 模式是一种更加灵活的路由模式，它可以基于通配符的方式将消息路由到多个队列中，并支持按照自定义规则进行过滤和分类。在 Topic 模式中，通常使用的是 Topic 类型的交换机，它会将消息发送到所有匹配的队列中。

### 使用场景

- 需要将消息按照多重条件进行过滤和分类的场景；
- 需要将消息发送给多个消费者的场景。

### 优缺点

#### 优点

- 支持基于通配符的路由键过滤，更加灵活；
- 可以同时将消息发送给多个队列和消费者，提高系统的可扩展性。

#### 缺点

- 消息的路由规则较为复杂，需要对路由键进行精细设置；
- 队列数量可能会非常庞大，增加了管理和维护的难度。

### 代码示例

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
        var connection = factory.CreateConnection();
        using var channel = connection.CreateModel();

        // 定义并配置 Topic 类型的交换机
        var exchangeName = "topic_exchange";
        channel.ExchangeDeclare(exchange: exchangeName, type: ExchangeType.Topic);

        // 发布消息到交换机，并根据自定义的规则选择发送到不同的队列中
        var messageA = "发送到 queue A 的消息";
        var bodyA = Encoding.UTF8.GetBytes(messageA);
        channel.BasicPublish(exchange: exchangeName, routingKey: "topic.A", basicProperties: null, body: bodyA);

        var messageB = "发送到 queue B 的消息";
        var bodyB = Encoding.UTF8.GetBytes(messageB);
        channel.BasicPublish(exchange: exchangeName, routingKey: "topic.B", basicProperties: null, body: bodyB);

        var messageC = "发送到 queue C 的消息";
        var bodyC = Encoding.UTF8.GetBytes(messageC);
        channel.BasicPublish(exchange: exchangeName, routingKey: "topic.C", basicProperties: null, body: bodyC);

        Console.WriteLine("发送消息到交换机.");

        Console.WriteLine("按 [enter] 键退出.");
        Console.ReadLine();
    }
}
```

@tab 消费者
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

        // 定义并配置 Topic 类型的交换机
        var exchangeName = "topic_exchange";
        channel.ExchangeDeclare(exchange: exchangeName, type: ExchangeType.Topic);

        // 定义并配置多个队列，分别绑定到不同的路由规则上
        var queueA = "queue_A";
        channel.QueueDeclare(queue: queueA, durable: false, exclusive: false, autoDelete: false, arguments: null);
        channel.QueueBind(queue: queueA, exchange: "topic_exchange", routingKey: "topic.A.#");

        var queueB = "queue_B";
        channel.QueueDeclare(queue: queueB, durable: false, exclusive: false, autoDelete: false, arguments: null);
        channel.QueueBind(queue: queueB, exchange: "topic_exchange", routingKey: "topic.B.*");

        var queueC = "queue_C";
        channel.QueueDeclare(queue: queueC, durable: false, exclusive: false, autoDelete: false, arguments: null);
        channel.QueueBind(queue: queueC, exchange: "topic_exchange", routingKey: "topic.#.C");

        // 启动消费者 A，从队列 A 中接收和处理消息
        var consumerA = new EventingBasicConsumer(channel);
        consumerA.Received += (model, ea) =>
        {
            var message = Encoding.UTF8.GetString(ea.Body.ToArray());
            Console.WriteLine($"收到来自 queue A 的消息: {message}");
        };
        channel.BasicConsume(queue: queueA, autoAck: true, consumer: consumerA);

        // 启动消费者 B，从队列 B 中接收和处理消息
        var consumerB = new EventingBasicConsumer(channel);
        consumerB.Received += (model, ea) =>
        {
            var message = Encoding.UTF8.GetString(ea.Body.ToArray());
            Console.WriteLine($"收到来自 queue B 的消息: {message}");
        };
        channel.BasicConsume(queue: queueB, autoAck: true, consumer: consumerB);

        // 启动消费者 C，从队列 C 中接收和处理消息
        var consumerC = new EventingBasicConsumer(channel);
        consumerC.Received += (model, ea) =>
        {
            var message = Encoding.UTF8.GetString(ea.Body.ToArray());
            Console.WriteLine($"收到来自 queue C 的消息: {message}");
        };
        channel.BasicConsume(queue: queueC, autoAck: true, consumer: consumerC);

        Console.WriteLine("按 [enter] 键退出.");
        Console.ReadLine();
    }
}
```
:::

:::info 通配符
在 RabbitMQ 的 Topic 模式中，# 和 * 是两个特殊的字符，它们用于匹配不同数量和类型的单词。

这些队列及其绑定规则的具体含义如下：

1. 队列 queueA，绑定路由键 "topic.A.#"

    - 匹配以 "topic.A" 开头、后面跟任意数量和类型单词的路由键

2. 队列 queueB，绑定路由键 "topic.B.*"

    - 匹配以 "topic.B" 开头、后面只有一个单词的路由键

3. 队列 queueC，绑定路由键 "topic.#.C"

    - 匹配以 ".C" 结尾、前面是任意数量和类型单词的路由键

因此，在生产者发送的消息中，仅带有以下路由键的消息会被路由到相应的队列中：

- "topic.A" 将被路由到队列 queueA 中
- "topic.B.X" 将被路由到队列 queueB 中（其中 X 可以是任何字符串）
- "X.Y.Z.C" 将被路由到队列 queueC 中（其中 X、Y、Z 可以是任何字符串）

其他不匹配上述路由规则的消息将无法被路由到相应的队列。
:::

根据通配符规则和我们的代码中定义的队列及绑定规则，这些消息将会被路由到不同的队列中：

- "发送到 queue A 的消息"（路由键为 "topic.A"）将被路由到名为 "queue_A" 的队列中。
- "发送到 queue B 的消息"（路由键为 "topic.B"）不会被匹配到任何队列，因为该路由键与任何一个队列的绑定规则都不匹配。
- "发送到 queue C 的消息"（路由键为 "topic.C"）将被路由到名为 "queue_C" 的队列中，因为该路由键匹配到了 "queue_C" 的绑定规则 "topic.#.C"。

因此，在消费者代码运行时，只有第一和第三条消息能够被相应的消费者接收并输出。