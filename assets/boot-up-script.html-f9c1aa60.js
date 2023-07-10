import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as a,a as i,b as s,f as l}from"./app-203f50af.js";const c={},t=s("div",{class:"hint-container tip"},[s("p",{class:"hint-container-title"},"✨✨✨✨✨"),s("p",null,"在Linux上如何设置shell脚本开机启动")],-1),o=l(`<ol><li><p>赋予 <code>/etc/rc.d/rc.local</code> 可执行权</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> +x /etc/rc.d/rc.local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>赋予脚本可执行权限</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 脚本路径根据实际位置修改</span>
<span class="token function">chmod</span> +x /root/start.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>打开/etc/rc.d/rc.local文件，在最后面添加要执行脚本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /etc/rc.d/rc.local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># THIS FILE IS ADDED FOR COMPATIBILITY PURPOSES</span>
<span class="token comment">#</span>
<span class="token comment"># It is highly advisable to create own systemd services or udev rules</span>
<span class="token comment"># to run scripts during boot instead of using this file.</span>
<span class="token comment">#</span>
<span class="token comment"># In contrast to previous versions due to parallel execution during boot</span>
<span class="token comment"># this script will NOT be run after all other services.</span>
<span class="token comment">#</span>
<span class="token comment"># Please note that you must run &#39;chmod +x /etc/rc.d/rc.local&#39; to ensure</span>
<span class="token comment"># that this script will be executed during boot.</span>

<span class="token function">touch</span> /var/lock/subsys/local

<span class="token comment"># 执行脚本</span>
/root/jiaoben.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>保存退出即可</p></li></ol><p><strong>运行脚本报错：-bash: /root/start.sh: /bin/bash^M: 坏的解释器: 没有那个文件或目录</strong></p><p>出现这个问题的原因是因为 脚本文件是在Windows环境下编辑的，windows环境下，每一行的结尾是\\n\\r,而Linux环境下，每一行结尾是\\n。</p><p>执行以下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/\\r//&#39;</span> /root/start.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5);function d(r,p){return e(),a("div",null,[t,i(" more "),o])}const v=n(c,[["render",d],["__file","boot-up-script.html.vue"]]);export{v as default};
