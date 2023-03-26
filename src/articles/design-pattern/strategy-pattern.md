---
title: 策略模式
date: 2022-06-01
category:
 - 设计模式
tag: 
 - 设计模式
 - 行为型模式
timeline: true
order: 14
---

::: tip ✨✨✨✨✨
策略模式（Strategy Pattern）是一种行为型设计模式，它允许在运行时选择算法的行为。该模式定义了一系列算法，将它们封装成可相互替换的策略，并使它们能够互相替换。
:::

<!-- more -->

## 定义

策略模式（Strategy Pattern）是一种行为型设计模式，它允许在运行时选择算法的行为。该模式定义了一系列算法，将它们封装成可相互替换的策略，并使它们能够互相替换。

## 适用场景

策略模式适用于需要在运行时动态选择算法的情况。例如，对于不同的排序需求，可以定义不同的排序策略，并在运行时选择合适的策略进行排序。

## 优缺点

### 优点

- 策略模式可以在运行时动态地选择算法，提高了代码的灵活性和可扩展性。
- 策略模式将不同的算法封装成独立的类，使得代码更加清晰易懂，易于维护和测试。
- 策略模式可以避免大量的条件语句，提高代码的可读性和可维护性。

### 缺点

- 策略模式会增加系统中类的数量，可能会导致代码复杂度的增加。
- 策略模式需要客户端了解所有的策略，并且自行选择合适的策略，可能会增加客户端的复杂度。

## 代码示例

下面是一个策略模式的C#代码示例，用于实现不同的支付策略：

```cs
// 支付策略接口
public interface IPaymentStrategy
{
    void Pay(double amount);
}

// 支付宝支付策略
public class AliPayStrategy : IPaymentStrategy
{
    public void Pay(double amount)
    {
        // 调用支付宝支付接口
    }
}

// 微信支付策略
public class WeChatPayStrategy : IPaymentStrategy
{
    public void Pay(double amount)
    {
        // 调用微信支付接口
    }
}

// 支付上下文
public class PaymentContext
{
    private readonly IPaymentStrategy paymentStrategy;

    public PaymentContext(IPaymentStrategy paymentStrategy)
    {
        this.paymentStrategy = paymentStrategy;
    }

    public void Pay(double amount)
    {
        paymentStrategy.Pay(amount);
    }
}
```
在这个示例中，我们定义了一个支付策略接口 IPaymentStrategy ，并实现了不同的支付策略类 AliPayStrategy 和 WeChatPayStrategy。同时，我们还定义了一个支付上下文类 PaymentContext，它包含了一个支付策略对象，并提供了 Pay 方法用于支付操作。

## 优化

在上面的示例中，我们使用了接口来定义支付策略，这是一种比较灵活的方式。不过，如果我们只需要定义少量的固定策略，可以考虑使用枚举来实现：

```cs
// 支付策略枚举
public enum PaymentStrategy
{
    AliPay,
    WeChatPay
}

// 支付上下文
public class PaymentContext
{
    private readonly PaymentStrategy paymentStrategy;

    public PaymentContext(PaymentStrategy paymentStrategy)
    {
        this.paymentStrategy = paymentStrategy;
    }

    public void Pay(double amount)
    {
        switch (paymentStrategy)
        {
            case PaymentStrategy.AliPay:
                // 调用支付宝支付接口
                break;
            case PaymentStrategy.WeChatPay:
                // 调用微信支付接口
                break;
            default:
                throw new ArgumentException("Invalid payment strategy");
        }
    }
}
```

在这个示例中，我们使用枚举 PaymentStrategy 来定义支付策略，支付上下文类PaymentContext 也相应地修改为使用枚举作为参数。这种方式虽然不够灵活，但对于少量的固定策略来说更加简洁明了。