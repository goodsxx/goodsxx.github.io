import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,e}from"./app-bd8f263d.js";const i={},t=e(`<div class="hint-container tip"><p class="hint-container-title">✨✨✨✨✨</p><p>如何在Linux系统中安装.Net6 Sdk</p></div><ol><li><p>将 Microsoft 包签名密钥添加到受信任密钥列表，并添加 Microsoft 包存储库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rpm</span> <span class="token parameter variable">-Uvh</span> https://packages.microsoft.com/config/centos/7/packages-microsoft-prod.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>安装运行时</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> dotnet-runtime-6.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>安装SDK</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> dotnet-sdk-6.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>检查安装结果</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dotnet <span class="token parameter variable">--info</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Host <span class="token punctuation">(</span>useful <span class="token keyword">for</span> support<span class="token punctuation">)</span>:
  Version: <span class="token number">5.0</span>.12
  Commit:  7211aa01b3

.NET SDKs installed:
  No SDKs were found.

.NET runtimes installed:
  Microsoft.AspNetCore.App <span class="token number">5.0</span>.12 <span class="token punctuation">[</span>/usr/share/dotnet/shared/Microsoft.AspNetCore.App<span class="token punctuation">]</span>
  Microsoft.NETCore.App <span class="token number">5.0</span>.12 <span class="token punctuation">[</span>/usr/share/dotnet/shared/Microsoft.NETCore.App<span class="token punctuation">]</span>

To <span class="token function">install</span> additional .NET runtimes or SDKs:
  https://aka.ms/dotnet-download
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,2),l=[t];function o(d,c){return n(),a("div",null,l)}const u=s(i,[["render",o],["__file","installation-dotnet.html.vue"]]);export{u as default};
