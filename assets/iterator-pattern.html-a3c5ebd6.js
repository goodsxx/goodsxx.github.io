import{_ as s,X as a,Y as t,Z as e,a0 as n,a3 as p}from"./framework-458c221e.js";const o={},c=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"✨✨✨✨✨"),n("p",null,"迭代器模式（Iterator Pattern）是一种行为型设计模式，它允许你顺序访问一个聚合对象中的各个元素，而不暴露该对象的内部表示。")],-1),i=p(`<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>迭代器模式（Iterator Pattern）是一种行为型设计模式，它允许你顺序访问一个聚合对象中的各个元素，而不暴露该对象的内部表示。</p><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h2><p>迭代器模式通常用于以下情况：</p><ul><li>需要遍历一个聚合对象，但是又不想暴露该对象的内部结构。</li><li>需要在遍历时提供多种不同的方式，比如前向遍历、后向遍历等。</li><li>需要提供一个统一的接口来遍历不同类型的聚合对象。</li></ul><h2 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h2><p><strong>优点：</strong></p><ul><li>提供了一种访问聚合对象的方法，且不暴露内部结构。</li><li>支持多种遍历方式。</li><li>迭代器可以独立于聚合对象进行变化。</li></ul><p><strong>缺点：</strong></p><ul><li>对于简单的聚合对象，使用迭代器模式可能会增加代码的复杂度。</li><li>如果使用不当，可能会导致性能下降。</li></ul><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><p>下面是一个简单的C#代码示例，它演示了如何使用迭代器模式来遍历一个聚合对象中的元素。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Collections</span><span class="token punctuation">;</span>

<span class="token comment">// 列表类</span>
<span class="token comment">// 我们首先定义了一个列表类 MyList，它包含一个数组 items 和一个计数器 count。</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyList<span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IEnumerable</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">T<span class="token punctuation">[</span><span class="token punctuation">]</span></span> items<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">int</span></span> count<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">MyList</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> capacity<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">T</span><span class="token punctuation">[</span>capacity<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Add</span><span class="token punctuation">(</span><span class="token class-name">T</span> item<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        items<span class="token punctuation">[</span>count<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> item<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 我们实现了 IEnumerable 接口中的 GetEnumerator 方法，该方法返回一个 MyListEnumerator 对象。MyListEnumerator 类表示列表的迭代器，它实现了 IEnumerator 接口。</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">IEnumerator</span> <span class="token function">GetEnumerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">MyListEnumerator<span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>items<span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 列表迭代器类</span>
<span class="token comment">// MyListEnumerator 类包含一个指向数组中当前元素的指针 position，以及一个数组 items 和一个计数器 count。</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyListEnumerator<span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IEnumerator</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">T<span class="token punctuation">[</span><span class="token punctuation">]</span></span> items<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">int</span></span> count<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">int</span></span> position <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">MyListEnumerator</span><span class="token punctuation">(</span><span class="token class-name">T<span class="token punctuation">[</span><span class="token punctuation">]</span></span> items<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> count<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> items<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// MyListEnumerator 类实现了 IEnumerator 接口中的 MoveNext 方法、Reset 方法和 Current 属性。在 MoveNext 方法中，我们将指针 position 向前移动，并返回 true，直到遍历完所有元素。在 Current 属性中，我们返回指针位置对应的元素。</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">bool</span></span> <span class="token function">MoveNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        position<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>position <span class="token operator">&lt;</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        position <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> Current
    <span class="token punctuation">{</span>
        <span class="token keyword">get</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> position <span class="token operator">==</span> count<span class="token punctuation">)</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">InvalidOperationException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> items<span class="token punctuation">[</span>position<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 测试</span>
<span class="token comment">// 最后，在 Main 方法中，我们创建了一个 MyList 对象，向其中添加了几个元素，然后使用 foreach 循环遍历了该列表。</span>
<span class="token keyword">class</span> <span class="token class-name">Program</span>
<span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">MyList<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">MyList<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 使用 foreach 遍历</span>
        <span class="token comment">// 在 foreach 循环中，编译器会自动调用 MyList 对象的 GetEnumerator 方法，然后使用 MyListEnumerator 对象来遍历该列表。每次循环迭代，编译器会调用 MyListEnumerator 对象的 MoveNext 方法和 Current 属性，然后输出当前元素的值。</span>
        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> item <span class="token keyword">in</span> list<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function l(u,r){return a(),t("div",null,[c,e(" more "),i])}const d=s(o,[["render",l],["__file","iterator-pattern.html.vue"]]);export{d as default};
