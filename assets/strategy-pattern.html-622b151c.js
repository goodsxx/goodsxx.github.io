import{_ as s,X as a,Y as e,Z as t,$ as n,a3 as p}from"./framework-8e4c1295.js";const c={},l=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"✨✨✨✨✨"),n("p",null,"策略模式（Strategy Pattern）是一种行为型设计模式，它允许在运行时选择算法的行为。该模式定义了一系列算法，将它们封装成可相互替换的策略，并使它们能够互相替换。")],-1),i=p(`<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>策略模式（Strategy Pattern）是一种行为型设计模式，它允许在运行时选择算法的行为。该模式定义了一系列算法，将它们封装成可相互替换的策略，并使它们能够互相替换。</p><h2 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h2><p>策略模式适用于需要在运行时动态选择算法的情况。例如，对于不同的排序需求，可以定义不同的排序策略，并在运行时选择合适的策略进行排序。</p><h2 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h2><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><ul><li>策略模式可以在运行时动态地选择算法，提高了代码的灵活性和可扩展性。</li><li>策略模式将不同的算法封装成独立的类，使得代码更加清晰易懂，易于维护和测试。</li><li>策略模式可以避免大量的条件语句，提高代码的可读性和可维护性。</li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><ul><li>策略模式会增加系统中类的数量，可能会导致代码复杂度的增加。</li><li>策略模式需要客户端了解所有的策略，并且自行选择合适的策略，可能会增加客户端的复杂度。</li></ul><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><p>下面是一个策略模式的C#代码示例，用于实现不同的支付策略：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 支付策略接口</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IPaymentStrategy</span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Pay</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">double</span></span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 支付宝支付策略</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AliPayStrategy</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IPaymentStrategy</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Pay</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">double</span></span> amount<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 调用支付宝支付接口</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 微信支付策略</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WeChatPayStrategy</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IPaymentStrategy</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Pay</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">double</span></span> amount<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 调用微信支付接口</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 支付上下文</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PaymentContext</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">IPaymentStrategy</span> paymentStrategy<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">PaymentContext</span><span class="token punctuation">(</span><span class="token class-name">IPaymentStrategy</span> paymentStrategy<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>paymentStrategy <span class="token operator">=</span> paymentStrategy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Pay</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">double</span></span> amount<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        paymentStrategy<span class="token punctuation">.</span><span class="token function">Pay</span><span class="token punctuation">(</span>amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们定义了一个支付策略接口 IPaymentStrategy ，并实现了不同的支付策略类 AliPayStrategy 和 WeChatPayStrategy。同时，我们还定义了一个支付上下文类 PaymentContext，它包含了一个支付策略对象，并提供了 Pay 方法用于支付操作。</p><h2 id="优化" tabindex="-1"><a class="header-anchor" href="#优化" aria-hidden="true">#</a> 优化</h2><p>在上面的示例中，我们使用了接口来定义支付策略，这是一种比较灵活的方式。不过，如果我们只需要定义少量的固定策略，可以考虑使用枚举来实现：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 支付策略枚举</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">PaymentStrategy</span>
<span class="token punctuation">{</span>
    AliPay<span class="token punctuation">,</span>
    WeChatPay
<span class="token punctuation">}</span>

<span class="token comment">// 支付上下文</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PaymentContext</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">PaymentStrategy</span> paymentStrategy<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">PaymentContext</span><span class="token punctuation">(</span><span class="token class-name">PaymentStrategy</span> paymentStrategy<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>paymentStrategy <span class="token operator">=</span> paymentStrategy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Pay</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">double</span></span> amount<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>paymentStrategy<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">case</span> PaymentStrategy<span class="token punctuation">.</span>AliPay<span class="token punctuation">:</span>
                <span class="token comment">// 调用支付宝支付接口</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> PaymentStrategy<span class="token punctuation">.</span>WeChatPay<span class="token punctuation">:</span>
                <span class="token comment">// 调用微信支付接口</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">default</span><span class="token punctuation">:</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;Invalid payment strategy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们使用枚举 PaymentStrategy 来定义支付策略，支付上下文类PaymentContext 也相应地修改为使用枚举作为参数。这种方式虽然不够灵活，但对于少量的固定策略来说更加简洁明了。</p>`,17);function o(u,d){return a(),e("div",null,[l,t(" more "),i])}const k=s(c,[["render",o],["__file","strategy-pattern.html.vue"]]);export{k as default};
