import{_ as s,Z as a,$ as t,a0 as p,a2 as n,a5 as c}from"./framework-e7ac220c.js";const e={},o=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"✨✨✨✨✨"),n("p",null,"抽象工厂模式是一种创建型设计模式，它提供一个接口，用于创建一系列相关或相互依赖的对象，而无需指定它们的具体类。抽象工厂模式可以看作是工厂方法模式的扩展，它在工厂方法模式的基础上，通过增加工厂的抽象层次，来实现对一组产品族的创建，而不是单一产品的创建。")],-1),l=c(`<p>下面是一个抽象工厂模式的示例代码：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 抽象产品A</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractProductA</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品A1</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductA1</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">AbstractProductA</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Product A1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品A2</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductA2</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">AbstractProductA</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Product A2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 抽象产品B</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractProductB</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品B1</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductB1</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">AbstractProductB</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Product B1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品B2</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductB2</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">AbstractProductB</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Product B2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 抽象工厂</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractFactory</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name">AbstractProductA</span> <span class="token function">CreateProductA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name">AbstractProductB</span> <span class="token function">CreateProductB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体工厂1</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteFactory1</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">AbstractFactory</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">AbstractProductA</span> <span class="token function">CreateProductA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ProductA1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">AbstractProductB</span> <span class="token function">CreateProductB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ProductB1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体工厂2</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteFactory2</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">AbstractFactory</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">AbstractProductA</span> <span class="token function">CreateProductA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ProductA2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">AbstractProductB</span> <span class="token function">CreateProductB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ProductB2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 客户端代码</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Run</span><span class="token punctuation">(</span><span class="token class-name">AbstractFactory</span> factory<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">AbstractProductA</span> productA <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">CreateProductA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        productA<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">AbstractProductB</span> productB <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">CreateProductB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        productB<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述示例代码中，我们定义了两个抽象产品 AbstractProductA 和 AbstractProductB ，分别有两个具体产品 ProductA1 、ProductA2 和 ProductB1 、ProductB2 。然后定义了一个抽象工厂 AbstractFactory ，里面包含两个创建抽象产品的抽象方法 CreateProductA 和 CreateProductB 。接着，定义了两个具体工厂 ConcreteFactory1 和 ConcreteFactory2 ，它们分别实现了 AbstractFactory 中的两个抽象方法，用于创建一组产品族。最后，客户端代码通过传入具体的工厂对象，来获取一组产品对象并进行操作。</p><p>抽象工厂模式的优点在于，它可以提供一个统一的接口，用于创建一组相关的对象，从而降低了客户端与具体产品之间的耦合度，使得客户端可以更加灵活地使用不同的产品组合。此外，抽象工厂模式还可以保证一组产品的一致性，即同一个工厂生产的产品族具有相同的风格和特征。</p><p>当然，抽象工厂模式也存在一些缺点，如增加新的具体产品或者具体工厂需要修改抽象工厂的接口，这将导致所有的具体工厂都需要进行相应的修改，同时也会影响到客户端代码的改动。</p><p>如果要完善上面的示例代码，可以考虑使用反射来动态创建具体产品 或者 引入工厂的注册机制来动态注册和创建具体工厂对象。</p><p>下面是一个使用反射来动态创建具体产品的改进版的示例代码：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 抽象产品A</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractProductA</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品A1</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductA1</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">AbstractProductA</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Product A1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品A2</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductA2</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">AbstractProductA</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Product A2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 抽象产品B</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractProductB</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品B1</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductB1</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">AbstractProductB</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Product B1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品B2</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductB2</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">AbstractProductB</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Product B2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 抽象工厂</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractFactory</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name">AbstractProductA</span> <span class="token function">CreateProductA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name">AbstractProductB</span> <span class="token function">CreateProductB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体工厂1</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteFactory1</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">AbstractFactory</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">AbstractProductA</span> <span class="token function">CreateProductA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">Type</span> type <span class="token operator">=</span> Type<span class="token punctuation">.</span><span class="token function">GetType</span><span class="token punctuation">(</span><span class="token string">&quot;AbstractFactoryPattern.ProductA1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> Activator<span class="token punctuation">.</span><span class="token function">CreateInstance</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token class-name">AbstractProductA</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">AbstractProductB</span> <span class="token function">CreateProductB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">Type</span> type <span class="token operator">=</span> Type<span class="token punctuation">.</span><span class="token function">GetType</span><span class="token punctuation">(</span><span class="token string">&quot;AbstractFactoryPattern.ProductB1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> Activator<span class="token punctuation">.</span><span class="token function">CreateInstance</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token class-name">AbstractProductB</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体工厂2</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteFactory2</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">AbstractFactory</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">AbstractProductA</span> <span class="token function">CreateProductA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">Type</span> type <span class="token operator">=</span> Type<span class="token punctuation">.</span><span class="token function">GetType</span><span class="token punctuation">(</span><span class="token string">&quot;AbstractFactoryPattern.ProductA2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> Activator<span class="token punctuation">.</span><span class="token function">CreateInstance</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token class-name">AbstractProductA</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">AbstractProductB</span> <span class="token function">CreateProductB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">Type</span> type <span class="token operator">=</span> Type<span class="token punctuation">.</span><span class="token function">GetType</span><span class="token punctuation">(</span><span class="token string">&quot;AbstractFactoryPattern.ProductB2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> Activator<span class="token punctuation">.</span><span class="token function">CreateInstance</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token class-name">AbstractProductB</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 客户端代码</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Run</span><span class="token punctuation">(</span><span class="token class-name">AbstractFactory</span> factory<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">AbstractProductA</span> productA <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">CreateProductA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        productA<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">AbstractProductB</span> productB <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">CreateProductB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        productB<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例代码中，我们使用了反射来动态创建具体产品，从而避免了修改抽象工厂和具体工厂的问题。这种方法虽然增加了一些运行时的开销，但是可以提高代码的灵活性和可扩展性。</p><p>下面是一个引入工厂的注册机制的改进版的示例代码：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 工厂注册表</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">FactoryRegistry</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">readonly</span> <span class="token class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> AbstractFactory<span class="token punctuation">&gt;</span></span> Factories <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> AbstractFactory<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Register</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> key<span class="token punctuation">,</span> <span class="token class-name">AbstractFactory</span> factory<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Factories<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> factory<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">AbstractFactory</span> <span class="token function">GetFactory</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> key<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> Factories<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 客户端代码</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Run</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> factoryKey<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">AbstractFactory</span> factory <span class="token operator">=</span> FactoryRegistry<span class="token punctuation">.</span><span class="token function">GetFactory</span><span class="token punctuation">(</span>factoryKey<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">AbstractProductA</span> productA <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">CreateProductA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token class-name">AbstractProductB</span> productB <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">CreateProductB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">// 使用产品对象</span>
        productA<span class="token punctuation">.</span><span class="token function">MethodA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        productB<span class="token punctuation">.</span><span class="token function">MethodB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 抽象工厂类 </span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractFactory</span> 
<span class="token punctuation">{</span> 
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name">AbstractProductA</span> <span class="token function">CreateProductA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name">AbstractProductB</span> <span class="token function">CreateProductB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>

<span class="token comment">// 具体工厂类A </span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteFactoryA</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">AbstractFactory</span></span> 
<span class="token punctuation">{</span> 
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">AbstractProductA</span> <span class="token function">CreateProductA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span> 
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConcreteProductA1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">AbstractProductB</span> <span class="token function">CreateProductB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConcreteProductB1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体工厂类B </span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteFactoryB</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">AbstractFactory</span></span> 
<span class="token punctuation">{</span> 
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">AbstractProductA</span> <span class="token function">CreateProductA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConcreteProductA2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">AbstractProductB</span> <span class="token function">CreateProductB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConcreteProductB2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 抽象产品A </span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractProductA</span> 
<span class="token punctuation">{</span> 
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">MethodA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品A1 </span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteProductA1</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">AbstractProductA</span></span> 
<span class="token punctuation">{</span> 
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">MethodA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span> 
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;ConcreteProductA1.MethodA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品A2 </span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteProductA2</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">AbstractProductA</span></span> 
<span class="token punctuation">{</span> 
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">MethodA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;ConcreteProductA2.MethodA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>

<span class="token comment">// 抽象产品B </span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractProductB</span> 
<span class="token punctuation">{</span> 
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">MethodB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品B1 </span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteProductB1</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">AbstractProductB</span></span> 
<span class="token punctuation">{</span> 
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">MethodB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span> 
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;ConcreteProductB1.MethodB&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品B2 </span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteProductB2</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">AbstractProductB</span></span> 
<span class="token punctuation">{</span> 
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">MethodB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span> 
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;ConcreteProductB2.MethodB&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>

<span class="token comment">// 客户端代码使用 </span>
<span class="token class-name">Client</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Client</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
FactoryRegistry<span class="token punctuation">.</span><span class="token function">Register</span><span class="token punctuation">(</span><span class="token string">&quot;FactoryA&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConcreteFactoryA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
FactoryRegistry<span class="token punctuation">.</span><span class="token function">Register</span><span class="token punctuation">(</span><span class="token string">&quot;FactoryB&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConcreteFactoryB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
client<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;FactoryA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
client<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;FactoryB&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个改进版的示例代码中，我们通过工厂注册表来注册具体工厂对象，并在客户端代码中通过传入工厂的 key 来获取相应的工厂对象，从而动态创建产品对象，避免了客户端代码的强依赖。这种注册机制也是很多现代框架和库所采用的方式，如 <code>ASP.NET Core</code> 中的依赖注入。</p>`,12);function i(u,r){return a(),t("div",null,[o,p(" more "),l])}const d=s(e,[["render",i],["__file","abstract-factory-pattern.html.vue"]]);export{d as default};
