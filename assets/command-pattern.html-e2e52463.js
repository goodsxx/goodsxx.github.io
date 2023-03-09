import{_ as s,X as a,Y as p,Z as t,$ as n,a3 as e}from"./framework-ed7f99a9.js";const o={},c=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"✨✨✨✨✨"),n("p",null,"命令模式(Command Pattern)是一种行为型设计模式，它允许将操作请求封装为一个对象，从而使你可以将请求的各个参数（命令）进行排队、记录日志、撤销等操作。通过将请求封装成对象，可以使用不同的请求来参数化其他对象。同时，可以将请求存储在队列中，实现任务的异步执行、延迟执行、撤销等功能。")],-1),i=e(`<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>命令模式(Command Pattern)是一种行为型设计模式，它允许将操作请求封装为一个对象，从而使你可以将请求的各个参数（命令）进行排队、记录日志、撤销等操作。通过将请求封装成对象，可以使用不同的请求来参数化其他对象。同时，可以将请求存储在队列中，实现任务的异步执行、延迟执行、撤销等功能。</p><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h2><ul><li>需要将操作请求发送给不同的接收器，且不知道接收器具体是谁。</li><li>需要实现撤销、恢复等功能。</li><li>需要将一组操作组合成一个复合操作，即宏命令。</li><li>需要将请求放入队列中，并进行异步处理或延迟处理。</li></ul><h2 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h2><p><strong>优点：</strong></p><ul><li>降低系统的耦合度。发送请求的对象与接收请求的对象之间没有直接的联系，使得系统中的相互依赖关系变得松散。</li><li>容易扩展新的命令。增加新的具体命令类很容易，无需修改原有代码，符合“开闭原则”。</li><li>可以实现宏命令，将一组命令装配成一个组合命令。</li></ul><p><strong>缺点：</strong></p><ul><li>如果有过多的具体命令类，将导致系统变得复杂。</li><li>命令模式的实现可能需要使用大量的代码来支持各种请求类型。</li></ul><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><p>以下是一个简单的用 C# 实现的命令模式案例。假设我们有一个文本编辑器，用户可以在文本编辑器中执行撤销、重做、剪切、复制、粘贴等操作。我们将每个操作抽象为一个接口 <code>ICommand</code>，并实现具体的命令类 <code>CutCommand</code>、<code>CopyCommand</code>、<code>PasteCommand</code>、<code>UndoCommand</code>、<code>RedoCommand</code>。在这个例子中，我们使用队列来存储命令对象，并按照先进先出的顺序执行它们。我们还可以使用栈来实现撤销、重做等功能。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 命令接口</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ICommand</span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 剪切命令</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CutCommand</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ICommand</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">Editor</span> editor<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">CutCommand</span><span class="token punctuation">(</span><span class="token class-name">Editor</span> editor<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>editor <span class="token operator">=</span> editor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        editor<span class="token punctuation">.</span><span class="token function">Cut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 复制命令</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CopyCommand</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ICommand</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">Editor</span> editor<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">CopyCommand</span><span class="token punctuation">(</span><span class="token class-name">Editor</span> editor<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>editor <span class="token operator">=</span> editor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        editor<span class="token punctuation">.</span><span class="token function">Copy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 粘贴命令</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PasteCommand</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ICommand</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">Editor</span> editor<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">PasteCommand</span><span class="token punctuation">(</span><span class="token class-name">Editor</span> editor<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>editor <span class="token operator">=</span> editor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        editor<span class="token punctuation">.</span><span class="token function">Paste</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 撤销命令</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UndoCommand</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ICommand</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">Editor</span> editor<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">UndoCommand</span><span class="token punctuation">(</span><span class="token class-name">Editor</span> editor<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>editor <span class="token operator">=</span> editor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        editor<span class="token punctuation">.</span><span class="token function">Undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 重做命令</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedoCommand</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ICommand</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">Editor</span> editor<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">RedoCommand</span><span class="token punctuation">(</span><span class="token class-name">Editor</span> editor<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>editor <span class="token operator">=</span> editor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        editor<span class="token punctuation">.</span><span class="token function">Redo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 文本编辑器</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Editor</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">Stack<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> undoStack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Stack<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">Stack<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> redoStack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Stack<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">string</span></span> clipboard <span class="token operator">=</span> <span class="token keyword">string</span><span class="token punctuation">.</span>Empty<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">string</span></span> text <span class="token operator">=</span> <span class="token keyword">string</span><span class="token punctuation">.</span>Empty<span class="token punctuation">;</span>

    <span class="token comment">// 剪切</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Cut</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">.</span><span class="token function">IsNullOrEmpty</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

        clipboard <span class="token operator">=</span> text<span class="token punctuation">;</span>
        text <span class="token operator">=</span> <span class="token keyword">string</span><span class="token punctuation">.</span>Empty<span class="token punctuation">;</span>

        undoStack<span class="token punctuation">.</span><span class="token function">Push</span><span class="token punctuation">(</span>clipboard<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 复制</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Copy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">.</span><span class="token function">IsNullOrEmpty</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

        clipboard <span class="token operator">=</span> text<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 粘贴</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Paste</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        text <span class="token operator">+=</span> clipboard<span class="token punctuation">;</span>

        undoStack<span class="token punctuation">.</span><span class="token function">Push</span><span class="token punctuation">(</span>clipboard<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 撤销</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>undoStack<span class="token punctuation">.</span>Count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

        redoStack<span class="token punctuation">.</span><span class="token function">Push</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
        text <span class="token operator">=</span> undoStack<span class="token punctuation">.</span><span class="token function">Pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 重做</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Redo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>redoStack<span class="token punctuation">.</span>Count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

        undoStack<span class="token punctuation">.</span><span class="token function">Push</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
        text <span class="token operator">=</span> redoStack<span class="token punctuation">.</span><span class="token function">Pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 显示文本</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">DisplayText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Text: &quot;</span> <span class="token operator">+</span> text<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 命令队列</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CommandQueue</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">Queue<span class="token punctuation">&lt;</span>ICommand<span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Queue<span class="token punctuation">&lt;</span>ICommand<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 添加命令</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">AddCommand</span><span class="token punctuation">(</span><span class="token class-name">ICommand</span> command<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        queue<span class="token punctuation">.</span><span class="token function">Enqueue</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 执行命令队列</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ExecuteCommands</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>Count <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token class-name">ICommand</span> command <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">Dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            command<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 客户端代码</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">Editor</span> editor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Editor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">CommandQueue</span> commandQueue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">CommandQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        commandQueue<span class="token punctuation">.</span><span class="token function">AddCommand</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">CutCommand</span><span class="token punctuation">(</span>editor<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        commandQueue<span class="token punctuation">.</span><span class="token function">AddCommand</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">PasteCommand</span><span class="token punctuation">(</span>editor<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        commandQueue<span class="token punctuation">.</span><span class="token function">AddCommand</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token return-type class-name">UndoCommand</span>
        commandQueue<span class="token punctuation">.</span><span class="token function">AddCommand</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">RedoCommand</span><span class="token punctuation">(</span>editor<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        commandQueue<span class="token punctuation">.</span><span class="token function">AddCommand</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">CopyCommand</span><span class="token punctuation">(</span>editor<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        commandQueue<span class="token punctuation">.</span><span class="token function">ExecuteCommands</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        editor<span class="token punctuation">.</span><span class="token function">DisplayText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个案例中，我们使用了 <code>ICommand</code> 接口来表示每个操作，每个具体的命令类都实现了该接口，并通过构造函数注入了一个 <code>Editor</code> 对象，以便在执行时对文本进行操作。</p><p><code>Editor</code> 类实现了剪切、复制、粘贴、撤销和重做操作，它使用两个栈来实现撤销和重做功能，并将文本和剪贴板的状态存储在类的私有字段中。在执行每个操作时，<code>Editor</code> 将其状态记录到 <code>undoStack</code> 中，以便后续撤销操作时可以还原状态。</p><p><code>CommandQueue</code> 类表示命令队列，它通过一个队列来存储 <code>ICommand</code> 对象，并提供了 <code>AddCommand</code> 和 <code>ExecuteCommands</code> 方法来添加和执行命令。在客户端代码中，我们创建了一个 <code>Editor</code> 和一个 <code>CommandQueue</code>，向命令队列中添加了一些操作，并最终执行命令队列，以便依次执行每个操作。</p><p>这个案例中使用了队列来存储命令对象，并按照先进先出的顺序执行它们。如果需要实现撤销、重做等功能，可以使用栈来存储命令对象，并按照后进先出的顺序执行它们。此外，还可以使用备忘录模式来记录文本编辑器的状态，并在撤销、重做等操作中使用。</p>`,16);function l(u,d){return a(),p("div",null,[c,t(" more "),i])}const r=s(o,[["render",l],["__file","command-pattern.html.vue"]]);export{r as default};
