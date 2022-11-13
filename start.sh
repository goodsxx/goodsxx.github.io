#!/bin/bash
# 切入源码目录，以确保能正常执行
cd /home/my/my-vuepress
# 启动webhook接口
nohup dotnet /home/my/script-executor/ScriptExecutor.dll&
# 拉取最新代码1
git pull

# 杀死目前已启动进程
ID=`ps -ef|grep node | grep vuepress|awk '{print $2}'`
echo --- the process is $ID ---
kill -9  $ID
echo  "Killed $ID"
# 更新包
npm i
# 启动
nohup npm run pro&
