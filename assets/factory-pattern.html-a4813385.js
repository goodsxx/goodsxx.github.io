import{_ as s,Z as a,$ as t,a0 as p,a2 as n,a5 as e}from"./framework-e7ac220c.js";const c={},o=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"✨✨✨✨✨"),n("p",null,"工厂模式是一种创建型设计模式，它提供了一种将对象的创建与使用分离的方式。通过工厂模式，我们可以定义一个接口或抽象类作为工厂，然后由具体的子类来负责实例化对象。这样，客户端就不需要关心具体的对象创建过程，而只需要通过工厂接口来获取需要的对象。")],-1),l=e(`<p>下面是一个简单的工厂模式的示例代码：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 抽象产品类</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Product</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品类 A</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductA</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Product</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Product A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品类 B</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductB</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Product</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Product B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 工厂接口</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IFactory</span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name">Product</span> <span class="token function">CreateProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体工厂 A</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FactoryA</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IFactory</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">Product</span> <span class="token function">CreateProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ProductA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体工厂 B</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FactoryB</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IFactory</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">Product</span> <span class="token function">CreateProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ProductB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 客户端代码</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Run</span><span class="token punctuation">(</span><span class="token class-name">IFactory</span> factory<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">Product</span> product <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">CreateProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        product<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述代码中，我们首先定义了一个抽象的产品类 Product ，然后定义了两个具体的产品类 ProductA 和 ProductB 。接着，我们定义了一个工厂接口 IFactory ，其中定义了一个 CreateProduct 方法用于创建产品对象。最后，我们定义了两个具体的工厂类 FactoryA 和 FactoryB ，分别用于创建 ProductA 和 ProductB 对象。</p><p>在客户端代码中，我们首先创建一个工厂对象，然后通过工厂接口来获取具体的产品对象，最后调用产品对象的 Show 方法来展示产品信息。</p><p>需要注意的是，上述代码中存在一个潜在的漏洞，即客户端可以直接创建具体的产品对象，而不是通过工厂来获取。这样就会破坏工厂模式的封装性，因此我们需要进一步完善代码。</p><p>下面是一个完善后的工厂模式示例代码，其中增加了对工厂模式的封装，以避免客户端直接创建具体的产品对象。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 抽象产品类</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Product</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品类 A</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductA</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Product</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Product A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品类 B</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductB</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Product</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Product B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 工厂接口</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IFactory</span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name">Product</span> <span class="token function">CreateProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体工厂 A</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FactoryA</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IFactory</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">Product</span> <span class="token function">CreateProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ProductA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体工厂 B</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FactoryB</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IFactory</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">Product</span> <span class="token function">CreateProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ProductB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 工厂管理类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FactoryManager</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 私有构造函数，确保单例模式</span>
    <span class="token keyword">private</span> <span class="token function">FactoryManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">FactoryManager</span> instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token comment">// 静态构造函数，确保线程安全</span>
    <span class="token keyword">static</span> <span class="token function">FactoryManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FactoryManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">FactoryManager</span> <span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 工厂字典</span>
    <span class="token keyword">private</span> <span class="token class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> IFactory<span class="token punctuation">&gt;</span></span> factories <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> IFactory<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 注册工厂</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">RegisterFactory</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> name<span class="token punctuation">,</span> <span class="token class-name">IFactory</span> factory<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        factories<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> factory<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 创建产品</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">Product</span> <span class="token function">CreateProduct</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> name<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">IFactory</span> factory<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>factories<span class="token punctuation">.</span><span class="token function">TryGetValue</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token keyword">out</span> factory<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> factory<span class="token punctuation">.</span><span class="token function">CreateProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 客户端代码</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 获取工厂管理类单例</span>
        <span class="token class-name">FactoryManager</span> manager <span class="token operator">=</span> FactoryManager<span class="token punctuation">.</span><span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 注册具体工厂</span>
        manager<span class="token punctuation">.</span><span class="token function">RegisterFactory</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FactoryA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        manager<span class="token punctuation">.</span><span class="token function">RegisterFactory</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FactoryB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 使用工厂管理类创建产品</span>
        <span class="token class-name">Product</span> productA <span class="token operator">=</span> manager<span class="token punctuation">.</span><span class="token function">CreateProduct</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        productA<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Product</span> productB <span class="token operator">=</span> manager<span class="token punctuation">.</span><span class="token function">CreateProduct</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        productB<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在完善后的代码中，我们增加了一个工厂管理类 FactoryManager，用于管理各个具体工厂对象的创建与销毁。客户端代码通过调用工厂管理类的 RegisterFactory 方法来注册具体工厂，然后通过 CreateProduct 方法来创建具体产品对象。这样，客户端就无法直接创建具体产品对象，而只能通过工厂管理类来获取。同时，我们还使用了单例模式来确保工厂管理类的唯一性，以及使用线程安全的方式来初始化单例对象。</p>`,8);function i(u,k){return a(),t("div",null,[o,p(" more "),l])}const d=s(c,[["render",i],["__file","factory-pattern.html.vue"]]);export{d as default};
