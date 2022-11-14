---
title: 在Linux上安装.Net6环境
date: 2022-04-16
category:
 - Linux
 - .Net
tag: 
 - Linux
 - .Net
isOriginal: true
timeline: true
order: 4
---

::: tip ✨✨✨✨✨
如何在Linux系统中安装.Net6 Sdk
:::

<!-- more -->

1. 将 Microsoft 包签名密钥添加到受信任密钥列表，并添加 Microsoft 包存储库

   ```shell
   sudo rpm -Uvh https://packages.microsoft.com/config/centos/7/packages-microsoft-prod.rpm
   ```
2. 安装运行时

   ```shell
   sudo yum install dotnet-runtime-6.0
   ```
3. 安装SDK

   ```shell
   sudo yum install dotnet-sdk-6.0
   ```
4. 检查安装结果

   ```shell
   dotnet --info
   ```
   输出示例：

   ```shell
   Host (useful for support):
     Version: 5.0.12
     Commit:  7211aa01b3

   .NET SDKs installed:
     No SDKs were found.

   .NET runtimes installed:
     Microsoft.AspNetCore.App 5.0.12 [/usr/share/dotnet/shared/Microsoft.AspNetCore.App]
     Microsoft.NETCore.App 5.0.12 [/usr/share/dotnet/shared/Microsoft.NETCore.App]

   To install additional .NET runtimes or SDKs:
     https://aka.ms/dotnet-download
   ```
