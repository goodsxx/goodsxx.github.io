import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-e2ce661c.js";const t={},p=e(`<div class="hint-container tip"><p class="hint-container-title">✨✨✨✨✨</p><p>责任链模式（Chain of Responsibility Pattern）是一种行为型设计模式，它将请求的发送者和接收者解耦，并且允许多个对象对请求进行处理，这些对象构成一条链，每个对象都可以选择将请求处理或者传递给下一个对象。这种方式可以避免请求发送者与接收者之间的耦合，从而使多个对象可以处理同一个请求。</p></div><h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>责任链模式（Chain of Responsibility Pattern）是一种行为型设计模式，它将请求的发送者和接收者解耦，并且允许多个对象对请求进行处理，这些对象构成一条链，每个对象都可以选择将请求处理或者传递给下一个对象。这种方式可以避免请求发送者与接收者之间的耦合，从而使多个对象可以处理同一个请求。</p><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h2><ul><li>当需要多个对象处理同一个请求时，可以使用责任链模式，避免请求的发送者和接收者之间的耦合。</li><li>当需要动态地指定处理一个请求的对象集合时，可以使用责任链模式。</li><li>当需要在不明确接收者的情况下，动态地向多个对象中的一个提交请求时，可以使用责任链模式。</li></ul><h2 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h2><p><strong>优点</strong></p><ul><li>将请求的发送者和接收者解耦，可以避免请求发送者和接收者之间的耦合，从而使多个对象可以处理同一个请求。</li><li>可以动态地指定处理一个请求的对象集合。</li><li>可以在不明确接收者的情况下，动态地向多个对象中的一个提交请求。</li></ul><p><strong>缺点</strong></p><ul><li>可能会存在请求没有被处理的情况，如果没有正确地组织责任链，请求可能会被漏掉。</li><li>由于责任链的构建需要遍历整个链，因此处理请求的速度可能会比较慢。</li></ul><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><p>下面是一个简单的示例，演示了如何使用责任链模式来处理一系列请求。假设有一个文件处理器，它可以处理多种类型的文件，包括文本文件、音频文件和视频文件。我们可以使用责任链模式，将这些处理器链接在一起，当一个请求到来时，它会被传递给第一个处理器，如果第一个处理器无法处理该请求，那么请求会被传递给下一个处理器，以此类推，直到请求被处理为止。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System</span><span class="token punctuation">;</span>

<span class="token comment">// 定义请求类</span>
<span class="token keyword">class</span> <span class="token class-name">Request</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Type <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token function">Request</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> type<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Type <span class="token operator">=</span> type<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义处理器接口</span>
<span class="token keyword">interface</span> <span class="token class-name">Handler</span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">HandleRequest</span><span class="token punctuation">(</span><span class="token class-name">Request</span> request<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义具体处理器类</span>
<span class="token keyword">class</span> <span class="token class-name">TextFileHandler</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Handler</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Handler</span> nextHandler<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">SetNextHandler</span><span class="token punctuation">(</span><span class="token class-name">Handler</span> handler<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        nextHandler <span class="token operator">=</span> handler<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">HandleRequest</span><span class="token punctuation">(</span><span class="token class-name">Request</span> request<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>Type <span class="token operator">==</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;处理文本文件&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nextHandler <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            nextHandler<span class="token punctuation">.</span><span class="token function">HandleRequest</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span>
        <span class="token punctuation">{</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;无法处理该文件类型&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">AudioFileHandler</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Handler</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Handler</span> nextHandler<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">SetNextHandler</span><span class="token punctuation">(</span><span class="token class-name">Handler</span> handler<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        nextHandler <span class="token operator">=</span> handler<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">HandleRequest</span><span class="token punctuation">(</span><span class="token class-name">Request</span> request<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>Type <span class="token operator">==</span> <span class="token string">&quot;audio&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;处理音频文件&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nextHandler <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            nextHandler<span class="token punctuation">.</span><span class="token function">HandleRequest</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span>
        <span class="token punctuation">{</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;无法处理该文件类型&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">VideoFileHandler</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Handler</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Handler</span> nextHandler<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">SetNextHandler</span><span class="token punctuation">(</span><span class="token class-name">Handler</span> handler<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        nextHandler <span class="token operator">=</span> handler<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">HandleRequest</span><span class="token punctuation">(</span><span class="token class-name">Request</span> request<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>Type <span class="token operator">==</span> <span class="token string">&quot;video&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;处理视频文件&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nextHandler <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            nextHandler<span class="token punctuation">.</span><span class="token function">HandleRequest</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span>
        <span class="token punctuation">{</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;无法处理该文件类型&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义客户端类</span>
<span class="token keyword">class</span> <span class="token class-name">Client</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 创建处理器对象</span>
        <span class="token class-name">TextFileHandler</span> textHandler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">TextFileHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">AudioFileHandler</span> audioHandler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">AudioFileHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">VideoFileHandler</span> videoHandler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">VideoFileHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置处理器链</span>
        textHandler<span class="token punctuation">.</span><span class="token function">SetNextHandler</span><span class="token punctuation">(</span>audioHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
        audioHandler<span class="token punctuation">.</span><span class="token function">SetNextHandler</span><span class="token punctuation">(</span>videoHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 处理请求</span>
        <span class="token class-name">Request</span> request1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Request</span><span class="token punctuation">(</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        textHandler<span class="token punctuation">.</span><span class="token function">HandleRequest</span><span class="token punctuation">(</span>request1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Request</span> request2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Request</span><span class="token punctuation">(</span><span class="token string">&quot;audio&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        textHandler<span class="token punctuation">.</span><span class="token function">HandleRequest</span><span class="token punctuation">(</span>request2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Request</span> request3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Request</span><span class="token punctuation">(</span><span class="token string">&quot;video&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        textHandler<span class="token punctuation">.</span><span class="token function">HandleRequest</span><span class="token punctuation">(</span>request3<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Request</span> request4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Request</span><span class="token punctuation">(</span><span class="token string">&quot;image&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        textHandler<span class="token punctuation">.</span><span class="token function">HandleRequest</span><span class="token punctuation">(</span>request4<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，我们定义了一个 <code>Request</code> 类，它表示一个请求，具有一个 <code>Type</code> 属性，表示请求的类型。我们还定义了一个 <code>Handler</code> 接口，它表示处理器，具有一个 <code>HandleRequest</code> 方法，用于处理请求。我们还定义了三个具体的处理器类，分别是 <code>TextFileHandler</code>、 <code>AudioFileHandler</code> 和 <code>VideoFileHandler</code>，它们实现了 <code>Handler</code> 接口，并且具有一个 <code>SetNextHandler</code> 方法，用于设置下一个处理器。在 <code>HandleRequest</code> 方法中，如果当前处理器能够处理请求，那么它会处理请求，否则它会将请求传递给下一个处理器。最后，我们定义了一个 <code>Client</code> 类，用于演示如何使用责任链模式来处理请求。在 <code>Main</code> 方法中，我们首先创建了三个处理器对象，然后设置它们之间的关系，最后创建了四个请求，并将它们依次提交给处理器链来处理。</p><p>需要注意的是，上面的代码是一个简单的示例，实际上在使用责任链模式时，需要根据具体的场景来选择合适的处理器对象和处理器链。另外，如果处理器链过长，可能会导致处理请求的速度变慢，因此需要合理地设计处理器链，以提高处理请求的效率。</p>`,15),c=[p];function l(o,i){return s(),a("div",null,c)}const k=n(t,[["render",l],["__file","chain-of-responsibility-pattern.html.vue"]]);export{k as default};
