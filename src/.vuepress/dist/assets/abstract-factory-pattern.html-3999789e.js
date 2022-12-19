import{_ as s,Z as a,$ as e,a2 as t,a0 as n,a5 as p}from"./framework-4828f474.js";const c="/assets/1651493264856-9cb31bb8.png",o={},l=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"✨✨✨✨✨"),n("p",null,"抽象工厂模式（Abstract Factory Pattern）是围绕一个超级工厂创建其他工厂。该超级工厂又称为其他工厂的工厂。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。 在抽象工厂模式中，接口是负责创建一个相关对象的工厂，不需要显式指定它们的类。每个生成的工厂都能按照工厂模式提供对象。")],-1),i=p('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p><strong>意图：</strong> 提供一个创建一系列相关或相互依赖对象的接口，而无需指定它们具体的类。</p><p><strong>主要解决：</strong> 主要解决接口选择的问题。</p><p><strong>何时使用：</strong> 系统的产品有多于一个的产品族，而系统只消费其中某一族的产品。</p><p><strong>如何解决：</strong> 在一个产品族里面，定义多个产品。</p><p><strong>关键代码：</strong> 在一个工厂里聚合多个同类产品。</p><p><strong>应用实例：</strong> 工作了，为了参加一些聚会，肯定有两套或多套衣服吧，比如说有商务装（成套，一系列具体产品）、时尚装（成套，一系列具体产品），甚至对于一个家庭来说，可能有商务女装、商务男装、时尚女装、时尚男装，这些也都是成套的，即一系列具体产品。假设一种情况（现实中是不存在的，要不然，没法进入共产主义了，但有利于说明抽象工厂模式），在您的家中，某一个衣柜（具体工厂）只能存放某一种这样的衣服（成套，一系列具体产品），每次拿这种成套的衣服时也自然要从这个衣柜中取出了。用 OOP 的思想去理解，所有的衣柜（具体工厂）都是衣柜类的（抽象工厂）某一个，而每一件成套的衣服又包括具体的上衣（某一具体产品），裤子（某一具体产品），这些具体的上衣其实也都是上衣（抽象产品），具体的裤子也都是裤子（另一个抽象产品）。</p><p><strong>优点：</strong> 当一个产品族中的多个对象被设计成一起工作时，它能保证客户端始终只使用同一个产品族中的对象。</p><p><strong>缺点：</strong> 产品族扩展非常困难，要增加一个系列的某一产品，既要在抽象的 Creator 里加代码，又要在具体的里面加代码。</p><p><strong>使用场景：</strong> 1、QQ 换皮肤，一整套一起换。 2、生成不同操作系统的程序。</p><p><strong>注意事项：</strong> 产品族难扩展，产品等级易扩展。</p><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><p>我们将创建 <em>Shape</em> 和 <em>Color</em> 接口和实现这些接口的实体类。下一步是创建抽象工厂类 <em>AbstractFactory</em> 。接着定义工厂类 <em>ShapeFactory</em> 和 <em>ColorFactory</em> ，这两个工厂类都是扩展了 <em>AbstractFactory</em> 。然后创建一个工厂创造器/生成器类 <em>FactoryProducer</em> 。</p><p><em>AbstractFactoryPatternDemo</em> 类使用 <em>FactoryProducer</em> 来获取 <em>AbstractFactory</em> 对象。它将向 <em>AbstractFactory</em> 传递形状信息 <em>Shape</em> （ <em>CIRCLE / RECTANGLE / SQUARE</em> ），以便获取它所需对象的类型。同时它还向 <em>AbstractFactory</em> 传递颜色信息 <em>Color</em> （ <em>RED / GREEN / BLUE</em> ），以便获取它所需对象的类型。</p><figure><img src="'+c+`" alt="抽象工厂模式" tabindex="0" loading="lazy"><figcaption>抽象工厂模式</figcaption></figure><h3 id="为形状创建一个接口" tabindex="-1"><a class="header-anchor" href="#为形状创建一个接口" aria-hidden="true">#</a> 为形状创建一个接口</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">namespace</span> <span class="token namespace">AbstractFactoryPatternDemo</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 形状</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IShape</span>
    <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
        <span class="token doc-comment comment">/// 画</span>
        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建实现接口的实体类" tabindex="-1"><a class="header-anchor" href="#创建实现接口的实体类" aria-hidden="true">#</a> 创建实现接口的实体类</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">namespace</span> <span class="token namespace">AbstractFactoryPatternDemo</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 长方形</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IShape</span></span>
    <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;画了一个长方形&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">namespace</span> <span class="token namespace">AbstractFactoryPatternDemo</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 正方形</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IShape</span></span>
    <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;画了一个正方形&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">namespace</span> <span class="token namespace">AbstractFactoryPatternDemo</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 圆形</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IShape</span></span>
    <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;画了一个圆形&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="为颜色创建一个接口" tabindex="-1"><a class="header-anchor" href="#为颜色创建一个接口" aria-hidden="true">#</a> 为颜色创建一个接口</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">namespace</span> <span class="token namespace">AbstractFactoryPatternDemo</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 颜色</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IColor</span>
    <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
        <span class="token doc-comment comment">/// 填充</span>
        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建实现接口的实体类-1" tabindex="-1"><a class="header-anchor" href="#创建实现接口的实体类-1" aria-hidden="true">#</a> 创建实现接口的实体类</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">namespace</span> <span class="token namespace">AbstractFactoryPatternDemo</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 红色</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Red</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IColor</span></span>
    <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;填充红色&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">namespace</span> <span class="token namespace">AbstractFactoryPatternDemo</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 绿色</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Green</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IColor</span></span>
    <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;填充绿色&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">namespace</span> <span class="token namespace">AbstractFactoryPatternDemo</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 蓝色</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Blue</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IColor</span></span>
    <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;填充蓝色&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="为-color-和-shape-对象创建抽象类来获取工厂。" tabindex="-1"><a class="header-anchor" href="#为-color-和-shape-对象创建抽象类来获取工厂。" aria-hidden="true">#</a> 为 Color 和 Shape 对象创建抽象类来获取工厂。</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">namespace</span> <span class="token namespace">AbstractFactoryPatternDemo</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractFactory</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name">IColor</span> <span class="token function">GetColor</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> color<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name">IShape</span> <span class="token function">GetShape</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> shape<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建扩展了-abstractfactory-的工厂类-基于给定的信息生成实体类的对象。" tabindex="-1"><a class="header-anchor" href="#创建扩展了-abstractfactory-的工厂类-基于给定的信息生成实体类的对象。" aria-hidden="true">#</a> 创建扩展了 AbstractFactory 的工厂类，基于给定的信息生成实体类的对象。</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">namespace</span> <span class="token namespace">AbstractFactoryPatternDemo</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ShapeFactory</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">AbstractFactory</span></span>
    <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">IColor</span> <span class="token function">GetColor</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> color<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">IShape</span> <span class="token function">GetShape</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> shape<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">switch</span> <span class="token punctuation">(</span>shape<span class="token punctuation">.</span><span class="token function">ToUpper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">case</span> <span class="token string">&quot;CIRCLE&quot;</span><span class="token punctuation">:</span>
                    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token string">&quot;RECTANGLE&quot;</span><span class="token punctuation">:</span>
                    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Rectangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token string">&quot;SQUARE&quot;</span><span class="token punctuation">:</span>
                    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Square</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">default</span><span class="token punctuation">:</span>
                    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
              
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">namespace</span> <span class="token namespace">AbstractFactoryPatternDemo</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ColorFactory</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">AbstractFactory</span></span>
    <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">IColor</span> <span class="token function">GetColor</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> color<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">switch</span> <span class="token punctuation">(</span>color<span class="token punctuation">.</span><span class="token function">ToUpper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">case</span> <span class="token string">&quot;RED&quot;</span><span class="token punctuation">:</span>
                    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Red</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token string">&quot;GREEN&quot;</span><span class="token punctuation">:</span>
                    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Green</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token string">&quot;BLUE&quot;</span><span class="token punctuation">:</span>
                    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Blue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">default</span><span class="token punctuation">:</span>
                    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">IShape</span> <span class="token function">GetShape</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> shape<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建一个工厂创造器-生成器类-通过传递形状或颜色信息来获取工厂。" tabindex="-1"><a class="header-anchor" href="#创建一个工厂创造器-生成器类-通过传递形状或颜色信息来获取工厂。" aria-hidden="true">#</a> 创建一个工厂创造器/生成器类，通过传递形状或颜色信息来获取工厂。</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">namespace</span> <span class="token namespace">AbstractFactoryPatternDemo</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FactoryProducer</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">AbstractFactory</span> <span class="token function">GetFactory</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> choice<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>choice<span class="token punctuation">.</span><span class="token function">ToUpper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Equals</span><span class="token punctuation">(</span><span class="token string">&quot;SHAPE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ShapeFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>choice<span class="token punctuation">.</span><span class="token function">ToUpper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Equals</span><span class="token punctuation">(</span><span class="token string">&quot;COLOR&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ColorFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-factoryproducer-来获取-abstractfactory" tabindex="-1"><a class="header-anchor" href="#使用-factoryproducer-来获取-abstractfactory" aria-hidden="true">#</a> 使用 FactoryProducer 来获取 AbstractFactory</h3><p>通过传递类型信息来获取实体类的对象。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">//获取形状工厂</span>
<span class="token keyword">using</span> <span class="token namespace">AbstractFactoryPatternDemo</span><span class="token punctuation">;</span>

<span class="token class-name">AbstractFactory</span> shapeFactory <span class="token operator">=</span> FactoryProducer<span class="token punctuation">.</span><span class="token function">GetFactory</span><span class="token punctuation">(</span><span class="token string">&quot;SHAPE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//获取形状为 Circle 的对象</span>
<span class="token class-name">IShape</span> shape1 <span class="token operator">=</span> shapeFactory<span class="token punctuation">.</span><span class="token function">GetShape</span><span class="token punctuation">(</span><span class="token string">&quot;CIRCLE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//调用 Circle 的 Draw 方法</span>
shape1<span class="token punctuation">.</span><span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//获取形状为 Rectangle 的对象</span>
<span class="token class-name">IShape</span> shape2 <span class="token operator">=</span> shapeFactory<span class="token punctuation">.</span><span class="token function">GetShape</span><span class="token punctuation">(</span><span class="token string">&quot;RECTANGLE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//调用 Rectangle 的 Draw 方法</span>
shape2<span class="token punctuation">.</span><span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//获取形状为 Square 的对象</span>
<span class="token class-name">IShape</span> shape3 <span class="token operator">=</span> shapeFactory<span class="token punctuation">.</span><span class="token function">GetShape</span><span class="token punctuation">(</span><span class="token string">&quot;SQUARE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//调用 Square 的 Draw 方法</span>
shape3<span class="token punctuation">.</span><span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//获取颜色工厂</span>
<span class="token class-name">AbstractFactory</span> colorFactory <span class="token operator">=</span> FactoryProducer<span class="token punctuation">.</span><span class="token function">GetFactory</span><span class="token punctuation">(</span><span class="token string">&quot;COLOR&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//获取颜色为 Red 的对象</span>
<span class="token class-name">IColor</span> color1 <span class="token operator">=</span> colorFactory<span class="token punctuation">.</span><span class="token function">GetColor</span><span class="token punctuation">(</span><span class="token string">&quot;RED&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//调用 Red 的 Fill 方法</span>
color1<span class="token punctuation">.</span><span class="token function">Fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//获取颜色为 Green 的对象</span>
<span class="token class-name">IColor</span> color2 <span class="token operator">=</span> colorFactory<span class="token punctuation">.</span><span class="token function">GetColor</span><span class="token punctuation">(</span><span class="token string">&quot;GREEN&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//调用 Green 的 Fill 方法</span>
color2<span class="token punctuation">.</span><span class="token function">Fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//获取颜色为 Blue 的对象</span>
<span class="token class-name">IColor</span> color3 <span class="token operator">=</span> colorFactory<span class="token punctuation">.</span><span class="token function">GetColor</span><span class="token punctuation">(</span><span class="token string">&quot;BLUE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//调用 Blue 的 Fill 方法</span>
color3<span class="token punctuation">.</span><span class="token function">Fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行程序-输出结果" tabindex="-1"><a class="header-anchor" href="#执行程序-输出结果" aria-hidden="true">#</a> 执行程序，输出结果：</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>画了一个圆形
画了一个长方形
画了一个正方形
填充红色
填充绿色
填充蓝色
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39);function u(r,d){return a(),e("div",null,[l,t(" more "),i])}const m=s(o,[["render",u],["__file","abstract-factory-pattern.html.vue"]]);export{m as default};
