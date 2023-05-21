import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-bd8f263d.js";const t={},c=e(`<div class="hint-container tip"><p class="hint-container-title">✨✨✨✨✨</p><p>单例模式（Singleton Pattern）是最简单的设计模式之一。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。 它的目的是确保某个类只有一个实例，并提供一个全局的访问点。</p></div><h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>单例模式是一种创建型设计模式，它保证一个类只有一个实例，并提供了一个全局访问点来访问这个实例。</p><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h2><p>在以下情况下可以考虑使用单例模式：</p><ul><li>当一个对象只需要存在一个实例，例如线程池、缓存、日志、配置、数据库连接等。</li><li>当对象的创建和销毁开销较大，需要复用时，例如游戏中的角色管理器。</li></ul><h2 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h2><p><strong>优点</strong></p><ul><li>保证了一个类只有一个实例，避免了重复创建实例的开销，节省了内存。</li><li>提供了一个全局访问点，方便了对象的访问和管理。</li></ul><p><strong>缺点</strong></p><ul><li>单例模式的逻辑通常都集中在一个类中，会增加这个类的复杂度，不利于维护和测试。</li><li>单例模式容易被滥用，过度使用会导致代码不易扩展和测试。</li></ul><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><p>下面是一个基本的单例模式的C#实现示例：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">sealed</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">readonly</span> <span class="token class-name">Singleton</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token function">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">Singleton</span> Instance
    <span class="token punctuation">{</span>
        <span class="token keyword">get</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">SomeMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Some method in singleton instance&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里定义了一个名为 <code>Singleton</code> 的类，它的构造函数被声明为私有的，以确保不能从外部实例化该类的对象。类的实例被存储在名为 <code>instance</code> 的静态变量中，并通过公共静态属性 <code>Instance</code> 进行访问。</p><p>下面是一个使用 <code>Singleton</code> 类的示例：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">Program</span>
<span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">Singleton</span> instance1 <span class="token operator">=</span> Singleton<span class="token punctuation">.</span>Instance<span class="token punctuation">;</span>
        <span class="token class-name">Singleton</span> instance2 <span class="token operator">=</span> Singleton<span class="token punctuation">.</span>Instance<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>instance1 <span class="token operator">==</span> instance2<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Singleton works!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        instance1<span class="token punctuation">.</span><span class="token function">SomeMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们从 <code>Singleton.Instance</code> 属性中获取 <code>Singleton</code> 类的实例，并将它赋值给两个不同的变量 <code>instance1</code> 和 <code>instance2</code>。然后我们比较这两个变量是否相等，如果相等，说明只有一个实例被创建，单例模式有效。最后，我们调用 <code>instance1</code> 的 <code>SomeMethod()</code> 方法，输出 <code>&quot;Some method in singleton instance&quot;</code>。</p><h2 id="优化" tabindex="-1"><a class="header-anchor" href="#优化" aria-hidden="true">#</a> 优化</h2><p>这个示例是一个基本的单例模式实现，但它可能存在线程安全性问题。如果多个线程同时调用 <code>Singleton.Instance</code> 属性，可能会创建多个 <code>Singleton</code> 类的实例。要解决这个问题，我们可以通过双重检查锁定（Double-Checked Locking）来确保只有一个实例被创建：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">sealed</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">volatile</span> <span class="token class-name">Singleton</span> instance<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name"><span class="token keyword">object</span></span> syncRoot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">object</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token function">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">Singleton</span> Instance
    <span class="token punctuation">{</span>
        <span class="token keyword">get</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">lock</span> <span class="token punctuation">(</span>syncRoot<span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
                    <span class="token punctuation">{</span>
                        instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">SomeMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Some method in singleton instance&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们添加了一个名为 <code>syncRoot</code> 的对象作为锁定对象。在访问 <code>Singleton.Instance</code> 属性时，首先检查实例是否已经存在，如果不存在，就使用 <code>lock</code> 关键字锁定 <code>syncRoot</code> 对象，并再次检查实例是否已经被创建。如果没有，就创建一个新的实例并将其赋值给 <code>instance</code>。这种双重检查锁定的方式可以确保只有一个实例被创建，并且能够避免性能上的开销。</p>`,22),o=[c];function p(i,l){return s(),a("div",null,o)}const r=n(t,[["render",p],["__file","singleton-pattern.html.vue"]]);export{r as default};
