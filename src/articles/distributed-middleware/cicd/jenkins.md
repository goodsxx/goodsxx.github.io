---
title: Jenkins + Gitee 持续集成交付
date: 2023-05-01
order: 1
category:
 - 分布式中间件
---

::: tip ✨✨✨✨✨
Jenkins是一个开源的自动化服务器，可以帮助软件开发人员自动化构建、测试和部署他们的项目。它支持多种编程语言和工具，并且可以与许多其他工具和服务集成，如Git、Docker、AWS、Slack等。Jenkins还提供了一个易于使用的Web界面，可以方便地配置和管理自动化流程。
:::


<!-- more -->


## 安装 Jenkins

部署环境： ConterOS 7 + Docker Compose

### 新建 jenkins.yml 文件，输入以下内容：

```yml
version: '3'
services:
  jenkins:
    image: jenkins/jenkins:jdk11
    user: root # 设置Jenkins 容器内的所有进程都将以 root 用户身份运行，避免权限问题
    ports:
      - "8100:8080"
      - "50000:50000"
    volumes:
      - "/var/jenkins_home:/var/jenkins_home"
      - "/var/run/docker.sock:/var/run/docker.sock"
      - "/usr/bin/docker:/usr/bin/docker"
      # 这三个目录需要执行 chmod 777 授权
    restart: always
```

### 为相应文件授权

权限不足可能造成之后 Jenkins 流水线失败
若 jenkins.yml 文件中设置 `user: root` 仍无效可采用下面的方式授权：

```shell
chmod 777 /var/jenkins_home
chmod 777 /var/run/docker.sock
chmod 777 usr/bin/docker
```

注意，重启服务器可能需要重新授权

### 运行 jenkins.yml 脚本创建容器

```shell
docker-compose -f jenkins.yml up -d
```

访问：[ip]:8100 会看到如下 Jenkins 页面：

![](./image/jenkins/1682879599402.png)

根据提示访问对应文件路径即可拿到管理员密码。

### 安装插件 

输入管理员密码后点击 继续，将会进入插件安装界面：

![](./image/jenkins/1682878254783.png)

安装推荐的插件即可。

![等待安装插件](./image/jenkins/1682878481278.png)

等待插件安装完成。

若安装插件的过程中出现多个插件安装失败(版本不兼容)的情况，可参考[常见问题](#插件安装失败)

### 创建用户

![创建用户](./image/jenkins/1682879989987.png)

根据提示输入即可。

### 实例配置

![实例配置](./image/jenkins/1682880056857.png)

直接下一步。

### 安装完成

![完成](./image/jenkins/1682880105953.png)

## 创建测试Web应用

1. 创建 `.Net Core Web` 应用程序
2. 为项目添加 DockerFile 支持
3. 将项目代码上传至 gitee 仓库

## 创建 Jenkins 任务

1. **首页点击 `新建任务`**
   
   ![新建任务](./image/jenkins/1682880770049.png)

2. **输入 `任务名称`**
   
   ![输入任务名称](./image/jenkins/1682880814250.png)

3. **选择 `自由风格` 的任务，进入下一步**
   
   ![自由风格](./image/jenkins/1682880890182.png)

4. **随便输入描述**
   
   ![描述](./image/jenkins/1682880937833.png)

5. **源码管理**
   
   按照如下配置：

   ![源码管理配置](./image/jenkins/1682881098585.png)
   
   其中，`Repository URL` 为仓库地址。

   格式为：`https://[gitee账号]:[gitee密码]@gitee.com/[空间名称]/[仓库名称].git`

6. **构建环境**
   
   ![构建环境](./image/jenkins/1682881292360.png)

7. **Build Steps**
   
   选择 `执行 Shell`，填入下面的 Shell 脚本：
   ```shell
    #!/bin/bash
    # 加载环境变量
    source /etc/profile

    echo ----------获取短版本号----------
    SHORT_VERSION=`git rev-parse --short HEAD`
    echo $SHORT_VERSION

    echo ----------移动Dockerfile文件到当前文件夹----------
    cp src/[Web项目文件夹]/Dockerfile .

    echo ----------打包镜像----------
    docker build -t identity.image:$SHORT_VERSION .

    echo ----------标记最新版本----------
    docker tag identity.image:$SHORT_VERSION identity.image:latest

    echo ----------如果容器存在，则停止并删除旧的容器----------
    CID=$(docker ps | grep "identity" | awk '{print $1}')
    echo $CID
    if [ "$CID" != "" ]; then
        echo ----------停止当前运行的容器----------
        docker stop $CID
        echo ----------删除当前运行的容器----------
        docker rm $CID
    fi

    echo ----------重新创建容器----------
    docker run -d --name identity -p 6100:80 -p 443:443 identity.image:latest --restart=always

    echo ----------删除所有none的镜像----------
    docker rmi `docker images | grep "<none>" | awk '{print $3}'`
   ```
配置完成后保存即可。

## 手动执行 Jenkins 任务

### 立即构建

在任务页面点击 `立即构建` 执行任务

![立即构建](./image/jenkins/1682881861972.png)

### 查看控制台输出

![点击 任务序号](./image/jenkins/1682881928041.png)

![点击 控制台输出](./image/jenkins/1682881954453.png)

显示如下内容说明构建成功：

![构建成功](./image/jenkins/1682882150379.png)

此时即可访问 [ip]:6100 查看部署的 Web 页面

## 配置 Gitee WebHooks

### 安装 Gitee 插件

1. **进入 Jenkins 插件管理页面**
   
   ![插件管理](./image/jenkins/1682882322667.png)

2. **搜索 `gitee` 插件并安装**
   
   ![安装 gitee 插件](./image/jenkins/1682882430022.png)

### 配置 Gitee 触发器

打开之前创建的 jenkins 任务的配置页面，按照如下内容配置触发器：

![Gitee 触发器](./image/jenkins/1682882722058.png)

这里的 Gitee WebHook 地址等下要用。

![Gitee 触发器](./image/jenkins/1682882754508.png)

生成 Gitee WebHook 密码

### 配置 Gitee WebHooks

打开 web 应用程序的 gitee 仓库的 WebHooks 管理页面，将上一步中的 Gitee WebHook 地址和密码填入对应位置，勾选触发事件，保存即可。

![Gitee WebHooks](./image/jenkins/1682882998050.png)

## 完成



## 常见问题

### 插件安装失败

#### 更新 docker 为最新版本
#### 更新 jenkins 为最新版本

1. 从官网下载最新的 jenkins.war 包并上传至部署 Jenkins 的服务器
   
2. 删除容器中旧的 jenkins.war 包

```shell
# 进入容器
docker exec -it -u root [container_id] /bin/bash
# 删除旧的 jenkins.war 包
rm /usr/share/jenkins/jenkins.war
```

3. 将下载的 jenkins.war 包复制进容器中

```shell
docker cp jenkins.war  [container_id]:/usr/share/jenkins
```

4. 重启容器

```shell
sudo docker restart [container_id]
```
