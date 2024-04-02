---
title: 观察者模式
date: 2022-05-24
category:
 - 设计模式
tag: 
 - 设计模式
 - 行为型模式
timeline: true
order: 10
---

::: tip ✨✨✨✨✨
观察者模式（Observer Pattern），也称作发布-订阅模式（Publish-Subscribe Pattern），它是一种行为型设计模式，它定义了一种一对多的依赖关系，使得当一个对象状态发生改变时，所有依赖于它的对象都能够自动收到通知并进行更新。
:::

<!-- more -->

## 定义
观察者模式是一种行为型设计模式，它定义了一种一对多的依赖关系，使得当一个对象状态发生改变时，所有依赖于它的对象都能够自动收到通知并进行更新。

## 使用场景
观察者模式通常在以下情况下使用：

- 当一个对象的改变需要同时改变其他对象的状态时。
- 当您不知道有多少对象需要改变状态时。
- 这种模式非常适合GUI编程中的事件处理，当一个控件状态改变时，需要自动通知所有相关的控件进行更新。

## 优缺点

**观察者模式的优点：**

- 可以实现松耦合，被观察者和观察者之间没有直接的依赖关系，增加了系统的灵活性和可扩展性。
- 支持广播通信，被观察者一次性通知多个观察者，提高了系统的效率和性能。

**观察者模式的缺点：**

- 观察者过多时会导致性能问题。
- 如果被观察者和观察者之间的通信是双向的，则容易引起循环依赖问题。

## 代码示例
下面是一个使用观察者模式的简单示例，假设有一个新闻发布者，它可以将最新新闻发布给订阅者。
```cs
using System;
using System.Collections.Generic;

// 定义观察者接口
interface IObserver
{
    void Update(string news);
}

// 定义被观察者接口
interface IObservable
{
    void AddObserver(IObserver observer);
    void RemoveObserver(IObserver observer);
    void NotifyObservers(string news);
}

// 实现被观察者接口
class NewsPublisher : IObservable
{
    private List<IObserver> observers = new List<IObserver>();

    public void AddObserver(IObserver observer)
    {
        observers.Add(observer);
    }

    public void RemoveObserver(IObserver observer)
    {
        observers.Remove(observer);
    }

    public void NotifyObservers(string news)
    {
        foreach (var observer in observers)
        {
            observer.Update(news);
        }
    }

    public void PublishNews(string news)
    {
        Console.WriteLine($"发布新闻：{news}");
        NotifyObservers(news);
    }
}

// 实现观察者接口
class Subscriber : IObserver
{
    private string name;

    public Subscriber(string name)
    {
        this.name = name;
    }

    public void Update(string news)
    {
        Console.WriteLine($"订阅者 {name} 接收到新闻：{news}");
    }
}

class Program
{
    static void Main(string[] args)
    {
        NewsPublisher publisher = new NewsPublisher();
        Subscriber subscriber1 = new Subscriber("张三");
        Subscriber subscriber2 = new Subscriber("李四");

        publisher.AddObserver(subscriber1);
        publisher.AddObserver(subscriber2);
        publisher.PublishNews("中国获得世界杯冠军！");
        publisher.RemoveObserver(subscriber2);

        publisher.PublishNews("苹果发布新款iPhone！");

        Console.ReadKey();
    }
}
```

在上面的代码中，我们定义了两个接口 `IObserver` 和 `IObservable`，它们分别代表观察者和被观察者。我们实现了被观察者接口 `NewsPublisher`，其中包含一个观察者列表，并实现了添加观察者、删除观察者和通知观察者的方法。我们还实现了观察者接口 `Subscriber`，其中包含一个名字属性和更新方法。

在 `Main` 方法中，我们创建了一个新的 `NewsPublisher` 对象，并添加了两个观察者 `subscriber1` 和 `subscriber2`。然后我们调用 `PublishNews` 方法发布了两个新闻，并在控制台中输出了订阅者收到新闻的消息。最后，我们从观察者列表中删除了 `subscriber2`，并再次发布了一条新闻，这次只有 `subscriber1` 收到了新闻。

这是一个简单的示例，实际使用中可能会更加复杂。但是通过这个例子，您应该能够了解观察者模式的基本原理和使用方法。 

注：上面的代码示例有一些潜在的优化空间，例如可以将 `observers` 字段改为使用 `HashSet<IObserver>` 来避免重复添加观察者，可以使用 C#8.0 中的 using 块简化代码等。

## 优化

```cs
using System;
using System.Collections.Generic;

namespace ObserverPattern
{
    // 定义观察者接口
    public interface IObserver<in T>
    {
        // 定义更新方法
        void Update(T subject);
    }

    // 定义被观察者接口
    public interface IObservable<out T>
    {
        // 添加观察者
        IDisposable Subscribe(IObserver<T> observer);

        // 发布消息
        void Publish(T subject);
    }

    // 实现被观察者接口
    public class NewsPublisher : IObservable<string>
    {
        // 使用 HashSet 来保存观察者列表
        private readonly HashSet<IObserver<string>> observers = new HashSet<IObserver<string>>();

        // 添加观察者
        public IDisposable Subscribe(IObserver<string> observer)
        {
            observers.Add(observer);
            return new Unsubscriber(observers, observer);
        }

        // 发布消息
        public void Publish(string subject)
        {
            // 通知所有观察者
            foreach (var observer in observers)
            {
                observer.Update(subject);
            }
        }

        // 内部类，用于实现 IDisposable 接口
        private class Unsubscriber : IDisposable
        {
            private readonly HashSet<IObserver<string>> _observers;
            private readonly IObserver<string> _observer;

            public Unsubscriber(HashSet<IObserver<string>> observers, IObserver<string> observer)
            {
                _observers = observers;
                _observer = observer;
            }

            public void Dispose()
            {
                _observers.Remove(_observer);
            }
        }
    }

    // 实现观察者接口
    public class Subscriber : IObserver<string>
    {
        private readonly string _name;

        public Subscriber(string name)
        {
            _name = name;
        }

        // 更新方法
        public void Update(string subject)
        {
            Console.WriteLine($"{_name} 收到新闻：{subject}");
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            // 创建新闻发布者
            var publisher = new NewsPublisher();

            // 添加观察者
            var subscriber1 = new Subscriber("小明");
            publisher.Subscribe(subscriber1);

            var subscriber2 = new Subscriber("小红");
            publisher.Subscribe(subscriber2);

            // 发布消息
            publisher.Publish("中国获得世界杯冠军！");

            // 取消订阅观察者 2
            var unsubscriber = publisher.Subscribe(subscriber2);
            unsubscriber.Dispose();

            // 发布消息
            publisher.Publish("苹果发布新款 iPhone！");

            Console.ReadKey();
        }
    }
}
```

在这个优化版本的代码中，我们使用了 `HashSet` 来存储观察者列表，这样就避免了重复添加观察者的问题。同时，我们还实现了 `IDisposable` 接口，这样就可以通过 `using` 块来自动释放资源。

除此之外，我们还改变了一些命名和参数的名称，对代码进行了重构，这样代码就更加简洁、易读和易于维护了。
