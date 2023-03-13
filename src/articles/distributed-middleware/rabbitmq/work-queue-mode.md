---
title: 工作队列模式
date: 2023-03-04
category:
 - 分布式中间件
tag: 
 - RabbitMQ
timeline: true
order: 2
---
::: tip ✨✨✨✨✨
工作队列模式（Work Queue Mode）是一个常见的消息队列应用模式，通常是一个生产者对多个消费者的模型。在该模式下，生产者将待处理的任务放入队列中，由多个消费者从队列中获取任务并进行处理。例如将耗时的任务异步地分配给多个工作者进行处理。在工作队列中，消息生产者将待处理的任务放入队列中，由一组工作者来竞争性地消费这些任务，并将处理结果返回给消息代理或存储到数据仓库中。
:::

<!-- more -->

## 介绍

工作队列模式（Work Queue Mode）是一个常见的消息队列应用模式，通常是一个生产者对多个消费者的模型。在该模式下，生产者将待处理的任务放入队列中，由多个消费者从队列中获取任务并进行处理。例如将耗时的任务异步地分配给多个工作者进行处理。在工作队列中，消息生产者将待处理的任务放入队列中，由一组工作者来竞争性地消费这些任务，并将处理结果返回给消息代理或存储到数据仓库中。

具体来说，当有消息到达队列时，消息代理会轮询地将其派发给空闲的消费者，以达到任务负载均衡的效果。因此，在工作队列模式中，多个消费者可以同时处理不同的任务，提高了处理的吞吐量和响应速度。

需要注意的是，在工作队列模式中，一个消息只能被一个消费者消费，即每个消息只会被发送给其中的一个消费者处理。但是，可以通过设置 channel.BasicQos 方法来控制每个消费者最多只能处理一条消息，以避免某个消费者被过多任务占用而导致其他消费者处于闲置状态的问题。

## 使用场景

工作队列模式适用于需要对大量数据进行处理、计算或转换的场景。例如：

- 数据备份或归档：将数据库或文件系统中的数据备份或归档，可能需要花费数小时或数天的时间。
- 图像或音视频处理：对大量的图像或音视频进行处理，需要进行格式转换、压缩、加密等操作，可能需要数分钟或数小时的时间。
- 批量任务调度：根据用户提交的任务列表进行批量处理，例如定时刷新缓存、发送邮件等。

## 优缺点

### 优点

- 可以有效地处理大量的请求和任务，并且可以横向扩展，适用于高并发、大规模的场景。
- 可以实现任务的异步处理，提高了系统的吞吐量和响应速度。
- 可以实现多个工作者之间的负载均衡，避免某个工作者被过多任务占用而导致其他工作者处于闲置状态。

### 缺点

- 需要复杂的设计和管理，包括队列的创建、消息的发送、消费者的监控和异常处理等。
- 在任务处理失败时很难进行回滚和恢复，可能需要重新启动整个任务流程。[^1]

## 负载均衡

在工作者模式中，为了实现消费者之间的负载均衡，通常采用以下两种机制：

1. **轮询机制**：当消息到达队列时，RabbitMQ 会轮询地将其分发给任一空闲的消费者。这种机制能够确保所有消费者平等地处理任务，并使得任务的负载均衡比较均匀。但是，如果某些消费者的处理能力强于其他消费者，那么这种机制可能会导致某些消费者被过度负载而无法及时完成任务。

2. **消息确认机制**：在默认情况下，RabbitMQ 会自动确认收到的消息，并从队列中删除该消息。如果某个消费者在处理消息时出现错误或异常，就可能会导致该消息永久丢失或无法及时处理。为了避免这种情况，可以使用消息确认机制来实现消息的可靠性处理。具体来说，当消费者处理完消息后，可以向 RabbitMQ 发送 Ack 操作来确认消息已经被成功处理。如果消费者无法处理消息，则可以发送 Nack 操作或重新推送消息以进行重试。

## 代码示例

由于消息确认机制比轮询机制更加完善，故此处代码仅展示消息确认机制的示例。

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

        // 声明一个队列，如果不存在则创建
        var queueName = "task_queue";
        channel.QueueDeclare(queue: queueName, durable: true, exclusive: false, autoDelete: false, arguments: null);

        string[] messages = new string[]
        {
            "Hello", "World", "Welcome", "to", "RabbitMQ"
        };

        // 向队列中发送多个消息，并设置消息持久化
        foreach (var message in messages)
        {
            var body = Encoding.UTF8.GetBytes(message);
            var properties = channel.CreateBasicProperties();
            properties.Persistent = true; // 设置消息持久化

            channel.BasicPublish(exchange: "", routingKey: queueName, basicProperties: properties, body: body);
            Console.WriteLine("[生产者] 发送： {0}", message);
        }

        Console.WriteLine("按 [enter] 键退出");
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

        // 声明一个队列，如果不存在则创建
        var queueName = "task_queue";
        channel.QueueDeclare(queue: queueName, durable: true, exclusive: false, autoDelete: false, arguments: null);

        // 设置每个消费者最多只能处理一条消息，避免某些消费者被过度负载而导致其他消费者处于空闲状态
        channel.BasicQos(0, 1, false);

        Console.WriteLine(" [消费者1] 等待消息.");

        // 创建一个工作者队列，每个消息都会被多个工作者中的一个处理
        var consumer = new EventingBasicConsumer(channel);
        consumer.Received += (model, ea) =>
        {
            var body = ea.Body.ToArray();
            var message = Encoding.UTF8.GetString(body);
            Console.WriteLine(" [消费者1] 接收： {0}", message);

            int dots = message.Split('.').Length - 1;
            System.Threading.Thread.Sleep(dots * 1000); // 模拟任务处理时间

            Console.WriteLine(" [消费者1] 完成");

            // 手动确认消息已经处理完成
            channel.BasicAck(deliveryTag: ea.DeliveryTag, multiple: false);
        };

        // 订阅队列并开始消费消息
        channel.BasicConsume(queue: queueName, autoAck: false, consumer: consumer);

        Console.WriteLine(" 按 [enter] 键退出");
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

        // 声明一个队列，如果不存在则创建
        var queueName = "task_queue";
        channel.QueueDeclare(queue: queueName, durable: true, exclusive: false, autoDelete: false, arguments: null);

        // 设置每个消费者最多只能处理一条消息，避免某些消费者被过度负载而导致其他消费者处于空闲状态
        channel.BasicQos(0, 1, false);

        Console.WriteLine(" [消费者2] 等待消息.");

        // 创建一个工作者队列，每个消息都会被多个工作者中的一个处理
        var consumer = new EventingBasicConsumer(channel);
        consumer.Received += (model, ea) =>
        {
            var body = ea.Body.ToArray();
            var message = Encoding.UTF8.GetString(body);
            Console.WriteLine(" [消费者2] 接收： {0}", message);

            int dots = message.Split('.').Length - 1;
            System.Threading.Thread.Sleep(dots * 1000); // 模拟任务处理时间

            Console.WriteLine(" [消费者2] 完成");

            // 手动确认消息已经处理完成
            channel.BasicAck(deliveryTag: ea.DeliveryTag, multiple: false);
        };

        // 订阅队列并开始消费消息
        channel.BasicConsume(queue: queueName, autoAck: false, consumer: consumer);

        Console.WriteLine(" 按 [enter] 键退出");
        Console.ReadLine();
    }
}
```
:::


[^1]:
    工作队列模式在任务处理失败时很难进行回滚和恢复，主要是因为它具有以下特点：

    - 消息的自动确认机制：在默认情况下，RabbitMQ 会自动确认收到的消息。即使消费者在处理消息时发生异常或错误，也不会将该消息重新放回队列中，而是直接将其删除或标记为已消费。因此，如果任务处理失败，就无法通过简单地重试或将消息重新发送来恢复任务流程(**此问题可通过手动确认机制解决**)。

    - 并发性和顺序性问题：由于工作队列模式通常涉及多个消费者同时处理不同的任务，因此可能存在并发性和顺序性问题。例如，如果一个消费者正在处理某个任务并且出现了错误，另一个消费者可能已经从队列中获取了相同的任务并开始处理。这样就会导致任务执行的结果无法预测，从而增加了任务处理失败的风险。

    - 消息持久化的限制：虽然可以通过设置消息持久化属性来避免消息在 RabbitMQ 服务重启时丢失，但消息持久化并不能完全解决任务处理失败的问题。如果消费者在处理消息时发生硬件故障、系统崩溃等问题，消息仍然可能会丢失，从而导致任务失败。

    基于以上原因，工作队列模式在任务处理失败时很难进行回滚和恢复。如果需要实现任务的可靠性处理，可以考虑使用其他更加可靠的消息队列模式，如事务性消息或消息确认机制更加完善的消息队列模式。