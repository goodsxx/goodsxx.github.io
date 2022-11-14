---
title: 在Linux上安装Yarn
date: 2022-04-15
category:
 - Linux
 - Yarn
tag: 
 - Linux
 - Yarn
isOriginal: true
timeline: true
order: 2
---
::: tip ✨✨✨✨✨
如何在Linux上安装Yarn
:::

<!-- more -->

1. 设置Yarn仓库

   ```shell
   curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
   ```
2. 开始安装

   ```shell
   sudo yum install yarn
   # 或者
   sudo dnf install yarn
   ```
3. 测试Yarn是否安装成功

   ```shell
   yarn -v
   ```
