import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";


export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Growing Notes",
  description: "SongXinXin的笔记本",
  theme,
  shouldPrefetch: true,
  
  plugins: [
    searchPlugin({
      maxSuggestions: 10,
      // 排除首页
      isSearchable: (page) => page.path !== '/',
    }),
  ],
});
