import{_ as s,X as a,Y as e,Z as t,$ as n,a3 as o}from"./framework-8e4c1295.js";const p={},c=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"✨✨✨✨✨"),n("p",null,"备忘录模式是一种行为型设计模式，它允许在不破坏封装性的前提下捕获对象的内部状态并在对象之外保存这个状态。这样，以后就可以将该对象恢复到先前的状态。")],-1),i=o(`<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>备忘录模式是一种行为型设计模式，它允许在不破坏封装性的前提下捕获对象的内部状态并在对象之外保存这个状态。这样，以后就可以将该对象恢复到先前的状态。</p><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h2><p>备忘录模式通常在以下情况下使用：</p><ul><li>当需要保存和恢复对象状态的历史记录时。</li><li>当直接访问对象的成员变量、获取器或设置器会暴露对象的实现细节时。</li><li>当需要通过某些机制来禁止客户端直接访问对象状态，以保持封装性时。</li></ul><h2 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h2><p><strong>备忘录模式的优点包括：</strong></p><ul><li>可以在不破坏对象封装的前提下保存和恢复对象状态。</li><li>可以实现撤销和重做操作，使用户可以在操作中进行任意次数的撤销和重做。</li></ul><p><strong>备忘录模式的缺点包括：</strong></p><ul><li>可能会占用大量内存，特别是在需要保存大量历史状态时。</li><li>可能会影响对象的性能，特别是在需要频繁保存和恢复状态时。</li></ul><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><p>下面是一个使用备忘录模式的示例，假设我们有一个文本编辑器，我们想要保存文本编辑器的状态以便以后可以恢复它。在这个示例中，我们创建了一个 <code>Memento</code> 类来保存文本编辑器的状态，以及一个 <code>Caretaker</code> 类来保存 <code>Memento</code> 对象的历史记录。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System</span><span class="token punctuation">;</span>

<span class="token comment">// Memento类保存文本编辑器的状态</span>
<span class="token keyword">class</span> <span class="token class-name">Memento</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Text <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">private</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token function">Memento</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> text<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Text <span class="token operator">=</span> text<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Originator类表示文本编辑器</span>
<span class="token keyword">class</span> <span class="token class-name">Editor</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">string</span></span> text <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Type</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> text<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>text <span class="token operator">+=</span> text<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">Memento</span> <span class="token function">Save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Memento</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Restore</span><span class="token punctuation">(</span><span class="token class-name">Memento</span> memento<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        text <span class="token operator">=</span> memento<span class="token punctuation">.</span>Text<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> text<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Caretaker类保存Memento对象的历史记录</span>
<span class="token keyword">class</span> <span class="token class-name">History</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">Editor</span> editor<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">Stack<span class="token punctuation">&lt;</span>Memento<span class="token punctuation">&gt;</span></span> mementos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Stack<span class="token punctuation">&lt;</span>Memento<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">History</span><span class="token punctuation">(</span><span class="token class-name">Editor</span> editor<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>editor <span class="token operator">=</span> editor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Backup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        mementos<span class="token punctuation">.</span><span class="token function">Push</span><span class="token punctuation">(</span>editor<span class="token punctuation">.</span><span class="token function">Save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>mementos<span class="token punctuation">.</span>Count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

        <span class="token class-name"><span class="token keyword">var</span></span> memento <span class="token operator">=</span> mementos<span class="token punctuation">.</span><span class="token function">Pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        editor<span class="token punctuation">.</span><span class="token function">Restore</span><span class="token punctuation">(</span>memento<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例</span>
<span class="token class-name"><span class="token keyword">var</span></span> editor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Editor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> history <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">History</span><span class="token punctuation">(</span>editor<span class="token punctuation">)</span><span class="token punctuation">;</span>

editor<span class="token punctuation">.</span><span class="token function">Type</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
history<span class="token punctuation">.</span><span class="token function">Backup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

editor<span class="token punctuation">.</span><span class="token function">Type</span><span class="token punctuation">(</span><span class="token string">&quot; World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
history<span class="token punctuation">.</span><span class="token function">Backup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>editor<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 &quot;Hello World&quot;</span>

history<span class="token punctuation">.</span><span class="token function">Undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>editor<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码示例中，我们创建了三个类：<code>Memento</code> 类、<code>Editor</code> 类和 <code>History</code> 类。<code>Editor</code> 类表示文本编辑器，它有一个成员变量 <code>text</code>，表示文本编辑器中当前的文本内容，以及 <code>Type()</code> 方法用于在文本编辑器中输入文本。<code>Editor</code> 类还有两个方法：<code>Save()</code> 和 <code>Restore()</code>。<code>Save()</code> 方法创建一个新的 <code>Memento</code> 对象并将当前文本内容保存在其中。<code>Restore()</code> 方法接受一个 <code>Memento</code> 对象，并将文本编辑器的状态恢复为该 <code>Memento</code> 对象中保存的状态。</p><p><code>Memento</code> 类有一个成员变量 <code>Text</code>，表示保存的文本内容。构造函数接受一个字符串参数，该参数是文本编辑器的当前文本内容。</p><p><code>History</code> 类用于保存 <code>Memento</code> 对象的历史记录。它有一个成员变量 <code>editor</code>，表示被保存的文本编辑器对象。<code>History</code> 类还有两个方法：<code>Backup()</code> 和 <code>Undo()</code>。<code>Backup()</code> 方法创建一个新的 <code>Memento</code> 对象并将其保存在历史记录中。<code>Undo()</code> 方法从历史记录中弹出最近保存的 <code>Memento</code> 对象，并将其传递给文本编辑器的 <code>Restore()</code> 方法来恢复编辑器的状态。</p><p>在示例中，我们创建了一个文本编辑器和一个历史记录对象。我们使用 <code>editor.Type()</code> 方法输入了两个文本字符串，并使用 <code>history.Backup()</code> 方法将它们的状态保存在历史记录中。最后，我们调用 <code>editor.ToString()</code> 方法以获取文本编辑器的当前状态，并输出它。在此之后，我们调用 <code>history.Undo()</code> 方法撤销最后一次输入，再次调用 <code>editor.ToString()</code> 方法以获取当前状态，并输出它。</p><p>这个示例演示了备忘录模式的基本概念。在实际应用中，备忘录模式可以用于保存对象状态的历史记录，实现撤销和重做操作，以及防止客户端直接访问对象状态，保持封装性。</p>`,18);function l(u,d){return a(),e("div",null,[c,t(" more "),i])}const k=s(p,[["render",l],["__file","memento-pattern.html.vue"]]);export{k as default};
