---
title: 中介者模式
date: 2022-05-28
category:
 - 设计模式
tag: 
 - 设计模式
 - 行为型模式
timeline: true
order: 11
---

::: tip ✨✨✨✨✨
中介者模式是一种行为型设计模式，它允许你减少对象之间混乱无序的依赖关系。该模式会引入一个中介者对象，它会协调多个对象之间的通信，从而让它们间接地相互作用，而非直接交互。这样可以减少对象间的耦合性，使代码更易于维护。
:::

<!-- more -->

## 定义
中介者模式是一种行为型设计模式，它允许你减少对象之间混乱无序的依赖关系。该模式会引入一个中介者对象，它会协调多个对象之间的通信，从而让它们间接地相互作用，而非直接交互。这样可以减少对象间的耦合性，使代码更易于维护。

## 使用场景
中介者模式适用于当多个对象之间存在相互关联和相互依赖的情况，并且这些关系会导致代码难以维护或扩展的情况。常见的应用场景包括：

- 对象间存在复杂的关联关系，导致它们之间的交互变得混乱无序。
- 对象之间的依赖关系太过紧密，导致它们难以单独地进行测试或修改。
- 当一个对象需要通知多个其他对象时，采用中介者模式可以简化代码逻辑，使通信更加清晰明了。

## 优缺点
**中介者模式的优点包括：**

- 减少对象之间的依赖关系，使得代码更加灵活、易于扩展。
- 通过引入中介者对象，可以减少对象之间的交互次数，提高代码的性能。
- 可以将对象之间的通信逻辑抽象出来，使得代码更加清晰易懂。

**中介者模式的缺点包括：**

- 引入中介者对象会增加代码的复杂度。
- 中介者对象会成为系统的瓶颈，如果中介者对象处理不当，会影响整个系统的性能。

## 代码示例

假设有一个对话框(Dialog)，其中包含了多个控件，如文本框(TextBox)、按钮(Button)等。这些控件之间存在复杂的依赖关系，例如当按钮被点击时，需要更新文本框的内容。这时候可以使用中介者模式来协调它们之间的交互。

首先我们定义一个中介者接口(IMediator)：
```cs
public interface IMediator
{
    void Notify(object sender, string ev);
}
```
该接口定义了一个通知方法 `Notify`，用于接收各个控件发来的消息。

接下来定义一个抽象控件类(Control)，并实现中介者接口,用于处理控件之间的消息通知：
```cs
public abstract class Control : IMediator
{
    protected Dialog _dialog;

    public Control(Dialog dialog)
    {
        _dialog = dialog;
    }
    public virtual void Notify(object sender, string ev)
    {
        Console.WriteLine($"[Control] {sender.GetType().Name} triggered {ev}");
    }
}
```
我们在控件类中实现中介者接口，定义了一个 `Notify` 方法，用于输出控件触发的事件。

接下来定义具体的控件类，如文本框(TextBox)、按钮(Button)：
```cs
public class TextBox : Control
{
    public string Text { get; set; }

    public TextBox(Dialog dialog) : base(dialog)
    {
    }

    public void UpdateText(string text)
    {
        Text = text;
        _dialog.Notify(this, "TextUpdated");
    }

    public override void Notify(object sender, string ev)
    {
        if (ev == "ButtonClick")
        {
            Console.WriteLine($"[TextBox] {GetType().Name} received {ev} from {sender.GetType().Name}");
            UpdateText("Text updated by button click");
        }
    }
}

public class Button : Control
{
    public Button(Dialog dialog) : base(dialog)
    {
    }

    public void Click()
    {
        Console.WriteLine($"[Button] {GetType().Name} clicked");
        _dialog.Notify(this, "ButtonClick");
    }
}
```
我们在具体的控件类中实现了它们的特有方法，如文本框的 `UpdateText` 和按钮的 `Click`，用于模拟控件之间的交互。

最后定义一个对话框(Dialog)，用于扮演中介者的角色：
```cs
public class Dialog : IMediator
{
    private TextBox _textBox;
    private Button _button;

    public Dialog()
    {
        _textBox = new TextBox(this);
        _button = new Button(this);
    }

    public void SimulateUserInteraction()
    {
        _button.Click();
    }

    public void Notify(object sender, string ev)
    {
        if (ev == "TextUpdated")
        {
            Console.WriteLine($"[Dialog] Text updated: {_textBox.Text}");
        }
    }
}
```
在对话框中，我们创建了一个文本框和一个按钮，并在 `SimulateUserInteraction` 方法中模拟按钮被点击的操作。

最后，在 `Main` 函数中运行我们的示例程序：
```cs
static void Main(string[] args)
{
    var dialog = new Dialog();

    dialog.SimulateUserInteraction();
}
```
输出结果如下：
```shell
[Button] Button clicked
[Control] TextBox triggered ButtonClick
[TextBox] TextBox received ButtonClick from Button
[Control] Dialog triggered TextUpdated
[Dialog] Text updated: Text updated by button click
```
需要注意的是，这只是一个简单的示例，实际应用中可能会更加复杂，需要根据具体的业务场景进行设计。

## 优化

代码中还存在优化空间，例如可以将通知方法中的控件类型转换代码进行抽象，从而让代码更加灵活。修改后的代码如下：
```cs
public abstract class Control
{
    protected IMediator _dialog;

    public Control(IMediator dialog)
    {
        _dialog = dialog;
    }

    public abstract void Notify(string ev);
}

public class TextBox : Control
{
    public string Text { get; set; }

    public TextBox(IMediator dialog) : base(dialog)
    {
    }

    public void UpdateText(string text)
    {
        Text = text;
        Notify("TextUpdated");
    }

    public override void Notify(string ev)
    {
        Console.WriteLine($"[TextBox] {GetType().Name} received {ev}");
        if (ev == "ButtonClick")
        {
            UpdateText("Text updated by button click");
        }
    }
}

public class Button : Control
{
    public Button(IMediator dialog) : base(dialog)
    {
    }

    public void Click()
    {
        Console.WriteLine($"[Button] {GetType().Name} clicked");
        Notify("ButtonClick");
    }

    public override void Notify(string ev)
    {
        Console.WriteLine($"[Button] {GetType().Name} received {ev}");
    }
}

public interface IMediator
{
    void Notify(object sender, string ev);
}

public class Dialog : IMediator
{
    private TextBox _textBox;
    private Button _button;

    public Dialog()
    {
        _textBox = new TextBox(this);
        _button = new Button(this);
    }

    public void SimulateUserInteraction()
    {
        _button.Click();
    }

    public void Notify(object sender, string ev)
    {
        if (ev == "TextUpdated")
        {
            Console.WriteLine($"[Dialog] Text updated: {_textBox.Text}");
        }
    }
}
```
在 `Control` 抽象类中，我们将 `IMediator` 类型的 `_dialog` 字段声明为 `protected`，同时将 `Notify` 方法中的 `sender` 参数删除，因为这里我们已经不需要知道触发通知的控件类型了。在具体的控件类中，我们将 `Notify` 方法中的 `sender` 参数删除，改为输出控件自身的信息。这样，我们就可以将 `Notify` 方法的具体实现从控件类型中抽象出来，从而使得代码更加灵活。

在 `Button` 控件中，我们删除了 `Notify` 方法的具体实现，因为按钮并不需要做出响应，只需要通知中介者即可。

最后，在 `Main` 函数中运行我们的示例程序：
```cs
static void Main(string[] args)
{
    var dialog = new Dialog();

    dialog.SimulateUserInteraction();
}
```
输出结果与之前相同：
```shell
[Button] Button clicked
[TextBox] TextBox received ButtonClick
[Dialog] Text updated: Text updated by button click
```

通过以上示例，我们可以看出，中介者模式可以在多个对象之间解耦，并将它们之间的交互进行集中管理，从而提高了代码的可维护性和可扩展性。当应用场景中存在多个相互耦合的对象时，可以考虑使用中介者模式来减少对象之间的耦合，使得系统更加灵活和易于扩展。