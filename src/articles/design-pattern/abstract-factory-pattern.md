---
title: 抽象工厂模式
date: 2022-05-02
category:
 - 设计模式
tag: 
 - 设计模式
 - 创建型模式
timeline: true
order: 3
---
::: tip ✨✨✨✨✨
抽象工厂模式是一种创建型设计模式，它提供一个接口，用于创建一系列相关或相互依赖的对象，而无需指定它们的具体类。抽象工厂模式可以看作是工厂方法模式的扩展，它在工厂方法模式的基础上，通过增加工厂的抽象层次，来实现对一组产品族的创建，而不是单一产品的创建。
:::

<!-- more -->

## 定义

抽象工厂模式是一种创建型设计模式，它可以提供一个接口用于创建一系列相关或相互依赖的对象，而无需指定具体类。这种模式属于对象创建型模式。

## 使用场景
- 当一个系统需要一系列相互关联或相互依赖的对象时，可以使用抽象工厂模式，这些对象之间存在固定的依赖关系。
- 当一个系统需要多个产品族中的产品对象，而且这些产品族中的产品对象之间存在一定的约束或逻辑关系时，可以使用抽象工厂模式。

## 优缺点

**优点**
- 可以保证同一工厂生产的所有产品对象都是相互兼容的。这样可以使得客户端代码无需关心具体产品的类名，只需关心产品所属的接口或抽象类。
- 可以封装创建产品对象的过程，使得客户端代码和具体产品实现分离，从而使系统更易于扩展和维护。
- 可以更容易地替换产品系列，只需要更改具体工厂即可。

**缺点**
- 抽象工厂模式的最大缺点是扩展新的产品族比较困难，因为需要更改抽象工厂接口及其所有的实现类。
- 在增加新的产品等级结构时，需要更改所有的具体工厂类，这可能会带来较大的代码量。

## 代码示例

下面是一个使用抽象工厂模式的示例程序，该程序使用抽象工厂模式来创建不同类型的按钮和文本框：

```cs
// 抽象产品类：按钮
public abstract class Button
{
    public abstract void Paint();
}

// 具体产品类：Windows 按钮
public class WindowsButton : Button
{
    public override void Paint()
    {
        Console.WriteLine("Painting a Windows button.");
    }
}

// 具体产品类：MacOS 按钮
public class MacOSButton : Button
{
    public override void Paint()
    {
        Console.WriteLine("Painting a MacOS button.");
    }
}

// 抽象产品类：文本框
public abstract class TextBox
{
    public abstract void Paint();
}

// 具体产品类：Windows 文本框
public class WindowsTextBox : TextBox
{
    public override void Paint()
    {
        Console.WriteLine("Painting a Windows text box.");
    }
}

// 具体产品类：MacOS 文本框
public class MacOSTextBox : TextBox
{
    public override void Paint()
    {
        Console.WriteLine("Painting a MacOS text box.");
    }
}

// 抽象工厂类
public abstract class GUIFactory
{
    public abstract Button CreateButton();
    public abstract TextBox CreateTextBox();
}

// 具体工厂类：Windows 工厂
public class WindowsFactory : GUIFactory
{
    public override Button CreateButton()
    {
        return new WindowsButton();
    }

    public override TextBox CreateTextBox()
    {
        return new WindowsTextBox();
    }
}

// 具体工厂类：MacOS 工厂
public class MacOSFactory : GUIFactory
{
    public override Button CreateButton()
    {
        return new MacOSButton();
    }

    public override TextBox CreateTextBox()
    {
        return new MacOSTextBox();
    }
}

// 客户端代码
public class Client
{
    private GUIFactory factory;

    public Client(GUIFactory factory)
    {
        this.factory = factory;
    }

    public void Paint()
    {
        Button button = factory.CreateButton();
        button.Paint();

        TextBox textBox = factory.CreateTextBox();
        textBox.Paint();
    }
}

// 示例程序
public class Program
{
    static void Main(string[] args)
    {
        // 使用 Windows 工厂创建控件
        GUIFactory windowsFactory = new WindowsFactory();
        Client windowsClient = new Client(windowsFactory);
        windowsClient.Paint();

        // 使用 MacOS 工厂创建控件
        GUIFactory macosFactory = new MacOSFactory();
        Client macosClient = new Client(macosFactory);
        macosClient.Paint();
    }
}
```

在上述示例代码中，抽象工厂模式使用了抽象工厂类 `GUIFactory` 和其具体实现类 `WindowsFactory` 和 `MacOSFactory`。每个具体工厂类都可以创建一组相关的产品对象（按钮和文本框），并实现抽象工厂类中定义的抽象方法。客户端代码使用特定的工厂对象创建按钮和文本框，并使用这些控件执行任务。