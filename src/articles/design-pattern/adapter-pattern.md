---
title: 适配器模式
date: 2022-06-01
category:
 - 设计模式
tag: 
 - 设计模式
 - 结构型模式
timeline: true
order: 17
---

::: tip ✨✨✨✨✨
适配器模式（Adapter Pattern）将一个类的接口转换成客户端希望的另外一个接口。适配器模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。
:::

<!-- more -->

## 定义

适配器模式（Adapter Pattern）将一个类的接口转换成客户端希望的另外一个接口。适配器模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。

## 适用场景

- 将一个已经存在的类的接口转换成另外一个接口，以满足用户的需求。
在不修改原有代码的情况下，增加一些新功能。
- 当需要使用的类与客户端的接口不一致时，可以通过适配器模式进行转换，使得它们能够协同工作。

## 优缺点

### 优点

- 适配器模式可以让两个没有任何关联的类一起运行，提高了类的复用性。
- 可以增加类的透明性和灵活性，让客户端代码更加简洁明了。
- 可以减少代码的耦合度，增加了程序的可扩展性。

### 缺点

适配器模式增加了代码的复杂度，增加了代码阅读的难度。
在实现适配器模式时，可能需要引入一个新的类，从而增加系统的开销。

## 代码示例

下面是一个将 220V 电压转换成 5V 电压的适配器模式示例代码，其中，Adaptee 是原有的类，需要进行适配的类；Target 是目标接口，即客户端需要的接口；Adapter 是适配器类，通过实现目标接口，将 Adaptee 的接口适配成 Target 需要的接口。

```cs
// 原有的类
public class Adaptee
{
    public int Get220V()
    {
        return 220;
    }
}

// 目标接口
public interface ITarget
{
    int Get5V();
}

// 适配器类
public class Adapter : ITarget
{
    private readonly Adaptee adaptee;

    public Adapter(Adaptee adaptee)
    {
        this.adaptee = adaptee;
    }

    public int Get5V()
    {
        int src = adaptee.Get220V();
        int dst = src / 44; // 将220V转换为5V
        return dst;
    }
}

// 客户端代码
public class Client
{
    public void Main()
    {
        Adaptee adaptee = new Adaptee();
        ITarget target = new Adapter(adaptee);
        int result = target.Get5V();
    }
}
```

在这个示例中，Adaptee 是原有的类，它提供了 Get220V 方法，但是客户端需要的是 Get5V 方法。Adapter 是适配器类，它实现了 ITarget 接口，将 Adaptee 的 Get220V 方法适配成了 Get5V 方法，以满足客户端的需求。在客户端代码中，我们创建了一个 Adaptee 对象和一个 Adapter 对象，并通过 Adapter 对象调用 Get5V 方法来获取 5V 电压。

## 优化

在这个示例中，适配器模式的实现比较简单，没有太多的优化空间。但是，在实际开发中，我们可以考虑使用对象适配器模式或类适配器模式来实现适配器模式，以满足不同的需求。

对象适配器模式将适配器类作为一个对象组合到客户端中，以实现适配器模式。在对象适配器模式中，适配器类可以实现多个目标接口，从而提高了适配器类的灵活性。

类适配器模式使用多重继承的方式来实现适配器模式，即适配器类继承了原有的类，并同时实现了目标接口。在类适配器模式中，适配器类可以重写原有类的方法，从而增加了适配器类的功能。

```cs
// 目标接口
interface ITarget
{
    void Get5V();
}

// 源接口
class Adaptee
{
    public void Get220V()
    {
        Console.WriteLine("获取220V电压");
    }
}

// 适配器类
class Adapter : ITarget
{
    private Adaptee adaptee; // 组合一个Adaptee对象

    public Adapter(Adaptee adaptee)
    {
        this.adaptee = adaptee;
    }

    public void Get5V()
    {
        Console.WriteLine("适配器开始工作，将220V电压适配成5V电压");
        adaptee.Get220V(); // 调用Adaptee对象的Get220V方法获取220V电压
        Console.WriteLine("适配完成，输出5V电压");
    }
}

// 客户端代码
class Client
{
    static void Main(string[] args)
    {
        Adaptee adaptee = new Adaptee();
        ITarget target = new Adapter(adaptee);
        target.Get5V();
    }
}
```

在上面的代码中，我们定义了一个 ITarget 接口，表示客户端所需要的目标接口。然后定义了一个 Adaptee 类，表示客户端需要适配的源接口。接着，定义了一个 Adapter 类，实现了 ITarget 接口，并通过组合一个 Adaptee 对象来实现适配器模式。最后，在客户端代码中，我们创建了一个 Adaptee 对象和一个 Adapter 对象，并通过 Adapter 对象调用 Get5V 方法来获取 5V 电压。

这种方式相比于原始的类适配器模式，更加灵活，因为一个 Adapter 对象可以实现多个目标接口，而且不需要继承原有的类。同时，也比较易于扩展，因为我们可以通过组合不同的对象来实现不同的适配器功能。
