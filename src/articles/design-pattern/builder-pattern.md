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
建造者模式是一种创建型设计模式，它允许你将一个复杂对象的构建过程与其表示相分离，使得同样的构建过程可以创建不同的表示。建造者模式通常包含一个指挥者（Director）、抽象建造者（Builder）、具体建造者（ConcreteBuilder）和产品（Product）四个角色。
:::

<!-- more -->

## 定义

建造者模式是一种创建型设计模式，它允许你将一个复杂对象的构建过程与其表示相分离，使得同样的构建过程可以创建不同的表示。建造者模式通常包含一个指挥者（Director）、抽象建造者（Builder）、具体建造者（ConcreteBuilder）和产品（Product）四个角色。

## 使用场景

当一个产品有复杂的内部结构，其创建过程比较复杂且需要多个步骤时，可以考虑使用建造者模式。此外，建造者模式还适用于以下场景：

如果需要对不同的表示进行创建，可以使用建造者模式。例如，需要使用不同的材料或风格创建房屋。
如果需要在不知道产品内部构造的情况下直接创建复杂对象，可以使用建造者模式。例如，从数据库中读取数据并构建对象。
如果需要更好地控制产品创建流程，可以使用建造者模式。例如，需要按照特定的顺序构建对象。

## 优缺点
**优点**
- 可以隔离复杂对象的创建和使用，使得相同的创建过程可以创建不同的产品表示。
- 可以更加精细地控制产品的创建过程，使得创建过程能够适应不同的需求。
- 可以更加方便地增加或修改产品的部件，使得系统更加灵活。

**缺点**
- 建造者模式需要定义多个类，增加了代码量。
- 建造者模式的使用范围受限，仅适用于相对复杂的产品创建过程。

## 代码示例
以下是建造者模式的 C# 代码示例。我们将创建一个包含多个部件的电脑，其中部件包括 CPU、主板、内存和硬盘等。具体建造者将实现创建不同种类的电脑。产品是由不同的部件组成的电脑。指挥者负责控制创建电脑的流程，具体建造者负责创建电脑的各个部件。
```cs
// 产品类，包含多个部件
public class Computer
{
    private List<string> parts = new List<string>();

    public void AddPart(string part)
    {
        parts.Add(part);
    }

    public string GetParts()
    {
        return string.Join(", ", parts);
    }
}

// 抽象建造者，定义创建各个部件的抽象方法
public abstract class ComputerBuilder
{
    protected Computer computer = new Computer();

    public abstract void BuildCpu();
    public abstract void BuildMotherboard();
    public abstract void BuildMemory();
    public abstract void BuildHardDrive();

    public Computer GetComputer()
    {
        return computer;
    }
}

// 具体建造者，实现创建各个部件的方法
public class DesktopBuilder : ComputerBuilder
{
    public override void BuildCpu()
    {
        computer.AddPart("Desktop CPU");
    }

    public override void BuildMotherboard()
    {
        computer.AddPart("Desktop Motherboard");
    }

    public override void BuildMemory()
    {
        computer.AddPart("Desktop Memory");
    }

    public override void BuildHardDrive()
    {
        computer.AddPart("Desktop Hard Drive");
    }
}

public class LaptopBuilder : ComputerBuilder
{
    public override void BuildCpu()
    {
        computer.AddPart("Laptop CPU");
    }

    public override void BuildMotherboard()
    {
        computer.AddPart("Laptop Motherboard");
    }

    public override void BuildMemory()
    {
        computer.AddPart("Laptop Memory");
    }

    public override void BuildHardDrive()
    {
        computer.AddPart("Laptop Hard Drive");
    }
}

// 指挥者，控制创建电脑的流程
public class ComputerDirector
{
    private ComputerBuilder computerBuilder;

    public ComputerDirector(ComputerBuilder computerBuilder)
    {
        this.computerBuilder = computerBuilder;
    }

    public void ConstructComputer()
    {
        computerBuilder.BuildCpu();
        computerBuilder.BuildMotherboard();
        computerBuilder.BuildMemory();
        computerBuilder.BuildHardDrive();
    }
}
```

下面是使用建造者模式创建电脑的代码示例：
```cs
// 创建一个具体的建造者，例如 DesktopBuilder 或 LaptopBuilder
ComputerBuilder computerBuilder = new DesktopBuilder();

// 创建指挥者并将具体的建造者传递给它
ComputerDirector computerDirector = new ComputerDirector(computerBuilder);

// 控制创建电脑的流程
computerDirector.ConstructComputer();

// 从具体的建造者中获取创建的电脑产品
Computer computer = computerBuilder.GetComputer();

// 输出电脑的各个部件
Console.WriteLine("Computer parts: " + computer.GetParts());
```
上述代码输出的结果为：
```shell
Computer parts: Desktop CPU, Desktop Motherboard, Desktop Memory, Desktop Hard Drive
```

可以使用链式调用（Fluent Interface）的方式优化上述代码，让代码更加简洁易读。

具体实现方法是，在每个 Builder 类的方法中返回 this，这样就可以进行链式调用了。下面是使用链式调用优化后的代码示例：
```cs
// 产品类
class Computer
{
    public string Cpu { get; set; }
    public string Motherboard { get; set; }
    public string Memory { get; set; }
    public string HardDisk { get; set; }
}

// 抽象建造者类
abstract class ComputerBuilder
{
    protected Computer computer = new Computer();

    public abstract ComputerBuilder BuildCpu(string cpu);
    public abstract ComputerBuilder BuildMotherboard(string motherboard);
    public abstract ComputerBuilder BuildMemory(string memory);
    public abstract ComputerBuilder BuildHardDisk(string hardDisk);

    public Computer GetComputer()
    {
        return computer;
    }
}

// 具体建造者类1
class ConcreteBuilder1 : ComputerBuilder
{
    public override ComputerBuilder BuildCpu(string cpu)
    {
        computer.Cpu = cpu;
        return this;
    }

    public override ComputerBuilder BuildMotherboard(string motherboard)
    {
        computer.Motherboard = motherboard;
        return this;
    }

    public override ComputerBuilder BuildMemory(string memory)
    {
        computer.Memory = memory;
        return this;
    }

    public override ComputerBuilder BuildHardDisk(string hardDisk)
    {
        computer.HardDisk = hardDisk;
        return this;
    }
}

// 具体建造者类2
class ConcreteBuilder2 : ComputerBuilder
{
    public override ComputerBuilder BuildCpu(string cpu)
    {
        computer.Cpu = cpu;
        return this;
    }

    public override ComputerBuilder BuildMotherboard(string motherboard)
    {
        computer.Motherboard = motherboard;
        return this;
    }

    public override ComputerBuilder BuildMemory(string memory)
    {
        computer.Memory = memory;
        return this;
    }

    public override ComputerBuilder BuildHardDisk(string hardDisk)
    {
        computer.HardDisk = hardDisk;
        return this;
    }
}

// 指挥者类
class Director
{
    public void Construct(ComputerBuilder builder, string cpu, string motherboard, string memory, string hardDisk)
    {
        builder.BuildCpu(cpu)
            .BuildMotherboard(motherboard)
            .BuildMemory(memory)
            .BuildHardDisk(hardDisk);
    }
}
```
上述代码中，每个具体建造者的方法都返回 this，这样就可以在使用时进行链式调用，可以看到，代码更加简洁易读，同时也可以避免漏掉某个步骤，提高了代码的健壮性。