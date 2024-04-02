---
title: 原型模式
date: 2022-05-08
category:
 - 设计模式
tag: 
 - 设计模式
 - 创建型模式
timeline: true
order: 5
---

::: tip ✨✨✨✨✨
原型模式是一种创建型设计模式，它允许通过克隆现有对象来创建新对象，而无需向客户端公开对象创建的细节。该模式可以有效地减少对象创建的成本，因为它允许在运行时动态地添加或删除产品。
:::

<!-- more -->

## 定义
原型模式是一种创建型设计模式，它允许通过克隆现有对象来创建新对象，而无需向客户端公开对象创建的细节。该模式可以有效地减少对象创建的成本，因为它允许在运行时动态地添加或删除产品。

## 使用场景
原型模式适用于以下情况：

- 当需要创建对象的过程很昂贵或复杂时，可以使用现有对象的克隆来避免这种成本。
- 当创建对象的过程要求应用程序具有独立于其类型的能力时，可以使用原型模式。也就是说，对象可以按原样复制，而不会知道它们的类。

## 优缺点

**使用原型模式的优点包括：**
- 可以避免重复性的代码，节约了创建对象的成本和时间。
- 可以更灵活地创建对象，而不需要创建新的子类或更改现有类的实现。
- 可以动态添加或删除产品，更容易实现一个复杂的产品系列。

**使用原型模式也有一些缺点：**
- 必须正确地实现克隆方法。如果没有正确地实现，它可能会导致不良后果，例如对象状态的不正确复制。
- 如果对象具有循环引用或对象图太复杂，则可能需要较长时间才能完成克隆。
- 如果对象状态需要特殊处理，则可能需要额外的实现来正确地克隆该状态。

下面是一个使用C#实现原型模式的示例代码，我们将创建一个原型电子产品类，该类可以被克隆成不同类型的电子产品。

```cs
// 定义原型类
abstract class ElectronicProductPrototype
{
    public string Model { get; set; }
    public abstract ElectronicProductPrototype Clone();
}

// 具体原型类1：手机
class PhonePrototype : ElectronicProductPrototype
{
    public PhonePrototype(string model)
    {
        this.Model = model;
    }

    public override ElectronicProductPrototype Clone()
    {
        Console.WriteLine($"Cloning phone model {this.Model}...");
        return (ElectronicProductPrototype)this.MemberwiseClone();
    }
}

// 具体原型类2：平板电脑
class TabletPrototype : ElectronicProductPrototype
{
    public TabletPrototype(string model)
    {
        this.Model = model;
    }

    public override ElectronicProductPrototype Clone()
    {
        Console.WriteLine($"Cloning tablet model {this.Model}...");
        return (ElectronicProductPrototype)this.MemberwiseClone();
    }
}

// 客户端
class Client
{
    static void Main(string[] args)
    {
        // 创建手机原型
        var phonePrototype = new PhonePrototype("iPhone X");

        // 克隆手机原型
        var clonedPhone1 = phonePrototype.Clone();
        Console.WriteLine($"Cloned phone model: {clonedPhone1.Model}");

        var clonedPhone2 = phonePrototype.Clone();
        Console.WriteLine($"Cloned phone model: {clonedPhone2.Model}");

        // 创建平板电脑原型
        var tabletPrototype = new TabletPrototype("iPad Pro");

        // 克隆平板电脑原型
        var clonedTablet1 = tabletPrototype.Clone();
        Console.WriteLine($"Cloned tablet model: {clonedTablet1.Model}");

        var clonedTablet2 = tabletPrototype.Clone();
        Console.WriteLine($"Cloned tablet model: {clonedTablet2.Model}");
    }
}
```

在上面的代码中，我们首先定义了一个 `ElectronicProductPrototype` 抽象类，它包含一个 `Model` 属性和一个 `Clone()` 方法。`Clone()` 方法返回一个克隆出来的对象，因为在原型模式中我们可以使用现有的对象作为原型，根据需要创建新的对象。

接着，我们定义了两个具体的原型类 `PhonePrototype` 和 `TabletPrototype`，它们继承自  `ElectronicProductPrototype`，并实现了 `Clone()` 方法。在 `Clone()` 方法中，我们使用了  `MemberwiseClone()` 方法来复制对象。这个方法会复制对象中的所有值类型成员，并对于引用类型成员只复制引用而不复制对象本身。

最后，我们在客户端代码中创建了原型对象，并通过调用 `Clone()` 方法来克隆它们。我们可以通过克隆后的对象的 `Model` 属性来检查它们是否被成功克隆。