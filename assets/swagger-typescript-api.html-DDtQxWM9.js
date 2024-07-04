import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as s,c as a,a as e,b as l,e as r,d}from"./app-DbRsw7jK.js";const c={},o=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"✨✨✨✨✨"),e("p",null,"通过Swagger自动生成ts格式的API模块")],-1),p=e("h2",{id:"开源组件地址",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#开源组件地址"},[e("span",null,"开源组件地址")])],-1),u={href:"https://github.com/acacode/swagger-typescript-api",target:"_blank",rel:"noopener noreferrer"},v=d(`<h2 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明"><span>使用说明</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>用法：
sta [选项]
swagger-typescript-api [选项]
swagger-typescript-api generate-templates [选项]

选项：
  -v, --version                 输出当前版本
  -p, --path &lt;string&gt;           Swagger架构的路径/网址
  -o, --output &lt;string&gt;         TypeScript API文件的输出路径（默认值：“./”）
  -n, --name &lt;string&gt;           输出TypeScript API文件的名称（默认值：“Api.ts”）
  -t, --templates &lt;string&gt;      包含模板的文件夹的路径
  -d, --default-as-success      将“默认(default)”响应状态代码也用作成功响应类型。某些Swagger架构默认将“默认(default)”响应状态代码用作成功响应类型。（默认值：false）
  -r, --responses               生成有关请求响应的附加信息，同时为错误响应添加类型定义（默认值：false）
  --union-enums                 将所有“枚举(enum)”类型生成为联合类型(T1 | T2 | TN)（默认值：false）
  --add-readonly                生成只读属性 (默认值：false)
  --route-types                 为API路由生成类型定义（默认值：false）
  --no-client                   不生成API类
  --enum-names-as-values        在枚举中使用“x-enumNames”的值作为枚举值（不仅仅是键）(默认值：false)
  --extract-request-params      提取请求参数到数据契约（还将路径参数和查询参数组合成一个对象）(默认值：false)
  --extract-request-body        提取请求正文类型到数据契约（默认值：false）
  --extract-response-body       提取响应正文类型到数据契约 (默认值：false)
  --extract-response-error      提取响应错误类型到数据契约 (默认值：false)
  --modular                     为HTTP客户端、数据契约和路由生成单独的文件 (默认值：false)
  --js                          生成具有声明文件的JS API模块 (默认值：false)
  --module-name-index &lt;number&gt;  确定应使用哪个路径索引来分离路由 (例如：GET:/fruites/getFruit -&gt; index:0 -&gt; moduleName -&gt; fruites) (默认值：0)
  --module-name-first-tag       基于第一个标记拆分路由 (默认值：false)
  --disableStrictSSL            禁用严格的SSL (默认值：false)
  --disableProxy                禁用代理 (默认值：false)
  --axios                       生成axios HTTP客户端 (默认值：false)
  --unwrap-response-data        从响应中取消包装数据项 (默认值：false)
  --disable-throw-on-error      当response.ok不为true时不抛出错误 (默认值：false)
  --single-http-client          能够将HttpClient实例发送到Api构造函数 (默认值：false)
  --silent                      仅将错误输出到控制台 (默认值：false)
  --default-response &lt;type&gt;     空响应模式的默认类型 (默认值：“void”)
  --type-prefix &lt;string&gt;        数据契约名称前缀 (默认值：“&quot;)
  --type-suffix &lt;string&gt;        数据契约名称后缀 (默认值：“&quot;)
  --clean-output                在生成API之前清空输出文件夹。 警告：可能会导致数据丢失 (默认值：false)
  --api-class-name &lt;string&gt;     API类的名称 (默认值：“Api”)
  --patch                       修复Swagger源定义中的小错误 (默认值：false)
  --debug                       关于此工具内部过程的附加信息 (默认值：false)
  --another-array-type          将数组类型生成为Array&lt;Type&gt;（默认为Type[]）(默认值：false)
  --sort-types                  对字段和类型进行排序 (默认值：false)
  --extract-enums               从内联接口/类型内容中提取所有枚举到typescript枚举构造函数中 (默认值：false)
  -h, --help                    显示帮助命令

命令：
  generate-templates              生成生成API所需的“.ejs”模板
    -o, --output &lt;string&gt;         生成模板的输出路径
    -m, --modular                 生成分离HTTP客户端、数据契约和路由所需的模板 (默认值：false)
    --http-client &lt;string&gt;        HTTP客户端类型（可能的值：&quot;fetch&quot;，&quot;axios&quot;）(默认值：&quot;fetch&quot;)
    -c, --clean-output            在生成模板之前清空输出文件夹。 警告：可能会导致数据丢失 (默认值：false)
    -r, --rewrite                 重写现有模板中的内容 (默认值：false)
    --silent                      仅将错误输出到控制台 (默认值：false)
    -h, --help                    显示帮助命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function m(g,b){const n=t("ExternalLinkIcon");return s(),a("div",null,[o,p,e("p",null,[e("a",u,[l("Swagger-TypeScript-API"),r(n)])]),v])}const y=i(c,[["render",m],["__file","swagger-typescript-api.html.vue"]]),T=JSON.parse('{"path":"/articles/qianduan/swagger-typescript-api.html","title":"Swagger-TypeScript-API","lang":"zh-CN","frontmatter":{"title":"Swagger-TypeScript-API","date":"2023-05-08T00:00:00.000Z","order":1,"category":["前端"],"description":"✨✨✨✨✨ 通过Swagger自动生成ts格式的API模块","head":[["meta",{"property":"og:url","content":"http://blog.goodsxx.cn/articles/qianduan/swagger-typescript-api.html"}],["meta",{"property":"og:site_name","content":"Growing Notes"}],["meta",{"property":"og:title","content":"Swagger-TypeScript-API"}],["meta",{"property":"og:description","content":"✨✨✨✨✨ 通过Swagger自动生成ts格式的API模块"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-08T15:55:26.000Z"}],["meta",{"property":"article:author","content":"SongXinXin"}],["meta",{"property":"article:published_time","content":"2023-05-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-08T15:55:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Swagger-TypeScript-API\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-08T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-08T15:55:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"SongXinXin\\"}]}"]]},"headers":[{"level":2,"title":"开源组件地址","slug":"开源组件地址","link":"#开源组件地址","children":[]},{"level":2,"title":"使用说明","slug":"使用说明","link":"#使用说明","children":[]}],"git":{"createdTime":1683561326000,"updatedTime":1683561326000,"contributors":[{"name":"SongXinXin","email":"1368084801@qq.com","commits":1}]},"readingTime":{"minutes":3.13,"words":939},"filePathRelative":"articles/qianduan/swagger-typescript-api.md","localizedDate":"2023年5月8日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">✨✨✨✨✨</p>\\n<p>通过Swagger自动生成ts格式的API模块</p>\\n</div>\\n","autoDesc":true}');export{y as comp,T as data};
