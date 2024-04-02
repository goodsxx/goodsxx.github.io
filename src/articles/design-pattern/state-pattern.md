---
title: 状态模式
date: 2022-06-01
category:
 - 设计模式
tag: 
 - 设计模式
 - 行为型模式
timeline: true
order: 13
---

::: tip ✨✨✨✨✨
状态模式（State Pattern）是一种行为型设计模式，它允许一个对象在内部状态改变时改变它的行为，使得对象看起来似乎修改了它的类。
:::

<!-- more -->

## 定义

状态模式（State Pattern）是一种行为型设计模式，它允许一个对象在内部状态改变时改变它的行为，使得对象看起来似乎修改了它的类。

## 适用场景

适用于有多个状态且状态转换比较复杂的对象，如游戏角色状态、工作流状态等。

## 优缺点

### 优点

- 状态模式将每个状态封装为一个类，避免了复杂的条件判断。
- 状态模式将状态转换显式化，方便了状态的管理和扩展。
- 状态模式符合开闭原则，增加新的状态不需要修改原有代码，只需要增加新的状态类。

### 缺点

- 状态模式会增加系统中类的数量，导致系统复杂度增加。
- 状态模式需要对状态进行分析和设计，不适用于简单状态的处理。

## 代码示例

```cs
// 状态接口
public interface IState
{
    void Handle(StateContext context);
}

// 具体状态类A
public class ConcreteStateA : IState
{
    public void Handle(StateContext context)
    {
        Console.WriteLine("当前状态为A，执行A状态的业务逻辑");
        // 切换状态
        context.State = new ConcreteStateB();
    }
}

// 具体状态类B
public class ConcreteStateB : IState
{
    public void Handle(StateContext context)
    {
        Console.WriteLine("当前状态为B，执行B状态的业务逻辑");
        // 切换状态
        context.State = new ConcreteStateC();
    }
}

// 具体状态类C
public class ConcreteStateC : IState
{
    public void Handle(StateContext context)
    {
        Console.WriteLine("当前状态为C，执行C状态的业务逻辑");
        // 切换状态
        context.State = new ConcreteStateA();
    }
}

// 状态上下文类
public class StateContext
{
    private IState state;

    public StateContext(IState state)
    {
        this.state = state;
    }

    public IState State
    {
        get { return state; }
        set { state = value; }
    }

    // 处理请求
    public void Request()
    {
        state.Handle(this);
    }
}

// 使用示例
class Program
{
    static void Main(string[] args)
    {
        StateContext context = new StateContext(new ConcreteStateA());
        for (int i = 0; i < 5; i++)
        {
            context.Request();
        }
    }
}
```
## 优化

在状态模式的实现中，我们使用了多个具体状态类来表示不同的状态，如果状态比较多，类的数量会增加很多，可以考虑使用状态模式和工厂方法模式结合，通过工厂方法创建具体状态类的实例，减少类的数量。

以下是结合工厂方法模式对状态模式的优化代码示例：

```cs
// 状态接口
public interface IState
{
    void Handle(StateContext context);
}

// 具体状态类A
public class ConcreteStateA : IState
{
    public void Handle(StateContext context)
    {
        Console.WriteLine("当前状态为A，执行A状态的业务逻辑");
        // 切换状态
        context.State = StateFactory.CreateState("B");
    }
}

// 具体状态类B
public class ConcreteStateB : IState
{
    public void Handle(StateContext context)
    {
        Console.WriteLine("当前状态为B，执行B状态的业务逻辑");
        // 切换状态
        context.State = StateFactory.CreateState("C");
    }
}

// 具体状态类C
public class ConcreteStateC : IState
{
    public void Handle(StateContext context)
    {
        Console.WriteLine("当前状态为C，执行C状态的业务逻辑");
        // 切换状态
        context.State = StateFactory.CreateState("A");
    }
}

// 状态工厂类
public static class StateFactory
{
    // 创建具体状态类的实例
    public static IState CreateState(string stateName)
    {
        switch (stateName)
        {
            case "A":
                return new ConcreteStateA();
            case "B":
                return new ConcreteStateB();
            case "C":
                return new ConcreteStateC();
            default:
                throw new ArgumentException("无效的状态名称");
        }
    }
}

// 状态上下文类
public class StateContext
{
    private IState state;

    public StateContext(IState state)
    {
        this.state = state;
    }

    public IState State
    {
        get { return state; }
        set { state = value; }
    }

    // 处理请求
    public void Request()
    {
        state.Handle(this);
    }
}

// 使用示例
class Program
{
    static void Main(string[] args)
    {
        StateContext context = new StateContext(StateFactory.CreateState("A"));
        for (int i = 0; i < 5; i++)
        {
            context.Request();
        }
    }
}
```
在这个优化后的代码示例中，我们使用工厂方法模式来创建具体状态类的实例，减少了类的数量，提高了代码的可维护性。同时，我们仍然保留了状态模式的核心思想，即将状态封装为一个独立的类，通过状态的转换改变对象的行为。