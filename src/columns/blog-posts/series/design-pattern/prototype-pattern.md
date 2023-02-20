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
原型模式是一种创建型设计模式，它允许通过克隆现有对象来创建新对象，而无需显式实例化类。
:::

<!-- more -->

实现原型模式需要实现一个可以克隆自身的方法。在 C# 中，可以使用 ICloneable 接口来实现克隆。

以下是一个简单的示例，其中实现了一个 Person 类，它实现了 ICloneable 接口：

```cs
using System;

public class Person : ICloneable
{
    public string Name { get; set; }
    public int Age { get; set; }

    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }

    public object Clone()
    {
        return new Person(Name, Age);
    }
}
```
在这个示例中，Person 类实现了 ICloneable 接口，并覆盖了 Clone 方法。在 Clone 方法中，使用当前对象的属性值创建了一个新的 Person 对象，并返回它。

现在，我们可以使用原型模式来克隆一个 Person 对象，而无需显式实例化类：

```cs
Person person1 = new Person("Alice", 25);
Person person2 = (Person)person1.Clone();

Console.WriteLine(person1.Name); // Output: Alice
Console.WriteLine(person2.Name); // Output: Alice

person2.Name = "Bob";
Console.WriteLine(person1.Name); // Output: Alice
Console.WriteLine(person2.Name); // Output: Bob
```
在这个示例中，我们创建了一个 person1 对象，然后使用克隆方法创建了一个 person2 对象。我们修改了 person2 对象的名称，但是 person1 对象的名称保持不变。

需要注意的是，ICloneable 接口并不是一个类型安全的接口，因此需要小心使用它。此外，在实现 ICloneable 接口时，需要确保克隆方法返回的是新对象，而不是原始对象的引用。

如果需要深拷贝对象，即拷贝对象的所有引用类型属性，而不仅仅是属性的值，需要进行更复杂的实现。

另一个示例：

```cs
using System;

public class Person : ICloneable
{
    public string Name { get; set; }
    public int Age { get; set; }
    public Address Address { get; set; }

    public object Clone()
    {
        return this.MemberwiseClone();
    }
}

public class Address
{
    public string Street { get; set; }
    public string City { get; set; }
    public string State { get; set; }
}

class Program
{
    static void Main(string[] args)
    {
        var person1 = new Person
        {
            Name = "John",
            Age = 30,
            Address = new Address
            {
                Street = "123 Main St",
                City = "Anytown",
                State = "USA"
            }
        };

        // Use the Clone method to create a new person object that is a copy of person1.
        var person2 = (Person)person1.Clone();

        // Modify the cloned object's name and address to demonstrate that it is a separate instance.
        person2.Name = "Jane";
        person2.Address.Street = "456 Elm St";

        Console.WriteLine($"Person1: {person1.Name} {person1.Age} {person1.Address.Street} {person1.Address.City} {person1.Address.State}");
        Console.WriteLine($"Person2: {person2.Name} {person2.Age} {person2.Address.Street} {person2.Address.City} {person2.Address.State}");
    }
}
```
在这个示例中，我们定义了一个 Person 类和一个 Address 类。Person 类实现了 ICloneable 接口，并重写了 Clone 方法，以便可以创建一个 Person 对象的副本。我们创建了一个 person1 对象，并将其属性设置为特定的值。然后，我们使用 person1 对象的 Clone 方法创建了一个 person2 对象，并将其属性设置为 person1 对象的属性的副本。最后，我们修改了 person2 对象的 Name 和 Address.Street 属性，以证明 person2 对象是一个独立的实例。输出结果表明，person1 和 person2 对象是独立的实例。