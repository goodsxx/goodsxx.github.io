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

RabbitMQ 简单模式（Simple Mode）是 RabbitMQ 最基础的一种使用模式，也称为点对点模式。在简单模式中，一个生产者向一个消费者发送消息，消费者从队列中获取并处理该消息。这种模式非常适用于只有一个消费者需要处理任务的场景，如日志处理、计算任务等。

## 使用场景

- 需要对消息进行可靠传输，确保消息不会因为网络或其他问题而丢失。
- 需要实现简单的异步消息通信方式，以提高应用程序的响应性和可扩展性。
- 需要解耦应用程序中的各个组件，通过消息队列来实现组件之间的协作和数据交换。

## 优缺点

### 优点

- 实现简单，易于理解和使用。
- 可靠的消息传输机制，保障消息的可靠性和稳定性。
- 支持多语言和平台，具有很好的兼容性。

### 缺点

- 不支持多个消费者共享同一个队列，不能实现任务分发和负载均衡。
- 无法处理消息重复消费的问题。

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
            Port=5672, //默认端口
            UserName = "guest", 
            Password = "guest" 
        };

        // 创建连接对象
        using var connection = factory.CreateConnection();
        // 创建信道对象
        using var channel = connection.CreateModel();
        // 声明队列，如果不存在就创建
        channel.QueueDeclare(queue: "hello", durable: false, exclusive: false, autoDelete: false, arguments: null);

        // 发送消息到队列中
        string message = "Hello World!";
        var body = Encoding.UTF8.GetBytes(message);
        channel.BasicPublish(exchange: "", routingKey: "hello", basicProperties: null, body: body);
        Console.WriteLine(" [生产者] 发送： {0}", message);

        Console.WriteLine(" 按 [enter] 键退出");
        Console.ReadLine();
    }
}
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


        // 创建连接对象
        using var connection = factory.CreateConnection();
            // 创建信道对象
        using var channel = connection.CreateModel();
        // 声明队列，如果不存在就创建
        channel.QueueDeclare(queue: "hello", durable: false, exclusive: false, autoDelete: false, arguments: null);

        // 创建消费者对象
        var consumer = new EventingBasicConsumer(channel);

        // 消息接收事件处理
        consumer.Received += (model, ea) =>
        {
            byte[] body = ea.Body.ToArray();             // 获取消息体
            string message = Encoding.UTF8.GetString(body);   // 将消息体转换成字符串
            Console.WriteLine(" [消费者] 接收： {0}", message);
        };

        // 订阅队列并开始消费消息
        channel.BasicConsume(queue: "hello", autoAck: true, consumer: consumer);

        Console.WriteLine(" 按 [enter] 键退出");
        Console.ReadLine();
    }
}
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

其中，Received 事件是在消费者接收到消息时触发的，事件处理函数中获取了消息体并将其转换为字符串，然后进行输出。在订阅队列时，我们可以通过设置 autoAck 参数来控制是否需要手动确认消息处理完成。在这里，由于简单模式下只有一个消费者，所以我们将 autoAck 设置为 true，即表示收到消息后立即确认，可以避免消息被重复消费或丢失的问题。
:::

以上代码展示了 .NET6 中 RabbitMQ 简单模式下的生产者和消费者的实现。其中，生产者端声明了名为 "hello" 的队列，并向该队列发送了一条消息，而消费者端则监听了 "hello" 队列，并在收到消息时进行处理。

:::info
在简单模式中，消息直接发送给队列，没有经过交换机的路由。为了将消息发送到指定的队列，需要在消费者端指定队列的名称，并在生产者端声明该队列。这种模式下通常使用默认的 Direct 类型交换机（Exchange），该交换机会将消息按照发布者指定的 Routing Key 直接发送到指定的队列中。
:::