import{_ as s,Z as i,$ as o,a2 as t,a0 as r,a1 as e,a3 as a,a5 as d,H as l}from"./framework-4828f474.js";const c="/my-blog/assets/1650542457788-86745bff.png",p="/my-blog/assets/1650542748179-39b72461.png",g="/my-blog/assets/1650542989991-4c36da9d.png",u="/my-blog/assets/1650543184996-60764001.png",m="/my-blog/assets/1650543476013-cab23076.png",h="/my-blog/assets/1650544212891-fcd2bd61.png",f="/my-blog/assets/1650544468278-cdaba0d6.png",_={},v=r("div",{class:"custom-container tip"},[r("p",{class:"custom-container-title"},"✨✨✨✨✨"),r("p",null,"手把手教你使用VuePress搭建自己的个人博客。")],-1),b=r("h2",{id:"vuepress介绍",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#vuepress介绍","aria-hidden":"true"},"#"),e(" VuePress介绍")],-1),x={href:"https://zh.wikipedia.org/wiki/Markdown",target:"_blank",rel:"noopener noreferrer"},k={href:"https://v3.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://next.router.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},P=d(`<p>在开发过程中，VuePress会启动一个常规的开发服务器 (dev-server) ，并将 VuePress 站点作为一个常规的 SPA。如果你以前使用过 Vue 的话，你在使用时会感受到非常熟悉的开发体验。</p><h2 id="vuepress-theme-reco介绍" tabindex="-1"><a class="header-anchor" href="#vuepress-theme-reco介绍" aria-hidden="true">#</a> VuePress-Theme-Reco介绍</h2><p><code>vuepress-theme-reco</code> 是针对VuePress开发的一款第三方主题，该主题几乎继承 <code>VuePress</code> 默认主题的一切功能，并支持通过脚手架快速搭建，虽然该主题现已推出2.x的alpha版本，但鉴于正式版还未推出，本教程将基于该主题的1.x版本进行讲解。</p><h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2><ol><li><p><strong>安装theme-cli脚手架</strong></p><p>在控制台输入以下命令</p><div class="language-node line-numbers-mode" data-ext="node"><pre class="language-node"><code>npm install @vuepress-reco/theme-cli@1.0.7 -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+c+`" alt="代码效果" tabindex="0" loading="lazy"><figcaption>代码效果</figcaption></figure></li><li><p><strong>初始化项目</strong></p><p>输入以下命令进行项目初始化</p><div class="language-node line-numbers-mode" data-ext="node"><pre class="language-node"><code>theme-cli init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+p+'" alt="是否创建文件夹" tabindex="0" loading="lazy"><figcaption>是否创建文件夹</figcaption></figure><p>提示是否创建文件夹？若创建文件夹，此处可选择&#39;n&#39;，我没有创建故这里选择&#39;y&#39;</p><figure><img src="'+g+'" alt="操作步骤" tabindex="0" loading="lazy"><figcaption>操作步骤</figcaption></figure><p>提示输入文件夹名称，同上，已创建文件夹的可以直接按回车跳过此步</p><p>之后的操作分别是 标题(首页显示)、描述(首页显示)、作者(首页显示)、选择模板，模板这里我们要选择&#39;blog&#39;，中间的步骤都可以直接按回车跳过</p><figure><img src="'+u+'" alt="等待" tabindex="0" loading="lazy"><figcaption>等待</figcaption></figure><p>等待从git上下载文件</p><figure><img src="'+m+`" alt="创建成功" tabindex="0" loading="lazy"><figcaption>创建成功</figcaption></figure><p>如图，项目已成功创建</p></li><li><p><strong>启动项目</strong></p><p>控制台输入 <code>npm i</code>下载依赖文件</p><div class="language-node line-numbers-mode" data-ext="node"><pre class="language-node"><code>npm i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+h+`" alt="等待" tabindex="0" loading="lazy"><figcaption>等待</figcaption></figure><p>等待安装成功</p><p>输入 <code>npm run dev</code>启动项目</p><div class="language-node line-numbers-mode" data-ext="node"><pre class="language-node"><code>npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+f+'" alt="效果" tabindex="0" loading="lazy"><figcaption>效果</figcaption></figure><p>至此博客已搭建完成</p></li></ol><h2 id="个性化配置" tabindex="-1"><a class="header-anchor" href="#个性化配置" aria-hidden="true">#</a> 个性化配置</h2>',6),w={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html",target:"_blank",rel:"noopener noreferrer"},z={href:"https://vuepress-theme-reco.recoluan.com/views/1.x/valine.html",target:"_blank",rel:"noopener noreferrer"};function M(N,T){const n=l("ExternalLinkIcon");return i(),o("div",null,[v,t(" more "),b,r("p",null,[e("VuePress 是一个以 Markdown 为中心的静态网站生成器。你可以使用 "),r("a",x,[e("Markdown"),a(n)]),e(" 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。")]),r("p",null,[e("一个 VuePress 站点本质上是一个由 "),r("a",k,[e("Vue"),a(n)]),e(" 和 "),r("a",V,[e("Vue Router"),a(n)]),e(" 驱动的单页面应用 (SPA)。")]),r("p",null,[e("路由会根据你的 Markdown 文件的相对路径来自动生成。每个 Markdown 文件都通过 "),r("a",y,[e("markdown-it"),a(n)]),e(" 编译为 HTML ，然后将其作为 Vue 组件的模板。因此，你可以在 Markdown 文件中直接使用 Vue 语法，便于你嵌入一些动态内容。")]),P,r("p",null,[e("关于配置方面 "),r("a",w,[e("VuePress"),a(n)]),e(" 和 "),r("a",z,[e("vuepress-theme-reco"),a(n)]),e(" 的官方文档已经介绍的很详细了，除一部分功能及插件的使用将单独介绍外，其他的配置教程请参照官方文档，本文不再赘述。")])])}const B=s(_,[["render",M],["__file","vuepress-tutorial.html.vue"]]);export{B as default};
