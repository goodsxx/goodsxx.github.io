import{_ as c,Z as r,$ as p,a0 as d,a2 as s,a3 as n,a1 as e,a4 as l,a5 as a,H as t}from"./framework-e7ac220c.js";const u="/assets/1650815065456-59ccda38.png",m="/assets/1650815121716-b3247b9d.png",v="/assets/1650815644534-72064f5f.png",b="/assets/1650816202369-dc839133.png",g="/assets/1650816306998-bede7e96.png",h="/assets/1650816400767-5e9db4af.png",k="/assets/1650816444025-f4401e84.png",f="/assets/1650817147035-f9c67a3e.png",_="/assets/1650817330415-1e1767f1.png",x="/assets/1650817479415-1d04a43c.png",y={},q=s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"✨✨✨✨✨"),s("p",null,"通过gitee仓库的WebHook回调实现VuePress项目的自动化部署")],-1),C={id:"在linux上部署vuepress",tabindex:"-1"},w=s("a",{class:"header-anchor",href:"#在linux上部署vuepress","aria-hidden":"true"},"#",-1),z=a(`<h2 id="新建脚本文件" tabindex="-1"><a class="header-anchor" href="#新建脚本文件" aria-hidden="true">#</a> 新建脚本文件</h2><ol><li><p>在VuePress项目根目录中新建shell脚本文件 <code>start.sh</code></p></li><li><p>编辑start.sh脚本文件并上传至git仓库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token comment">#!/bin/bash</span>
  <span class="token comment"># 切入源码目录，以确保能正常执行</span>
  <span class="token builtin class-name">cd</span> /home/my/my-vuepress

  <span class="token comment"># 拉取最新代码</span>
  <span class="token function">git</span> pull

  <span class="token comment"># 杀死目前已启动进程</span>
  <span class="token assign-left variable">ID</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span> <span class="token function">node</span> <span class="token operator">|</span> <span class="token function">grep</span> vuepress<span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>
  <span class="token builtin class-name">echo</span> --- the process is <span class="token variable">$ID</span> ---
  <span class="token function">kill</span> <span class="token parameter variable">-9</span>  <span class="token variable">$ID</span>
  <span class="token builtin class-name">echo</span>  <span class="token string">&quot;Killed <span class="token variable">$ID</span>&quot;</span>
  <span class="token comment"># 更新包</span>
  <span class="token function">npm</span> i
  <span class="token comment"># 后台启动</span>
  <span class="token function">nohup</span> <span class="token function">npm</span> run pro<span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在Linux上拉取更新</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/my/my-vuepress
<span class="token function">git</span> pull
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>为脚本文件授予权限</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">775</span> /home/my/my-vuepress/start.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="编写接口用于在接口调用时执行脚本" tabindex="-1"><a class="header-anchor" href="#编写接口用于在接口调用时执行脚本" aria-hidden="true">#</a> 编写接口用于在接口调用时执行脚本</h2>`,3),E={href:"http://xn--Asp-vs9ds67bn00a.Net",target:"_blank",rel:"noopener noreferrer"},I=a('<ol><li><p>打开VS2022，选择 <code>ASP.Net Core Web Api</code> 项目</p><figure><img src="'+u+'" alt="创建项目" tabindex="0" loading="lazy"><figcaption>创建项目</figcaption></figure></li><li><p>为项目命名，勾选&#39;将解决方案和项目放在同一目录&#39;</p><figure><img src="'+m+'" alt="为项目命名" tabindex="0" loading="lazy"><figcaption>为项目命名</figcaption></figure></li><li><p>框架选择.NET6.0</p><figure><img src="'+v+`" alt="选择框架" tabindex="0" loading="lazy"><figcaption>选择框架</figcaption></figure></li><li><p>在Controllers文件夹下新建WebHookController.cs</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>namespace ScriptExecutor.Controllers
{
    [ApiController]
    [Route(&quot;[controller]/[action]&quot;)]
    public class WebHookController : ControllerBase
    {
        [HttpPost(&quot;ExecoutScript&quot;)]
        public string Post([FromBody] object inDto)
        {
            try
            {
                Process.Start(&quot;./start.sh&quot;);
                return &quot;执行成功！&quot;;
            }
            catch (Exception ex)
            {
                return $&quot;执行失败：{ex.Message}&quot;;
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在Program.cs类中，配置项目的启动端口</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>builder.WebHost.UseUrls(new[] { &quot;http://*:8080&quot; });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="发布项目" tabindex="-1"><a class="header-anchor" href="#发布项目" aria-hidden="true">#</a> 发布项目</h2><ol><li><p>右键项目，选择&#39;发布&#39;</p><figure><img src="`+b+'" alt="发布" tabindex="0" loading="lazy"><figcaption>发布</figcaption></figure></li><li><p>选择&#39;文件夹&#39;，直接点击&#39;下一步&#39;——&gt;&#39;完成&#39;</p><figure><img src="'+g+'" alt="文件夹发布" tabindex="0" loading="lazy"><figcaption>文件夹发布</figcaption></figure><figure><img src="'+h+'" alt="完成" tabindex="0" loading="lazy"><figcaption>完成</figcaption></figure></li><li><p>点击&#39;发布&#39;</p><figure><img src="'+k+'" alt="发布" tabindex="0" loading="lazy"><figcaption>发布</figcaption></figure></li></ol><h2 id="部署回调接口" tabindex="-1"><a class="header-anchor" href="#部署回调接口" aria-hidden="true">#</a> 部署回调接口</h2>',4),N=s("li",null,[s("p",null,"将bin\\Release\\net6.0\\publish\\publish文件夹的下的所有项目上传至linux服务器中的/home/my/script-executor文件夹下")],-1),$=a(`<li><p>进入home/my/my-vuepress路径下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/my/my-vuepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>运行ScriptExecutor项目</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dotnet /home/my/script-executor/ScriptExecutor.dll
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>配置git仓库的WebHook，使其在推送代码时自动触发接口(此处以gitee为例)</p><p><img src="`+f+'" alt="配置webhook" title="配置webhook" loading="lazy"> 6. 配置webhook的回调地址</p><figure><img src="'+_+'" alt="配置接口回调地址" tabindex="0" loading="lazy"><figcaption>配置回调地址</figcaption></figure><ol start="7"><li><p>测试效果</p><figure><img src="'+x+'" alt="效果" tabindex="0" loading="lazy"><figcaption>效果</figcaption></figure><p><strong>返回执行成功，说明脚本已成功执行，之后提交代码时，便会通过webhook回调接口去触发脚本的执行，从而实现vuepress的自动发布</strong></p></li></ol></li>',3),D=s("h2",{id:"设置项目开机启动",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#设置项目开机启动","aria-hidden":"true"},"#"),n(" 设置项目开机启动")],-1),S=a(`<li><p>在linux服务器root目录下新建start.sh脚本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 切入源码目录，以确保能正常执行</span>
<span class="token builtin class-name">cd</span> /home/my/my-blog
<span class="token comment"># 启动webhook接口</span>
<span class="token function">nohup</span>  dotnet /home/my/script-executor/ScriptExecutor.dll
<span class="token comment"># 拉取最新代码1</span>
<span class="token function">git</span> pull

<span class="token comment"># 杀死目前已启动进程</span>
<span class="token assign-left variable">ID</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span> <span class="token function">node</span> <span class="token operator">|</span> <span class="token function">grep</span> vuepress<span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> --- the process is <span class="token variable">$ID</span> ---
<span class="token function">kill</span> <span class="token parameter variable">-9</span>  <span class="token variable">$ID</span>
<span class="token builtin class-name">echo</span>  <span class="token string">&quot;Killed <span class="token variable">$ID</span>&quot;</span>
<span class="token comment"># 更新包</span>
<span class="token function">yarn</span>
<span class="token comment"># 启动</span>
<span class="token function">nohup</span> <span class="token function">yarn</span> pro<span class="token operator">&amp;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1);function V(L,P){const i=t("RouterLink"),o=t("ExternalLinkIcon");return r(),p("div",null,[q,d(" more "),s("h2",C,[w,n(),e(i,{to:"/columns/about-this-website/vuepress-release.html"},{default:l(()=>[n("在Linux上部署VuePress")]),_:1})]),z,s("p",null,[s("strong",null,[s("a",E,[n("此处以Asp.Net"),e(o)]),n(" Core Web Api为例")])]),I,s("ol",null,[N,s("li",null,[s("p",null,[e(i,{to:"/columns/blog-posts/series/linux/installation-dotnet.html"},{default:l(()=>[n("在Linux上安装.Net6环境")]),_:1})])]),$]),D,s("ol",null,[S,s("li",null,[s("p",null,[e(i,{to:"/columns/blog-posts/series/linux/boot-up-script.html"},{default:l(()=>[n("在Linux上设置shell脚本开机启动")]),_:1})])])])])}const H=c(y,[["render",V],["__file","vuepress-auto-release.html.vue"]]);export{H as default};
