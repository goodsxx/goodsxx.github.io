---
title: 单例模式
date: 2022-05-06
category:
 - 设计模式
tag: 
 - 设计模式
 - 创建型模式
timeline: true
order: 1
---
::: tip ✨✨✨✨✨
单例模式（Singleton Pattern）是最简单的设计模式之一。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。
它的目的是确保某个类只有一个实例，并提供一个全局的访问点。
:::

<!-- more -->

## 定义

单例模式是一种创建型设计模式，它保证一个类只有一个实例，并提供了一个全局访问点来访问这个实例。

## 使用场景

在以下情况下可以考虑使用单例模式：

- 当一个对象只需要存在一个实例，例如线程池、缓存、日志、配置、数据库连接等。
- 当对象的创建和销毁开销较大，需要复用时，例如游戏中的角色管理器。

## 优缺点

**单例模式的优点包括：**

- 保证了一个类只有一个实例，避免了重复创建实例的开销，节省了内存。
- 提供了一个全局访问点，方便了对象的访问和管理。

**但是单例模式也有一些缺点：**

- 单例模式的逻辑通常都集中在一个类中，会增加这个类的复杂度，不利于维护和测试。
- 单例模式容易被滥用，过度使用会导致代码不易扩展和测试。

## 代码示例

下面是一个基本的单例模式的C#实现示例：

```cs
public sealed class Singleton
{
    private static readonly Singleton instance = new Singleton();

    private Singleton() { }

    public static Singleton Instance
    {
        get
        {
            return instance;
        }
    }

    public void SomeMethod()
    {
        Console.WriteLine("Some method in singleton instance");
    }
}
```

这里定义了一个名为 `Singleton` 的类，它的构造函数被声明为私有的，以确保不能从外部实例化该类的对象。类的实例被存储在名为 `instance` 的静态变量中，并通过公共静态属性 `Instance` 进行访问。

下面是一个使用 `Singleton` 类的示例：

```cs
class Program
{
    static void Main(string[] args)
    {
        Singleton instance1 = Singleton.Instance;
        Singleton instance2 = Singleton.Instance;

        if (instance1 == instance2)
        {
            Console.WriteLine("Singleton works!");
        }

        instance1.SomeMethod();
    }
}
```

在这个示例中，我们从 `Singleton.Instance` 属性中获取 `Singleton` 类的实例，并将它赋值给两个不同的变量 `instance1` 和 `instance2`。然后我们比较这两个变量是否相等，如果相等，说明只有一个实例被创建，单例模式有效。最后，我们调用 `instance1` 的 `SomeMethod()` 方法，输出 `"Some method in singleton instance"`。

## 优化

这个示例是一个基本的单例模式实现，但它可能存在线程安全性问题。如果多个线程同时调用 `Singleton.Instance` 属性，可能会创建多个 `Singleton` 类的实例。要解决这个问题，我们可以通过双重检查锁定（Double-Checked Locking）来确保只有一个实例被创建：

```cs
public sealed class Singleton
{
    private static volatile Singleton instance;
    private static object syncRoot = new object();

    private Singleton() { }

    public static Singleton Instance
    {
        get
        {
            if (instance == null)
            {
                lock (syncRoot)
                {
                    if (instance == null)
                    {
                        instance = new Singleton();
                    }
                }
            }
            return instance;
        }
    }

    public void SomeMethod()
    {
        Console.WriteLine("Some method in singleton instance");
    }
}
```

在这个示例中，我们添加了一个名为 `syncRoot` 的对象作为锁定对象。在访问 `Singleton.Instance` 属性时，首先检查实例是否已经存在，如果不存在，就使用 `lock` 关键字锁定 `syncRoot` 对象，并再次检查实例是否已经被创建。如果没有，就创建一个新的实例并将其赋值给 `instance`。这种双重检查锁定的方式可以确保只有一个实例被创建，并且能够避免性能上的开销。