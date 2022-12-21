---
title: 在Linux设置shell脚本开机启动
date: 2022-04-19
category:
 - Linux
tag: 
 - Linux
 - shell脚本

timeline: true
order: 6
---

::: tip ✨✨✨✨✨
在Linux上如何设置shell脚本开机启动
:::

<!-- more -->

1. 赋予 `/etc/rc.d/rc.local` 可执行权

   ```shell
   chmod +x /etc/rc.d/rc.local
   ```
2. 赋予脚本可执行权限

   ```shell
   # 脚本路径根据实际位置修改
   chmod +x /root/start.sh
   ```
3. 打开/etc/rc.d/rc.local文件，在最后面添加要执行脚本

   ```shell
   vi /etc/rc.d/rc.local
   ```

   ```shell
   #!/bin/bash
   # THIS FILE IS ADDED FOR COMPATIBILITY PURPOSES
   #
   # It is highly advisable to create own systemd services or udev rules
   # to run scripts during boot instead of using this file.
   #
   # In contrast to previous versions due to parallel execution during boot
   # this script will NOT be run after all other services.
   #
   # Please note that you must run 'chmod +x /etc/rc.d/rc.local' to ensure
   # that this script will be executed during boot.

   touch /var/lock/subsys/local

   # 执行脚本
   /root/jiaoben.sh
   ```
4. 保存退出即可

**运行脚本报错：-bash: /root/start.sh: /bin/bash^M: 坏的解释器: 没有那个文件或目录**

出现这个问题的原因是因为 脚本文件是在Windows环境下编辑的，windows环境下，每一行的结尾是\n\r,而Linux环境下，每一行结尾是\n。

执行以下命令

```shell
sed -i 's/\r//' /root/start.sh
```
