const e=JSON.parse('{"key":"v-2cd8247e","path":"/articles/maui/maui-webview-hunhekaifa.html","title":"基于自定义WebView控件的混合开发","lang":"zh-CN","frontmatter":{"title":"基于自定义WebView控件的混合开发","date":"2023-01-11T00:00:00.000Z","category":["MAUI"],"tag":["MAUI","Web"],"star":true,"timeline":true,"order":7,"description":"✨✨✨✨✨ 混合开发的概念是相对与原生开发来说的：App 不直接运行原生程序，而是在原生程序中运行一个 Web 程序，原生程序中包含 Web 运行时，用于承载 Web 页面。暂且将原生应用称之为 Web 容器，Web 容器应该能让 JavaScript 代码与原生平台的代码交互，互相调用，同时为上层提供交互逻辑，例如导航，事件，Cookie，刷新等内容。 本章我们将讲解如何通过自定义 MAUI 中的 WebView 控件实现 MAUI + Web 混合开发。","head":[["meta",{"property":"og:url","content":"http://blog.goodsxx.cn/articles/maui/maui-webview-hunhekaifa.html"}],["meta",{"property":"og:site_name","content":"Growing Notes"}],["meta",{"property":"og:title","content":"基于自定义WebView控件的混合开发"}],["meta",{"property":"og:description","content":"✨✨✨✨✨ 混合开发的概念是相对与原生开发来说的：App 不直接运行原生程序，而是在原生程序中运行一个 Web 程序，原生程序中包含 Web 运行时，用于承载 Web 页面。暂且将原生应用称之为 Web 容器，Web 容器应该能让 JavaScript 代码与原生平台的代码交互，互相调用，同时为上层提供交互逻辑，例如导航，事件，Cookie，刷新等内容。 本章我们将讲解如何通过自定义 MAUI 中的 WebView 控件实现 MAUI + Web 混合开发。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://blog.goodsxx.cn/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-23T05:09:40.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"基于自定义WebView控件的混合开发"}],["meta",{"property":"article:tag","content":"MAUI"}],["meta",{"property":"article:tag","content":"Web"}],["meta",{"property":"article:published_time","content":"2023-01-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-23T05:09:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基于自定义WebView控件的混合开发\\",\\"image\\":[\\"http://blog.goodsxx.cn/\\"],\\"datePublished\\":\\"2023-01-11T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-23T05:09:40.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"自定义 HybridWebView 控件","slug":"自定义-hybridwebview-控件","link":"#自定义-hybridwebview-控件","children":[{"level":3,"title":"新建 .NET MAUI 类库项目","slug":"新建-net-maui-类库项目","link":"#新建-net-maui-类库项目","children":[]},{"level":3,"title":"创建 HybridWebView 跨平台控件","slug":"创建-hybridwebview-跨平台控件","link":"#创建-hybridwebview-跨平台控件","children":[]},{"level":3,"title":"创建 HybridWebViewHandler 处理程序","slug":"创建-hybridwebviewhandler-处理程序","link":"#创建-hybridwebviewhandler-处理程序","children":[]},{"level":3,"title":"创建 HybridWebViewRawMessageReceivedEventArgs 类","slug":"创建-hybridwebviewrawmessagereceivedeventargs-类","link":"#创建-hybridwebviewrawmessagereceivedeventargs-类","children":[]},{"level":3,"title":"创建 HybridWebViewServiceCollectionExtensions 类","slug":"创建-hybridwebviewservicecollectionextensions-类","link":"#创建-hybridwebviewservicecollectionextensions-类","children":[]},{"level":3,"title":"创建平台控件","slug":"创建平台控件","link":"#创建平台控件","children":[{"level":4,"title":"Android 平台控件","slug":"android-平台控件","link":"#android-平台控件","children":[{"level":5,"title":"创建 AndroidHybridWebViewClient 类","slug":"创建-androidhybridwebviewclient-类","link":"#创建-androidhybridwebviewclient-类","children":[]},{"level":5,"title":"创建 HybridWebView.Android 类","slug":"创建-hybridwebview-android-类","link":"#创建-hybridwebview-android-类","children":[]}]}]}]},{"level":2,"title":"自定义 HybridWebView 控件使用","slug":"自定义-hybridwebview-控件使用","link":"#自定义-hybridwebview-控件使用","children":[{"level":3,"title":"创建 .NET MAUI 应用","slug":"创建-net-maui-应用","link":"#创建-net-maui-应用","children":[]},{"level":3,"title":"添加 HybridWebView 项目引用","slug":"添加-hybridwebview-项目引用","link":"#添加-hybridwebview-项目引用","children":[]},{"level":3,"title":"新建 Web 文件","slug":"新建-web-文件","link":"#新建-web-文件","children":[{"level":4,"title":"新建 rawmessages.html 文件","slug":"新建-rawmessages-html-文件","link":"#新建-rawmessages-html-文件","children":[]},{"level":4,"title":"新建 methodinvoke.html 文件","slug":"新建-methodinvoke-html-文件","link":"#新建-methodinvoke-html-文件","children":[]},{"level":4,"title":"新建相关 JS 脚本","slug":"新建相关-js-脚本","link":"#新建相关-js-脚本","children":[]},{"level":4,"title":"新建相关CSS样式","slug":"新建相关css样式","link":"#新建相关css样式","children":[]}]},{"level":3,"title":"MauiProgram 修改","slug":"mauiprogram-修改","link":"#mauiprogram-修改","children":[]},{"level":3,"title":"MainPage 修改","slug":"mainpage-修改","link":"#mainpage-修改","children":[]},{"level":3,"title":"交互效果","slug":"交互效果","link":"#交互效果","children":[]}]}],"git":{"createdTime":1677128980000,"updatedTime":1677128980000,"contributors":[{"name":"SongXinXin","email":"1368084801@qq.com","commits":1}]},"readingTime":{"minutes":9.35,"words":2806},"filePathRelative":"articles/maui/maui-webview-hunhekaifa.md","localizedDate":"2023年1月11日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">✨✨✨✨✨</p>\\n<p>混合开发的概念是相对与原生开发来说的：App 不直接运行原生程序，而是在原生程序中运行一个 Web 程序，原生程序中包含 Web 运行时，用于承载 Web 页面。暂且将原生应用称之为 Web 容器，Web 容器应该能让 JavaScript 代码与原生平台的代码交互，互相调用，同时为上层提供交互逻辑，例如导航，事件，Cookie，刷新等内容。</p>\\n<p>本章我们将讲解如何通过自定义 MAUI 中的 WebView 控件实现 MAUI + Web 混合开发。</p>\\n</div>\\n","autoDesc":true}');export{e as data};
