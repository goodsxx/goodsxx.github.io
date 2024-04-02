---
title: 访问者模式
date: 2022-06-01
category:
 - 设计模式
tag: 
 - 设计模式
 - 行为型模式
timeline: true
order: 16
---

::: tip ✨✨✨✨✨
访问者模式（Visitor Pattern）是一种行为型设计模式，它允许你将算法从对象结构中分离出来，使这些算法可以在不改变这些对象的前提下被添加到该对象结构中。通过这种方式，可以在不修改对象结构的情况下，对其进行复杂的操作和处理。
:::

<!-- more -->

## 定义

访问者模式（Visitor Pattern）是一种行为型设计模式，它允许你将算法从对象结构中分离出来，使这些算法可以在不改变这些对象的前提下被添加到该对象结构中。通过这种方式，可以在不修改对象结构的情况下，对其进行复杂的操作和处理。

## 适用场景

访问者模式通常在以下情况下使用：

- 对象结构包含许多具有不同接口的对象，并且您希望对这些对象进行复杂的操作，而不想污染这些对象的类。
- 需要对对象结构进行许多不相关的操作，而不希望将这些操作封装到对象中。
- 对象结构中的类经常更改，但您希望对其进行许多不同的操作而不需要修改这些类。

## 优缺点

### 优点

- 访问者模式使得添加新的操作变得容易，而不会影响到对象结构的类。
- 可以将相关操作封装在一个访问者中，从而使代码更加结构化。
- 可以将对象结构和操作分离，使得代码更加清晰。

### 缺点

- 由于访问者模式需要将操作和对象结构分离，因此其代码可能比较复杂。
- 在对象结构中添加新的元素可能需要修改访问者的接口。

## 代码示例

下面是一个使用访问者模式的示例代码。假设我们有一个包含了多个元素的对象结构，每个元素都有一个Accept方法，接受一个访问者作为参数，并调用该访问者的Visit方法来进行操作。

```cs
// 抽象元素类
public abstract class Element
{
    public abstract void Accept(IVisitor visitor);
}

// 具体元素类A
public class ConcreteElementA : Element
{
    public override void Accept(IVisitor visitor)
    {
        visitor.VisitConcreteElementA(this);
    }

    public void OperationA()
    {
        // 元素A的特定操作
    }
}

// 具体元素类B
public class ConcreteElementB : Element
{
    public override void Accept(IVisitor visitor)
    {
        visitor.VisitConcreteElementB(this);
    }

    public void OperationB()
    {
        // 元素B的特定操作
    }
}

// 抽象访问者类
public interface IVisitor
{
    void VisitConcreteElementA(ConcreteElementA elementA);
    void VisitConcreteElementB(ConcreteElementB elementB);
}

// 具体访问者类
public class ConcreteVisitor : IVisitor
{
    public void VisitConcreteElementA(ConcreteElementA elementA)
    {
        elementA.OperationA();
    }

    public void VisitConcreteElementB(ConcreteElementB elementB)
    {
        elementB.OperationB();
    }
}

// 对象结构
public class ObjectStructure
{
    private List<Element> elements = new List<Element>();

    public void Attach(Element element)
    {
        elements.Add(element);
    }

    public void Detach(Element element)
    {
        elements.Remove(element);
    }

    public void Accept(IVisitor visitor)
    {
        foreach (Element element in elements)
        {
            element.Accept(visitor);
        }
    }
}

//客户端代码
public class Client
{
    public void Main()
    {
        ObjectStructure objectStructure = new ObjectStructure();
        objectStructure.Attach(new ConcreteElementA());
        objectStructure.Attach(new ConcreteElementB());

        ConcreteVisitor visitor = new ConcreteVisitor();
        objectStructure.Accept(visitor);
    }
}
```

在上面的示例代码中，我们定义了三个抽象元素类、两个具体元素类，一个抽象访问者类和一个具体访问者类。我们还定义了一个对象结构类来管理元素，并在客户端代码中将元素添加到对象结构中，然后创建一个访问者并将其传递给对象结构的 Accept 方法。这样，访问者就可以访问元素并进行操作，而不需要在元素类中添加任何新的方法。

## 优化

上面的代码示例已经比较简单和优化了，但是在实际的项目中，如果对象结构中的元素类比较多，访问者类可能会变得非常庞大，这时候可以考虑使用抽象访问者类和具体访问者类之间的继承关系来简化访问者类的实现。另外，如果对象结构中的元素类发生了变化，我们还可以使用反射技术来自动注册元素类和访问者类，从而简化代码。

```cs
// 抽象元素类
public abstract class Element
{
    public abstract void Accept(IVisitor visitor);
}

// 具体元素类A
public class ConcreteElementA : Element
{
    public override void Accept(IVisitor visitor)
    {
        visitor.VisitConcreteElementA(this);
    }

    public void OperationA()
    {
        // 业务逻辑
    }
}

// 具体元素类B
public class ConcreteElementB : Element
{
    public override void Accept(IVisitor visitor)
    {
        visitor.VisitConcreteElementB(this);
    }

    public void OperationB()
    {
        // 业务逻辑
    }
}

// 抽象访问者类
public interface IVisitor
{
    void VisitConcreteElementA(ConcreteElementA element);
    void VisitConcreteElementB(ConcreteElementB element);
}

// 具体访问者类
public class ConcreteVisitor : IVisitor
{
    public void VisitConcreteElementA(ConcreteElementA element)
    {
        element.OperationA();
    }

    public void VisitConcreteElementB(ConcreteElementB element)
    {
        element.OperationB();
    }
}

// 对象结构类
public class ObjectStructure
{
    private List<Element> elements = new List<Element>();

    public void Attach(Element element)
    {
        elements.Add(element);
    }

    public void Detach(Element element)
    {
        elements.Remove(element);
    }

    public void Accept(IVisitor visitor)
    {
        foreach (Element element in elements)
        {
            element.Accept(visitor);
        }
    }
}

// 客户端代码
public class Client
{
    public void Main()
    {
        ObjectStructure objectStructure = new ObjectStructure();
        objectStructure.Attach(new ConcreteElementA());
        objectStructure.Attach(new ConcreteElementB());

        ConcreteVisitor visitor = new ConcreteVisitor();
        objectStructure.Accept(visitor);
    }
}
```

在优化后的代码中，我们去掉了抽象访问者类，并将其转换为接口，从而使访问者类的实现更加灵活。此外，我们还将具体元素类和具体访问者类的方法名更改为 VisitXXX 的形式，并将业务逻辑封装在这些方法中，以便访问者可以对不同类型的元素执行不同的操作。另外，我们还将对象结构类的 Attach 和 Detach 方法的参数类型改为 Element 类型，并在客户端代码中直接创建具体元素对象并将其添加到对象结构中，从而使代码更加简洁。