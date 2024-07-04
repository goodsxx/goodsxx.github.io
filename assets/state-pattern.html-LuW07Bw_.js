import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as t}from"./app-DbRsw7jK.js";const e={},p=t(`<div class="hint-container tip"><p class="hint-container-title">✨✨✨✨✨</p><p>状态模式（State Pattern）是一种行为型设计模式，它允许一个对象在内部状态改变时改变它的行为，使得对象看起来似乎修改了它的类。</p></div><h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span>定义</span></a></h2><p>状态模式（State Pattern）是一种行为型设计模式，它允许一个对象在内部状态改变时改变它的行为，使得对象看起来似乎修改了它的类。</p><h2 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景"><span>适用场景</span></a></h2><p>适用于有多个状态且状态转换比较复杂的对象，如游戏角色状态、工作流状态等。</p><h2 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点"><span>优缺点</span></a></h2><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h3><ul><li>状态模式将每个状态封装为一个类，避免了复杂的条件判断。</li><li>状态模式将状态转换显式化，方便了状态的管理和扩展。</li><li>状态模式符合开闭原则，增加新的状态不需要修改原有代码，只需要增加新的状态类。</li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点"><span>缺点</span></a></h3><ul><li>状态模式会增加系统中类的数量，导致系统复杂度增加。</li><li>状态模式需要对状态进行分析和设计，不适用于简单状态的处理。</li></ul><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h2><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">// 状态接口</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IState</span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Handle</span><span class="token punctuation">(</span><span class="token class-name">StateContext</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体状态类A</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteStateA</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IState</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Handle</span><span class="token punctuation">(</span><span class="token class-name">StateContext</span> context<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;当前状态为A，执行A状态的业务逻辑&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 切换状态</span>
        context<span class="token punctuation">.</span>State <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConcreteStateB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体状态类B</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteStateB</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IState</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Handle</span><span class="token punctuation">(</span><span class="token class-name">StateContext</span> context<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;当前状态为B，执行B状态的业务逻辑&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 切换状态</span>
        context<span class="token punctuation">.</span>State <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConcreteStateC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体状态类C</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteStateC</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IState</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Handle</span><span class="token punctuation">(</span><span class="token class-name">StateContext</span> context<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;当前状态为C，执行C状态的业务逻辑&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 切换状态</span>
        context<span class="token punctuation">.</span>State <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConcreteStateA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 状态上下文类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StateContext</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">IState</span> state<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">StateContext</span><span class="token punctuation">(</span><span class="token class-name">IState</span> state<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">IState</span> State
    <span class="token punctuation">{</span>
        <span class="token keyword">get</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> state<span class="token punctuation">;</span> <span class="token punctuation">}</span>
        <span class="token keyword">set</span> <span class="token punctuation">{</span> state <span class="token operator">=</span> <span class="token keyword">value</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 处理请求</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span><span class="token function">Handle</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用示例</span>
<span class="token keyword">class</span> <span class="token class-name">Program</span>
<span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">StateContext</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">StateContext</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConcreteStateA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            context<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="优化" tabindex="-1"><a class="header-anchor" href="#优化"><span>优化</span></a></h2><p>在状态模式的实现中，我们使用了多个具体状态类来表示不同的状态，如果状态比较多，类的数量会增加很多，可以考虑使用状态模式和工厂方法模式结合，通过工厂方法创建具体状态类的实例，减少类的数量。</p><p>以下是结合工厂方法模式对状态模式的优化代码示例：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">// 状态接口</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IState</span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Handle</span><span class="token punctuation">(</span><span class="token class-name">StateContext</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体状态类A</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteStateA</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IState</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Handle</span><span class="token punctuation">(</span><span class="token class-name">StateContext</span> context<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;当前状态为A，执行A状态的业务逻辑&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 切换状态</span>
        context<span class="token punctuation">.</span>State <span class="token operator">=</span> StateFactory<span class="token punctuation">.</span><span class="token function">CreateState</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体状态类B</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteStateB</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IState</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Handle</span><span class="token punctuation">(</span><span class="token class-name">StateContext</span> context<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;当前状态为B，执行B状态的业务逻辑&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 切换状态</span>
        context<span class="token punctuation">.</span>State <span class="token operator">=</span> StateFactory<span class="token punctuation">.</span><span class="token function">CreateState</span><span class="token punctuation">(</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体状态类C</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteStateC</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IState</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Handle</span><span class="token punctuation">(</span><span class="token class-name">StateContext</span> context<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;当前状态为C，执行C状态的业务逻辑&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 切换状态</span>
        context<span class="token punctuation">.</span>State <span class="token operator">=</span> StateFactory<span class="token punctuation">.</span><span class="token function">CreateState</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 状态工厂类</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">StateFactory</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 创建具体状态类的实例</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">IState</span> <span class="token function">CreateState</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> stateName<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>stateName<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConcreteStateA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConcreteStateB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConcreteStateC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">default</span><span class="token punctuation">:</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;无效的状态名称&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 状态上下文类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StateContext</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">IState</span> state<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">StateContext</span><span class="token punctuation">(</span><span class="token class-name">IState</span> state<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">IState</span> State
    <span class="token punctuation">{</span>
        <span class="token keyword">get</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> state<span class="token punctuation">;</span> <span class="token punctuation">}</span>
        <span class="token keyword">set</span> <span class="token punctuation">{</span> state <span class="token operator">=</span> <span class="token keyword">value</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 处理请求</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span><span class="token function">Handle</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用示例</span>
<span class="token keyword">class</span> <span class="token class-name">Program</span>
<span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">StateContext</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">StateContext</span><span class="token punctuation">(</span>StateFactory<span class="token punctuation">.</span><span class="token function">CreateState</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            context<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个优化后的代码示例中，我们使用工厂方法模式来创建具体状态类的实例，减少了类的数量，提高了代码的可维护性。同时，我们仍然保留了状态模式的核心思想，即将状态封装为一个独立的类，通过状态的转换改变对象的行为。</p>`,17),c=[p];function o(l,i){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","state-pattern.html.vue"]]),d=JSON.parse('{"path":"/articles/design-pattern/state-pattern.html","title":"状态模式","lang":"zh-CN","frontmatter":{"title":"状态模式","date":"2022-06-01T00:00:00.000Z","category":["设计模式"],"tag":["设计模式","行为型模式"],"timeline":true,"order":13,"description":"✨✨✨✨✨ 状态模式（State Pattern）是一种行为型设计模式，它允许一个对象在内部状态改变时改变它的行为，使得对象看起来似乎修改了它的类。","head":[["meta",{"property":"og:url","content":"http://blog.goodsxx.cn/articles/design-pattern/state-pattern.html"}],["meta",{"property":"og:site_name","content":"Growing Notes"}],["meta",{"property":"og:title","content":"状态模式"}],["meta",{"property":"og:description","content":"✨✨✨✨✨ 状态模式（State Pattern）是一种行为型设计模式，它允许一个对象在内部状态改变时改变它的行为，使得对象看起来似乎修改了它的类。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-26T10:16:57.000Z"}],["meta",{"property":"article:author","content":"SongXinXin"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:tag","content":"行为型模式"}],["meta",{"property":"article:published_time","content":"2022-06-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-26T10:16:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"状态模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-06-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-26T10:16:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"SongXinXin\\"}]}"]]},"headers":[{"level":2,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":2,"title":"适用场景","slug":"适用场景","link":"#适用场景","children":[]},{"level":2,"title":"优缺点","slug":"优缺点","link":"#优缺点","children":[{"level":3,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":3,"title":"缺点","slug":"缺点","link":"#缺点","children":[]}]},{"level":2,"title":"代码示例","slug":"代码示例","link":"#代码示例","children":[]},{"level":2,"title":"优化","slug":"优化","link":"#优化","children":[]}],"git":{"createdTime":1679825817000,"updatedTime":1679825817000,"contributors":[{"name":"SongXinXin","email":"1368084801@qq.com","commits":1}]},"readingTime":{"minutes":3.26,"words":978},"filePathRelative":"articles/design-pattern/state-pattern.md","localizedDate":"2022年6月1日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">✨✨✨✨✨</p>\\n<p>状态模式（State Pattern）是一种行为型设计模式，它允许一个对象在内部状态改变时改变它的行为，使得对象看起来似乎修改了它的类。</p>\\n</div>\\n","autoDesc":true}');export{r as comp,d as data};
