---
title: 在Linux上安装Nginx并设置开机启动
date: 2022-04-26
category:
 - Linux
 - Nginx
tag: 
 - Linux
 - Nginx

timeline: true
order: 5
---

::: tip ✨✨✨✨✨
如何在Linux上安装Nginx并设置开机启动
:::

<!-- more -->

## 在CentOS7中添加Nginx源

```shell
sudo rpm -Uvh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
```

## 安装Nginx

```shell
sudo yum install -y nginx
```

## 设置开机启动

1. 在 /lib/systemd/system 目录添加 nginx.service 文件

   ```shell
   #进入自启文件目录
   cd /lib/systemd/system 
   #自定义nginx自启文件
   touch nginx.service
   ```
2. 编辑nginx.service，并添加一下内容

   ```shell
   #编辑自启文件
   vi nginx.service
   ```
   ```shell
   [Unit]
   Description=The nginx HTTP and reverse proxy server
   After=network-online.target remote-fs.target nss-lookup.target
   Wants=network-online.target

   [Service]
   Type=forking
   PIDFile=/run/nginx.pid
   # Nginx will fail to start if /run/nginx.pid already exists but has the wrong
   # SELinux context. This might happen when running `nginx -t` from the cmdline.
   # https://bugzilla.redhat.com/show_bug.cgi?id=1268621
   ExecStartPre=/usr/bin/rm -f /run/nginx.pid
   ExecStartPre=/usr/sbin/nginx -t
   ExecStart=/usr/sbin/nginx
   ExecReload=/usr/sbin/nginx -s reload
   KillSignal=SIGQUIT
   TimeoutStopSec=5
   KillMode=process
   PrivateTmp=true
   Restart=always

   [Install]
   WantedBy=multi-user.target
   ```
3. 设置开机启动

   ```shell
   systemctl enable nginx
   ```
4. 重启服务器，查看nginx是否自启动
