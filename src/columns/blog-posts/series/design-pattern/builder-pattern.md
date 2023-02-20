---
title: 建造者模式
date: 2022-05-05
category:
 - 设计模式
tag: 
 - 设计模式
 - 创建型模式
timeline: true
order: 4
---

::: tip ✨✨✨✨✨
建造者模式（Builder Pattern）是一种对象创建型模式，用于将一个复杂对象的构建过程和表示分离，使得同样的构建过程可以创建不同的表示。该模式通常由一个指挥者（Director）和一个建造者（Builder）组成，指挥者负责指导建造者进行构建，而建造者负责具体构建过程。建造者模式的核心思想是分步骤构建一个复杂对象，并且可以控制每个步骤的执行顺序，从而得到一个更加精细化的对象。
:::

<!-- more -->

以下是一个简单的建造者模式示例代码：

```cs
// 产品类
public class Product
{
    private List<string> parts = new List<string>();

    public void Add(string part)
    {
        parts.Add(part);
    }

    public void Show()
    {
        Console.WriteLine("Product Parts:");
        foreach (string part in parts)
        {
            Console.WriteLine(part);
        }
    }
}

// 抽象建造者
public abstract class Builder
{
    public abstract void BuildPartA();
    public abstract void BuildPartB();
    public abstract Product GetResult();
}

// 具体建造者A
public class ConcreteBuilderA : Builder
{
    private Product product = new Product();

    public override void BuildPartA()
    {
        product.Add("PartA");
    }

    public override void BuildPartB()
    {
        product.Add("PartB");
    }

    public override Product GetResult()
    {
        return product;
    }
}

// 具体建造者B
public class ConcreteBuilderB : Builder
{
    private Product product = new Product();

    public override void BuildPartA()
    {
        product.Add("PartX");
    }

    public override void BuildPartB()
    {
        product.Add("PartY");
    }

    public override Product GetResult()
    {
        return product;
    }
}

// 指挥者
public class Director
{
    public void Construct(Builder builder)
    {
        builder.BuildPartA();
        builder.BuildPartB();
    }
}

// 客户端代码
public class Client
{
    public void Run()
    {
        Director director = new Director();

        Builder builderA = new ConcreteBuilderA();
        director.Construct(builderA);
        Product productA = builderA.GetResult();
        productA.Show();

        Builder builderB = new ConcreteBuilderB();
        director.Construct(builderB);
        Product productB = builderB.GetResult();
        productB.Show();
    }
}
```

在这个示例代码中，我们使用建造者模式来构建一个Product对象，该对象由多个部分组成，具体的构建过程由Builder负责，由Director进行指导和控制。通过这种方式，我们可以得到不同的Product对象，而不需要在代码中重复编写构建逻辑。同时，建造者模式还可以使得代码的可读性和可维护性更高，因为我们可以在建造者中明确每个部分的构建逻辑，并且可以控制每个部分的执行顺序。

如果这个示例代码中有漏洞，那么就是它只能构建一种类型的Product对象，如果要构建不同类型的Product对象，我们需要在建造者模式中进行扩展。一种常见的方式是使用抽象工厂模式，将建造者模式与抽象工厂模式结合起来。这样，我们就可以通过不同的抽象工厂来创建不同类型的建造者，从而构建不同类型的Product对象。以下是一个示例代码：

```cs
// 产品类
public class Product
{
    private List<string> parts = new List<string>();

    public void Add(string part)
    {
        parts.Add(part);
    }

    public void Show()
    {
        Console.WriteLine("Product Parts:");
        foreach (string part in parts)
        {
            Console.WriteLine(part);
        }
    }
}

// 抽象建造者
public abstract class Builder
{
    public abstract void BuildPartA();
    public abstract void BuildPartB();
    public abstract Product GetResult();
}

// 具体建造者A
public class ConcreteBuilderA : Builder
{
    private Product product = new Product();

    public override void BuildPartA()
    {
        product.Add("PartA");
    }

    public override void BuildPartB()
    {
        product.Add("PartB");
    }

    public override Product GetResult()
    {
        return product;
    }
}

// 具体建造者B
public class ConcreteBuilderB : Builder
{
    private Product product = new Product();

    public override void BuildPartA()
    {
        product.Add("PartX");
    }

    public override void BuildPartB()
    {
        product.Add("PartY");
    }

    public override Product GetResult()
    {
        return product;
    }
}

// 抽象工厂
public abstract class AbstractFactory
{
    public abstract Builder CreateBuilder();
}

// 具体工厂A
public class ConcreteFactoryA : AbstractFactory
{
    public override Builder CreateBuilder()
    {
        return new ConcreteBuilderA();
    }
}

// 具体工厂B
public class ConcreteFactoryB : AbstractFactory
{
    public override Builder CreateBuilder()
    {
        return new ConcreteBuilderB();
    }
}

// 客户端代码
public class Client
{
    public void Run()
    {
        AbstractFactory factoryA = new ConcreteFactoryA();
        Builder builderA = factoryA.CreateBuilder();
        Director director = new Director();
        director.Construct(builderA);
        Product productA = builderA.GetResult();
        productA.Show();

        AbstractFactory factoryB = new ConcreteFactoryB();
        Builder builderB = factoryB.CreateBuilder();
        director.Construct(builderB);
        Product productB = builderB.GetResult();
        productB.Show();
    }
}
```

在这个示例代码中，我们新增了一个AbstractFactory抽象工厂，该工厂用于创建Builder对象。具体的创建逻辑由具体工厂ConcreteFactoryA和ConcreteFactoryB实现。这样，我们就可以通过不同的抽象工厂来创建不同类型的建造者，从而构建不同类型的Product对象。这种方式将建造者模式和抽象工厂模式结合起来，既保持了建造者模式的灵活性，也使得我们能够构建不同类型的Product对象。