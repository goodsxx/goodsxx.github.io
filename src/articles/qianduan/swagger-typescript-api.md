---
title: Swagger-TypeScript-API
date: 2023-05-08
order: 1
category:
 - 前端
---

::: tip ✨✨✨✨✨
通过Swagger自动生成ts格式的API模块
:::


<!-- more -->

## 开源组件地址

[Swagger-TypeScript-API](https://github.com/acacode/swagger-typescript-api)

## 使用说明

```
用法：
sta [选项]
swagger-typescript-api [选项]
swagger-typescript-api generate-templates [选项]

选项：
  -v, --version                 输出当前版本
  -p, --path <string>           Swagger架构的路径/网址
  -o, --output <string>         TypeScript API文件的输出路径（默认值：“./”）
  -n, --name <string>           输出TypeScript API文件的名称（默认值：“Api.ts”）
  -t, --templates <string>      包含模板的文件夹的路径
  -d, --default-as-success      将“默认(default)”响应状态代码也用作成功响应类型。某些Swagger架构默认将“默认(default)”响应状态代码用作成功响应类型。（默认值：false）
  -r, --responses               生成有关请求响应的附加信息，同时为错误响应添加类型定义（默认值：false）
  --union-enums                 将所有“枚举(enum)”类型生成为联合类型(T1 | T2 | TN)（默认值：false）
  --add-readonly                生成只读属性 (默认值：false)
  --route-types                 为API路由生成类型定义（默认值：false）
  --no-client                   不生成API类
  --enum-names-as-values        在枚举中使用“x-enumNames”的值作为枚举值（不仅仅是键）(默认值：false)
  --extract-request-params      提取请求参数到数据契约（还将路径参数和查询参数组合成一个对象）(默认值：false)
  --extract-request-body        提取请求正文类型到数据契约（默认值：false）
  --extract-response-body       提取响应正文类型到数据契约 (默认值：false)
  --extract-response-error      提取响应错误类型到数据契约 (默认值：false)
  --modular                     为HTTP客户端、数据契约和路由生成单独的文件 (默认值：false)
  --js                          生成具有声明文件的JS API模块 (默认值：false)
  --module-name-index <number>  确定应使用哪个路径索引来分离路由 (例如：GET:/fruites/getFruit -> index:0 -> moduleName -> fruites) (默认值：0)
  --module-name-first-tag       基于第一个标记拆分路由 (默认值：false)
  --disableStrictSSL            禁用严格的SSL (默认值：false)
  --disableProxy                禁用代理 (默认值：false)
  --axios                       生成axios HTTP客户端 (默认值：false)
  --unwrap-response-data        从响应中取消包装数据项 (默认值：false)
  --disable-throw-on-error      当response.ok不为true时不抛出错误 (默认值：false)
  --single-http-client          能够将HttpClient实例发送到Api构造函数 (默认值：false)
  --silent                      仅将错误输出到控制台 (默认值：false)
  --default-response <type>     空响应模式的默认类型 (默认值：“void”)
  --type-prefix <string>        数据契约名称前缀 (默认值：“")
  --type-suffix <string>        数据契约名称后缀 (默认值：“")
  --clean-output                在生成API之前清空输出文件夹。 警告：可能会导致数据丢失 (默认值：false)
  --api-class-name <string>     API类的名称 (默认值：“Api”)
  --patch                       修复Swagger源定义中的小错误 (默认值：false)
  --debug                       关于此工具内部过程的附加信息 (默认值：false)
  --another-array-type          将数组类型生成为Array<Type>（默认为Type[]）(默认值：false)
  --sort-types                  对字段和类型进行排序 (默认值：false)
  --extract-enums               从内联接口/类型内容中提取所有枚举到typescript枚举构造函数中 (默认值：false)
  -h, --help                    显示帮助命令

命令：
  generate-templates              生成生成API所需的“.ejs”模板
    -o, --output <string>         生成模板的输出路径
    -m, --modular                 生成分离HTTP客户端、数据契约和路由所需的模板 (默认值：false)
    --http-client <string>        HTTP客户端类型（可能的值："fetch"，"axios"）(默认值："fetch")
    -c, --clean-output            在生成模板之前清空输出文件夹。 警告：可能会导致数据丢失 (默认值：false)
    -r, --rewrite                 重写现有模板中的内容 (默认值：false)
    --silent                      仅将错误输出到控制台 (默认值：false)
    -h, --help                    显示帮助命令
```