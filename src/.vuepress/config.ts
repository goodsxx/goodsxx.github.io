import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/my-blog/",
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
    searchPlugin({
      maxSuggestions: 10,
      // 排除首页
      isSearchable: (page) => page.path !== '/',
    }),
    
  ],
});
