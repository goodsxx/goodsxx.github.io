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
工厂模式是一种创建型设计模式，它提供了一种将对象的创建与使用分离的方式。通过工厂模式，我们可以定义一个接口或抽象类作为工厂，然后由具体的子类来负责实例化对象。这样，客户端就不需要关心具体的对象创建过程，而只需要通过工厂接口来获取需要的对象。
:::

<!-- more -->

下面是一个简单的工厂模式的示例代码：

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