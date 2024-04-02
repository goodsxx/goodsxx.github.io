---
title: 模板方法模式
date: 2022-06-01
category:
 - 设计模式
tag: 
 - 设计模式
 - 行为型模式
timeline: true
order: 15
---

::: tip ✨✨✨✨✨
模板方法模式（Template Method Pattern）是一种行为型设计模式，它定义了一个算法的骨架，将一些步骤延迟到子类中实现，以使得子类可以在不改变算法结构的情况下重新定义算法中的某些步骤。
:::

<!-- more -->

## 定义

模板方法模式（Template Method Pattern）是一种行为型设计模式，它定义了一个算法的骨架，将一些步骤延迟到子类中实现，以使得子类可以在不改变算法结构的情况下重新定义算法中的某些步骤。

## 适用场景

当多个算法有一些共同的流程或者步骤，但具体实现方式各不相同时，可以使用模板方法模式。例如，多个子类都需要实现一个操作的不同步骤，但是这些步骤的执行顺序或逻辑相同，可以将这些共同的流程或步骤抽象出来作为模板方法，子类只需要实现自己不同的步骤即可。

## 优缺点

### 优点

- 提高代码复用性：模板方法将多个子类共同的流程或步骤抽象出来，避免了重复代码的出现，提高了代码复用性。
- 提高代码可维护性：将算法的结构固定下来，便于维护和修改，因为只需要修改模板方法即可，不用修改每个子类的实现。
- 可扩展性好：由于具体实现是在子类中完成的，因此增加新的子类非常方便。

### 缺点

- 代码复杂度较高：模板方法模式的实现较为复杂，需要把算法拆分成多个步骤，并定义抽象类、具体子类等多个类。
- 限制了子类的扩展性：模板方法模式的缺点是固定了算法的结构，这使得子类无法自由地扩展或修改算法的结构。

## 代码示例

下面是使用模板方法模式实现的一个制作饮料的示例，其中抽象类 Beverage 定义了饮料的制作流程，具体子类 Coffee 和 Tea 实现了不同的步骤：

```cs
// 抽象类：饮料
public abstract class Beverage
{
    // 模板方法：制作饮料
    public void MakeBeverage()
    {
        BoilWater();
        Brew();
        PourInCup();
        if (NeedCondiments())
        {
            AddCondiments();
        }
    }

    // 抽象方法：加入调料
    public abstract void AddCondiments();

    // 具体方法：烧水
    public void BoilWater()
    {
        Console.WriteLine("Boiling water...");
    }

    // 具体方法：倒入杯子
    public void PourInCup()
    {
        Console.WriteLine("Pouring into cup...");
    }

    // 抽象方法：冲泡饮料
    public abstract void Brew();

    // 钩子方法：是否需要加入调料，默认需要
    public virtual bool NeedCondiments()
    {
        return true;
    }
}

// 具体子类：咖啡
public class Coffee : Beverage
{
    public override void AddCondiments()
    {
        Console.WriteLine("Adding sugar and milk...");
    }

    public override void Brew()
    {
        Console.WriteLine("Brewing coffee...");
    }
}

// 具体子类：茶
public class Tea : Beverage
{
    public override void AddCondiments()
    {
        Console.WriteLine("Adding lemon...");
    }

    public override void Brew()
    {
        Console.WriteLine("Steeping the tea...");
    }

    public override bool NeedCondiments()
    {
        return false;
    }
}

// 客户端代码
class Client
{
    static void Main(string[] args)
    {
        // 制作咖啡
        Console.WriteLine("Making coffee...");
        Beverage coffee = new Coffee();
        coffee.MakeBeverage();

        Console.WriteLine();

        // 制作茶
        Console.WriteLine("Making tea...");
        Beverage tea = new Tea();
        tea.MakeBeverage();
    }
}
```

上述代码中， Beverage 是抽象类，定义了制作饮料的模板方法 MakeBeverage() 和一些具体方法和钩子方法，以及抽象方法 AddCondiments() 和 Brew() ，这两个方法分别由 Coffee 和 Tea 实现不同的功能。

 Coffee 和 Tea 是具体的子类，实现了自己不同的加调料和冲泡方法，并可以通过重写 NeedCondiments() 方法来决定是否需要加入调料。

客户端代码中，先创建 Coffee 和 Tea 的实例，并分别调用它们的 MakeBeverage() 方法，完成了制作饮料的过程。

## 优化

在模板方法模式中，可以通过钩子方法来让子类决定是否执行一些步骤或者添加一些额外的操作。如果我们在需要添加额外操作时，直接在子类中添加对应的方法，会导致代码冗余，可维护性不佳。因此，我们可以使用模板方法模式的扩展模式——钩子方法模式，将额外的操作放到钩子方法中，从而避免代码冗余，提高代码的可维护性。

以下是使用钩子方法模式对上述代码进行优化的示例：

```cs
// 抽象类：饮料
public abstract class Beverage
{
    // 制作饮料的模板方法
    public void MakeBeverage()
    {
        BoilWater();
        Brew();
        PourInCup();
        if (NeedCondiments())
        {
            AddCondiments();
        }
        Hook();
    }

    public void BoilWater()
    {
        Console.WriteLine("Boiling water...");
    }

    public void PourInCup()
    {
        Console.WriteLine("Pouring into cup...");
    }

    // 钩子方法：额外的操作
    public virtual void Hook()
    {
    }

    // 抽象方法：添加调料
    public abstract void AddCondiments();

    // 抽象方法：冲泡饮料
    public abstract void Brew();

    // 钩子方法：是否需要添加调料，默认需要
    public virtual bool NeedCondiments()
    {
        return true;
    }
}

// 具体子类：咖啡
public class Coffee : Beverage
{
    public override void AddCondiments()
    {
        Console.WriteLine("Adding sugar and milk...");
    }

    public override void Brew()
    {
        Console.WriteLine("Brewing coffee...");
    }

    // 钩子方法：额外的操作
    public override void Hook()
    {
        Console.WriteLine("Cleaning coffee pot...");
    }
}

// 具体子类：茶
public class Tea : Beverage
{
    public override void AddCondiments()
    {
        Console.WriteLine("Adding lemon...");
    }

    public override void Brew()
    {
        Console.WriteLine("Steeping the tea...");
    }

    // 钩子方法：是否需要添加调料，默认不需要
    public override bool NeedCondiments()
    {
        return false;
    }

    // 钩子方法：额外的操作
    public override void Hook()
    {
        Console.WriteLine("Cleaning tea pot...");
    }
}

// 客户端代码
class Client
{
    static void Main(string[] args)
    {
        // 制作咖啡
        Console.WriteLine("Making coffee...");
        Beverage coffee = new Coffee();
        coffee.MakeBeverage();

        Console.WriteLine();

        // 制作茶
        Console.WriteLine("Making tea...");
        Beverage tea = new Tea();
        tea.MakeBeverage();
    }
}
```

在优化后的代码中，我们将额外的操作放到了钩子方法Hook()中，子类可以选择是否重写Hook()来添加额外的操作。通过这种方式，我们将额外操作的实现从子类中分离出来，降低了代码的耦合度，提高了代码的可维护性和可扩展性。