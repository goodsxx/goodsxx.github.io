---
title: 责任链模式
date: 2022-05-22
category:
 - 设计模式
tag: 
 - 设计模式
 - 行为型模式
timeline: true
order: 9
---

::: tip ✨✨✨✨✨
责任链模式（Chain of Responsibility Pattern）是一种行为型设计模式，它将请求的发送者和接收者解耦，并且允许多个对象对请求进行处理，这些对象构成一条链，每个对象都可以选择将请求处理或者传递给下一个对象。这种方式可以避免请求发送者与接收者之间的耦合，从而使多个对象可以处理同一个请求。
:::

<!-- more -->

## 定义
责任链模式（Chain of Responsibility Pattern）是一种行为型设计模式，它将请求的发送者和接收者解耦，并且允许多个对象对请求进行处理，这些对象构成一条链，每个对象都可以选择将请求处理或者传递给下一个对象。这种方式可以避免请求发送者与接收者之间的耦合，从而使多个对象可以处理同一个请求。

## 使用场景
- 当需要多个对象处理同一个请求时，可以使用责任链模式，避免请求的发送者和接收者之间的耦合。
- 当需要动态地指定处理一个请求的对象集合时，可以使用责任链模式。
- 当需要在不明确接收者的情况下，动态地向多个对象中的一个提交请求时，可以使用责任链模式。

## 优缺点

**优点**
- 将请求的发送者和接收者解耦，可以避免请求发送者和接收者之间的耦合，从而使多个对象可以处理同一个请求。
- 可以动态地指定处理一个请求的对象集合。
- 可以在不明确接收者的情况下，动态地向多个对象中的一个提交请求。

**缺点**
- 可能会存在请求没有被处理的情况，如果没有正确地组织责任链，请求可能会被漏掉。
- 由于责任链的构建需要遍历整个链，因此处理请求的速度可能会比较慢。

## 示例代码
下面是一个简单的示例，演示了如何使用责任链模式来处理一系列请求。假设有一个文件处理器，它可以处理多种类型的文件，包括文本文件、音频文件和视频文件。我们可以使用责任链模式，将这些处理器链接在一起，当一个请求到来时，它会被传递给第一个处理器，如果第一个处理器无法处理该请求，那么请求会被传递给下一个处理器，以此类推，直到请求被处理为止。
```cs
using System;

// 定义请求类
class Request
{
    public string Type { get; set; }
    public Request(string type)
    {
        Type = type;
    }
}

// 定义处理器接口
interface Handler
{
    void HandleRequest(Request request);
}

// 定义具体处理器类
class TextFileHandler : Handler
{
    private Handler nextHandler;
    public void SetNextHandler(Handler handler)
    {
        nextHandler = handler;
    }
    public void HandleRequest(Request request)
    {
        if (request.Type == "text")
        {
            Console.WriteLine("处理文本文件");
        }
        else if (nextHandler != null)
        {
            nextHandler.HandleRequest(request);
        }
        else
        {
            Console.WriteLine("无法处理该文件类型");
        }
    }
}

class AudioFileHandler : Handler
{
    private Handler nextHandler;
    public void SetNextHandler(Handler handler)
    {
        nextHandler = handler;
    }
    public void HandleRequest(Request request)
    {
        if (request.Type == "audio")
        {
            Console.WriteLine("处理音频文件");
        }
        else if (nextHandler != null)
        {
            nextHandler.HandleRequest(request);
        }
        else
        {
            Console.WriteLine("无法处理该文件类型");
        }
    }
}

class VideoFileHandler : Handler
{
    private Handler nextHandler;
    public void SetNextHandler(Handler handler)
    {
        nextHandler = handler;
    }
    public void HandleRequest(Request request)
    {
        if (request.Type == "video")
        {
            Console.WriteLine("处理视频文件");
        }
        else if (nextHandler != null)
        {
            nextHandler.HandleRequest(request);
        }
        else
        {
            Console.WriteLine("无法处理该文件类型");
        }
    }
}

// 定义客户端类
class Client
{
    public static void Main()
    {
        // 创建处理器对象
        TextFileHandler textHandler = new TextFileHandler();
        AudioFileHandler audioHandler = new AudioFileHandler();
        VideoFileHandler videoHandler = new VideoFileHandler();
        // 设置处理器链
        textHandler.SetNextHandler(audioHandler);
        audioHandler.SetNextHandler(videoHandler);

        // 处理请求
        Request request1 = new Request("text");
        textHandler.HandleRequest(request1);

        Request request2 = new Request("audio");
        textHandler.HandleRequest(request2);

        Request request3 = new Request("video");
        textHandler.HandleRequest(request3);

        Request request4 = new Request("image");
        textHandler.HandleRequest(request4);
    }
}
```

在上面的示例中，我们定义了一个 `Request` 类，它表示一个请求，具有一个 `Type` 属性，表示请求的类型。我们还定义了一个 `Handler` 接口，它表示处理器，具有一个 `HandleRequest` 方法，用于处理请求。我们还定义了三个具体的处理器类，分别是 `TextFileHandler`、 `AudioFileHandler` 和 `VideoFileHandler`，它们实现了 `Handler` 接口，并且具有一个 `SetNextHandler` 方法，用于设置下一个处理器。在 `HandleRequest` 方法中，如果当前处理器能够处理请求，那么它会处理请求，否则它会将请求传递给下一个处理器。最后，我们定义了一个 `Client` 类，用于演示如何使用责任链模式来处理请求。在 `Main` 方法中，我们首先创建了三个处理器对象，然后设置它们之间的关系，最后创建了四个请求，并将它们依次提交给处理器链来处理。

需要注意的是，上面的代码是一个简单的示例，实际上在使用责任链模式时，需要根据具体的场景来选择合适的处理器对象和处理器链。另外，如果处理器链过长，可能会导致处理请求的速度变慢，因此需要合理地设计处理器链，以提高处理请求的效率。