import { navbar } from "vuepress-theme-hope";

export const Navbar = navbar([
  //配置说明https://vuepress-theme-hope.github.io/v2/zh/guide/layout/navbar.html
  "/",
  { 
    text: "本站指南", 
    icon: "autumn", 
    link: "/columns/about-this-website/",
  },
  {
    text: "文章",
    icon: "blog",
    children: [
      {
        text: "系列",
        prefix: "/columns/blog-posts/series/",
        children: [
          { text: "MAUI系列", icon: "blog", link: "maui/" },
          { text: "Linux系列", icon: "blog", link: "linux/" },
          { text: "微服务系列", icon: "blog", link: "micro-service/" },
          { text: "设计模式", icon: "blog", link: "design-pattern/" },
          { text: "工具", icon: "blog", link: "tools/" },
        ],
      },
      {
        text: "零碎内容",
        prefix: "/columns/blog-posts/lingsuineirong/",
        children: [
          { text: "前端", icon: "blog", link: "qianduan/" },
          { text: "后端", icon: "blog", link: "houduan/" },
          { text: "其他", icon: "blog", link: "others/" },
        ],
      },
    ],
  },
  { 
    text: "留言板", 
    icon: "edit", 
    link: "/liuyanban",
  },
]);
