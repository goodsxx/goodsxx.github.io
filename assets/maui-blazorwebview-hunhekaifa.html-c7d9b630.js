const e=JSON.parse('{"key":"v-647eec95","path":"/columns/blog-posts/series/maui/maui-blazorwebview-hunhekaifa.html","title":"基于BlazorWebView的混合开发","lang":"zh-CN","frontmatter":{"title":"基于BlazorWebView的混合开发","date":"2023-01-03T00:00:00.000Z","category":["MAUI"],"tag":["MAUI","Vue","Blazor"],"star":true,"timeline":true,"order":6,"description":"✨✨✨✨✨ 混合开发的概念是相对与原生开发来说的：App 不直接运行原生程序，而是在原生程序中运行一个 Web 程序，原生程序中包含 Web 运行时，用于承载 Web 页面。暂且将原生应用称之为 Web 容器，Web 容器应该能让 JavaScript 代码与原生平台的代码交互，互相调用，同时为上层提供交互逻辑，例如导航，事件，Cookie，刷新等内容。 本章我们将讲解如何利用 MAUI 中的 BlazorWebView 控件实现 MAUI + VUE 混合开发。","head":[["meta",{"property":"og:url","content":"http://goodsxx.cn/columns/blog-posts/series/maui/maui-blazorwebview-hunhekaifa.html"}],["meta",{"property":"og:site_name","content":"Growing Notes"}],["meta",{"property":"og:title","content":"基于BlazorWebView的混合开发"}],["meta",{"property":"og:description","content":"✨✨✨✨✨ 混合开发的概念是相对与原生开发来说的：App 不直接运行原生程序，而是在原生程序中运行一个 Web 程序，原生程序中包含 Web 运行时，用于承载 Web 页面。暂且将原生应用称之为 Web 容器，Web 容器应该能让 JavaScript 代码与原生平台的代码交互，互相调用，同时为上层提供交互逻辑，例如导航，事件，Cookie，刷新等内容。 本章我们将讲解如何利用 MAUI 中的 BlazorWebView 控件实现 MAUI + VUE 混合开发。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://goodsxx.cn/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-11T06:11:50.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"基于BlazorWebView的混合开发"}],["meta",{"property":"article:tag","content":"MAUI"}],["meta",{"property":"article:tag","content":"Vue"}],["meta",{"property":"article:tag","content":"Blazor"}],["meta",{"property":"article:published_time","content":"2023-01-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-11T06:11:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基于BlazorWebView的混合开发\\",\\"image\\":[\\"http://goodsxx.cn/\\"],\\"datePublished\\":\\"2023-01-03T00:00:00.000Z\\",\\"dateModified\\":\\"2023-01-11T06:11:50.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"创建项目","slug":"创建项目","link":"#创建项目","children":[{"level":3,"title":"创建 .NET MAUI 应用","slug":"创建-net-maui-应用","link":"#创建-net-maui-应用","children":[]},{"level":3,"title":"修改项目文件","slug":"修改项目文件","link":"#修改项目文件","children":[]}]},{"level":2,"title":"项目改造","slug":"项目改造","link":"#项目改造","children":[{"level":3,"title":"新建 wwwroot 文件夹","slug":"新建-wwwroot-文件夹","link":"#新建-wwwroot-文件夹","children":[]},{"level":3,"title":"新建 _Imports.razor 文件","slug":"新建-imports-razor-文件","link":"#新建-imports-razor-文件","children":[]},{"level":3,"title":"新建 Main.razor 文件","slug":"新建-main-razor-文件","link":"#新建-main-razor-文件","children":[]},{"level":3,"title":"MauiProgram 修改","slug":"mauiprogram-修改","link":"#mauiprogram-修改","children":[]},{"level":3,"title":"MainPage 修改","slug":"mainpage-修改","link":"#mainpage-修改","children":[]}]},{"level":2,"title":"创建 Vue 项目","slug":"创建-vue-项目","link":"#创建-vue-项目","children":[]},{"level":2,"title":"Vue 项目改造","slug":"vue-项目改造","link":"#vue-项目改造","children":[{"level":3,"title":"index.html 修改","slug":"index-html-修改","link":"#index-html-修改","children":[]},{"level":3,"title":"HelloWorld.vue 修改","slug":"helloworld-vue-修改","link":"#helloworld-vue-修改","children":[]}]},{"level":2,"title":"打包 Vue 项目","slug":"打包-vue-项目","link":"#打包-vue-项目","children":[]},{"level":2,"title":"迁移 Vue 项目打包文件","slug":"迁移-vue-项目打包文件","link":"#迁移-vue-项目打包文件","children":[]},{"level":2,"title":"启动 MAUI 项目","slug":"启动-maui-项目","link":"#启动-maui-项目","children":[]}],"git":{"createdTime":1673416729000,"updatedTime":1673417510000,"contributors":[{"name":"SongXinXin","email":"1368084801@qq.com","commits":2}]},"readingTime":{"minutes":3.38,"words":1015},"filePathRelative":"columns/blog-posts/series/maui/maui-blazorwebview-hunhekaifa.md","localizedDate":"2023年1月3日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">✨✨✨✨✨</p>\\n<p>混合开发的概念是相对与原生开发来说的：App 不直接运行原生程序，而是在原生程序中运行一个 Web 程序，原生程序中包含 Web 运行时，用于承载 Web 页面。暂且将原生应用称之为 Web 容器，Web 容器应该能让 JavaScript 代码与原生平台的代码交互，互相调用，同时为上层提供交互逻辑，例如导航，事件，Cookie，刷新等内容。</p>\\n<p>本章我们将讲解如何利用 MAUI 中的 BlazorWebView 控件实现 MAUI + VUE 混合开发。</p>\\n</div>\\n","autoDesc":true}');export{e as data};