---
title: 工厂模式
date: 2022-04-30
category:
 - 设计模式
tag: 
 - 设计模式
 - 创建型模式
timeline: true
order: 2
---
::: tip ✨✨✨✨✨
工厂模式是一种创建型设计模式，它提供了一种封装对象实例化的方式，让子类来决定实例化哪个类，以及如何创建这个类的实例。工厂模式通过将对象的创建和使用分离，可以减少代码中的重复，提高代码的可扩展性和可维护性。
:::

<!-- more -->

## 定义

工厂模式是一种创建型设计模式，它提供了一种封装对象实例化的方式，让子类来决定实例化哪个类，以及如何创建这个类的实例。工厂模式通过将对象的创建和使用分离，可以减少代码中的重复，提高代码的可扩展性和可维护性。

## 使用场景

在以下情况下可以考虑使用工厂模式：

- 当需要根据某些条件来决定创建哪个对象时，例如读取配置文件中的数据或者根据用户输入的选项来决定创建哪个对象。
- 当需要隐藏对象创建的复杂度时，例如创建一个对象需要多个步骤或者需要进行多项检查。
- 当需要将对象的创建和使用分离时，例如使用依赖注入来创建对象。

## 优缺点

**工厂模式的优点包括：**
- 可以隐藏对象创建的复杂度，让客户端代码只需要关心使用对象，而不需要关心如何创建对象。
- 可以提高代码的可扩展性和可维护性，当需要添加新的对象时，只需要添加相应的工厂类和产品类即可，不需要修改客户端代码。
- 可以将对象的创建和使用分离，让客户端代码更加松耦合。

**但是工厂模式也有一些缺点：**
-当工厂类的数量较多时，会增加代码的复杂度，不利于维护和测试。
-当需要创建的对象数量很少时，使用工厂模式可能会导致代码冗余。

## 代码示例

下面是一个基本的工厂模式的C#实现示例：

首先，我们定义一个抽象产品类：

```cs
public abstract class Product
{
    public abstract void Use();
}
```
然后，我们定义两个具体的产品类：

```cs
public class ConcreteProductA : Product
{
    public override void Use()
    {
        Console.WriteLine("Using ConcreteProductA");
    }
}

public class ConcreteProductB : Product
{
    public override void Use()
    {
        Console.WriteLine("Using ConcreteProductB");
    }
}
```
接下来，我们定义一个抽象工厂类，它有一个用于创建产品的抽象方法：
```cs
public abstract class Factory
{
    public abstract Product CreateProduct();
}
```
最后，我们定义两个具体的工厂类，它们分别用于创建 ConcreteProductA 和 ConcreteProductB：

```cs
public class ConcreteFactoryA : Factory
{
    public override Product CreateProduct()
    {
        return new ConcreteProductA();
    }
}

public class ConcreteFactoryB : Factory
{
    public override Product CreateProduct()
    {
        return new ConcreteProductB();
    }
}
```
在这个示例中，抽象工厂类 Factory 中的 CreateProduct() 方法是工厂方法，它的具体实现由具体工厂类 ConcreteFactoryA 和 ConcreteFactoryB 来实现。这两个具体工厂类分别用于创建 ConcreteProductA 和 ConcreteProductB。

下面是一个示例程序，它使用工厂模式来创建产品，并调用产品的 Use() 方法：
```cs
class Program
{
    static void Main(string[] args)
    {
        // 使用 ConcreteFactoryA 来创建 ConcreteProductA
        Factory factoryA = new ConcreteFactoryA();
        Product productA = factoryA.CreateProduct();
        productA.Use();

        // 使用 ConcreteFactoryB 来创建 ConcreteProductB
        Factory factoryB = new ConcreteFactoryB();
        Product productB = factoryB.CreateProduct();
        productB.Use();

        Console.ReadLine();
    }
}
```
输出结果为：
```shell
Using ConcreteProductA
Using ConcreteProductB
```
通过工厂模式，我们可以将对象的创建和使用分离开来，客户端代码只需要关心使用对象，而不需要关心如何创建对象。此外，当需要添加新的产品时，只需要添加相应的产品类和工厂类，不需要修改客户端代码，从而提高了代码的可扩展性和可维护性。

在这个示例程序中，我们只演示了简单工厂模式的使用方法，实际上还有许多不同类型的工厂模式，例如工厂方法模式、抽象工厂模式等。这些模式都有不同的适用场景和优缺点，需要根据具体情况选择合适的模式来使用。

## 其它实现方式

下面是另一个简单工厂模式的示例代码：

```cs
// 抽象产品类
public abstract class Product
{
    public abstract void Show();
}

// 具体产品类 A
public class ProductA : Product
{
    public override void Show()
    {
        Console.WriteLine("Product A");
    }
}

// 具体产品类 B
public class ProductB : Product
{
    public override void Show()
    {
        Console.WriteLine("Product B");
    }
}

// 工厂接口
public interface IFactory
{
    Product CreateProduct();
}

// 具体工厂 A
public class FactoryA : IFactory
{
    public Product CreateProduct()
    {
        return new ProductA();
    }
}

// 具体工厂 B
public class FactoryB : IFactory
{
    public Product CreateProduct()
    {
        return new ProductB();
    }
}

// 客户端代码
public class Client
{
    public void Run(IFactory factory)
    {
        Product product = factory.CreateProduct();
        product.Show();
    }
}
```

在上述代码中，我们首先定义了一个抽象的产品类 Product ，然后定义了两个具体的产品类 ProductA 和 ProductB 。接着，我们定义了一个工厂接口 IFactory ，其中定义了一个 CreateProduct 方法用于创建产品对象。最后，我们定义了两个具体的工厂类 FactoryA 和 FactoryB ，分别用于创建 ProductA 和 ProductB 对象。

在客户端代码中，我们首先创建一个工厂对象，然后通过工厂接口来获取具体的产品对象，最后调用产品对象的 Show 方法来展示产品信息。

需要注意的是，上述代码中存在一个潜在的漏洞，即客户端可以直接创建具体的产品对象，而不是通过工厂来获取。这样就会破坏工厂模式的封装性，因此我们需要进一步完善代码。

下面是一个完善后的工厂模式示例代码，其中增加了对工厂模式的封装，以避免客户端直接创建具体的产品对象。

```cs
// 抽象产品类
public abstract class Product
{
    public abstract void Show();
}

// 具体产品类 A
public class ProductA : Product
{
    public override void Show()
    {
        Console.WriteLine("Product A");
    }
}

// 具体产品类 B
public class ProductB : Product
{
    public override void Show()
    {
        Console.WriteLine("Product B");
    }
}

// 工厂接口
public interface IFactory
{
    Product CreateProduct();
}

// 具体工厂 A
public class FactoryA : IFactory
{
    public Product CreateProduct()
    {
        return new ProductA();
    }
}

// 具体工厂 B
public class FactoryB : IFactory
{
    public Product CreateProduct()
    {
        return new ProductB();
    }
}

// 工厂管理类
public class FactoryManager
{
    // 私有构造函数，确保单例模式
    private FactoryManager() { }

    private static FactoryManager instance = null;

    // 静态构造函数，确保线程安全
    static FactoryManager()
    {
        instance = new FactoryManager();
    }

    public static FactoryManager GetInstance()
    {
        return instance;
    }

    // 工厂字典
    private Dictionary<string, IFactory> factories = new Dictionary<string, IFactory>();

    // 注册工厂
    public void RegisterFactory(string name, IFactory factory)
    {
        factories[name] = factory;
    }

    // 创建产品
    public Product CreateProduct(string name)
    {
        IFactory factory;
        if (factories.TryGetValue(name, out factory))
        {
            return factory.CreateProduct();
        }
        return null;
    }
}

// 客户端代码
public class Client
{
    public void Run()
    {
        // 获取工厂管理类单例
        FactoryManager manager = FactoryManager.GetInstance();

        // 注册具体工厂
        manager.RegisterFactory("A", new FactoryA());
        manager.RegisterFactory("B", new FactoryB());

        // 使用工厂管理类创建产品
        Product productA = manager.CreateProduct("A");
        productA.Show();

        Product productB = manager.CreateProduct("B");
        productB.Show();
    }
}
```

在完善后的代码中，我们增加了一个工厂管理类 FactoryManager，用于管理各个具体工厂对象的创建与销毁。客户端代码通过调用工厂管理类的 RegisterFactory 方法来注册具体工厂，然后通过 CreateProduct 方法来创建具体产品对象。这样，客户端就无法直接创建具体产品对象，而只能通过工厂管理类来获取。同时，我们还使用了单例模式来确保工厂管理类的唯一性，以及使用线程安全的方式来初始化单例对象。