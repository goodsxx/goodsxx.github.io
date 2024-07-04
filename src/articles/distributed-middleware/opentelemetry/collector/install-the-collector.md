---
title: 安装 Collector
date: 2024-07-04
order: 2
category:
 - 分布式中间件
---

::: tip ✨✨✨✨✨
您可以将OpenTelemetry收集器部署在各种操作系统和架构上。以下说明显示了如何下载并安装最新稳定版本的收集器。

如果您不熟悉适用于OpenTelemetry收集器的部署模型、组件和仓库，首先请查看数据收集和部署方法页面。
:::


<!-- more -->

## Docker

以下命令拉取Docker镜像并在容器中运行收集器。将0.104.0替换为您要运行的收集器版本。

::: tabs
@tab:active DockerHub
```shell
docker pull otel/opentelemetry-collector-contrib:0.104.0
docker run otel/opentelemetry-collector-contrib:0.104.0
```
:::

若要从工作目录加载自定义配置文件，请将该文件作为卷挂载：

::: tabs
@tab:active DockerHub
```shell
docker run -v $(pwd)/config.yaml:/etc/otelcol-contrib/config.yaml otel/opentelemetry-collector-contrib:0.104.0
```
:::

## Docker Compose

您可以在现有的docker-compose.yaml文件中添加OpenTelemetry收集器，例如：

```yaml
otel-collector:
  image: otel/opentelemetry-collector-contrib
  volumes:
    - ./otel-collector-config.yaml:/etc/otelcol-contrib/config.yaml
  ports:
    - 1888:1888 # pprof扩展
    - 8888:8888 # Collector暴露的Prometheus指标
    - 8889:8889 # Prometheus导出器指标
    - 13133:13133 # health_check扩展
    - 4317:4317 # OTLP gRPC接收器
    - 4318:4318 # OTLP http接收器
    - 55679:55679 # zpages扩展
```

## Kubernetes

以下命令部署一个作为 daemonset 和一个单一网关实例的代理：

```sh
kubectl apply -f https://raw.githubusercontent.com/open-telemetry/opentelemetry-collector/v0.104.0/examples/k8s/otel-config.yaml
```

此示例旨在作为起点，在实际生产使用前需要进行扩展和自定义。对于生产就绪的自定义和安装，请参阅 OpenTelemetry Helm 图表。

您还可以使用 OpenTelemetry Operator 来管理和维护 OpenTelemetry 收集器实例，具有自动升级处理、基于 OpenTelemetry 配置的 Service 配置、自动将 sidecar 注入部署等功能。

有关如何使用收集器与 Kubernetes 的指南，请参阅 Kubernetes 入门。

## Nomad

您可以在 HashiCorp Nomad 上的 Getting Started with OpenTelemetry 找到参考作业文件，以将收集器作为agent、gateway和全功能示例部署。

## Linux

每个收集器发布版本都包括针对 Linux amd64/arm64/i386 系统的 APK、DEB 和 RPM 打包。安装后，您可以在 /etc/otelcol/config.yaml 中找到默认配置。

:::tip
systemd 是自动服务配置所必需的。
:::

## APK安装

要在Alpine系统上开始使用，请运行以下命令：

::: tabs
@tab:active AMD64
```shell
apk update
apk add wget shadow
wget https://github.com/open-telemetry/opentelemetry-collector-releases/releases/download/v0.104.0/otelcol_0.104.0_linux_amd64.apk
apk add --allow-untrusted otelcol_0.104.0_linux_amd64.apk
```
:::

## DEB安装

要在Debian系统上开始使用，请运行以下命令：

::: tabs
@tab:active AMD64
```shell
sudo apt-get update
sudo apt-get -y install wget systemctl
wget https://github.com/open-telemetry/opentelemetry-collector-releases/releases/download/v0.104.0/otelcol_0.104.0_linux_amd64.deb
sudo dpkg -i otelcol_0.104.0_linux_amd64.deb
```
:::

## RPM安装

要在Red Hat系统上开始使用，请运行以下命令：

::: tabs
@tab:active AMD64
```shell
sudo yum update
sudo yum -y install wget systemctl
wget https://github.com/open-telemetry/opentelemetry-collector-releases/releases/download/v0.104.0/otelcol_0.104.0_linux_amd64.rpm
sudo rpm -ivh otelcol_0.104.0_linux_amd64.rpm
```
:::

## 手动Linux安装

Linux发布版本适用于各种架构。您可以下载包含二进制文件的文件，并在您的机器上手动安装：

```sh
curl --proto '=https' --tlsv1.2 -fOL https://github.com/open-telemetry/opentelemetry-collector-releases/releases/download/v0.104.0/otelcol_0.104.0_linux_amd64.tar.gz
tar -xvf otelcol_0.104.0_linux_amd64.tar.gz
```

## 自动服务配置

默认情况下，安装后，otelcol systemd服务会使用--config=/etc/otelcol/config.yaml选项启动。

要使用不同的设置，请在/etc/otelcol/otelcol.conf系统d环境文件中设置OTELCOL_OPTIONS变量，以适当的命令行选项。您可以运行/usr/bin/otelcol --help来查看所有可用的选项。您可以通过向此文件添加它们，向otelcol服务传递额外的环境变量。

如果您修改了收集器配置文件或/etc/otelcol/otelcol.conf，请运行以下命令重启otelcol服务以应用更改：

```sh
sudo systemctl restart otelcol
```

要检查otelcol服务的输出，请运行：

```sh
sudo journalctl -u otelcol
```

## macOS

macOS发布版本适用于Intel和ARM系统。发布版本打包为gzipped tarball (.tar.gz)。解压后，每个收集器发布版本都包含一个otelcol可执行文件。

## Windows

Windows发布版本打包为gzipped tarball (.tar.gz)。每个收集器发布版本都包含一个otelcol.exe可执行文件。

## 从源代码构建

您可以使用以下命令基于本地操作系统构建最新版本的收集器：

```sh
git clone https://github.com/open-telemetry/opentelemetry-collector.git
cd opentelemetry-collector
make install-tools
make otelcorecol
```