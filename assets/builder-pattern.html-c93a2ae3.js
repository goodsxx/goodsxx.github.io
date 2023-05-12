import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as p}from"./app-e2ce661c.js";const e={},t=p(`<div class="hint-container tip"><p class="hint-container-title">✨✨✨✨✨</p><p>建造者模式是一种创建型设计模式，它允许你将一个复杂对象的构建过程与其表示相分离，使得同样的构建过程可以创建不同的表示。建造者模式通常包含一个指挥者（Director）、抽象建造者（Builder）、具体建造者（ConcreteBuilder）和产品（Product）四个角色。</p></div><h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>建造者模式是一种创建型设计模式，它允许你将一个复杂对象的构建过程与其表示相分离，使得同样的构建过程可以创建不同的表示。建造者模式通常包含一个指挥者（Director）、抽象建造者（Builder）、具体建造者（ConcreteBuilder）和产品（Product）四个角色。</p><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h2><p>当一个产品有复杂的内部结构，其创建过程比较复杂且需要多个步骤时，可以考虑使用建造者模式。此外，建造者模式还适用于以下场景：</p><p>如果需要对不同的表示进行创建，可以使用建造者模式。例如，需要使用不同的材料或风格创建房屋。 如果需要在不知道产品内部构造的情况下直接创建复杂对象，可以使用建造者模式。例如，从数据库中读取数据并构建对象。 如果需要更好地控制产品创建流程，可以使用建造者模式。例如，需要按照特定的顺序构建对象。</p><h2 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h2><p><strong>优点</strong></p><ul><li>可以隔离复杂对象的创建和使用，使得相同的创建过程可以创建不同的产品表示。</li><li>可以更加精细地控制产品的创建过程，使得创建过程能够适应不同的需求。</li><li>可以更加方便地增加或修改产品的部件，使得系统更加灵活。</li></ul><p><strong>缺点</strong></p><ul><li>建造者模式需要定义多个类，增加了代码量。</li><li>建造者模式的使用范围受限，仅适用于相对复杂的产品创建过程。</li></ul><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><p>以下是建造者模式的 C# 代码示例。我们将创建一个包含多个部件的电脑，其中部件包括 CPU、主板、内存和硬盘等。具体建造者将实现创建不同种类的电脑。产品是由不同的部件组成的电脑。指挥者负责控制创建电脑的流程，具体建造者负责创建电脑的各个部件。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 产品类，包含多个部件</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Computer</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> parts <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">AddPart</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> part<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        parts<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>part<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">GetParts</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">string</span><span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span><span class="token string">&quot;, &quot;</span><span class="token punctuation">,</span> parts<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 抽象建造者，定义创建各个部件的抽象方法</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">ComputerBuilder</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token class-name">Computer</span> computer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Computer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">BuildCpu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">BuildMotherboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">BuildMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">BuildHardDrive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">Computer</span> <span class="token function">GetComputer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> computer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体建造者，实现创建各个部件的方法</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DesktopBuilder</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ComputerBuilder</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">BuildCpu</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        computer<span class="token punctuation">.</span><span class="token function">AddPart</span><span class="token punctuation">(</span><span class="token string">&quot;Desktop CPU&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">BuildMotherboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        computer<span class="token punctuation">.</span><span class="token function">AddPart</span><span class="token punctuation">(</span><span class="token string">&quot;Desktop Motherboard&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">BuildMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        computer<span class="token punctuation">.</span><span class="token function">AddPart</span><span class="token punctuation">(</span><span class="token string">&quot;Desktop Memory&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">BuildHardDrive</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        computer<span class="token punctuation">.</span><span class="token function">AddPart</span><span class="token punctuation">(</span><span class="token string">&quot;Desktop Hard Drive&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LaptopBuilder</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ComputerBuilder</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">BuildCpu</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        computer<span class="token punctuation">.</span><span class="token function">AddPart</span><span class="token punctuation">(</span><span class="token string">&quot;Laptop CPU&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">BuildMotherboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        computer<span class="token punctuation">.</span><span class="token function">AddPart</span><span class="token punctuation">(</span><span class="token string">&quot;Laptop Motherboard&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">BuildMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        computer<span class="token punctuation">.</span><span class="token function">AddPart</span><span class="token punctuation">(</span><span class="token string">&quot;Laptop Memory&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">BuildHardDrive</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        computer<span class="token punctuation">.</span><span class="token function">AddPart</span><span class="token punctuation">(</span><span class="token string">&quot;Laptop Hard Drive&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 指挥者，控制创建电脑的流程</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ComputerDirector</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">ComputerBuilder</span> computerBuilder<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">ComputerDirector</span><span class="token punctuation">(</span><span class="token class-name">ComputerBuilder</span> computerBuilder<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>computerBuilder <span class="token operator">=</span> computerBuilder<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ConstructComputer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        computerBuilder<span class="token punctuation">.</span><span class="token function">BuildCpu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        computerBuilder<span class="token punctuation">.</span><span class="token function">BuildMotherboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        computerBuilder<span class="token punctuation">.</span><span class="token function">BuildMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        computerBuilder<span class="token punctuation">.</span><span class="token function">BuildHardDrive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是使用建造者模式创建电脑的代码示例：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 创建一个具体的建造者，例如 DesktopBuilder 或 LaptopBuilder</span>
<span class="token class-name">ComputerBuilder</span> computerBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">DesktopBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建指挥者并将具体的建造者传递给它</span>
<span class="token class-name">ComputerDirector</span> computerDirector <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ComputerDirector</span><span class="token punctuation">(</span>computerBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 控制创建电脑的流程</span>
computerDirector<span class="token punctuation">.</span><span class="token function">ConstructComputer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 从具体的建造者中获取创建的电脑产品</span>
<span class="token class-name">Computer</span> computer <span class="token operator">=</span> computerBuilder<span class="token punctuation">.</span><span class="token function">GetComputer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 输出电脑的各个部件</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Computer parts: &quot;</span> <span class="token operator">+</span> computer<span class="token punctuation">.</span><span class="token function">GetParts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码输出的结果为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Computer parts: Desktop CPU, Desktop Motherboard, Desktop Memory, Desktop Hard Drive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以使用链式调用（Fluent Interface）的方式优化上述代码，让代码更加简洁易读。</p><p>具体实现方法是，在每个 <code>Builder</code> 类的方法中返回 <code>this</code>，这样就可以进行链式调用了。下面是使用链式调用优化后的代码示例：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 产品类</span>
<span class="token keyword">class</span> <span class="token class-name">Computer</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Cpu <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Motherboard <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Memory <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> HardDisk <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 抽象建造者类</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">ComputerBuilder</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token class-name">Computer</span> computer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Computer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name">ComputerBuilder</span> <span class="token function">BuildCpu</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> cpu<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name">ComputerBuilder</span> <span class="token function">BuildMotherboard</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> motherboard<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name">ComputerBuilder</span> <span class="token function">BuildMemory</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> memory<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name">ComputerBuilder</span> <span class="token function">BuildHardDisk</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> hardDisk<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">Computer</span> <span class="token function">GetComputer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> computer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体建造者类1</span>
<span class="token keyword">class</span> <span class="token class-name">ConcreteBuilder1</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ComputerBuilder</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">ComputerBuilder</span> <span class="token function">BuildCpu</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> cpu<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        computer<span class="token punctuation">.</span>Cpu <span class="token operator">=</span> cpu<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">ComputerBuilder</span> <span class="token function">BuildMotherboard</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> motherboard<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        computer<span class="token punctuation">.</span>Motherboard <span class="token operator">=</span> motherboard<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">ComputerBuilder</span> <span class="token function">BuildMemory</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> memory<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        computer<span class="token punctuation">.</span>Memory <span class="token operator">=</span> memory<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">ComputerBuilder</span> <span class="token function">BuildHardDisk</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> hardDisk<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        computer<span class="token punctuation">.</span>HardDisk <span class="token operator">=</span> hardDisk<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体建造者类2</span>
<span class="token keyword">class</span> <span class="token class-name">ConcreteBuilder2</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ComputerBuilder</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">ComputerBuilder</span> <span class="token function">BuildCpu</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> cpu<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        computer<span class="token punctuation">.</span>Cpu <span class="token operator">=</span> cpu<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">ComputerBuilder</span> <span class="token function">BuildMotherboard</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> motherboard<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        computer<span class="token punctuation">.</span>Motherboard <span class="token operator">=</span> motherboard<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">ComputerBuilder</span> <span class="token function">BuildMemory</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> memory<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        computer<span class="token punctuation">.</span>Memory <span class="token operator">=</span> memory<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">ComputerBuilder</span> <span class="token function">BuildHardDisk</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> hardDisk<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        computer<span class="token punctuation">.</span>HardDisk <span class="token operator">=</span> hardDisk<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 指挥者类</span>
<span class="token keyword">class</span> <span class="token class-name">Director</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Construct</span><span class="token punctuation">(</span><span class="token class-name">ComputerBuilder</span> builder<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> cpu<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> motherboard<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> memory<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> hardDisk<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        builder<span class="token punctuation">.</span><span class="token function">BuildCpu</span><span class="token punctuation">(</span>cpu<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">BuildMotherboard</span><span class="token punctuation">(</span>motherboard<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">BuildMemory</span><span class="token punctuation">(</span>memory<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">BuildHardDisk</span><span class="token punctuation">(</span>hardDisk<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中，每个具体建造者的方法都返回 <code>this</code>，这样就可以在使用时进行链式调用，可以看到，代码更加简洁易读，同时也可以避免漏掉某个步骤，提高了代码的健壮性。</p>`,22),c=[t];function o(l,i){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","builder-pattern.html.vue"]]);export{d as default};
