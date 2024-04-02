---
title: 迭代器模式
date: 2022-05-10
category:
 - 设计模式
tag: 
 - 设计模式
 - 行为型模式
timeline: true
order: 6
---

::: tip ✨✨✨✨✨
迭代器模式（Iterator Pattern）是一种行为型设计模式，它允许你顺序访问一个聚合对象中的各个元素，而不暴露该对象的内部表示。
:::

<!-- more -->

## 定义
迭代器模式（Iterator Pattern）是一种行为型设计模式，它允许你顺序访问一个聚合对象中的各个元素，而不暴露该对象的内部表示。

## 使用场景
迭代器模式通常用于以下情况：

- 需要遍历一个聚合对象，但是又不想暴露该对象的内部结构。
- 需要在遍历时提供多种不同的方式，比如前向遍历、后向遍历等。
- 需要提供一个统一的接口来遍历不同类型的聚合对象。

## 优缺点
**优点：**

- 提供了一种访问聚合对象的方法，且不暴露内部结构。
- 支持多种遍历方式。
- 迭代器可以独立于聚合对象进行变化。

**缺点：**

- 对于简单的聚合对象，使用迭代器模式可能会增加代码的复杂度。
- 如果使用不当，可能会导致性能下降。

## 代码示例
下面是一个简单的C#代码示例，它演示了如何使用迭代器模式来遍历一个聚合对象中的元素。

```cs
using System;
using System.Collections;

// 列表类
// 我们首先定义了一个列表类 MyList，它包含一个数组 items 和一个计数器 count。
public class MyList<T> : IEnumerable
{
    private T[] items;
    private int count;

    public MyList(int capacity)
    {
        items = new T[capacity];
    }

    public void Add(T item)
    {
        items[count++] = item;
    }

    // 我们实现了 IEnumerable 接口中的 GetEnumerator 方法，该方法返回一个 MyListEnumerator 对象。MyListEnumerator 类表示列表的迭代器，它实现了 IEnumerator 接口。
    public IEnumerator GetEnumerator()
    {
        return new MyListEnumerator<T>(items, count);
    }
}

// 列表迭代器类
// MyListEnumerator 类包含一个指向数组中当前元素的指针 position，以及一个数组 items 和一个计数器 count。
public class MyListEnumerator<T> : IEnumerator
{
    private T[] items;
    private int count;
    private int position = -1;

    public MyListEnumerator(T[] items, int count)
    {
        this.items = items;
        this.count = count;
    }

    // MyListEnumerator 类实现了 IEnumerator 接口中的 MoveNext 方法、Reset 方法和 Current 属性。在 MoveNext 方法中，我们将指针 position 向前移动，并返回 true，直到遍历完所有元素。在 Current 属性中，我们返回指针位置对应的元素。

    public bool MoveNext()
    {
        position++;
        return (position < count);
    }

    public void Reset()
    {
        position = -1;
    }

    public object Current
    {
        get
        {
            if (position == -1 || position == count)
                throw new InvalidOperationException();
            return items[position];
        }
    }
}

// 测试
// 最后，在 Main 方法中，我们创建了一个 MyList 对象，向其中添加了几个元素，然后使用 foreach 循环遍历了该列表。
class Program
{
    static void Main(string[] args)
    {
        MyList<int> list = new MyList<int>(3);
        list.Add(1);
        list.Add(2);
        list.Add(3);

        // 使用 foreach 遍历
        // 在 foreach 循环中，编译器会自动调用 MyList 对象的 GetEnumerator 方法，然后使用 MyListEnumerator 对象来遍历该列表。每次循环迭代，编译器会调用 MyListEnumerator 对象的 MoveNext 方法和 Current 属性，然后输出当前元素的值。
        foreach (int item in list)
        {
            Console.WriteLine(item);
        }
    }
}
```
