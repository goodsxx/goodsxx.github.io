---
title: 设置 Elasticsearch
date: 2023-03-11
category:
 - 分布式中间件
tag: 
 - Elasticsearch
timeline: true
order: 3
---
::: tip ✨✨✨✨✨
本节包括有关如何设置 Elasticsearch 并使其运行的信息，包括：下载、安装、启动、配置。
:::

<!-- more -->

## 设置 Elasticsearch

本节包括有关如何设置 Elasticsearch 并使其运行的信息，包括：

- 下载
- 安装
- 启动
- 配置

### 支持的平台

官方支持的操作系统和 JVM 的矩阵可在此处找到：[支持矩阵]()。 Elasticsearch 在列出的平台上进行了测试，但也可能在其他平台上运行。

### Java (JVM) 版本

Elasticsearch 是使用 Java 构建的，并在每个发行版中包含来自 JDK 维护者的 [OpenJDK]() 的捆绑版本（GPLv2 + CE）。捆绑的 JVM 是推荐的 JVM，位于 Elasticsearch 主目录的 jdk 目录中。

要使用您自己的 Java 版本，请设置 ES_JAVA_HOME 环境变量。如果必须使用与捆绑的 JVM 不同的 Java 版本，则建议使用[受支持的 LTS 版本的 Java]()。如果使用已知的不良 Java 版本，Elasticsearch 将拒绝启动。在使用自己的 JVM 时，可以删除捆绑的 JVM 目录。

### 使用专用主机

在生产环境中，我们建议您在专用主机上或作为主要服务运行 Elasticsearch。一些 Elasticsearch 功能（例如自动 JVM 堆大小调整）假定它是主机或容器上唯一的资源密集型应用程序。例如，您可能会在 Elasticsearch 旁边运行 Metricbeat 以获取群集统计信息，但是资源密集型的 Logstash 部署应该在自己的主机上。

## 安装 Elasticsearch

### 托管 Elasticsearch 服务

Elastic Cloud 提供了 Elasticsearch、Kibana 和 Elastic 的 Observability、企业搜索和 Elastic 安全解决方案的所有功能，作为可在 AWS、GCP 和 Azure 上使用的托管服务。

要在 Elastic Cloud 中设置 Elasticsearch，请注册[免费 Elastic Cloud 试用版](https://www.elastic.co/cn/cloud/elasticsearch-service/signup)。

### 自我管理的 Elasticsearch 选项

如果您想自己安装和管理 Elasticsearch，可以：

- 在任何 Linux、MacOS 或 Windows 计算机上运行 Elasticsearch。
- 在 Docker 容器中运行 Elasticsearch。
- 使用 Elastic Cloud on Kubernetes 在 Kubernetes 上设置和管理 Elasticsearch、Kibana、Elastic Agent 和 Elastic Stack 的其余部分。

:::info TIP
要在自己的计算机上尝试 Elasticsearch，我们建议使用 Docker 并同时运行 Elasticsearch 和 Kibana。有关更多信息，请参阅[本地运行 Elasticsearch]()。
:::

### Elasticsearch 安装包格式

Elasticsearch 提供以下软件包格式：

|软件包|说明|
|--|--|
|Linux 和 MacOS 的 tar.gz 压缩包|可在任何 Linux 发行版和 MacOS 上安装 tar.gz 压缩包。<br /><br />[在 Linux 或 MacOS 上从存档中安装 Elasticsearch]()|
| Windows .zip 压缩文件|.zip 压缩文件适用于 Windows 安装。<br /><br />[使用 .zip 在 Windows 上安装 Elasticsearch]()|
|deb|.deb 软件包适用于 Debian、Ubuntu 和其他基于 Debian 的系统。Debian 软件包可以从 Elasticsearch 网站或我们的 Debian 仓库下载。<br /><br />[使用 Debian 软件包安装 Elasticsearch]()|
|rpm| .rpm 软件包适用于 Red Hat、Centos、SLES、OpenSuSE 和其他基于 RPM 的系统。可以从 Elasticsearch 网站或我们的 RPM 仓库下载 RPM。<br /><br />[使用 RPM 安装 Elasticsearch ]()|
|docker | 提供了用 Docker 容器运行 Elasticsearch 的镜像。它们可以从 Elastic Docker Registry 下载。<br /><br />[使用 Docker 安装 Elasticsearch]()|

### 在 Linux 或 MacOS 上从归档文件安装 Elasticsearch

Elasticsearch 提供了针对 Linux 和 MacOS 系统的 .tar.gz 归档文件。

此软件包包含免费和订阅功能。您可以开始使用 30 天的试用期以尝试所有功能。

您可以在 [下载 Elasticsearch]() 页面中找到最新版本的稳定版 Elasticsearch。过去版本可在 [历史版本]() 页面中找到。请注意，最新版不一定是适合您的当前环境的最佳版本。因此，在选择要下载安装的 Elasticsearch 版本时，请认真查看文档，以确保满足您的需求并与您的环境兼容。

:::info NOTE
Elasticsearch 包含了一份由 JDK 维护者提供的 OpenJDK 打包版本（GPLv2+CE）。如果您想要使用自己的 Java 版本，请查看 [JVM 版本要求]()。请注意，使用非官方支持的 Java 版本可能会导致 Elasticsearch 不稳定或不安全。
:::

#### 下载并安装 Linux 归档文件

可以按如下方式下载和安装 Elasticsearch v8.6.2 的 Linux 归档文件：

```shell
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-8.6.2-linux-x86_64.tar.gz
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-8.6.2-linux-x86_64.tar.gz.sha512
```
>比较已下载的 .tar.gz 归档文件的 SHA 值和发布的校验和，输出结果应为 elasticsearch-{version}-linux-x86_64.tar.gz: OK。

```shell
shasum -a 512 -c elasticsearch-8.6.2-linux-x86_64.tar.gz.sha512 
tar -xzf elasticsearch-8.6.2-linux-x86_64.tar.gz
cd elasticsearch-8.6.2/ 
```

>这个目录通常被称为 $ES_HOME。

#### 下载并安装 MacOS 归档文件

可以按如下方式下载和安装 Elasticsearch v8.6.2 的 MacOS 归档文件：

```shell
curl -O https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-8.6.2-darwin-x86_64.tar.gz
curl https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-8.6.2-darwin-x86_64.tar.gz.sha512 | shasum -a 512 -c -
```
>比较已下载的 .tar.gz 归档文件的 SHA 值和发布的校验和，输出结果应为 elasticsearch-{version}-darwin-x86_64.tar.gz: OK。

```shell
tar -xzf elasticsearch-8.6.2-darwin-x86_64.tar.gz
cd elasticsearch-8.6.2/
```

>这个目录通常被称为 $ES_HOME。

#### 启用系统索引的自动创建

一些商业功能会在 Elasticsearch 中自动创建索引。默认情况下，Elasticsearch 已配置为允许自动索引创建，并且不需要额外的步骤。但是，如果您已禁用 Elasticsearch 中的自动索引创建，则必须在 elasticsearch.yml 文件中配置 [action.auto_create_index]() 以允许商业功能创建如下索引：

```shell
action.auto_create_index: .monitoring*,.watches,.triggered_watches,.watcher-history*,.ml*
```

:::info IMPORTANT
如果您正在使用 [Logstash]() 或 [Beats]()，则很可能需要在 action.auto_create_index 设置中添加其他索引名称，其确切值将取决于您的本地配置。如果您不确定环境的正确值，可以考虑将该值设置为 * ，这将允许自动创建所有索引。
:::

#### 从命令行运行 Elasticsearch

运行以下命令以从命令行启动 Elasticsearch：

```shell
./bin/elasticsearch
```

当首次启动 Elasticsearch 时，默认情况下会启用并配置安全功能。以下的安全配置将自动发生：

- 启用认证和授权，为内置超级用户 elasti c生成密码。
- 为传输层和 HTTP 层生成 TLS 证书和密钥，并使用这些密钥和证书启用和配置 TLS。
- 为 Kibana 生成一个有效期为 30 分钟的 enrollment token。

elastic 用户的密码和 Kibana 的 enrollment token 将输出到您的终端。例如：

```shhell
The generated password for the elastic built-in superuser is:
<password>

The enrollment token for Kibana instances, valid for the next 30 minutes:
<enrollment-token>

The hex-encoded SHA-256 fingerprint of the generated HTTPS CA DER-encoded certificate:
<fingerprint>

You can complete the following actions at any time:
Reset the password of the elastic built-in superuser with
'bin/elasticsearch-reset-password -u elastic'.

Generate an enrollment token for Kibana instances with
'bin/elasticsearch-create-enrollment-token -s kibana'.

Generate an enrollment token for Elasticsearch nodes with
'bin/elasticsearch-create-enrollment-token -s node'.
```

如果您对 Elasticsearch 密钥库进行了密码保护，则在使用时将提示输入该密钥库的密码。有关更多详细信息，请参见安全设置。

默认情况下，Elasticsearch 将其日志输出到控制台（stdout）和 logs 目录中的 `<cluster name>.log` 文件中。Elasticsearch 在启动时会记录一些信息，但在初始化完成后，它将继续在前台运行，并且直到有值得记录的事件发生之前不再记录任何内容。当 Elasticsearch 正在运行时，您可以通过其 HTTP 接口进行交互，默认端口为 9200。

要停止 Elasticsearch，请按 Ctrl-C。

:::info NOTE
所有随 Elasticsearch 打包的脚本都需要支持数组的 Bash 版本，并且假定 Bash 可在 `/bin/bash` 路径下找到。因此，Bash 应该直接或通过符号链接在此路径处可用。
:::