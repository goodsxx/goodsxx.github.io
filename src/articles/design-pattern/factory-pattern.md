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

**包括**
- 可以隐藏对象创建的复杂度，让客户端代码只需要关心使用对象，而不需要关心如何创建对象。
- 可以提高代码的可扩展性和可维护性，当需要添加新的对象时，只需要添加相应的工厂类和产品类即可，不需要修改客户端代码。
- 可以将对象的创建和使用分离，让客户端代码更加松耦合。

**缺点**
-当工厂类的数量较多时，会增加代码的复杂度，不利于维护和测试。
-当需要创建的对象数量很少时，使用工厂模式可能会导致代码冗余。

## 代码示例

以下是一个简单的工厂模式的代码示例，用于创建不同类型的汽车：

```cs
// 抽象产品类
abstract class Car
{
    public abstract void Drive();
}

// 具体产品类
class Audi : Car
{
    public override void Drive()
    {
        Console.WriteLine("Driving Audi");
    }
}

// 具体产品类
class BMW : Car
{
    public override void Drive()
    {
        Console.WriteLine("Driving BMW");
    }
}

// 工厂类
class CarFactory
{
    public Car CreateCar(string type)
    {
        switch (type)
        {
            case "Audi":
                return new Audi();
            case "BMW":
                return new BMW();
            default:
                throw new ArgumentException($"Unknown car type: {type}");
        }
    }
}

// 客户端代码
class Program
{
    static void Main(string[] args)
    {
        CarFactory factory = new CarFactory();

        Car car1 = factory.CreateCar("Audi");
        car1.Drive();

        Car car2 = factory.CreateCar("BMW");
        car2.Drive();
    }
}
```

在上面的代码示例中，Car 是抽象产品类，Audi 和 BMW 是具体产品类。CarFactory 是工厂类，它根据指定的类型来创建不同类型的汽车。在 Main() 方法中，我们创建了一个 CarFactory 对象，并使用它来创建了两个不同类型的汽车，并调用了它们的Drive() 方法。

## 优化

在上面的示例中，每次创建汽车对象时，都需要通过 switch 语句来判断要创建的汽车类型。如果有很多汽车类型，那么这个 switch 语句会变得非常庞大。为了避免这种情况，我们可以使用反射来创建对象，这样就可以避免使用 switch 语句。以下是一个使用反射的代码示例：

```cs
// 工厂类
class CarFactory
{
    public Car CreateCar(string type)
    {
        Type carType = Type.GetType($"FactoryPattern.{type}");
        if (carType == null)
        {
            throw new ArgumentException($"Unknown car type: {type}");
        }

        return (Car)Activator.CreateInstance(carType);
    }
}
```
在上面的示例中，我们使用了 Type.GetType() 方法来获取类型，并使用 Activator.CreateInstance() 方法来创建对象。这样就可以避免使用 switch 语句，并且可以动态地创建对象。但是，这种方法也有缺点，即创建对象的性能可能会比较低。因此，在实际应用中需要权衡利弊，选择最合适的方法。