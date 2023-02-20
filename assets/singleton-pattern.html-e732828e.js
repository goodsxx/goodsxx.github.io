import{_ as s,Z as a,$ as e,a0 as t,a2 as n,a5 as c}from"./framework-e7ac220c.js";const p={},o=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"✨✨✨✨✨"),n("p",null,"单例模式（Singleton Pattern）是最简单的设计模式之一。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。 它的目的是确保某个类只有一个实例，并提供一个全局的访问点。")],-1),i=c(`<p>在.NET中，我们可以通过静态变量、静态构造函数、私有构造函数等方式来实现单例模式。</p><p>下面是一个简单的单例模式的示例代码：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token comment">// 私有构造函数</span>
    <span class="token keyword">private</span> <span class="token function">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 初始化代码</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 静态构造函数</span>
    <span class="token keyword">static</span> <span class="token function">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 全局访问点</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">Singleton</span> <span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，Singleton类的构造函数是私有的，因此外部不能直接创建该类的实例。同时，Singleton类还有一个静态的instance变量，用于保存Singleton类的唯一实例。在Singleton类的静态构造函数中，我们对instance进行了初始化操作。最后，通过GetInstance方法来获取Singleton类的唯一实例。</p><p>当我们需要使用Singleton类时，只需要调用GetInstance方法即可获取该类的唯一实例。由于Singleton类的构造函数是私有的，因此只能通过GetInstance方法来获取Singleton类的实例，从而确保了Singleton类只有一个实例存在。</p><p>需要注意的是，单例模式有一些缺点，例如会增加代码的复杂度，同时也可能会导致线程安全问题，为了避免多线程下的线程安全问题，我们可以使用线程锁来确保只有一个线程可以访问Singleton实例。</p><p>下面是一个使用线程锁实现的线程安全的Singleton示例代码：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">readonly</span> <span class="token class-name"><span class="token keyword">object</span></span> lockObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">object</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 私有构造函数</span>
    <span class="token keyword">private</span> <span class="token function">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 初始化代码</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 静态构造函数</span>
    <span class="token keyword">static</span> <span class="token function">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 全局访问点</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">Singleton</span> <span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">lock</span> <span class="token punctuation">(</span>lockObj<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述代码中，我们在GetInstance方法中使用了lock关键字来锁定一个对象（即lockObj）。这样，当多个线程同时调用GetInstance方法时，只有一个线程能够获得锁定对象，从而保证了只有一个线程能够创建Singleton实例。同时，我们也使用了双重检查锁定（double-checked locking）的方式，以避免重复创建Singleton实例的问题。</p><p>需要注意的是，虽然使用线程锁可以确保Singleton实例的线程安全性，但是过多的锁使用可能会导致性能问题，因此在使用锁时需要谨慎。</p>`,10);function l(u,d){return a(),e("div",null,[o,t(" more "),i])}const r=s(p,[["render",l],["__file","singleton-pattern.html.vue"]]);export{r as default};
