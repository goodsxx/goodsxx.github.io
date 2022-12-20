---
title: 单例模式
date: 2022-05-06
category:
 - 设计模式
 - 创建型模式
tag: 
 - 设计模式
timeline: true
order: 1
---
::: tip ✨✨✨✨✨
单例模式（Singleton Pattern）是最简单的设计模式之一。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。
这种模式涉及到一个单一的类，该类负责创建自己的对象，同时确保只有单个对象被创建。这个类提供了一种访问其唯一的对象的方式，可以直接访问，不需要实例化该类的对象。
:::

<!-- more -->

## 定义

确保某一个类只有一个实例，而且自行实例化并向整个系统提供这个实例。

## 类图

![1652682984639.png](./image/singleton-pattern/1652682984639.png)

## 应用场景

避免产生多个对象消耗过多的资源（特别是一个对象需要频繁的创建和销毁时）；
提供一个全局访问点，常常被用来管理系统中共享的资源(作为一个Manager)。

## 实现

### 1. 静态变量初始化(饿汉模式)

仅适用于单线程应用程序

```cs
namespace SingletonPattern
{
    /// <summary>
    /// 单例模式实现方式一：
    /// 静态变量初始化
    /// </summary>
    public class Singleton1
    {
        /// <summary>
        /// 定义为静态变量，由所有对象共享
        /// </summary>
        private static Singleton1 instance = new Singleton1();

        /// <summary>
        /// 构造函数私有化，禁止外部类实例化该类对象
        /// </summary>
        private Singleton1()
        {
            Console.WriteLine("Singleton1 被实例化");
        }

        public static Singleton1 GetInstance()
        {
            return instance;
        }
    }
}
```

### 2. 延迟初始化(懒汉模式)

```cs
namespace SingletonPattern
{
    /// <summary>
    /// 单例模式实现方式二：
    /// 延迟初始化
    /// </summary>
    public class Singleton2
    {
        /// <summary>
        /// 定义为静态变量，由所有对象共享
        /// </summary>
        private static Singleton2 _instance;

        /// <summary>
        /// 构造函数私有化，禁止外部类实例化该类对象
        /// </summary>
        private Singleton2()
        {
            Console.WriteLine("Singleton2 被实例化");
        }

        public static Singleton2 GetInstance()
        {
            return _instance ??= new Singleton2();
        }
    }
}
```

### 3. 锁机制(推荐)

```cs
namespace SingletonPattern
{
    /// <summary>
    /// 单例模式实现方式三：
    /// 锁机制，确保多线程只产生一个实例
    /// </summary>
    public class Singleton3
    {
        private static Singleton3 _instance;

        private static readonly object Locker = new object();

        private Singleton3() 
        {
            Console.WriteLine("Singleton3 被实例化");
        }

        public static Singleton3 GetInstance()
        {
            //没有第一重 instance == null 的话，每一次有线程进入 GetInstance()时，均会执行锁定操作来实现线程同步，
            //非常耗费性能 增加第一重instance ==null 成立时的情况下执行一次锁定以实现线程同步
            if (_instance == null)
            {
                lock (Locker)
                {
                    //Double-Check Locking 双重检查锁定
                    if (_instance == null)
                    {
                        _instance = new Singleton3();
                    }
                }
            }
            return _instance;
        }
    }
}
```

### 4. 泛型单例模式

```cs
namespace SingletonPattern
{
    /// <summary>
    /// 单例模式实现方式四：
    /// 泛型单例模式的实现
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class Singleton4<T> where T : class
    {
        private static T instance;

        private static readonly object Locker = new object();

        public static T GetInstance()
        {
            //没有第一重 instance == null 的话，每一次有线程进入 GetInstance()时，均会执行锁定操作来实现线程同步，
            //非常耗费性能 增加第一重instance ==null 成立时的情况下执行一次锁定以实现线程同步
            if (instance == null)
            {
                //Double-Check Locking 双重检查锁定
                lock (Locker)
                {
                    if (instance == null)
                    {
                        //instance = new T();
                        //需要非公共的无参构造函数，不能使用new T() ,new不支持非公共的无参构造函数 
                        instance = (T)Activator.CreateInstance(typeof(T), true);//第二个参数防止异常：“没有为该对象定义无参数的构造函数。”
                    }
                }
            }
            return instance;
        }
    }
}
```

### 5. 调用

```cs
//调用
using SingletonPattern;

Singleton1.GetInstance();
Singleton1.GetInstance();

Singleton2.GetInstance();
Singleton2.GetInstance();

Singleton3.GetInstance();
Singleton3.GetInstance();

Singleton4<Car>.GetInstance();
Singleton4<Car>.GetInstance();

Console.ReadLine();

```

### 6. 输出

```cs
//输出
Singleton1 被实例化
Singleton2 被实例化
Singleton3 被实例化
Car is Run...
```
