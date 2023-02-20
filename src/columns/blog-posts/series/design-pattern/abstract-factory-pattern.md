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

下面是一个抽象工厂模式的示例代码：

```csharp
// 抽象产品A
public abstract class AbstractProductA
{
    public abstract void Show();
}

// 具体产品A1
public class ProductA1 : AbstractProductA
{
    public override void Show()
    {
        Console.WriteLine("Product A1");
    }
}

// 具体产品A2
public class ProductA2 : AbstractProductA
{
    public override void Show()
    {
        Console.WriteLine("Product A2");
    }
}

// 抽象产品B
public abstract class AbstractProductB
{
    public abstract void Show();
}

// 具体产品B1
public class ProductB1 : AbstractProductB
{
    public override void Show()
    {
        Console.WriteLine("Product B1");
    }
}

// 具体产品B2
public class ProductB2 : AbstractProductB
{
    public override void Show()
    {
        Console.WriteLine("Product B2");
    }
}

// 抽象工厂
public abstract class AbstractFactory
{
    public abstract AbstractProductA CreateProductA();
    public abstract AbstractProductB CreateProductB();
}

// 具体工厂1
public class ConcreteFactory1 : AbstractFactory
{
    public override AbstractProductA CreateProductA()
    {
        return new ProductA1();
    }

    public override AbstractProductB CreateProductB()
    {
        return new ProductB1();
    }
}

// 具体工厂2
public class ConcreteFactory2 : AbstractFactory
{
    public override AbstractProductA CreateProductA()
    {
        return new ProductA2();
    }

    public override AbstractProductB CreateProductB()
    {
        return new ProductB2();
    }
}

// 客户端代码
public class Client
{
    public void Run(AbstractFactory factory)
    {
        AbstractProductA productA = factory.CreateProductA();
        productA.Show();

        AbstractProductB productB = factory.CreateProductB();
        productB.Show();
    }
}
```

在上述示例代码中，我们定义了两个抽象产品 AbstractProductA 和 AbstractProductB ，分别有两个具体产品 ProductA1 、ProductA2 和 ProductB1 、ProductB2 。然后定义了一个抽象工厂 AbstractFactory ，里面包含两个创建抽象产品的抽象方法 CreateProductA 和 CreateProductB 。接着，定义了两个具体工厂 ConcreteFactory1 和 ConcreteFactory2 ，它们分别实现了 AbstractFactory 中的两个抽象方法，用于创建一组产品族。最后，客户端代码通过传入具体的工厂对象，来获取一组产品对象并进行操作。

抽象工厂模式的优点在于，它可以提供一个统一的接口，用于创建一组相关的对象，从而降低了客户端与具体产品之间的耦合度，使得客户端可以更加灵活地使用不同的产品组合。此外，抽象工厂模式还可以保证一组产品的一致性，即同一个工厂生产的产品族具有相同的风格和特征。

当然，抽象工厂模式也存在一些缺点，如增加新的具体产品或者具体工厂需要修改抽象工厂的接口，这将导致所有的具体工厂都需要进行相应的修改，同时也会影响到客户端代码的改动。

如果要完善上面的示例代码，可以考虑使用反射来动态创建具体产品 或者 引入工厂的注册机制来动态注册和创建具体工厂对象。

下面是一个使用反射来动态创建具体产品的改进版的示例代码：

```cs
// 抽象产品A
public abstract class AbstractProductA
{
    public abstract void Show();
}

// 具体产品A1
public class ProductA1 : AbstractProductA
{
    public override void Show()
    {
        Console.WriteLine("Product A1");
    }
}

// 具体产品A2
public class ProductA2 : AbstractProductA
{
    public override void Show()
    {
        Console.WriteLine("Product A2");
    }
}

// 抽象产品B
public abstract class AbstractProductB
{
    public abstract void Show();
}

// 具体产品B1
public class ProductB1 : AbstractProductB
{
    public override void Show()
    {
        Console.WriteLine("Product B1");
    }
}

// 具体产品B2
public class ProductB2 : AbstractProductB
{
    public override void Show()
    {
        Console.WriteLine("Product B2");
    }
}

// 抽象工厂
public abstract class AbstractFactory
{
    public abstract AbstractProductA CreateProductA();
    public abstract AbstractProductB CreateProductB();
}

// 具体工厂1
public class ConcreteFactory1 : AbstractFactory
{
    public override AbstractProductA CreateProductA()
    {
        Type type = Type.GetType("AbstractFactoryPattern.ProductA1");
        return Activator.CreateInstance(type) as AbstractProductA;
    }

    public override AbstractProductB CreateProductB()
    {
        Type type = Type.GetType("AbstractFactoryPattern.ProductB1");
        return Activator.CreateInstance(type) as AbstractProductB;
    }
}

// 具体工厂2
public class ConcreteFactory2 : AbstractFactory
{
    public override AbstractProductA CreateProductA()
    {
        Type type = Type.GetType("AbstractFactoryPattern.ProductA2");
        return Activator.CreateInstance(type) as AbstractProductA;
    }

    public override AbstractProductB CreateProductB()
    {
        Type type = Type.GetType("AbstractFactoryPattern.ProductB2");
        return Activator.CreateInstance(type) as AbstractProductB;
    }
}

// 客户端代码
public class Client
{
    public void Run(AbstractFactory factory)
    {
        AbstractProductA productA = factory.CreateProductA();
        productA.Show();

        AbstractProductB productB = factory.CreateProductB();
        productB.Show();
    }
}
```
在这个示例代码中，我们使用了反射来动态创建具体产品，从而避免了修改抽象工厂和具体工厂的问题。这种方法虽然增加了一些运行时的开销，但是可以提高代码的灵活性和可扩展性。


下面是一个引入工厂的注册机制的改进版的示例代码：

```csharp
// 工厂注册表
public static class FactoryRegistry
{
    private static readonly Dictionary<string, AbstractFactory> Factories = new Dictionary<string, AbstractFactory>();

    public static void Register(string key, AbstractFactory factory)
    {
        Factories[key] = factory;
    }

    public static AbstractFactory GetFactory(string key)
    {
        return Factories[key];
    }
}

// 客户端代码
public class Client
{
    public void Run(string factoryKey)
    {
        AbstractFactory factory = FactoryRegistry.GetFactory(factoryKey);

        AbstractProductA productA = factory.CreateProductA(); 
        AbstractProductB productB = factory.CreateProductB();


        // 使用产品对象
        productA.MethodA();
        productB.MethodB();
    }
}

// 抽象工厂类 
public abstract class AbstractFactory 
{ 
    public abstract AbstractProductA CreateProductA(); 
    public abstract AbstractProductB CreateProductB(); 
    }

// 具体工厂类A 
public class ConcreteFactoryA : AbstractFactory 
{ 
    public override AbstractProductA CreateProductA() 
    { 
        return new ConcreteProductA1(); 
    }


    public override AbstractProductB CreateProductB()
    {
        return new ConcreteProductB1();
    }
}

// 具体工厂类B 
public class ConcreteFactoryB : AbstractFactory 
{ 
    public override AbstractProductA CreateProductA() 
    {
        return new ConcreteProductA2(); 
    }

    public override AbstractProductB CreateProductB()
    {
        return new ConcreteProductB2();
    }
}

// 抽象产品A 
public abstract class AbstractProductA 
{ 
    public abstract void MethodA(); 
}

// 具体产品A1 
public class ConcreteProductA1 : AbstractProductA 
{ 
    public override void MethodA() 
    { 
        Console.WriteLine("ConcreteProductA1.MethodA"); 
    } 
}

// 具体产品A2 
public class ConcreteProductA2 : AbstractProductA 
{ 
    public override void MethodA() 
    {
        Console.WriteLine("ConcreteProductA2.MethodA"); 
    } 
}

// 抽象产品B 
public abstract class AbstractProductB 
{ 
    public abstract void MethodB(); 
}

// 具体产品B1 
public class ConcreteProductB1 : AbstractProductB 
{ 
    public override void MethodB() 
    { 
        Console.WriteLine("ConcreteProductB1.MethodB"); 
    } 
}

// 具体产品B2 
public class ConcreteProductB2 : AbstractProductB 
{ 
    public override void MethodB() 
    { 
        Console.WriteLine("ConcreteProductB2.MethodB"); 
    } 
}

// 客户端代码使用 
Client client = new Client(); 
FactoryRegistry.Register("FactoryA", new ConcreteFactoryA()); 
FactoryRegistry.Register("FactoryB", new ConcreteFactoryB()); 
client.Run("FactoryA"); 
client.Run("FactoryB");
```

在这个改进版的示例代码中，我们通过工厂注册表来注册具体工厂对象，并在客户端代码中通过传入工厂的 key 来获取相应的工厂对象，从而动态创建产品对象，避免了客户端代码的强依赖。这种注册机制也是很多现代框架和库所采用的方式，如 `ASP.NET Core` 中的依赖注入。