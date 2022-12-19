---
title: 在Linux上部署VuePress
date: 2022-04-24
category:
 - Linux
 - VuePress
tag: 
 - Linux
 - VuePress
isOriginal: true
timeline: true
order: 3
---

::: tip ✨✨✨✨✨
在Linux上部署我们的VuePress个人博客网站
:::

<!-- more -->

1. 将VuePress项目上传至GitHub或Gitee仓库，不会的自行百度
2. [在Linux上安装Node/Npm](/articles/blog-posts/series/linux/installation-node.md)
3. [在Linux上安装Git](/articles/blog-posts/series/linux/installation-git.md)
4. 复制你的仓库地址(此处以gitee为例)

   ![img](./image/vuepress-release/1650813978558.png)
5. 在Linux上的home/my文件夹下拉取Git仓库中的VuePress项目

   ```
   git clone https://你的仓库地址/my-vuepress.git
   ```
6. 进入刚下载的VuePress项目文件夹下

   ```shell
   cd /home/my/my-vuepress
   ```
7. 初始化项目

   ```shell
   npm i
   ```
8. 运行项目

   ```shell
   npm run dev
   ```
9. 此时用你的服务器IP+VuePress启动的端口号即可访问
