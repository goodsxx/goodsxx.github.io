// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";

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
    link: "/columns/about-this-website/"
  },
  {
    text: "\u6587\u7AE0",
    icon: "blog",
    children: [
      {
        text: "\u7CFB\u5217",
        prefix: "/columns/blog-posts/series/",
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
        prefix: "/columns/blog-posts/lingsuineirong/",
        children: [
          { text: "\u524D\u7AEF", icon: "blog", link: "qianduan/" },
          { text: "\u540E\u7AEF", icon: "blog", link: "houduan/" },
          { text: "\u5176\u4ED6", icon: "blog", link: "others/" }
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
  "/columns/about-this-website/": "structure",
  "/columns/blog-posts/series/linux/": "structure",
  "/columns/blog-posts/series/micro-service/": "structure",
  "/columns/blog-posts/series/maui/": "structure",
  "/columns/blog-posts/series/design-pattern/": "structure",
  "/columns/blog-posts/series/tools/": "structure",
  "/columns/blog-posts/lingsuineirong/qianduan/": "structure",
  "/columns/blog-posts/lingsuineirong/houduan/": "structure",
  "/columns/blog-posts/lingsuineirong/others/": "structure"
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
      Baidu: "https://example.com",
      BiliBili: "https://example.com",
      Bitbucket: "https://example.com",
      Dingding: "https://example.com",
      Discord: "https://example.com",
      Dribbble: "https://example.com",
      Email: "https://example.com",
      Evernote: "https://example.com",
      Facebook: "https://example.com",
      Flipboard: "https://example.com",
      Gitee: "https://example.com",
      GitHub: "https://example.com",
      Gitlab: "https://example.com",
      Gmail: "https://example.com",
      Instagram: "https://example.com",
      Lark: "https://example.com",
      Lines: "https://example.com",
      Linkedin: "https://example.com",
      Pinterest: "https://example.com",
      Pocket: "https://example.com",
      QQ: "https://example.com",
      Qzone: "https://example.com",
      Reddit: "https://example.com",
      Rss: "https://example.com",
      Steam: "https://example.com",
      Twitter: "https://example.com",
      Wechat: "https://example.com",
      Weibo: "https://example.com",
      Whatsapp: "https://example.com",
      Youtube: "https://example.com",
      Zhihu: "https://example.com"
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
    searchPlugin({
      maxSuggestions: 10,
      // 排除首页
      isSearchable: (page) => page.path !== "/"
    })
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9cdTYyMTFcdTc2ODRcdTk4NzlcdTc2RUUvbXktYmxvZy9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxcdTYyMTFcdTc2ODRcdTk4NzlcdTc2RUVcXFxcbXktYmxvZ1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJUU2JTg4JTkxJUU3JTlBJTg0JUU5JUExJUI5JUU3JTlCJUFFL215LWJsb2cvc3JjLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XHJcbmltcG9ydCB7IHNlYXJjaFBsdWdpbiB9IGZyb20gXCJAdnVlcHJlc3MvcGx1Z2luLXNlYXJjaFwiO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWUuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZVVzZXJDb25maWcoe1xyXG4gIGJhc2U6IFwiL1wiLFxyXG4gIGxhbmc6IFwiemgtQ05cIixcclxuICB0aXRsZTogXCJHcm93aW5nIE5vdGVzXCIsXHJcbiAgZGVzY3JpcHRpb246IFwiU29uZ1hpblhpblx1NzY4NFx1N0IxNFx1OEJCMFx1NjcyQ1wiLFxyXG4gIHRoZW1lLFxyXG4gIHNob3VsZFByZWZldGNoOiBmYWxzZSxcclxuICBtYXJrZG93bjp7XHJcbiAgICBoZWFkZXJzOntcclxuICAgICAgbGV2ZWw6WzIsMyw0LDVdXHJcbiAgICB9XHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICBzZWFyY2hQbHVnaW4oe1xyXG4gICAgICBtYXhTdWdnZXN0aW9uczogMTAsXHJcbiAgICAgIC8vIFx1NjM5Mlx1OTY2NFx1OTk5Nlx1OTg3NVxyXG4gICAgICBpc1NlYXJjaGFibGU6IChwYWdlKSA9PiBwYWdlLnBhdGggIT09ICcvJyxcclxuICAgIH0pLFxyXG4gICAgXHJcbiAgXSxcclxufSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovXHU2MjExXHU3Njg0XHU5ODc5XHU3NkVFL215LWJsb2cvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcXHU2MjExXHU3Njg0XHU5ODc5XHU3NkVFXFxcXG15LWJsb2dcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFx0aGVtZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJUU2JTg4JTkxJUU3JTlBJTg0JUU5JUExJUI5JUU3JTlCJUFFL215LWJsb2cvc3JjLy52dWVwcmVzcy90aGVtZS50c1wiO2ltcG9ydCB7IGhvcGVUaGVtZSB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tIFwiLi9uYXZiYXIuanNcIjtcbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tIFwiLi9zaWRlYmFyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGhvcGVUaGVtZSh7XG5cbiAgLy9cdTU3RkFcdTY3MkNcdTkxNERcdTdGNkVcbiAgLy9odHRwczovL3Z1ZXByZXNzLXRoZW1lLWhvcGUuZ2l0aHViLmlvL3YyL3poL2NvbmZpZy90aGVtZS9iYXNpYy5odG1sXG4gIGhvc3RuYW1lOiBcImh0dHA6Ly9nb29kc3h4LmNuXCIsXG4gIGF1dGhvcjoge1xuICAgIG5hbWU6IFwiU29uZ1hpblhpblwiLFxuICAgIC8vdXJsOiBcImh0dHBzOi8vbXJob3BlLnNpdGVcIixcbiAgfSxcbiAgbmF2YmFyTGF5b3V0OiB7XG4gICAgc3RhcnQ6IFtcIkJyYW5kXCJdLFxuICAgIGNlbnRlcjogW1wiTGlua3NcIl0sXG4gICAgZW5kOiBbXCJTZWFyY2hcIixcIk91dGxvb2tcIixcIlJlcG9cIl0sXG4gIH0sXG5cblxuICAvL1x1OTk5Nlx1OTg3NVx1NURFNlx1NEUwQVx1ODlEMlx1NTZGRVx1NjgwN1xuICBsb2dvOiBcIi9pbWFnZXMvcy5wbmdcIixcbiAgZG9jc0RpcjogXCJkb2NzXCIsXG5cblxuICAvL1x1NTI5Rlx1ODBGRFx1OTE0RFx1N0Y2RVxuICAvL2h0dHBzOi8vdnVlcHJlc3MtdGhlbWUtaG9wZS5naXRodWIuaW8vdjIvemgvY29uZmlnL3RoZW1lL2ZlYXR1cmUuaHRtbFxuICBibG9nOiB7XG4gICAgYXZhdGFyOicvaW1hZ2VzL2hlaml1LmpwZycsXG4gICAgbmFtZTonU29uZ1hpblhpbicsXG4gICAgZGVzY3JpcHRpb246IFwiXHU0RTAwXHU0RTJBLk5ldFx1N0EwQlx1NUU4Rlx1NTQ1OFwiLFxuICAgIGludHJvOiBcIi9pbnRyby5odG1sXCIsXG4gICAgcm91bmRBdmF0YXI6IHRydWUsXG4gICAgYXJ0aWNsZUluZm86W1xuICAgICAgXCJBdXRob3JcIiwgLy9cdTRGNUNcdTgwMDVcbiAgICAgIC8vXCJPcmlnaW5hbFwiLCAvL1x1NjYyRlx1NTQyNlx1NTM5Rlx1NTIxQlxuICAgICAgXCJEYXRlXCIsIC8vXHU1MTk5XHU0RjVDXHU2NUU1XHU2NzFGXG4gICAgICBcIkNhdGVnb3J5XCIsIC8vXHU1MjA2XHU3QzdCXG4gICAgICBcIlRhZ1wiLCAvL1x1NjgwN1x1N0I3RVxuICAgICAgXCJXb3JkXCIsLy9cdTVCNTdcdTY1NzBcbiAgICAgIFwiUmVhZGluZ1RpbWVcIiwvL1x1OTg4NFx1OEJBMVx1OTYwNVx1OEJGQlx1NjVGNlx1OTVGNFxuICAgIF0sXG4gICAgbWVkaWFzOiB7XG4gICAgICBCYWlkdTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBCaWxpQmlsaTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBCaXRidWNrZXQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgRGluZ2Rpbmc6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgRGlzY29yZDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBEcmliYmJsZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBFbWFpbDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBFdmVybm90ZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBGYWNlYm9vazogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBGbGlwYm9hcmQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgR2l0ZWU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgR2l0SHViOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIEdpdGxhYjogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBHbWFpbDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBJbnN0YWdyYW06IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgTGFyazogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBMaW5lczogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBMaW5rZWRpbjogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBQaW50ZXJlc3Q6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgUG9ja2V0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIFFROiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIFF6b25lOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIFJlZGRpdDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBSc3M6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgU3RlYW06IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgVHdpdHRlcjogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBXZWNoYXQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgV2VpYm86IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgV2hhdHNhcHA6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgWW91dHViZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBaaGlodTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgfSxcbiAgfSxcbiAgLy9cdTVFMDNcdTVDNDBcdTkxNERcdTdGNkVcbiAgLy9odHRwczovL3Z1ZXByZXNzLXRoZW1lLWhvcGUuZ2l0aHViLmlvL3YyL3poL2NvbmZpZy90aGVtZS9sYXlvdXQuaHRtbFxuICAvL1x1NUJGQ1x1ODIyQVx1NjgwRlxuICBuYXZiYXI6IE5hdmJhcixcbiAgbmF2YmFySWNvbjogdHJ1ZSxcbiAgcmVwb0Rpc3BsYXk6IHRydWUsXG4gIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL2dvb2RzeHgvbXktYmxvZ1wiLFxuICBuYXZiYXJBdXRvSGlkZTogXCJtb2JpbGVcIixcbiAgLy9oaWRlU2l0ZU5hbWVvbk1vYmlsZTogdHJ1ZSxcbiAgLy9cdTRGQTdcdThGQjlcdTY4MEZcbiAgc2lkZWJhcjogU2lkZWJhcixcbiAgc2lkZWJhckljb246IHRydWUsXG4gIHNpZGViYXJTb3J0ZXI6IFtcInJlYWRtZVwiLCBcIm9yZGVyXCIsIFwidGl0bGVcIl0sXG4gIGhlYWRlckRlcHRoOiA1LFxuICAvL1x1OERFRlx1NUY4NFx1NUJGQ1x1ODIyQVxuICBicmVhZGNydW1iOiB0cnVlLFxuICBicmVhZGNydW1iSWNvbjogdHJ1ZSxcbiAgcHJldkxpbms6IHRydWUsXG4gIG5leHRMaW5rOiB0cnVlLFxuICB0aXRsZUljb246IHRydWUsXG4gIHBhZ2VJbmZvOlsgLy9cdTY1ODdcdTdBRTBcdTU5MzRcdTkwRThcdTY2M0VcdTc5M0FcdTUxODVcdTVCQjlcbiAgICBcIkF1dGhvclwiLCAvL1x1NEY1Q1x1ODAwNVxuICAgIC8vXCJPcmlnaW5hbFwiLCAvL1x1NjYyRlx1NTQyNlx1NTM5Rlx1NTIxQlxuICAgIFwiRGF0ZVwiLCAvL1x1NTE5OVx1NEY1Q1x1NjVFNVx1NjcxRlxuICAgIFwiQ2F0ZWdvcnlcIiwgLy9cdTUyMDZcdTdDN0JcbiAgICBcIlRhZ1wiLCAvL1x1NjgwN1x1N0I3RVxuICAgIFwiV29yZFwiLC8vXHU1QjU3XHU2NTcwXG4gICAgXCJSZWFkaW5nVGltZVwiLC8vXHU5ODg0XHU4QkExXHU5NjA1XHU4QkZCXHU2NUY2XHU5NUY0XG4gIF0sXG4gIC8vTWV0YVxuICBsYXN0VXBkYXRlZDogdHJ1ZSxcbiAgY29udHJpYnV0b3JzOiB0cnVlLFxuICBlZGl0TGluazogZmFsc2UsXG4gIC8vXHU5ODc1XHU4MTFBXG4gIGRpc3BsYXlGb290ZXI6IGZhbHNlLFxuICBmb290ZXI6IFwiXCIsXG4gIGNvcHlyaWdodDogXCJcIixcbiAgLy9cdTY3NDJcdTk4NzlcbiAgdG9jOiB0cnVlLFxuXG4gIC8vXHU1OTE2XHU4OUMyXHU5MTREXHU3RjZFXG4gIGljb25Bc3NldHM6IFwiaWNvbmZvbnRcIixcbiAgZGFya21vZGU6IFwic3dpdGNoXCIsXG4gIGZ1bGxzY3JlZW46IHRydWUsXG4gIHRoZW1lQ29sb3I6IHtcbiAgICBibHVlOiBcIiMyMTk2ZjNcIixcbiAgICByZWQ6IFwiI2YyNmQ2ZFwiLFxuICAgIG9yYW5nZTogXCIjZmI5YjVmXCIsXG4gIH0sXG5cbiAgZW5jcnlwdDoge1xuICAgIGNvbmZpZzoge1xuICAgICAgXCIvaW50cm8uaHRtbFwiOiBbXCIxMTMxXCJdLFxuICAgIH0sXG4gIH0sXG5cbiAgcGx1Z2luczoge1xuICAgIGJsb2c6IHtcbiAgICAgIGV4Y2VycHQ6IHRydWUsXG4gICAgfSxcbiAgICBjb21tZW50OiB7XG4gICAgICBwcm92aWRlcjogXCJHaXNjdXNcIixcbiAgICAgIHJlcG86IFwiZ29vZHN4eC9nb29kc3h4LmdpdGh1Yi5pb1wiLFxuICAgICAgcmVwb0lkOiBcIlJfa2dET0lhaEZYQVwiLFxuICAgICAgY2F0ZWdvcnk6IFwiR2VuZXJhbFwiLFxuICAgICAgY2F0ZWdvcnlJZDogXCJESUNfa3dET0lhaEZYTTRDU2h2bFwiLFxuICAgICAgbWFwcGluZzogXCJ0aXRsZVwiLFxuICAgICAgcmVhY3Rpb25zRW5hYmxlZDogdHJ1ZSxcbiAgICAgIGxpZ2h0VGhlbWU6IFwibGlnaHRcIixcbiAgICAgIGRhcmtUaGVtZTogXCJkYXJrXCJcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6e1xuICAgICAgY29tcG9uZW50czpbXCJBdWRpb1BsYXllclwiLFwiQmFkZ2VcIixcIkJpbGlCaWxpXCIsXCJDb2RlUGVuXCIsXCJGb250SWNvblwiLFwiUERGXCIsXCJTdGFja0JsaXR6XCIsXCJWaWRlb1BsYXllclwiLFwiWW91VHViZVwiXVxuICAgIH0sXG4gICAgLy8gRGlzYWJsZSBmZWF0dXJlcyB5b3UgZG9uXHUyMDE5dCB3YW50IGhlcmUgXG4gICAgbWRFbmhhbmNlOiB7XG4gICAgICBhbGlnbjogdHJ1ZSxcbiAgICAgIGF0dHJzOiB0cnVlLFxuICAgICAgY2hhcnQ6IHRydWUsXG4gICAgICBjb2RldGFiczogdHJ1ZSxcbiAgICAgIGNvbnRhaW5lcjogdHJ1ZSxcbiAgICAgIGRlbW86IHRydWUsXG4gICAgICBlY2hhcnRzOiB0cnVlLFxuICAgICAgZmlndXJlOiB0cnVlLFxuICAgICAgZmxvd2NoYXJ0OiB0cnVlLFxuICAgICAgZ2ZtOiB0cnVlLFxuICAgICAgaW1nTGF6eWxvYWQ6IHRydWUsXG4gICAgICBpbWdTaXplOiB0cnVlLFxuICAgICAgaW1nTWFyazp0cnVlLFxuICAgICAgaW5jbHVkZTogdHJ1ZSxcbiAgICAgIGthdGV4OiB0cnVlLFxuICAgICAgbWFyazogdHJ1ZSxcbiAgICAgIG1lcm1haWQ6IHRydWUsXG4gICAgICBwbGF5Z3JvdW5kOiB7XG4gICAgICAgIHByZXNldHM6IFtcInRzXCIsIFwidnVlXCJdLFxuICAgICAgfSxcbiAgICAgIHByZXNlbnRhdGlvbjoge1xuICAgICAgICBwbHVnaW5zOiBbXCJoaWdobGlnaHRcIiwgXCJtYXRoXCIsIFwic2VhcmNoXCIsIFwibm90ZXNcIiwgXCJ6b29tXCJdLFxuICAgICAgfSxcbiAgICAgIHN0eWxpemU6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1hdGNoZXI6IFwiUmVjb21tZW5kZWRcIixcbiAgICAgICAgICByZXBsYWNlcjogKHsgdGFnIH0pID0+IHtcbiAgICAgICAgICAgIGlmICh0YWcgPT09IFwiZW1cIilcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiQmFkZ2VcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRpcFwiIH0sXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJSZWNvbW1lbmRlZFwiLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgc3ViOiB0cnVlLFxuICAgICAgc3VwOiB0cnVlLFxuICAgICAgdGFiczogdHJ1ZSxcbiAgICAgIHZQcmU6IHRydWUsXG4gICAgICB2dWVQbGF5Z3JvdW5kOiB0cnVlLFxuICAgIH0sXG4gICAgLy8gdW5jb21tZW50IHRoZXNlIGlmIHlvdSB3YW50IGEgUFdBXG4gICAgcHdhOiB7XG4gICAgICBmYXZpY29uOiBcIi9mYXZpY29uLmljb1wiLFxuICAgICAgY2FjaGVIVE1MOiB0cnVlLFxuICAgICAgY2FjaGVQaWM6IHRydWUsXG4gICAgICBhcHBlbmRCYXNlOiB0cnVlLFxuICAgICAgYXBwbGU6IHtcbiAgICAgICAgaWNvbjogXCIvYXNzZXRzL2ljb24vYXBwbGUtaWNvbi0xNTIucG5nXCIsXG4gICAgICAgIHN0YXR1c0JhckNvbG9yOiBcImJsYWNrXCIsXG4gICAgICB9LFxuICAgICAgbXNUaWxlOiB7XG4gICAgICAgIGltYWdlOiBcIi9hc3NldHMvaWNvbi9tcy1pY29uLTE0NC5wbmdcIixcbiAgICAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgICAgfSxcbiAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgIGljb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtbWFzay01MTIucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtbWFzay0xOTIucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtNTEyLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLTE5Mi5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc2hvcnRjdXRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJEZW1vXCIsXG4gICAgICAgICAgICBzaG9ydF9uYW1lOiBcIkRlbW9cIixcbiAgICAgICAgICAgIHVybDogXCIvZGVtby9cIixcbiAgICAgICAgICAgIGljb25zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2d1aWRlLW1hc2thYmxlLnBuZ1wiLFxuICAgICAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAgICAgICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vZ3VpZGUtbW9ub2Nocm9tZS5wbmdcIixcbiAgICAgICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgICAgICAgICAgICAgcHVycG9zZTogXCJtb25vY2hyb21lXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9cdTYyMTFcdTc2ODRcdTk4NzlcdTc2RUUvbXktYmxvZy9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxcdTYyMTFcdTc2ODRcdTk4NzlcdTc2RUVcXFxcbXktYmxvZ1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXG5hdmJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJUU2JTg4JTkxJUU3JTlBJTg0JUU5JUExJUI5JUU3JTlCJUFFL215LWJsb2cvc3JjLy52dWVwcmVzcy9uYXZiYXIudHNcIjtpbXBvcnQgeyBuYXZiYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdmJhciA9IG5hdmJhcihbXHJcbiAgLy9cdTkxNERcdTdGNkVcdThCRjRcdTY2MEVodHRwczovL3Z1ZXByZXNzLXRoZW1lLWhvcGUuZ2l0aHViLmlvL3YyL3poL2d1aWRlL2xheW91dC9uYXZiYXIuaHRtbFxyXG4gIFwiL1wiLFxyXG4gIHsgXHJcbiAgICB0ZXh0OiBcIlx1NjcyQ1x1N0FEOVx1NjMwN1x1NTM1N1wiLCBcclxuICAgIGljb246IFwiYXV0dW1uXCIsIFxyXG4gICAgbGluazogXCIvY29sdW1ucy9hYm91dC10aGlzLXdlYnNpdGUvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiBcIlx1NjU4N1x1N0FFMFwiLFxyXG4gICAgaWNvbjogXCJibG9nXCIsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTdDRkJcdTUyMTdcIixcclxuICAgICAgICBwcmVmaXg6IFwiL2NvbHVtbnMvYmxvZy1wb3N0cy9zZXJpZXMvXCIsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIHsgdGV4dDogXCJNQVVJXHU3Q0ZCXHU1MjE3XCIsIGljb246IFwiYmxvZ1wiLCBsaW5rOiBcIm1hdWkvXCIgfSxcclxuICAgICAgICAgIHsgdGV4dDogXCJMaW51eFx1N0NGQlx1NTIxN1wiLCBpY29uOiBcImJsb2dcIiwgbGluazogXCJsaW51eC9cIiB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NUZBRVx1NjcwRFx1NTJBMVx1N0NGQlx1NTIxN1wiLCBpY29uOiBcImJsb2dcIiwgbGluazogXCJtaWNyby1zZXJ2aWNlL1wiIH0sXHJcbiAgICAgICAgICB7IHRleHQ6IFwiXHU4QkJFXHU4QkExXHU2QTIxXHU1RjBGXCIsIGljb246IFwiYmxvZ1wiLCBsaW5rOiBcImRlc2lnbi1wYXR0ZXJuL1wiIH0sXHJcbiAgICAgICAgICB7IHRleHQ6IFwiXHU1REU1XHU1MTc3XCIsIGljb246IFwiYmxvZ1wiLCBsaW5rOiBcInRvb2xzL1wiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU5NkY2XHU3ODhFXHU1MTg1XHU1QkI5XCIsXHJcbiAgICAgICAgcHJlZml4OiBcIi9jb2x1bW5zL2Jsb2ctcG9zdHMvbGluZ3N1aW5laXJvbmcvXCIsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIHsgdGV4dDogXCJcdTUyNERcdTdBRUZcIiwgaWNvbjogXCJibG9nXCIsIGxpbms6IFwicWlhbmR1YW4vXCIgfSxcclxuICAgICAgICAgIHsgdGV4dDogXCJcdTU0MEVcdTdBRUZcIiwgaWNvbjogXCJibG9nXCIsIGxpbms6IFwiaG91ZHVhbi9cIiB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NTE3Nlx1NEVENlwiLCBpY29uOiBcImJsb2dcIiwgbGluazogXCJvdGhlcnMvXCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHsgXHJcbiAgICB0ZXh0OiBcIlx1NzU1OVx1OEEwMFx1Njc3RlwiLCBcclxuICAgIGljb246IFwiZWRpdFwiLCBcclxuICAgIGxpbms6IFwiL2xpdXlhbmJhblwiLFxyXG4gIH0sXHJcbl0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L1x1NjIxMVx1NzY4NFx1OTg3OVx1NzZFRS9teS1ibG9nL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFx1NjIxMVx1NzY4NFx1OTg3OVx1NzZFRVxcXFxteS1ibG9nXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcc2lkZWJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJUU2JTg4JTkxJUU3JTlBJTg0JUU5JUExJUI5JUU3JTlCJUFFL215LWJsb2cvc3JjLy52dWVwcmVzcy9zaWRlYmFyLnRzXCI7aW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2lkZWJhciA9IHNpZGViYXIoe1xyXG4gIFxyXG4gIFwiL2NvbHVtbnMvYWJvdXQtdGhpcy13ZWJzaXRlL1wiOiBcInN0cnVjdHVyZVwiLFxyXG4gIFwiL2NvbHVtbnMvYmxvZy1wb3N0cy9zZXJpZXMvbGludXgvXCI6IFwic3RydWN0dXJlXCIsXHJcbiAgXCIvY29sdW1ucy9ibG9nLXBvc3RzL3Nlcmllcy9taWNyby1zZXJ2aWNlL1wiOiBcInN0cnVjdHVyZVwiLFxyXG4gIFwiL2NvbHVtbnMvYmxvZy1wb3N0cy9zZXJpZXMvbWF1aS9cIjogXCJzdHJ1Y3R1cmVcIixcclxuICBcIi9jb2x1bW5zL2Jsb2ctcG9zdHMvc2VyaWVzL2Rlc2lnbi1wYXR0ZXJuL1wiOiBcInN0cnVjdHVyZVwiLFxyXG4gIFwiL2NvbHVtbnMvYmxvZy1wb3N0cy9zZXJpZXMvdG9vbHMvXCI6IFwic3RydWN0dXJlXCIsXHJcbiAgXCIvY29sdW1ucy9ibG9nLXBvc3RzL2xpbmdzdWluZWlyb25nL3FpYW5kdWFuL1wiOiBcInN0cnVjdHVyZVwiLFxyXG4gIFwiL2NvbHVtbnMvYmxvZy1wb3N0cy9saW5nc3VpbmVpcm9uZy9ob3VkdWFuL1wiOiBcInN0cnVjdHVyZVwiLFxyXG4gIFwiL2NvbHVtbnMvYmxvZy1wb3N0cy9saW5nc3VpbmVpcm9uZy9vdGhlcnMvXCI6IFwic3RydWN0dXJlXCIsXHJcbiAgXHJcbiAgLy8gXCIvXCI6IFtcclxuICAvLyAgIFwiXCIsXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIHRleHQ6IFwiXHU1OTgyXHU0RjU1XHU0RjdGXHU3NTI4XCIsXHJcbiAgLy8gICAgIGljb246IFwiY3JlYXRpdmVcIixcclxuICAvLyAgICAgcHJlZml4OiBcImd1aWRlL1wiLFxyXG4gIC8vICAgICBsaW5rOiBcImd1aWRlL1wiLFxyXG4gIC8vICAgICBjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIixcclxuICAvLyAgIH0sXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIHRleHQ6IFwiXHU2NTg3XHU3QUUwXCIsXHJcbiAgLy8gICAgIGljb246IFwibm90ZVwiLFxyXG4gIC8vICAgICBwcmVmaXg6IFwicG9zdHMvXCIsXHJcbiAgLy8gICAgIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxyXG4gIC8vICAgfSxcclxuICAvLyAgIFwiaW50cm9cIixcclxuICAvLyAgIFwic2xpZGVzXCIsXHJcbiAgLy8gXVxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxUyxTQUFTLHdCQUF3QjtBQUN0VSxTQUFTLG9CQUFvQjs7O0FDRHNRLFNBQVMsaUJBQWlCOzs7QUNBeEIsU0FBUyxjQUFjO0FBRXJULElBQU0sU0FBUyxPQUFPO0FBQUE7QUFBQSxFQUUzQjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLE1BQ1I7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLFVBQVU7QUFBQSxVQUNSLEVBQUUsTUFBTSxvQkFBVSxNQUFNLFFBQVEsTUFBTSxRQUFRO0FBQUEsVUFDOUMsRUFBRSxNQUFNLHFCQUFXLE1BQU0sUUFBUSxNQUFNLFNBQVM7QUFBQSxVQUNoRCxFQUFFLE1BQU0sa0NBQVMsTUFBTSxRQUFRLE1BQU0saUJBQWlCO0FBQUEsVUFDdEQsRUFBRSxNQUFNLDRCQUFRLE1BQU0sUUFBUSxNQUFNLGtCQUFrQjtBQUFBLFVBQ3RELEVBQUUsTUFBTSxnQkFBTSxNQUFNLFFBQVEsTUFB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
