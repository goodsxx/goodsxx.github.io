// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar.ts
import { navbar } from "vuepress-theme-hope";
var Navbar = navbar([
  //配置说明https://vuepress-theme-hope.github.io/v2/zh/guide/layout/navbar.html
  "/",
  {
    text: "\u672C\u7AD9\u6307\u5357",
    icon: "autumn",
    link: "/about-this-website/"
  },
  {
    text: "\u6587\u7AE0",
    icon: "blog",
    children: [
      {
        text: "\u7CFB\u5217",
        prefix: "/articles/",
        children: [
          { text: "MAUI\u7CFB\u5217", icon: "blog", link: "maui/" },
          { text: "Linux\u7CFB\u5217", icon: "blog", link: "linux/" },
          { text: "\u5FAE\u670D\u52A1\u7CFB\u5217", icon: "blog", link: "micro-service/" },
          { text: "\u8BBE\u8BA1\u6A21\u5F0F", icon: "blog", link: "design-pattern/" },
          { text: "\u5DE5\u5177", icon: "blog", link: "tools/" }
        ]
      },
      {
        text: "\u96F6\u788E\u5185\u5BB9",
        prefix: "/articles/",
        children: [
          { text: "\u524D\u7AEF", icon: "blog", link: "qianduan/" },
          { text: "\u540E\u7AEF", icon: "blog", link: "houduan/" },
          { text: "\u5176\u5B83", icon: "blog", link: "others/" }
        ]
      }
    ]
  },
  {
    text: "\u7559\u8A00\u677F",
    icon: "edit",
    link: "/liuyanban"
  }
]);

// src/.vuepress/sidebar.ts
import { sidebar } from "vuepress-theme-hope";
var Sidebar = sidebar({
  "/about-this-website/": "structure",
  "/articles/": "structure",
  "/articles/linux/": "structure",
  "/articles/micro-service/": "structure",
  "/articles/maui/": "structure",
  "/articles/design-pattern/": "structure",
  "/articles/tools/": "structure",
  "/articles/qianduan/": "structure",
  "/articles/houduan/": "structure",
  "/articles/others/": "structure"
  // "/": [
  //   "",
  //   {
  //     text: "如何使用",
  //     icon: "creative",
  //     prefix: "guide/",
  //     link: "guide/",
  //     children: "structure",
  //   },
  //   {
  //     text: "文章",
  //     icon: "note",
  //     prefix: "posts/",
  //     children: "structure",
  //   },
  //   "intro",
  //   "slides",
  // ]
});

// src/.vuepress/theme.ts
var theme_default = hopeTheme({
  //基本配置
  //https://vuepress-theme-hope.github.io/v2/zh/config/theme/basic.html
  hostname: "http://goodsxx.cn",
  author: {
    name: "SongXinXin"
    //url: "https://mrhope.site",
  },
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Search", "Outlook", "Repo"]
  },
  //首页左上角图标
  logo: "/images/s.png",
  docsDir: "docs",
  //功能配置
  //https://vuepress-theme-hope.github.io/v2/zh/config/theme/feature.html
  blog: {
    avatar: "/images/hejiu.jpg",
    name: "SongXinXin",
    description: "\u4E00\u4E2A.Net\u7A0B\u5E8F\u5458",
    intro: "/intro.html",
    roundAvatar: true,
    articleInfo: [
      "Author",
      //作者
      //"Original", //是否原创
      "Date",
      //写作日期
      "Category",
      //分类
      "Tag",
      //标签
      "Word",
      //字数
      "ReadingTime"
      //预计阅读时间
    ],
    medias: {
      // Baidu: "https://example.com",
      // BiliBili: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      // Email: "https://example.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      Gitee: "https://gitee.com/goodsxx",
      GitHub: "https://github.com/goodsxx"
      // Gitlab: "https://example.com",
      // Gmail: "https://example.com",
      // Instagram: "https://example.com",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
    }
  },
  //布局配置
  //https://vuepress-theme-hope.github.io/v2/zh/config/theme/layout.html
  //导航栏
  navbar: Navbar,
  navbarIcon: true,
  repoDisplay: true,
  repo: "https://github.com/goodsxx/my-blog",
  navbarAutoHide: "mobile",
  //hideSiteNameonMobile: true,
  //侧边栏
  sidebar: Sidebar,
  sidebarIcon: true,
  sidebarSorter: ["readme", "order", "title"],
  headerDepth: 5,
  //路径导航
  breadcrumb: true,
  breadcrumbIcon: true,
  prevLink: true,
  nextLink: true,
  titleIcon: true,
  pageInfo: [
    //文章头部显示内容
    "Author",
    //作者
    //"Original", //是否原创
    "Date",
    //写作日期
    "Category",
    //分类
    "Tag",
    //标签
    "Word",
    //字数
    "ReadingTime"
    //预计阅读时间
  ],
  //Meta
  lastUpdated: true,
  contributors: true,
  editLink: false,
  //页脚
  displayFooter: false,
  footer: "",
  copyright: "",
  //杂项
  toc: true,
  //外观配置
  iconAssets: "iconfont",
  darkmode: "switch",
  fullscreen: true,
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    orange: "#fb9b5f"
  },
  encrypt: {
    config: {
      "/intro.html": ["1131"]
    }
  },
  plugins: {
    blog: {
      excerpt: true
    },
    comment: {
      provider: "Giscus",
      repo: "goodsxx/goodsxx.github.io",
      repoId: "R_kgDOIahFXA",
      category: "General",
      categoryId: "DIC_kwDOIahFXM4CShvl",
      mapping: "title",
      reactionsEnabled: true,
      lightTheme: "light",
      darkTheme: "dark"
    },
    components: {
      components: ["AudioPlayer", "Badge", "BiliBili", "CodePen", "FontIcon", "PDF", "StackBlitz", "VideoPlayer", "YouTube"]
    },
    // Disable features you don’t want here 
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      linkCheck: false,
      imgLazyload: true,
      imgSize: true,
      imgMark: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"]
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"]
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended"
              };
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true
    },
    // uncomment these if you want a PWA
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black"
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff"
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png"
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png"
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png"
          }
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/demo/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png"
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png"
              }
            ]
          }
        ]
      }
    }
  }
});

// src/.vuepress/config.ts
var config_default = defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Growing Notes",
  description: "SongXinXin\u7684\u7B14\u8BB0\u672C",
  theme: theme_default,
  shouldPrefetch: false,
  markdown: {
    headers: {
      level: [2, 3, 4, 5]
    }
  },
  plugins: [
    // searchPlugin({
    //   maxSuggestions: 10,
    //   // 排除首页
    //   isSearchable: (page) => page.path !== '/',
    // }),
    searchProPlugin({
      // 索引全部内容
      indexContent: true
      // 为分类和标签添加索引
      // customFields: [
      //   {
      //     getter: (page) => page.frontmatter.category,
      //     formatter: "分类：$content",
      //   },
      //   {
      //     getter: (page) => page.frontmatter.tag,
      //     formatter: "标签：$content",
      //   },
      // ],
    })
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJJOi9Xb0RlWGlhbmdNdS9teS1ibG9nL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkk6XFxcXFdvRGVYaWFuZ011XFxcXG15LWJsb2dcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0k6L1dvRGVYaWFuZ011L215LWJsb2cvc3JjLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XHJcbmltcG9ydCB7IHNlYXJjaFBsdWdpbiB9IGZyb20gXCJAdnVlcHJlc3MvcGx1Z2luLXNlYXJjaFwiO1xyXG5pbXBvcnQgeyBzZWFyY2hQcm9QbHVnaW4gfSBmcm9tIFwidnVlcHJlc3MtcGx1Z2luLXNlYXJjaC1wcm9cIjtcclxuaW1wb3J0IHRoZW1lIGZyb20gXCIuL3RoZW1lLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcclxuICBiYXNlOiBcIi9cIixcclxuICBsYW5nOiBcInpoLUNOXCIsXHJcbiAgdGl0bGU6IFwiR3Jvd2luZyBOb3Rlc1wiLFxyXG4gIGRlc2NyaXB0aW9uOiBcIlNvbmdYaW5YaW5cdTc2ODRcdTdCMTRcdThCQjBcdTY3MkNcIixcclxuICB0aGVtZSxcclxuICBzaG91bGRQcmVmZXRjaDogZmFsc2UsXHJcbiAgbWFya2Rvd246e1xyXG4gICAgaGVhZGVyczp7XHJcbiAgICAgIGxldmVsOlsyLDMsNCw1XVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgLy8gc2VhcmNoUGx1Z2luKHtcclxuICAgIC8vICAgbWF4U3VnZ2VzdGlvbnM6IDEwLFxyXG4gICAgLy8gICAvLyBcdTYzOTJcdTk2NjRcdTk5OTZcdTk4NzVcclxuICAgIC8vICAgaXNTZWFyY2hhYmxlOiAocGFnZSkgPT4gcGFnZS5wYXRoICE9PSAnLycsXHJcbiAgICAvLyB9KSxcclxuICAgIHNlYXJjaFByb1BsdWdpbih7XHJcbiAgICAgIC8vIFx1N0QyMlx1NUYxNVx1NTE2OFx1OTBFOFx1NTE4NVx1NUJCOVxyXG4gICAgICBpbmRleENvbnRlbnQ6IHRydWUsXHJcbiAgICAgIC8vIFx1NEUzQVx1NTIwNlx1N0M3Qlx1NTQ4Q1x1NjgwN1x1N0I3RVx1NkRGQlx1NTJBMFx1N0QyMlx1NUYxNVxyXG4gICAgICAvLyBjdXN0b21GaWVsZHM6IFtcclxuICAgICAgLy8gICB7XHJcbiAgICAgIC8vICAgICBnZXR0ZXI6IChwYWdlKSA9PiBwYWdlLmZyb250bWF0dGVyLmNhdGVnb3J5LFxyXG4gICAgICAvLyAgICAgZm9ybWF0dGVyOiBcIlx1NTIwNlx1N0M3Qlx1RkYxQSRjb250ZW50XCIsXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gICB7XHJcbiAgICAgIC8vICAgICBnZXR0ZXI6IChwYWdlKSA9PiBwYWdlLmZyb250bWF0dGVyLnRhZyxcclxuICAgICAgLy8gICAgIGZvcm1hdHRlcjogXCJcdTY4MDdcdTdCN0VcdUZGMUEkY29udGVudFwiLFxyXG4gICAgICAvLyAgIH0sXHJcbiAgICAgIC8vIF0sXHJcbiAgICB9KSxcclxuICBdLFxyXG59KTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJJOi9Xb0RlWGlhbmdNdS9teS1ibG9nL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkk6XFxcXFdvRGVYaWFuZ011XFxcXG15LWJsb2dcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFx0aGVtZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vSTovV29EZVhpYW5nTXUvbXktYmxvZy9zcmMvLnZ1ZXByZXNzL3RoZW1lLnRzXCI7aW1wb3J0IHsgaG9wZVRoZW1lIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcclxuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSBcIi4vbmF2YmFyLmpzXCI7XHJcbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tIFwiLi9zaWRlYmFyLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob3BlVGhlbWUoe1xyXG5cclxuICAvL1x1NTdGQVx1NjcyQ1x1OTE0RFx1N0Y2RVxyXG4gIC8vaHR0cHM6Ly92dWVwcmVzcy10aGVtZS1ob3BlLmdpdGh1Yi5pby92Mi96aC9jb25maWcvdGhlbWUvYmFzaWMuaHRtbFxyXG4gIGhvc3RuYW1lOiBcImh0dHA6Ly9nb29kc3h4LmNuXCIsXHJcbiAgYXV0aG9yOiB7XHJcbiAgICBuYW1lOiBcIlNvbmdYaW5YaW5cIixcclxuICAgIC8vdXJsOiBcImh0dHBzOi8vbXJob3BlLnNpdGVcIixcclxuICB9LFxyXG4gIG5hdmJhckxheW91dDoge1xyXG4gICAgc3RhcnQ6IFtcIkJyYW5kXCJdLFxyXG4gICAgY2VudGVyOiBbXCJMaW5rc1wiXSxcclxuICAgIGVuZDogW1wiU2VhcmNoXCIsXCJPdXRsb29rXCIsXCJSZXBvXCJdLFxyXG4gIH0sXHJcblxyXG4gIC8vXHU5OTk2XHU5ODc1XHU1REU2XHU0RTBBXHU4OUQyXHU1NkZFXHU2ODA3XHJcbiAgbG9nbzogXCIvaW1hZ2VzL3MucG5nXCIsXHJcbiAgZG9jc0RpcjogXCJkb2NzXCIsXHJcblxyXG5cclxuICAvL1x1NTI5Rlx1ODBGRFx1OTE0RFx1N0Y2RVxyXG4gIC8vaHR0cHM6Ly92dWVwcmVzcy10aGVtZS1ob3BlLmdpdGh1Yi5pby92Mi96aC9jb25maWcvdGhlbWUvZmVhdHVyZS5odG1sXHJcbiAgYmxvZzoge1xyXG4gICAgYXZhdGFyOicvaW1hZ2VzL2hlaml1LmpwZycsXHJcbiAgICBuYW1lOidTb25nWGluWGluJyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIlx1NEUwMFx1NEUyQS5OZXRcdTdBMEJcdTVFOEZcdTU0NThcIixcclxuICAgIGludHJvOiBcIi9pbnRyby5odG1sXCIsXHJcbiAgICByb3VuZEF2YXRhcjogdHJ1ZSxcclxuICAgIGFydGljbGVJbmZvOltcclxuICAgICAgXCJBdXRob3JcIiwgLy9cdTRGNUNcdTgwMDVcclxuICAgICAgLy9cIk9yaWdpbmFsXCIsIC8vXHU2NjJGXHU1NDI2XHU1MzlGXHU1MjFCXHJcbiAgICAgIFwiRGF0ZVwiLCAvL1x1NTE5OVx1NEY1Q1x1NjVFNVx1NjcxRlxyXG4gICAgICBcIkNhdGVnb3J5XCIsIC8vXHU1MjA2XHU3QzdCXHJcbiAgICAgIFwiVGFnXCIsIC8vXHU2ODA3XHU3QjdFXHJcbiAgICAgIFwiV29yZFwiLC8vXHU1QjU3XHU2NTcwXHJcbiAgICAgIFwiUmVhZGluZ1RpbWVcIiwvL1x1OTg4NFx1OEJBMVx1OTYwNVx1OEJGQlx1NjVGNlx1OTVGNFxyXG4gICAgXSxcclxuICAgIG1lZGlhczoge1xyXG4gICAgICAvLyBCYWlkdTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIC8vIEJpbGlCaWxpOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgLy8gQml0YnVja2V0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgLy8gRGluZ2Rpbmc6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICAvLyBEaXNjb3JkOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgLy8gRHJpYmJibGU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICAvLyBFbWFpbDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIC8vIEV2ZXJub3RlOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgLy8gRmFjZWJvb2s6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICAvLyBGbGlwYm9hcmQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICBHaXRlZTogXCJodHRwczovL2dpdGVlLmNvbS9nb29kc3h4XCIsXHJcbiAgICAgIEdpdEh1YjogXCJodHRwczovL2dpdGh1Yi5jb20vZ29vZHN4eFwiLFxyXG4gICAgICAvLyBHaXRsYWI6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICAvLyBHbWFpbDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIC8vIEluc3RhZ3JhbTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIC8vIExhcms6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICAvLyBMaW5lczogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIC8vIExpbmtlZGluOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgLy8gUGludGVyZXN0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgLy8gUG9ja2V0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgLy8gUVE6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICAvLyBRem9uZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIC8vIFJlZGRpdDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIC8vIFJzczogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIC8vIFN0ZWFtOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgLy8gVHdpdHRlcjogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIC8vIFdlY2hhdDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIC8vIFdlaWJvOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgLy8gV2hhdHNhcHA6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICAvLyBZb3V0dWJlOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgLy8gWmhpaHU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIC8vXHU1RTAzXHU1QzQwXHU5MTREXHU3RjZFXHJcbiAgLy9odHRwczovL3Z1ZXByZXNzLXRoZW1lLWhvcGUuZ2l0aHViLmlvL3YyL3poL2NvbmZpZy90aGVtZS9sYXlvdXQuaHRtbFxyXG4gIC8vXHU1QkZDXHU4MjJBXHU2ODBGXHJcbiAgbmF2YmFyOiBOYXZiYXIsXHJcbiAgbmF2YmFySWNvbjogdHJ1ZSxcclxuICByZXBvRGlzcGxheTogdHJ1ZSxcclxuICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9nb29kc3h4L215LWJsb2dcIixcclxuICBuYXZiYXJBdXRvSGlkZTogXCJtb2JpbGVcIixcclxuICAvL2hpZGVTaXRlTmFtZW9uTW9iaWxlOiB0cnVlLFxyXG4gIC8vXHU0RkE3XHU4RkI5XHU2ODBGXHJcbiAgc2lkZWJhcjogU2lkZWJhcixcclxuICBzaWRlYmFySWNvbjogdHJ1ZSxcclxuICBzaWRlYmFyU29ydGVyOiBbXCJyZWFkbWVcIiwgXCJvcmRlclwiLCBcInRpdGxlXCJdLFxyXG4gIGhlYWRlckRlcHRoOiA1LFxyXG4gIC8vXHU4REVGXHU1Rjg0XHU1QkZDXHU4MjJBXHJcbiAgYnJlYWRjcnVtYjogdHJ1ZSxcclxuICBicmVhZGNydW1iSWNvbjogdHJ1ZSxcclxuICBwcmV2TGluazogdHJ1ZSxcclxuICBuZXh0TGluazogdHJ1ZSxcclxuICB0aXRsZUljb246IHRydWUsXHJcbiAgcGFnZUluZm86WyAvL1x1NjU4N1x1N0FFMFx1NTkzNFx1OTBFOFx1NjYzRVx1NzkzQVx1NTE4NVx1NUJCOVxyXG4gICAgXCJBdXRob3JcIiwgLy9cdTRGNUNcdTgwMDVcclxuICAgIC8vXCJPcmlnaW5hbFwiLCAvL1x1NjYyRlx1NTQyNlx1NTM5Rlx1NTIxQlxyXG4gICAgXCJEYXRlXCIsIC8vXHU1MTk5XHU0RjVDXHU2NUU1XHU2NzFGXHJcbiAgICBcIkNhdGVnb3J5XCIsIC8vXHU1MjA2XHU3QzdCXHJcbiAgICBcIlRhZ1wiLCAvL1x1NjgwN1x1N0I3RVxyXG4gICAgXCJXb3JkXCIsLy9cdTVCNTdcdTY1NzBcclxuICAgIFwiUmVhZGluZ1RpbWVcIiwvL1x1OTg4NFx1OEJBMVx1OTYwNVx1OEJGQlx1NjVGNlx1OTVGNFxyXG4gIF0sXHJcbiAgLy9NZXRhXHJcbiAgbGFzdFVwZGF0ZWQ6IHRydWUsXHJcbiAgY29udHJpYnV0b3JzOiB0cnVlLFxyXG4gIGVkaXRMaW5rOiBmYWxzZSxcclxuICAvL1x1OTg3NVx1ODExQVxyXG4gIGRpc3BsYXlGb290ZXI6IGZhbHNlLFxyXG4gIGZvb3RlcjogXCJcIixcclxuICBjb3B5cmlnaHQ6IFwiXCIsXHJcbiAgLy9cdTY3NDJcdTk4NzlcclxuICB0b2M6IHRydWUsXHJcblxyXG4gIC8vXHU1OTE2XHU4OUMyXHU5MTREXHU3RjZFXHJcbiAgaWNvbkFzc2V0czogXCJpY29uZm9udFwiLFxyXG4gIGRhcmttb2RlOiBcInN3aXRjaFwiLFxyXG4gIGZ1bGxzY3JlZW46IHRydWUsXHJcbiAgdGhlbWVDb2xvcjoge1xyXG4gICAgYmx1ZTogXCIjMjE5NmYzXCIsXHJcbiAgICByZWQ6IFwiI2YyNmQ2ZFwiLFxyXG4gICAgb3JhbmdlOiBcIiNmYjliNWZcIixcclxuICB9LFxyXG5cclxuICBlbmNyeXB0OiB7XHJcbiAgICBjb25maWc6IHtcclxuICAgICAgXCIvaW50cm8uaHRtbFwiOiBbXCIxMTMxXCJdLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBwbHVnaW5zOiB7XHJcbiAgICBibG9nOiB7XHJcbiAgICAgIGV4Y2VycHQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgY29tbWVudDoge1xyXG4gICAgICBwcm92aWRlcjogXCJHaXNjdXNcIixcclxuICAgICAgcmVwbzogXCJnb29kc3h4L2dvb2RzeHguZ2l0aHViLmlvXCIsXHJcbiAgICAgIHJlcG9JZDogXCJSX2tnRE9JYWhGWEFcIixcclxuICAgICAgY2F0ZWdvcnk6IFwiR2VuZXJhbFwiLFxyXG4gICAgICBjYXRlZ29yeUlkOiBcIkRJQ19rd0RPSWFoRlhNNENTaHZsXCIsXHJcbiAgICAgIG1hcHBpbmc6IFwidGl0bGVcIixcclxuICAgICAgcmVhY3Rpb25zRW5hYmxlZDogdHJ1ZSxcclxuICAgICAgbGlnaHRUaGVtZTogXCJsaWdodFwiLFxyXG4gICAgICBkYXJrVGhlbWU6IFwiZGFya1wiXHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czp7XHJcbiAgICAgIGNvbXBvbmVudHM6W1wiQXVkaW9QbGF5ZXJcIixcIkJhZGdlXCIsXCJCaWxpQmlsaVwiLFwiQ29kZVBlblwiLFwiRm9udEljb25cIixcIlBERlwiLFwiU3RhY2tCbGl0elwiLFwiVmlkZW9QbGF5ZXJcIixcIllvdVR1YmVcIl1cclxuICAgIH0sXHJcbiAgICAvLyBEaXNhYmxlIGZlYXR1cmVzIHlvdSBkb25cdTIwMTl0IHdhbnQgaGVyZSBcclxuICAgIG1kRW5oYW5jZToge1xyXG4gICAgICBhbGlnbjogdHJ1ZSxcclxuICAgICAgYXR0cnM6IHRydWUsXHJcbiAgICAgIGNoYXJ0OiB0cnVlLFxyXG4gICAgICBjb2RldGFiczogdHJ1ZSxcclxuICAgICAgY29udGFpbmVyOiB0cnVlLFxyXG4gICAgICBkZW1vOiB0cnVlLFxyXG4gICAgICBlY2hhcnRzOiB0cnVlLFxyXG4gICAgICBmaWd1cmU6IHRydWUsXHJcbiAgICAgIGZsb3djaGFydDogdHJ1ZSxcclxuICAgICAgZ2ZtOiB0cnVlLFxyXG4gICAgICBsaW5rQ2hlY2s6IGZhbHNlLFxyXG4gICAgICBpbWdMYXp5bG9hZDogdHJ1ZSxcclxuICAgICAgaW1nU2l6ZTogdHJ1ZSxcclxuICAgICAgaW1nTWFyazp0cnVlLFxyXG4gICAgICBpbmNsdWRlOiB0cnVlLFxyXG4gICAgICBrYXRleDogdHJ1ZSxcclxuICAgICAgbWFyazogdHJ1ZSxcclxuICAgICAgbWVybWFpZDogdHJ1ZSxcclxuICAgICAgcGxheWdyb3VuZDoge1xyXG4gICAgICAgIHByZXNldHM6IFtcInRzXCIsIFwidnVlXCJdLFxyXG4gICAgICB9LFxyXG4gICAgICBwcmVzZW50YXRpb246IHtcclxuICAgICAgICBwbHVnaW5zOiBbXCJoaWdobGlnaHRcIiwgXCJtYXRoXCIsIFwic2VhcmNoXCIsIFwibm90ZXNcIiwgXCJ6b29tXCJdLFxyXG4gICAgICB9LFxyXG4gICAgICBzdHlsaXplOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWF0Y2hlcjogXCJSZWNvbW1lbmRlZFwiLFxyXG4gICAgICAgICAgcmVwbGFjZXI6ICh7IHRhZyB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0YWcgPT09IFwiZW1cIilcclxuICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdGFnOiBcIkJhZGdlXCIsXHJcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRpcFwiIH0sXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlJlY29tbWVuZGVkXCIsXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgc3ViOiB0cnVlLFxyXG4gICAgICBzdXA6IHRydWUsXHJcbiAgICAgIHRhYnM6IHRydWUsXHJcbiAgICAgIHZQcmU6IHRydWUsXHJcbiAgICAgIHZ1ZVBsYXlncm91bmQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgLy8gdW5jb21tZW50IHRoZXNlIGlmIHlvdSB3YW50IGEgUFdBXHJcbiAgICBwd2E6IHtcclxuICAgICAgZmF2aWNvbjogXCIvZmF2aWNvbi5pY29cIixcclxuICAgICAgY2FjaGVIVE1MOiB0cnVlLFxyXG4gICAgICBjYWNoZVBpYzogdHJ1ZSxcclxuICAgICAgYXBwZW5kQmFzZTogdHJ1ZSxcclxuICAgICAgYXBwbGU6IHtcclxuICAgICAgICBpY29uOiBcIi9hc3NldHMvaWNvbi9hcHBsZS1pY29uLTE1Mi5wbmdcIixcclxuICAgICAgICBzdGF0dXNCYXJDb2xvcjogXCJibGFja1wiLFxyXG4gICAgICB9LFxyXG4gICAgICBtc1RpbGU6IHtcclxuICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2ljb24vbXMtaWNvbi0xNDQucG5nXCIsXHJcbiAgICAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBtYW5pZmVzdDoge1xyXG4gICAgICAgIGljb25zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLW1hc2stNTEyLnBuZ1wiLFxyXG4gICAgICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXHJcbiAgICAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcclxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLW1hc2stMTkyLnBuZ1wiLFxyXG4gICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXHJcbiAgICAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcclxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLTUxMi5wbmdcIixcclxuICAgICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtMTkyLnBuZ1wiLFxyXG4gICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc2hvcnRjdXRzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiRGVtb1wiLFxyXG4gICAgICAgICAgICBzaG9ydF9uYW1lOiBcIkRlbW9cIixcclxuICAgICAgICAgICAgdXJsOiBcIi9kZW1vL1wiLFxyXG4gICAgICAgICAgICBpY29uczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vZ3VpZGUtbWFza2FibGUucG5nXCIsXHJcbiAgICAgICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXHJcbiAgICAgICAgICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9ndWlkZS1tb25vY2hyb21lLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxyXG4gICAgICAgICAgICAgICAgcHVycG9zZTogXCJtb25vY2hyb21lXCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkk6L1dvRGVYaWFuZ011L215LWJsb2cvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiSTpcXFxcV29EZVhpYW5nTXVcXFxcbXktYmxvZ1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXG5hdmJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vSTovV29EZVhpYW5nTXUvbXktYmxvZy9zcmMvLnZ1ZXByZXNzL25hdmJhci50c1wiO2ltcG9ydCB7IG5hdmJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2YmFyID0gbmF2YmFyKFtcclxuICAvL1x1OTE0RFx1N0Y2RVx1OEJGNFx1NjYwRWh0dHBzOi8vdnVlcHJlc3MtdGhlbWUtaG9wZS5naXRodWIuaW8vdjIvemgvZ3VpZGUvbGF5b3V0L25hdmJhci5odG1sXHJcbiAgXCIvXCIsXHJcbiAgeyBcclxuICAgIHRleHQ6IFwiXHU2NzJDXHU3QUQ5XHU2MzA3XHU1MzU3XCIsIFxyXG4gICAgaWNvbjogXCJhdXR1bW5cIiwgXHJcbiAgICBsaW5rOiBcIi9hYm91dC10aGlzLXdlYnNpdGUvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiBcIlx1NjU4N1x1N0FFMFwiLFxyXG4gICAgaWNvbjogXCJibG9nXCIsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTdDRkJcdTUyMTdcIixcclxuICAgICAgICBwcmVmaXg6IFwiL2FydGljbGVzL1wiLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICB7IHRleHQ6IFwiTUFVSVx1N0NGQlx1NTIxN1wiLCBpY29uOiBcImJsb2dcIiwgbGluazogXCJtYXVpL1wiIH0sXHJcbiAgICAgICAgICB7IHRleHQ6IFwiTGludXhcdTdDRkJcdTUyMTdcIiwgaWNvbjogXCJibG9nXCIsIGxpbms6IFwibGludXgvXCIgfSxcclxuICAgICAgICAgIHsgdGV4dDogXCJcdTVGQUVcdTY3MERcdTUyQTFcdTdDRkJcdTUyMTdcIiwgaWNvbjogXCJibG9nXCIsIGxpbms6IFwibWljcm8tc2VydmljZS9cIiB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1OEJCRVx1OEJBMVx1NkEyMVx1NUYwRlwiLCBpY29uOiBcImJsb2dcIiwgbGluazogXCJkZXNpZ24tcGF0dGVybi9cIiB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NURFNVx1NTE3N1wiLCBpY29uOiBcImJsb2dcIiwgbGluazogXCJ0b29scy9cIiB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlx1OTZGNlx1Nzg4RVx1NTE4NVx1NUJCOVwiLFxyXG4gICAgICAgIHByZWZpeDogXCIvYXJ0aWNsZXMvXCIsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIHsgdGV4dDogXCJcdTUyNERcdTdBRUZcIiwgaWNvbjogXCJibG9nXCIsIGxpbms6IFwicWlhbmR1YW4vXCIgfSxcclxuICAgICAgICAgIHsgdGV4dDogXCJcdTU0MEVcdTdBRUZcIiwgaWNvbjogXCJibG9nXCIsIGxpbms6IFwiaG91ZHVhbi9cIiB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NTE3Nlx1NUI4M1wiLCBpY29uOiBcImJsb2dcIiwgbGluazogXCJvdGhlcnMvXCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHsgXHJcbiAgICB0ZXh0OiBcIlx1NzU1OVx1OEEwMFx1Njc3RlwiLCBcclxuICAgIGljb246IFwiZWRpdFwiLCBcclxuICAgIGxpbms6IFwiL2xpdXlhbmJhblwiLFxyXG4gIH0sXHJcbl0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkk6L1dvRGVYaWFuZ011L215LWJsb2cvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiSTpcXFxcV29EZVhpYW5nTXVcXFxcbXktYmxvZ1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXHNpZGViYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0k6L1dvRGVYaWFuZ011L215LWJsb2cvc3JjLy52dWVwcmVzcy9zaWRlYmFyLnRzXCI7aW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2lkZWJhciA9IHNpZGViYXIoe1xyXG4gIFxyXG4gIFwiL2Fib3V0LXRoaXMtd2Vic2l0ZS9cIjogXCJzdHJ1Y3R1cmVcIixcclxuICBcIi9hcnRpY2xlcy9cIjogXCJzdHJ1Y3R1cmVcIixcclxuICBcIi9hcnRpY2xlcy9saW51eC9cIjogXCJzdHJ1Y3R1cmVcIixcclxuICBcIi9hcnRpY2xlcy9taWNyby1zZXJ2aWNlL1wiOiBcInN0cnVjdHVyZVwiLFxyXG4gIFwiL2FydGljbGVzL21hdWkvXCI6IFwic3RydWN0dXJlXCIsXHJcbiAgXCIvYXJ0aWNsZXMvZGVzaWduLXBhdHRlcm4vXCI6IFwic3RydWN0dXJlXCIsXHJcbiAgXCIvYXJ0aWNsZXMvdG9vbHMvXCI6IFwic3RydWN0dXJlXCIsXHJcbiAgXCIvYXJ0aWNsZXMvcWlhbmR1YW4vXCI6IFwic3RydWN0dXJlXCIsXHJcbiAgXCIvYXJ0aWNsZXMvaG91ZHVhbi9cIjogXCJzdHJ1Y3R1cmVcIixcclxuICBcIi9hcnRpY2xlcy9vdGhlcnMvXCI6IFwic3RydWN0dXJlXCIsXHJcbiAgXHJcbiAgLy8gXCIvXCI6IFtcclxuICAvLyAgIFwiXCIsXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIHRleHQ6IFwiXHU1OTgyXHU0RjU1XHU0RjdGXHU3NTI4XCIsXHJcbiAgLy8gICAgIGljb246IFwiY3JlYXRpdmVcIixcclxuICAvLyAgICAgcHJlZml4OiBcImd1aWRlL1wiLFxyXG4gIC8vICAgICBsaW5rOiBcImd1aWRlL1wiLFxyXG4gIC8vICAgICBjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIixcclxuICAvLyAgIH0sXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIHRleHQ6IFwiXHU2NTg3XHU3QUUwXCIsXHJcbiAgLy8gICAgIGljb246IFwibm90ZVwiLFxyXG4gIC8vICAgICBwcmVmaXg6IFwicG9zdHMvXCIsXHJcbiAgLy8gICAgIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxyXG4gIC8vICAgfSxcclxuICAvLyAgIFwiaW50cm9cIixcclxuICAvLyAgIFwic2xpZGVzXCIsXHJcbiAgLy8gXVxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwUixTQUFTLHdCQUF3QjtBQUUzVCxTQUFTLHVCQUF1Qjs7O0FDRndQLFNBQVMsaUJBQWlCOzs7QUNBeEIsU0FBUyxjQUFjO0FBRTFTLElBQU0sU0FBUyxPQUFPO0FBQUE7QUFBQSxFQUUzQjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLE1BQ1I7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLFVBQVU7QUFBQSxVQUNSLEVBQUUsTUFBTSxvQkFBVSxNQUFNLFFBQVEsTUFBTSxRQUFRO0FBQUEsVUFDOUMsRUFBRSxNQUFNLHFCQUFXLE1BQU0sUUFBUSxNQUFNLFNBQVM7QUFBQSxVQUNoRCxFQUFFLE1BQU0sa0NBQVMsTUFBTSxRQUFRLE1BQU0saUJBQWlCO0FBQUEsVUFDdEQsRUFBRSxNQUFNLDRCQUFRLE1BQU0sUUFBUSxNQUFNLGtCQUFrQjtBQUFBLFVBQ3RELEVBQUUsTUFBTSxnQkFBTSxNQUFNLFFBQVEsTUFBTSxTQUFTO0FBQUEsUUFDN0M7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFB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
