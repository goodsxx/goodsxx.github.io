---
title: 快速入门
date: 2022-12-01
category:
 - MAUI
tag: 
 - MAUI
isOriginal: true
timeline: true
order: 1
---
::: tip ✨✨✨✨✨
快速入门
:::

<!-- more -->

# 什么是 .NET MAUI？

.NET 多平台应用 UI (.NET MAUI) 是一个跨平台框架，用于使用 C# 和 XAML 创建本机移动和桌面应用
使用 .NET MAUI，可从单个共享代码库开发可在 Android、iOS、macOS 和 Windows 上运行的应用
。。。。。。
简而言之 —— .NET MAUI 就是一个跨平台的前端开发框架

# 安装

参考 [官方文档](https://learn.microsoft.com/zh-cn/dotnet/maui/get-started/installation?view=net-maui-7.0&tabs=vswin)

# 创建首个应用

参考 [官方文档](https://learn.microsoft.com/zh-cn/dotnet/maui/get-started/first-app?pivots=devices-windows&view=net-maui-7.0&tabs=vswin)

# 项目结构

::: center
![1671069736424](./image/rumen/1671069736424.png)
:::

:::info

**Platform：** 包含了不同平台的特定内容，针对不同平台的一些特殊逻辑要写在这里

**Resources：** 静态资源，应用所需的静态资源一般存放在该文件夹下，可以在代码中直接引用

**App.xaml：** 该文件中存放了适用于应用全局的资源字典。资源字典是 .NET MAUI 应用使用的资源的存储库。参见[微软官方文档](https://learn.microsoft.com/zh-cn/dotnet/maui/fundamentals/resource-dictionaries?view=net-maui-7.0)对资源字典的介绍。

**App.xaml.cs：** 该文件中设置了 APP 启动后会第一个加载的页面，通常是一个 Shell。通过设置 MainPage 属性来设置应用第一个打开的页面。

**AppShell.xaml：** 用于定义Shell(壳子)。可支持定义多个Shell，并对其进行设置。

**MainPage.xaml：** 是一个ContentPage内容页。ContentPage 是 MAUI 中一个基本的 Page，用于构建 UI 界面。

**MauiProgram.cs：** 项目入口，用于构建 MAUI APP。开发者注册字体，进行依赖注入都要在这个文件中完成

:::
