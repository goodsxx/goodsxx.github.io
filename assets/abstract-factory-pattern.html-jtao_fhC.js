import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as t}from"./app-DbRsw7jK.js";const e={},p=t(`<div class="hint-container tip"><p class="hint-container-title">✨✨✨✨✨</p><p>抽象工厂模式是一种创建型设计模式，它提供一个接口，用于创建一系列相关或相互依赖的对象，而无需指定它们的具体类。抽象工厂模式可以看作是工厂方法模式的扩展，它在工厂方法模式的基础上，通过增加工厂的抽象层次，来实现对一组产品族的创建，而不是单一产品的创建。</p></div><h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span>定义</span></a></h2><p>抽象工厂模式是一种创建型设计模式，它可以提供一个接口用于创建一系列相关或相互依赖的对象，而无需指定具体类。这种模式属于对象创建型模式。</p><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h2><ul><li>当一个系统需要一系列相互关联或相互依赖的对象时，可以使用抽象工厂模式，这些对象之间存在固定的依赖关系。</li><li>当一个系统需要多个产品族中的产品对象，而且这些产品族中的产品对象之间存在一定的约束或逻辑关系时，可以使用抽象工厂模式。</li></ul><h2 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点"><span>优缺点</span></a></h2><p><strong>优点</strong></p><ul><li>可以保证同一工厂生产的所有产品对象都是相互兼容的。这样可以使得客户端代码无需关心具体产品的类名，只需关心产品所属的接口或抽象类。</li><li>可以封装创建产品对象的过程，使得客户端代码和具体产品实现分离，从而使系统更易于扩展和维护。</li><li>可以更容易地替换产品系列，只需要更改具体工厂即可。</li></ul><p><strong>缺点</strong></p><ul><li>抽象工厂模式的最大缺点是扩展新的产品族比较困难，因为需要更改抽象工厂接口及其所有的实现类。</li><li>在增加新的产品等级结构时，需要更改所有的具体工厂类，这可能会带来较大的代码量。</li></ul><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h2><p>下面是一个使用抽象工厂模式的示例程序，该程序使用抽象工厂模式来创建不同类型的按钮和文本框：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">// 抽象产品类：按钮</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Button</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Paint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品类：Windows 按钮</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WindowsButton</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Button</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Paint</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Painting a Windows button.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品类：MacOS 按钮</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MacOSButton</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Button</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Paint</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Painting a MacOS button.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 抽象产品类：文本框</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">TextBox</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Paint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品类：Windows 文本框</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WindowsTextBox</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">TextBox</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Paint</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Painting a Windows text box.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品类：MacOS 文本框</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MacOSTextBox</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">TextBox</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Paint</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Painting a MacOS text box.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 抽象工厂类</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">GUIFactory</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name">Button</span> <span class="token function">CreateButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name">TextBox</span> <span class="token function">CreateTextBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体工厂类：Windows 工厂</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WindowsFactory</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">GUIFactory</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">Button</span> <span class="token function">CreateButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">WindowsButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">TextBox</span> <span class="token function">CreateTextBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">WindowsTextBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体工厂类：MacOS 工厂</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MacOSFactory</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">GUIFactory</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">Button</span> <span class="token function">CreateButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">MacOSButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">TextBox</span> <span class="token function">CreateTextBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">MacOSTextBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 客户端代码</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">GUIFactory</span> factory<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">Client</span><span class="token punctuation">(</span><span class="token class-name">GUIFactory</span> factory<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>factory <span class="token operator">=</span> factory<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Paint</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">Button</span> button <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">CreateButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        button<span class="token punctuation">.</span><span class="token function">Paint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">TextBox</span> textBox <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">CreateTextBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        textBox<span class="token punctuation">.</span><span class="token function">Paint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例程序</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Program</span>
<span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 使用 Windows 工厂创建控件</span>
        <span class="token class-name">GUIFactory</span> windowsFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">WindowsFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Client</span> windowsClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Client</span><span class="token punctuation">(</span>windowsFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>
        windowsClient<span class="token punctuation">.</span><span class="token function">Paint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 使用 MacOS 工厂创建控件</span>
        <span class="token class-name">GUIFactory</span> macosFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">MacOSFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Client</span> macosClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Client</span><span class="token punctuation">(</span>macosFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>
        macosClient<span class="token punctuation">.</span><span class="token function">Paint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述示例代码中，抽象工厂模式使用了抽象工厂类 <code>GUIFactory</code> 和其具体实现类 <code>WindowsFactory</code> 和 <code>MacOSFactory</code>。每个具体工厂类都可以创建一组相关的产品对象（按钮和文本框），并实现抽象工厂类中定义的抽象方法。客户端代码使用特定的工厂对象创建按钮和文本框，并使用这些控件执行任务。</p>`,14),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","abstract-factory-pattern.html.vue"]]),k=JSON.parse('{"path":"/articles/design-pattern/abstract-factory-pattern.html","title":"抽象工厂模式","lang":"zh-CN","frontmatter":{"title":"抽象工厂模式","date":"2022-05-02T00:00:00.000Z","category":["设计模式"],"tag":["设计模式","创建型模式"],"timeline":true,"order":3,"description":"✨✨✨✨✨ 抽象工厂模式是一种创建型设计模式，它提供一个接口，用于创建一系列相关或相互依赖的对象，而无需指定它们的具体类。抽象工厂模式可以看作是工厂方法模式的扩展，它在工厂方法模式的基础上，通过增加工厂的抽象层次，来实现对一组产品族的创建，而不是单一产品的创建。","head":[["meta",{"property":"og:url","content":"http://blog.goodsxx.cn/articles/design-pattern/abstract-factory-pattern.html"}],["meta",{"property":"og:site_name","content":"Growing Notes"}],["meta",{"property":"og:title","content":"抽象工厂模式"}],["meta",{"property":"og:description","content":"✨✨✨✨✨ 抽象工厂模式是一种创建型设计模式，它提供一个接口，用于创建一系列相关或相互依赖的对象，而无需指定它们的具体类。抽象工厂模式可以看作是工厂方法模式的扩展，它在工厂方法模式的基础上，通过增加工厂的抽象层次，来实现对一组产品族的创建，而不是单一产品的创建。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-23T07:11:44.000Z"}],["meta",{"property":"article:author","content":"SongXinXin"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:tag","content":"创建型模式"}],["meta",{"property":"article:published_time","content":"2022-05-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-23T07:11:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"抽象工厂模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-02T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-23T07:11:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"SongXinXin\\"}]}"]]},"headers":[{"level":2,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":2,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]},{"level":2,"title":"优缺点","slug":"优缺点","link":"#优缺点","children":[]},{"level":2,"title":"代码示例","slug":"代码示例","link":"#代码示例","children":[]}],"git":{"createdTime":1668444644000,"updatedTime":1677136304000,"contributors":[{"name":"SongXinXin","email":"1368084801@qq.com","commits":2}]},"readingTime":{"minutes":3.23,"words":969},"filePathRelative":"articles/design-pattern/abstract-factory-pattern.md","localizedDate":"2022年5月2日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">✨✨✨✨✨</p>\\n<p>抽象工厂模式是一种创建型设计模式，它提供一个接口，用于创建一系列相关或相互依赖的对象，而无需指定它们的具体类。抽象工厂模式可以看作是工厂方法模式的扩展，它在工厂方法模式的基础上，通过增加工厂的抽象层次，来实现对一组产品族的创建，而不是单一产品的创建。</p>\\n</div>\\n","autoDesc":true}');export{d as comp,k as data};
