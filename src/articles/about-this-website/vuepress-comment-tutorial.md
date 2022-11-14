---
title: VuePress加入评论功能
date: 2022-04-22
category:
 - VuePress
tag: 
 - VuePress
 - 评论
 - 个人博客
isOriginal: true
timeline: true
order: 2
---

::: tip ✨✨✨✨✨
通过引入第三方插件 `vuepress-plugin-comment` 和 `valine`，让你的博客支持评论功能。
:::

<!-- more -->

## 注册LeanCloud

1. 注册账号[LeanCloud](https://console.leancloud.cn/)
2. 创建应用

   ![img](./image/vuepress-comment-tutorial/1650717846774.png)
3. 在 应用设置 中的 应用凭证 中可以查看 AppID 和 AppKey

   ![img](./image/vuepress-comment-tutorial/1650718048163.png)

## 安装插件

```node
npm install --save vuepress-plugin-comment
npm install --save valine
```

## 添加配置

在config.js中添加相关配置

```json
module.exports = {
  themeConfig: {
    valineConfig: {
      appId: '',// your appId
      appKey: '', // your appKey
    }
  }
}
```
