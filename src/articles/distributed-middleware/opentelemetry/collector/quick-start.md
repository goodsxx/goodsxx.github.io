---
title: 快速开始
date: 2024-07-04
order: 1
category:
 - 分布式中间件
---

::: tip ✨✨✨✨✨
在几分钟内设置并收集遥测数据！

OpenTelemetry Collector 接收跟踪、指标和日志，处理遥测数据，并使用其组件将其导出到各种可观察性后端。有关 Collector 的概念概述，请参见 Collector。

您将学习如何在不到五分钟内完成以下操作：

1. 设置并运行 OpenTelemetry Collector。
2. 发送遥测数据并查看其被 Collector 处理。
:::


<!-- more -->

## 先决条件

确保您的开发环境具有以下内容。此页面假设您正在使用 bash。根据需要适配配置和命令。

- Docker 或任何兼容的容器运行时。
- Go 1.20 或更高版本
- GOBIN 环境变量已设置；如果未设置，适当初始化它，例如：

```shell
export GOBIN=${GOBIN:-$(go env GOPATH)/bin}
```

## 设置环境

1. 拉取 OpenTelemetry Collector Docker 镜像：
```shell
docker pull otel/opentelemetry-collector:0.104.0
```
2. 安装 telemetrygen 工具：
```shell
go install github.com/open-telemetry/opentelemetry-collector-contrib/cmd/telemetrygen@latest
```
  此工具可以模拟生成跟踪、指标和日志的客户端。

## 生成和收集遥测数据

3. 启动 Collector：
```shell
docker run \
  -p 127.0.0.1:4317:4317 \
  -p 127.0.0.1:55679:55679 \
  otel/opentelemetry-collector:0.104.0 \
  2>&1 | tee collector-output.txt # 可选地 tee 输出以便以后更容易搜索
```
4. 在另一个终端窗口中，生成一些示例跟踪：
```shell
$GOBIN/telemetrygen traces --otlp-insecure --traces 3
```
在工具生成的输出中，您应该看到确认生成了跟踪的消息：
```shell
2024-01-16T14:33:15.692-0500  INFO  traces/worker.go:99  traces generated  {"worker": 0, "traces": 3}
2024-01-16T14:33:15.692-0500  INFO  traces/traces.go:58  stop the batch span processor
```
为了更容易查看相关输出，您可以过滤它：
```shell
$GOBIN/telemetrygen traces --otlp-insecure \
  --traces 3 2>&1 | grep -E 'start|traces|stop'
```
5. 在运行 Collector 容器的终端窗口中，您应该看到类似于以下示例的跟踪摄取活动：
```shell
$ grep -E '^Span|(ID|Name|Kind|time|Status \w+)\s+:' ./collector-output.txt
Span #0
    Trace ID       : f30faffbde5fcf71432f89da1bf7bc14
    Parent ID      : 6f1ff7f9cf4ec1c7
    ID             : 8d1e820c1ac57337
    Name           : okey-dokey
    Kind           : Server
    Start time     : 2024-01-16 14:13:54.585877 +0000 UTC
    End time       : 2024-01-16 14:13:54.586 +0000 UTC
    Status code    : Unset
    Status message :
Span #1
    Trace ID       : f30faffbde5fcf71432f89da1bf7bc14
    Parent ID      :
    ID             : 6f1ff7f9cf4ec1c7
    Name           : lets-go
    Kind           : Client
    Start time     : 2024-01-16 14:13:54.585877 +0000 UTC
    End time       : 2024-01-16 14:13:54.586 +0000 UTC
    Status code    : Unset
    Status message :
```
6. 打开 http://localhost:55679/debug/tracez 并选择表中的一个示例，以查看您刚刚生成的跟踪。
7. 完成后，使用 Control-C 关闭 Collector 容器。