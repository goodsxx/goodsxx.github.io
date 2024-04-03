import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-Y2o9GSn_.js";const t={},p=e(`<div class="hint-container tip"><p class="hint-container-title">✨✨✨✨✨</p><p>策略模式（Strategy Pattern）是一种行为型设计模式，它允许在运行时选择算法的行为。该模式定义了一系列算法，将它们封装成可相互替换的策略，并使它们能够互相替换。</p></div><h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span>定义</span></a></h2><p>策略模式（Strategy Pattern）是一种行为型设计模式，它允许在运行时选择算法的行为。该模式定义了一系列算法，将它们封装成可相互替换的策略，并使它们能够互相替换。</p><h2 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景"><span>适用场景</span></a></h2><p>策略模式适用于需要在运行时动态选择算法的情况。例如，对于不同的排序需求，可以定义不同的排序策略，并在运行时选择合适的策略进行排序。</p><h2 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点"><span>优缺点</span></a></h2><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h3><ul><li>策略模式可以在运行时动态地选择算法，提高了代码的灵活性和可扩展性。</li><li>策略模式将不同的算法封装成独立的类，使得代码更加清晰易懂，易于维护和测试。</li><li>策略模式可以避免大量的条件语句，提高代码的可读性和可维护性。</li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点"><span>缺点</span></a></h3><ul><li>策略模式会增加系统中类的数量，可能会导致代码复杂度的增加。</li><li>策略模式需要客户端了解所有的策略，并且自行选择合适的策略，可能会增加客户端的复杂度。</li></ul><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h2><p>下面是一个策略模式的C#代码示例，用于实现不同的支付策略：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">// 支付策略接口</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们定义了一个支付策略接口 IPaymentStrategy ，并实现了不同的支付策略类 AliPayStrategy 和 WeChatPayStrategy。同时，我们还定义了一个支付上下文类 PaymentContext，它包含了一个支付策略对象，并提供了 Pay 方法用于支付操作。</p><h2 id="优化" tabindex="-1"><a class="header-anchor" href="#优化"><span>优化</span></a></h2><p>在上面的示例中，我们使用了接口来定义支付策略，这是一种比较灵活的方式。不过，如果我们只需要定义少量的固定策略，可以考虑使用枚举来实现：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">// 支付策略枚举</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们使用枚举 PaymentStrategy 来定义支付策略，支付上下文类PaymentContext 也相应地修改为使用枚举作为参数。这种方式虽然不够灵活，但对于少量的固定策略来说更加简洁明了。</p>`,18),l=[p];function i(c,o){return s(),a("div",null,l)}const u=n(t,[["render",i],["__file","strategy-pattern.html.vue"]]),k=JSON.parse('{"path":"/articles/design-pattern/strategy-pattern.html","title":"策略模式","lang":"zh-CN","frontmatter":{"title":"策略模式","date":"2022-06-01T00:00:00.000Z","category":["设计模式"],"tag":["设计模式","行为型模式"],"timeline":true,"order":14,"description":"✨✨✨✨✨ 策略模式（Strategy Pattern）是一种行为型设计模式，它允许在运行时选择算法的行为。该模式定义了一系列算法，将它们封装成可相互替换的策略，并使它们能够互相替换。","head":[["meta",{"property":"og:url","content":"http://blog.goodsxx.cn/articles/design-pattern/strategy-pattern.html"}],["meta",{"property":"og:site_name","content":"Growing Notes"}],["meta",{"property":"og:title","content":"策略模式"}],["meta",{"property":"og:description","content":"✨✨✨✨✨ 策略模式（Strategy Pattern）是一种行为型设计模式，它允许在运行时选择算法的行为。该模式定义了一系列算法，将它们封装成可相互替换的策略，并使它们能够互相替换。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-26T10:16:57.000Z"}],["meta",{"property":"article:author","content":"SongXinXin"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:tag","content":"行为型模式"}],["meta",{"property":"article:published_time","content":"2022-06-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-26T10:16:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"策略模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-06-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-26T10:16:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"SongXinXin\\"}]}"]]},"headers":[{"level":2,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":2,"title":"适用场景","slug":"适用场景","link":"#适用场景","children":[]},{"level":2,"title":"优缺点","slug":"优缺点","link":"#优缺点","children":[{"level":3,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":3,"title":"缺点","slug":"缺点","link":"#缺点","children":[]}]},{"level":2,"title":"代码示例","slug":"代码示例","link":"#代码示例","children":[]},{"level":2,"title":"优化","slug":"优化","link":"#优化","children":[]}],"git":{"createdTime":1679825817000,"updatedTime":1679825817000,"contributors":[{"name":"SongXinXin","email":"1368084801@qq.com","commits":1}]},"readingTime":{"minutes":2.65,"words":796},"filePathRelative":"articles/design-pattern/strategy-pattern.md","localizedDate":"2022年6月1日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">✨✨✨✨✨</p>\\n<p>策略模式（Strategy Pattern）是一种行为型设计模式，它允许在运行时选择算法的行为。该模式定义了一系列算法，将它们封装成可相互替换的策略，并使它们能够互相替换。</p>\\n</div>\\n","autoDesc":true}');export{u as comp,k as data};
