import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Growing Notes",
  description: "SongXinXin的笔记本",
  theme,
  shouldPrefetch: false,
  markdown:{
    headers:{
      level:[2,3,4,5]
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
      indexContent: true,
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
    }),
  ],
});
