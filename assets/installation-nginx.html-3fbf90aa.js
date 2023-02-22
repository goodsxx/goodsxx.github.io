import{_ as s,X as a,Y as e,Z as i,a0 as n,a3 as l}from"./framework-458c221e.js";const t={},r=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"✨✨✨✨✨"),n("p",null,"如何在Linux上安装Nginx并设置开机启动")],-1),c=l(`<h2 id="在centos7中添加nginx源" tabindex="-1"><a class="header-anchor" href="#在centos7中添加nginx源" aria-hidden="true">#</a> 在CentOS7中添加Nginx源</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rpm</span> <span class="token parameter variable">-Uvh</span> http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装nginx" tabindex="-1"><a class="header-anchor" href="#安装nginx" aria-hidden="true">#</a> 安装Nginx</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="设置开机启动" tabindex="-1"><a class="header-anchor" href="#设置开机启动" aria-hidden="true">#</a> 设置开机启动</h2><ol><li><p>在 /lib/systemd/system 目录添加 nginx.service 文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#进入自启文件目录</span>
<span class="token builtin class-name">cd</span> /lib/systemd/system 
<span class="token comment">#自定义nginx自启文件</span>
<span class="token function">touch</span> nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>编辑nginx.service，并添加一下内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#编辑自启文件</span>
<span class="token function">vi</span> nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>The nginx HTTP and reverse proxy server
<span class="token assign-left variable">After</span><span class="token operator">=</span>network-online.target remote-fs.target nss-lookup.target
<span class="token assign-left variable">Wants</span><span class="token operator">=</span>network-online.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token assign-left variable">PIDFile</span><span class="token operator">=</span>/run/nginx.pid
<span class="token comment"># Nginx will fail to start if /run/nginx.pid already exists but has the wrong</span>
<span class="token comment"># SELinux context. This might happen when running \`nginx -t\` from the cmdline.</span>
<span class="token comment"># https://bugzilla.redhat.com/show_bug.cgi?id=1268621</span>
<span class="token assign-left variable">ExecStartPre</span><span class="token operator">=</span>/usr/bin/rm <span class="token parameter variable">-f</span> /run/nginx.pid
<span class="token assign-left variable">ExecStartPre</span><span class="token operator">=</span>/usr/sbin/nginx <span class="token parameter variable">-t</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/sbin/nginx
<span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/usr/sbin/nginx <span class="token parameter variable">-s</span> reload
<span class="token assign-left variable">KillSignal</span><span class="token operator">=</span>SIGQUIT
<span class="token assign-left variable">TimeoutStopSec</span><span class="token operator">=</span><span class="token number">5</span>
<span class="token assign-left variable">KillMode</span><span class="token operator">=</span>process
<span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true
<span class="token assign-left variable">Restart</span><span class="token operator">=</span>always

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>设置开机启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>重启服务器，查看nginx是否自启动</p></li></ol>`,6);function o(p,d){return a(),e("div",null,[r,i(" more "),c])}const u=s(t,[["render",o],["__file","installation-nginx.html.vue"]]);export{u as default};
