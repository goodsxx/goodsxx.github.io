---
title: 死信队列
date: 2023-03-04
category:
 - 分布式中间件
tag: 
 - RabbitMQ
timeline: true
order: 7
---
::: tip ✨✨✨✨✨
死信队列（Dead-Letter Queue，DLQ）是一个特殊的消息队列，用于存储无法被消费者正确处理的“死信”消息。当消息被发送到队列时，如果这条消息无法被消费者成功处理或超过了 TTL 时间限制，那么就会被发送到死信队列中。

使用死信队列的主要目的是防止消息丢失或者被忽略，同时也方便进行消息重试、错误分析和监控等操作。
:::

<!-- more -->

在 RabbitMQ 中，可以通过以下步骤来创建和配置死信队列：

1. 创建一个普通的消息队列，并将该队列与一个交换机绑定。

2. 为该队列设置 DLX 属性，指定该队列的死信消息应该发送到哪个交换机中。

3. 创建一个专门用于存储死信消息的队列，并将该队列与上一步所指定的交换机绑定。

4. 配置队列的 TTL 和其他属性，以便在特定条件下将消息发送到死信队列中。

以下是一个示例代码，展示了如何使用 .NET 6 创建一个带有死信队列的 RabbitMQ 消息队列：

```cs
// 创建连接和通道对象
var factory = new ConnectionFactory() { HostName = "localhost" };
using (var connection = factory.CreateConnection())
using (var channel = connection.CreateModel())
{
    // 创建一个普通的消息队列
    var queueName = "test_queue";
    channel.QueueDeclare(queue: queueName, durable: true, exclusive: false, autoDelete: false, arguments: null);

    // 设置队列的 TTL 和 DLX 属性
    var arguments = new Dictionary<string, object>
    {
        { "x-message-ttl", 30000 }, // 设置队列中消息的 TTL 为 30 秒
        { "x-dead-letter-exchange", "dlx_exchange" } // 设置该队列的死信交换机为 dlx_exchange
    };

    // 将队列与交换机绑定，并设置队列属性
    channel.QueueBind(queue: queueName, exchange: "test_exchange", routingKey: "", arguments);

    // 创建一个专门用于存储死信消息的队列
    var dlxQueueName = "test_dlx_queue";
    channel.QueueDeclare(queue: dlxQueueName, durable: true, exclusive: false, autoDelete: false, arguments: null);

    // 将死信队列与指定的交换机绑定
    channel.ExchangeDeclare(exchange: "dlx_exchange", type: ExchangeType.Fanout);
    channel.QueueBind(queue: dlxQueueName, exchange: "dlx_exchange", routingKey: "");

    // 启动消费者，接收消息并输出
    var consumer = new EventingBasicConsumer(channel);
    consumer.Received += (model, ea) =>
    {
        var message = Encoding.UTF8.GetString(ea.Body.ToArray());
        Console.WriteLine($"Received message: {message}");
    };
    channel.BasicConsume(queue: queueName, autoAck: true, consumer: consumer);

    Console.WriteLine("Press [enter] to exit.");
    Console.ReadLine();
}
```

在上述示例中，我们首先创建了一个普通的消息队列，并将该队列与交换机进行了绑定。然后，我们通过 QueueDeclare 方法为该队列设置了 TTL 和 DLX 属性，以及其他相关属性。

接下来，我们创建了一个专门用于存储死信消息的队列，将该队列与指定的 DLX 交换机进行了绑定，并使用 ExchangeDeclare 方法声明了该交换机的类型为 Fanout。

最后，我们启动了一个消费者，循环接收并输出队列中的消息。在运行时，如果某条消息无法被正确处理或者超过了 TTL 时间限制，那么它就会被自动发送到死信队列中，从而保证消息不会丢失或者被忽略。