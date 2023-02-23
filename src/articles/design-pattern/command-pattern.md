---
title: 命令模式
date: 2022-05-15
category:
 - 设计模式
tag: 
 - 设计模式
 - 行为型模式
timeline: true
order: 7
---

::: tip ✨✨✨✨✨
命令模式(Command Pattern)是一种行为型设计模式，它允许将操作请求封装为一个对象，从而使你可以将请求的各个参数（命令）进行排队、记录日志、撤销等操作。通过将请求封装成对象，可以使用不同的请求来参数化其他对象。同时，可以将请求存储在队列中，实现任务的异步执行、延迟执行、撤销等功能。
:::

<!-- more -->

## 定义

命令模式(Command Pattern)是一种行为型设计模式，它允许将操作请求封装为一个对象，从而使你可以将请求的各个参数（命令）进行排队、记录日志、撤销等操作。通过将请求封装成对象，可以使用不同的请求来参数化其他对象。同时，可以将请求存储在队列中，实现任务的异步执行、延迟执行、撤销等功能。

## 使用场景

- 需要将操作请求发送给不同的接收器，且不知道接收器具体是谁。
- 需要实现撤销、恢复等功能。
- 需要将一组操作组合成一个复合操作，即宏命令。
- 需要将请求放入队列中，并进行异步处理或延迟处理。

## 优缺点

**优点：**

- 降低系统的耦合度。发送请求的对象与接收请求的对象之间没有直接的联系，使得系统中的相互依赖关系变得松散。
- 容易扩展新的命令。增加新的具体命令类很容易，无需修改原有代码，符合“开闭原则”。
- 可以实现宏命令，将一组命令装配成一个组合命令。

**缺点：**

- 如果有过多的具体命令类，将导致系统变得复杂。
- 命令模式的实现可能需要使用大量的代码来支持各种请求类型。

## 代码示例

以下是一个简单的用 C# 实现的命令模式案例。假设我们有一个文本编辑器，用户可以在文本编辑器中执行撤销、重做、剪切、复制、粘贴等操作。我们将每个操作抽象为一个接口 `ICommand`，并实现具体的命令类 `CutCommand`、`CopyCommand`、`PasteCommand`、`UndoCommand`、`RedoCommand`。在这个例子中，我们使用队列来存储命令对象，并按照先进先出的顺序执行它们。我们还可以使用栈来实现撤销、重做等功能。
```cs
// 命令接口
public interface ICommand
{
    void Execute();
}

// 剪切命令
public class CutCommand : ICommand
{
    private readonly Editor editor;

    public CutCommand(Editor editor)
    {
        this.editor = editor;
    }

    public void Execute()
    {
        editor.Cut();
    }
}

// 复制命令
public class CopyCommand : ICommand
{
    private readonly Editor editor;

    public CopyCommand(Editor editor)
    {
        this.editor = editor;
    }

    public void Execute()
    {
        editor.Copy();
    }
}

// 粘贴命令
public class PasteCommand : ICommand
{
    private readonly Editor editor;

    public PasteCommand(Editor editor)
    {
        this.editor = editor;
    }

    public void Execute()
    {
        editor.Paste();
    }
}

// 撤销命令
public class UndoCommand : ICommand
{
    private readonly Editor editor;

    public UndoCommand(Editor editor)
    {
        this.editor = editor;
    }

    public void Execute()
    {
        editor.Undo();
    }
}

// 重做命令
public class RedoCommand : ICommand
{
    private readonly Editor editor;

    public RedoCommand(Editor editor)
    {
        this.editor = editor;
    }

    public void Execute()
    {
        editor.Redo();
    }
}

// 文本编辑器
public class Editor
{
    private readonly Stack<string> undoStack = new Stack<string>();
    private readonly Stack<string> redoStack = new Stack<string>();
    private string clipboard = string.Empty;
    private string text = string.Empty;

    // 剪切
    public void Cut()
    {
        if (string.IsNullOrEmpty(text)) return;

        clipboard = text;
        text = string.Empty;

        undoStack.Push(clipboard);
    }

    // 复制
    public void Copy()
    {
        if (string.IsNullOrEmpty(text)) return;

        clipboard = text;
    }

    // 粘贴
    public void Paste()
    {
        text += clipboard;

        undoStack.Push(clipboard);
    }

    // 撤销
    public void Undo()
    {
        if (undoStack.Count == 0) return;

        redoStack.Push(text);
        text = undoStack.Pop();
    }

    // 重做
    public void Redo()
    {
        if (redoStack.Count == 0) return;

        undoStack.Push(text);
        text = redoStack.Pop();
    }

    // 显示文本
    public void DisplayText()
    {
        Console.WriteLine("Text: " + text);
    }
}

// 命令队列
public class CommandQueue
{
    private readonly Queue<ICommand> queue = new Queue<ICommand>();

    // 添加命令
    public void AddCommand(ICommand command)
    {
        queue.Enqueue(command);
    }

    // 执行命令队列
    public void ExecuteCommands()
    {
        while (queue.Count > 0)
        {
            ICommand command = queue.Dequeue();
            command.Execute();
        }
    }
}

// 客户端代码
public class Client
{
    public static void Main()
    {
        Editor editor = new Editor();
        CommandQueue commandQueue = new CommandQueue();

        commandQueue.AddCommand(new CutCommand(editor));
        commandQueue.AddCommand(new PasteCommand(editor));
        commandQueue.AddCommand(new UndoCommand
        commandQueue.AddCommand(new RedoCommand(editor));
        commandQueue.AddCommand(new CopyCommand(editor));
        commandQueue.ExecuteCommands();

        editor.DisplayText();
    }
}
```


在这个案例中，我们使用了 `ICommand` 接口来表示每个操作，每个具体的命令类都实现了该接口，并通过构造函数注入了一个 `Editor` 对象，以便在执行时对文本进行操作。

`Editor` 类实现了剪切、复制、粘贴、撤销和重做操作，它使用两个栈来实现撤销和重做功能，并将文本和剪贴板的状态存储在类的私有字段中。在执行每个操作时，`Editor` 将其状态记录到 `undoStack` 中，以便后续撤销操作时可以还原状态。

`CommandQueue` 类表示命令队列，它通过一个队列来存储 `ICommand` 对象，并提供了 `AddCommand` 和 `ExecuteCommands` 方法来添加和执行命令。在客户端代码中，我们创建了一个 `Editor` 和一个 `CommandQueue`，向命令队列中添加了一些操作，并最终执行命令队列，以便依次执行每个操作。

这个案例中使用了队列来存储命令对象，并按照先进先出的顺序执行它们。如果需要实现撤销、重做等功能，可以使用栈来存储命令对象，并按照后进先出的顺序执行它们。此外，还可以使用备忘录模式来记录文本编辑器的状态，并在撤销、重做等操作中使用。
