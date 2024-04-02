import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
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
  // plugins: [
  //   searchProPlugin({
  //     indexContent: true,
  //   }),
  // ],
});
