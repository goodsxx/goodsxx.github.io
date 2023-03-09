import { hopeTheme } from "vuepress-theme-hope/perf";
import { Navbar } from "./navbar.js";
import { Sidebar } from "./sidebar.js";

export default hopeTheme({

  //基本配置
  //https://vuepress-theme-hope.github.io/v2/zh/config/theme/basic.html
  hostname: "http://blog.goodsxx.cn",
  author: {
    name: "SongXinXin",
    //url: "https://mrhope.site",
  },
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Search","Outlook","Repo"],
  },

  //首页左上角图标
  logo: "/images/s.png",
  docsDir: "docs",


  //功能配置
  //https://vuepress-theme-hope.github.io/v2/zh/config/theme/feature.html
  blog: {
    avatar:'/images/hejiu.jpg',
    name:'SongXinXin',
    description: "一个.Net程序员",
    intro: "/intro.html",
    roundAvatar: true,
    articleInfo:[
      "Author", //作者
      //"Original", //是否原创
      "Date", //写作日期
      "Category", //分类
      "Tag", //标签
      "Word",//字数
      "ReadingTime",//预计阅读时间
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
      GitHub: "https://github.com/goodsxx",
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
    },
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
  pageInfo:[ //文章头部显示内容
    "Author", //作者
    //"Original", //是否原创
    "Date", //写作日期
    "Category", //分类
    "Tag", //标签
    "Word",//字数
    "ReadingTime",//预计阅读时间
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
    orange: "#fb9b5f",
  },

  encrypt: {
    config: {
      "/intro.html": ["1131"],
    },
  },

  plugins: {
    blog: {
      excerpt: true,
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
    components:{
      components:["AudioPlayer","Badge","BiliBili","CodePen","FontIcon","PDF","StackBlitz","VideoPlayer","YouTube"]
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
      imgMark:true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
    // uncomment these if you want a PWA
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
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
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
