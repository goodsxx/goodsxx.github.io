---
title: 在Linux上安装Node/Npm
date: 2022-04-11
category:
 - Linux
 - Node
 - Npm
tag: 
 - Linux
 - Node
 - Npm
isOriginal: true
timeline: true
order: 1
---
::: tip ✨✨✨✨✨
如何在Linux上安装Node/Npm
:::

<!-- more -->

1. 一键下载并解压

   ```shell
   wget https://nodejs.org/dist/v14.16.0/node-v14.16.0-linux-x64.tar.xz && xz -d node-v14.16.0-linux-x64.tar.xz && tar -xvf node-v14.16.0-linux-x64.tar
   ```
2. 编辑环境变量

   ```shell
   vim /etc/profile
   ```
3. 在 /etc/profile文件末尾添加以下设置

   ```shell
   export NODE_HOME=/root/node-v14.16.0-linux-x64
   export PATH=$PATH:$PATH:$NODE_HOME/bin
   export NODE_PATH=$NODE_HOME/lib/node_modules
   ```
4. 检查是否安装成功

   ```shell
   node -v
   ```
