import{_ as s,X as a,Y as e,Z as p,$ as n,a3 as t}from"./framework-8e4c1295.js";const c={},o=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"✨✨✨✨✨"),n("p",null,"观察者模式（Observer Pattern），也称作发布-订阅模式（Publish-Subscribe Pattern），它是一种行为型设计模式，它定义了一种一对多的依赖关系，使得当一个对象状态发生改变时，所有依赖于它的对象都能够自动收到通知并进行更新。")],-1),l=t(`<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>观察者模式是一种行为型设计模式，它定义了一种一对多的依赖关系，使得当一个对象状态发生改变时，所有依赖于它的对象都能够自动收到通知并进行更新。</p><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h2><p>观察者模式通常在以下情况下使用：</p><ul><li>当一个对象的改变需要同时改变其他对象的状态时。</li><li>当您不知道有多少对象需要改变状态时。</li><li>这种模式非常适合GUI编程中的事件处理，当一个控件状态改变时，需要自动通知所有相关的控件进行更新。</li></ul><h2 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h2><p><strong>观察者模式的优点：</strong></p><ul><li>可以实现松耦合，被观察者和观察者之间没有直接的依赖关系，增加了系统的灵活性和可扩展性。</li><li>支持广播通信，被观察者一次性通知多个观察者，提高了系统的效率和性能。</li></ul><p><strong>观察者模式的缺点：</strong></p><ul><li>观察者过多时会导致性能问题。</li><li>如果被观察者和观察者之间的通信是双向的，则容易引起循环依赖问题。</li></ul><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><p>下面是一个使用观察者模式的简单示例，假设有一个新闻发布者，它可以将最新新闻发布给订阅者。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Collections<span class="token punctuation">.</span>Generic</span><span class="token punctuation">;</span>

<span class="token comment">// 定义观察者接口</span>
<span class="token keyword">interface</span> <span class="token class-name">IObserver</span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Update</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> news<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义被观察者接口</span>
<span class="token keyword">interface</span> <span class="token class-name">IObservable</span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">AddObserver</span><span class="token punctuation">(</span><span class="token class-name">IObserver</span> observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">RemoveObserver</span><span class="token punctuation">(</span><span class="token class-name">IObserver</span> observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">NotifyObservers</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> news<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实现被观察者接口</span>
<span class="token keyword">class</span> <span class="token class-name">NewsPublisher</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IObservable</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">List<span class="token punctuation">&lt;</span>IObserver<span class="token punctuation">&gt;</span></span> observers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span>IObserver<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">AddObserver</span><span class="token punctuation">(</span><span class="token class-name">IObserver</span> observer<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        observers<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">RemoveObserver</span><span class="token punctuation">(</span><span class="token class-name">IObserver</span> observer<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        observers<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">NotifyObservers</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> news<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> observer <span class="token keyword">in</span> observers<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            observer<span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span>news<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">PublishNews</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> news<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;发布新闻：</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">news</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">NotifyObservers</span><span class="token punctuation">(</span>news<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实现观察者接口</span>
<span class="token keyword">class</span> <span class="token class-name">Subscriber</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IObserver</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">string</span></span> name<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">Subscriber</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> name<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Update</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> news<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;订阅者 </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">name</span><span class="token punctuation">}</span></span><span class="token string"> 接收到新闻：</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">news</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Program</span>
<span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">NewsPublisher</span> publisher <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">NewsPublisher</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Subscriber</span> subscriber1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Subscriber</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Subscriber</span> subscriber2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Subscriber</span><span class="token punctuation">(</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        publisher<span class="token punctuation">.</span><span class="token function">AddObserver</span><span class="token punctuation">(</span>subscriber1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        publisher<span class="token punctuation">.</span><span class="token function">AddObserver</span><span class="token punctuation">(</span>subscriber2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        publisher<span class="token punctuation">.</span><span class="token function">PublishNews</span><span class="token punctuation">(</span><span class="token string">&quot;中国获得世界杯冠军！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        publisher<span class="token punctuation">.</span><span class="token function">RemoveObserver</span><span class="token punctuation">(</span>subscriber2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        publisher<span class="token punctuation">.</span><span class="token function">PublishNews</span><span class="token punctuation">(</span><span class="token string">&quot;苹果发布新款iPhone！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        Console<span class="token punctuation">.</span><span class="token function">ReadKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们定义了两个接口 <code>IObserver</code> 和 <code>IObservable</code>，它们分别代表观察者和被观察者。我们实现了被观察者接口 <code>NewsPublisher</code>，其中包含一个观察者列表，并实现了添加观察者、删除观察者和通知观察者的方法。我们还实现了观察者接口 <code>Subscriber</code>，其中包含一个名字属性和更新方法。</p><p>在 <code>Main</code> 方法中，我们创建了一个新的 <code>NewsPublisher</code> 对象，并添加了两个观察者 <code>subscriber1</code> 和 <code>subscriber2</code>。然后我们调用 <code>PublishNews</code> 方法发布了两个新闻，并在控制台中输出了订阅者收到新闻的消息。最后，我们从观察者列表中删除了 <code>subscriber2</code>，并再次发布了一条新闻，这次只有 <code>subscriber1</code> 收到了新闻。</p><p>这是一个简单的示例，实际使用中可能会更加复杂。但是通过这个例子，您应该能够了解观察者模式的基本原理和使用方法。</p><p>注：上面的代码示例有一些潜在的优化空间，例如可以将 <code>observers</code> 字段改为使用 <code>HashSet&lt;IObserver&gt;</code> 来避免重复添加观察者，可以使用 C#8.0 中的 using 块简化代码等。</p><h2 id="优化" tabindex="-1"><a class="header-anchor" href="#优化" aria-hidden="true">#</a> 优化</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Collections<span class="token punctuation">.</span>Generic</span><span class="token punctuation">;</span>

<span class="token keyword">namespace</span> <span class="token namespace">ObserverPattern</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 定义观察者接口</span>
    <span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IObserver<span class="token punctuation">&lt;</span><span class="token keyword">in</span> T<span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 定义更新方法</span>
        <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Update</span><span class="token punctuation">(</span><span class="token class-name">T</span> subject<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 定义被观察者接口</span>
    <span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IObservable<span class="token punctuation">&lt;</span><span class="token keyword">out</span> T<span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 添加观察者</span>
        <span class="token return-type class-name">IDisposable</span> <span class="token function">Subscribe</span><span class="token punctuation">(</span><span class="token class-name">IObserver<span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> observer<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 发布消息</span>
        <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Publish</span><span class="token punctuation">(</span><span class="token class-name">T</span> subject<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 实现被观察者接口</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NewsPublisher</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IObservable<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 使用 HashSet 来保存观察者列表</span>
        <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">HashSet<span class="token punctuation">&lt;</span>IObserver<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> observers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HashSet<span class="token punctuation">&lt;</span>IObserver<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 添加观察者</span>
        <span class="token keyword">public</span> <span class="token return-type class-name">IDisposable</span> <span class="token function">Subscribe</span><span class="token punctuation">(</span><span class="token class-name">IObserver<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> observer<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            observers<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Unsubscriber</span><span class="token punctuation">(</span>observers<span class="token punctuation">,</span> observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 发布消息</span>
        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Publish</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> subject<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// 通知所有观察者</span>
            <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> observer <span class="token keyword">in</span> observers<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                observer<span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span>subject<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 内部类，用于实现 IDisposable 接口</span>
        <span class="token keyword">private</span> <span class="token keyword">class</span> <span class="token class-name">Unsubscriber</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IDisposable</span></span>
        <span class="token punctuation">{</span>
            <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">HashSet<span class="token punctuation">&lt;</span>IObserver<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> _observers<span class="token punctuation">;</span>
            <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">IObserver<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> _observer<span class="token punctuation">;</span>

            <span class="token keyword">public</span> <span class="token function">Unsubscriber</span><span class="token punctuation">(</span><span class="token class-name">HashSet<span class="token punctuation">&lt;</span>IObserver<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> observers<span class="token punctuation">,</span> <span class="token class-name">IObserver<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> observer<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                _observers <span class="token operator">=</span> observers<span class="token punctuation">;</span>
                _observer <span class="token operator">=</span> observer<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                _observers<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span>_observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 实现观察者接口</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Subscriber</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IObserver<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name"><span class="token keyword">string</span></span> _name<span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token function">Subscriber</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> name<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            _name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 更新方法</span>
        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Update</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> subject<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">_name</span><span class="token punctuation">}</span></span><span class="token string"> 收到新闻：</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">subject</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">class</span> <span class="token class-name">Program</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// 创建新闻发布者</span>
            <span class="token class-name"><span class="token keyword">var</span></span> publisher <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">NewsPublisher</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 添加观察者</span>
            <span class="token class-name"><span class="token keyword">var</span></span> subscriber1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Subscriber</span><span class="token punctuation">(</span><span class="token string">&quot;小明&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            publisher<span class="token punctuation">.</span><span class="token function">Subscribe</span><span class="token punctuation">(</span>subscriber1<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name"><span class="token keyword">var</span></span> subscriber2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Subscriber</span><span class="token punctuation">(</span><span class="token string">&quot;小红&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            publisher<span class="token punctuation">.</span><span class="token function">Subscribe</span><span class="token punctuation">(</span>subscriber2<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 发布消息</span>
            publisher<span class="token punctuation">.</span><span class="token function">Publish</span><span class="token punctuation">(</span><span class="token string">&quot;中国获得世界杯冠军！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 取消订阅观察者 2</span>
            <span class="token class-name"><span class="token keyword">var</span></span> unsubscriber <span class="token operator">=</span> publisher<span class="token punctuation">.</span><span class="token function">Subscribe</span><span class="token punctuation">(</span>subscriber2<span class="token punctuation">)</span><span class="token punctuation">;</span>
            unsubscriber<span class="token punctuation">.</span><span class="token function">Dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 发布消息</span>
            publisher<span class="token punctuation">.</span><span class="token function">Publish</span><span class="token punctuation">(</span><span class="token string">&quot;苹果发布新款 iPhone！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            Console<span class="token punctuation">.</span><span class="token function">ReadKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个优化版本的代码中，我们使用了 <code>HashSet</code> 来存储观察者列表，这样就避免了重复添加观察者的问题。同时，我们还实现了 <code>IDisposable</code> 接口，这样就可以通过 <code>using</code> 块来自动释放资源。</p><p>除此之外，我们还改变了一些命名和参数的名称，对代码进行了重构，这样代码就更加简洁、易读和易于维护了。</p>`,21);function i(u,r){return a(),e("div",null,[o,p(" more "),l])}const d=s(c,[["render",i],["__file","observer-pattern.html.vue"]]);export{d as default};
