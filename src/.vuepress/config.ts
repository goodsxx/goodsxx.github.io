import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Growing Notes",
  description: "SongXinXin的笔记本",
  theme,
  shouldPrefetch: false,
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
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
