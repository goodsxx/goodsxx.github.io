---
title: 备忘录模式
date: 2022-06-01
category:
 - 设计模式
tag: 
 - 设计模式
 - 行为型模式
timeline: true
order: 12
---

::: tip ✨✨✨✨✨
备忘录模式是一种行为型设计模式，它允许在不破坏封装性的前提下捕获对象的内部状态并在对象之外保存这个状态。这样，以后就可以将该对象恢复到先前的状态。
:::

<!-- more -->

## 定义

备忘录模式是一种行为型设计模式，它允许在不破坏封装性的前提下捕获对象的内部状态并在对象之外保存这个状态。这样，以后就可以将该对象恢复到先前的状态。

## 使用场景

备忘录模式通常在以下情况下使用：

- 当需要保存和恢复对象状态的历史记录时。
- 当直接访问对象的成员变量、获取器或设置器会暴露对象的实现细节时。
- 当需要通过某些机制来禁止客户端直接访问对象状态，以保持封装性时。

## 优缺点

**备忘录模式的优点包括：**

- 可以在不破坏对象封装的前提下保存和恢复对象状态。
- 可以实现撤销和重做操作，使用户可以在操作中进行任意次数的撤销和重做。

**备忘录模式的缺点包括：**

- 可能会占用大量内存，特别是在需要保存大量历史状态时。
- 可能会影响对象的性能，特别是在需要频繁保存和恢复状态时。

## 代码示例

下面是一个使用备忘录模式的示例，假设我们有一个文本编辑器，我们想要保存文本编辑器的状态以便以后可以恢复它。在这个示例中，我们创建了一个 `Memento` 类来保存文本编辑器的状态，以及一个 `Caretaker` 类来保存 `Memento` 对象的历史记录。

```cs
using System;

// Memento类保存文本编辑器的状态
class Memento
{
    public string Text { get; private set; }

    public Memento(string text)
    {
        Text = text;
    }
}

// Originator类表示文本编辑器
class Editor
{
    private string text = "";

    public void Type(string text)
    {
        this.text += text;
    }

    public Memento Save()
    {
        return new Memento(text);
    }

    public void Restore(Memento memento)
    {
        text = memento.Text;
    }

    public override string ToString()
    {
        return text;
    }
}

// Caretaker类保存Memento对象的历史记录
class History
{
    private readonly Editor editor;
    private readonly Stack<Memento> mementos = new Stack<Memento>();

    public History(Editor editor)
    {
        this.editor = editor;
    }

    public void Backup()
    {
        mementos.Push(editor.Save());
    }

    public void Undo()
    {
        if (mementos.Count == 0) return;

        var memento = mementos.Pop();
        editor.Restore(memento);
    }
}

// 示例
var editor = new Editor();
var history = new History(editor);

editor.Type("Hello");
history.Backup();

editor.Type(" World");
history.Backup();

Console.WriteLine(editor); // 输出 "Hello World"

history.Undo();
Console.WriteLine(editor); // 输出
```

在上面的代码示例中，我们创建了三个类：`Memento` 类、`Editor` 类和 `History` 类。`Editor` 类表示文本编辑器，它有一个成员变量 `text`，表示文本编辑器中当前的文本内容，以及 `Type()` 方法用于在文本编辑器中输入文本。`Editor` 类还有两个方法：`Save()` 和 `Restore()`。`Save()` 方法创建一个新的 `Memento` 对象并将当前文本内容保存在其中。`Restore()` 方法接受一个 `Memento` 对象，并将文本编辑器的状态恢复为该 `Memento` 对象中保存的状态。

`Memento` 类有一个成员变量 `Text`，表示保存的文本内容。构造函数接受一个字符串参数，该参数是文本编辑器的当前文本内容。

`History` 类用于保存 `Memento` 对象的历史记录。它有一个成员变量 `editor`，表示被保存的文本编辑器对象。`History` 类还有两个方法：`Backup()` 和 `Undo()`。`Backup()` 方法创建一个新的 `Memento` 对象并将其保存在历史记录中。`Undo()` 方法从历史记录中弹出最近保存的 `Memento` 对象，并将其传递给文本编辑器的 `Restore()` 方法来恢复编辑器的状态。

在示例中，我们创建了一个文本编辑器和一个历史记录对象。我们使用 `editor.Type()` 方法输入了两个文本字符串，并使用 `history.Backup()` 方法将它们的状态保存在历史记录中。最后，我们调用 `editor.ToString()` 方法以获取文本编辑器的当前状态，并输出它。在此之后，我们调用 `history.Undo()` 方法撤销最后一次输入，再次调用 `editor.ToString()` 方法以获取当前状态，并输出它。

这个示例演示了备忘录模式的基本概念。在实际应用中，备忘录模式可以用于保存对象状态的历史记录，实现撤销和重做操作，以及防止客户端直接访问对象状态，保持封装性。