---
title: 通过反射调用类中的方法
date: 2022-01-07
category:
 - 后端
tag: 
 - .NET
 - C#
---
::: tip ✨✨✨✨✨
在C#中利用反射调用类中的方法
:::
<!--more-->

## 创建测试类

::: tabs
@tab A实现类
```cs
namespace TestDemo;

public class AShiXian
{
    public Task<string> TestA()
    {
        return Task.FromResult("这是A实现类的方法A");
    }
    public Task<string> TestB(string a, string b)
    {
        return Task.FromResult($"这是A实现类的方法B+参数a:{a},参数b:{b}");
    }
}
```

@tab B实现类
```cs
namespace TestDemo;

public class BShiXian
{
    public Task<string> TestA()
    {
        return Task.FromResult("这是B实现类的方法A");
    }
    public Task<string> TestB(string a, string b)
    {
        return Task.FromResult($"这是B实现类的方法B+参数a:{a},参数b:{b}");
    }
}
```
:::

## 利用反射调用类中的方法

```cs
using System.Reflection;

namespace TestDemo;

public class TestService
{
    private Type _type;
    private MethodInfo? testA;
    private MethodInfo? testB;

    public async Task Test<T>(T t)
    {
        _type = t.GetType();
        MethodInfo[] methods = _type.GetMethods();
        testA = methods.FirstOrDefault(x => x.Name.Equals("TestA", StringComparison.Ordinal));
        testB = methods.FirstOrDefault(x => x.Name.Equals("TestB", StringComparison.Ordinal));

        Task taskA = testA?.Invoke(t, null) as Task;
        await taskA;
        object a = taskA.GetType().GetProperty("Result").GetValue(taskA, null);
        Console.WriteLine(a.ToString());

        Task taskB = testB?.Invoke(t, new object[] { "111", "222" }) as Task;
        await taskB;
        object b = taskB.GetType().GetProperty("Result").GetValue(taskB, null);
        Console.WriteLine(b.ToString());
    }
}
```

## 实例化实现类并调用方法

::: tabs
@tab A服务
```cs
namespace TestDemo;

public class TestA
{
    public async Task Test()
    {
        AShiXian aShiXian = new();
        TestService testService = new();

        await testService.Test(aShiXian);
    }
}
```

@tab B服务
```cs
namespace TestDemo;

public class TestB
{
    private readonly TestService testService;
    public TestB()
    {
        testService = new TestService();
    }
    public async Task Test()
    {
        BShiXian bShiXian = new();
        await testService.Test(bShiXian);
    }
}
```
:::

## 打印结果

```cs
using TestDemo;

TestA testA = new();
await testA.Test();

TestB testB = new();
await testB.Test();

Console.ReadLine();
```

```shell
这是A实现类的方法A
这是A实现类的方法B+参数a:111,参数b:222
这是B实现类的方法A
这是B实现类的方法B+参数a:111,参数b:222
```