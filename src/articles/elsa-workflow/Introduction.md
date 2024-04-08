---
title: 安装部署
date: 2024-04-06
category:
 - Elsa
tag: 
 - Elsa
 - Workflow
 - 工作流
timeline: true
order: 1
---
::: tip ✨✨✨✨✨
在本章中，我们将学习如何安装部署 Elsa Server(Elsa 服务器) 及 Elsa Studio(Elsa 流程设计器)。
:::

<!-- more -->

## Elsa Server

Elsa Server 是一个 ASP.NET Core Web Api 应用程序，可让您使用 REST API 和执行工作流程来管理工作流程。 您可以将工作流存储在数据库、文件系统甚至云存储等不同位置。

本章我们将学习如何部署一个 Elsa 服务，并以 SqlServer 进行数据持久化。

### 1. 创建 Elsa 服务器项目

首先，我们需要创建一个新的 ASP.NET Core Web Api 项目并安装以下 Nuget 包：

- `Elsa`
- `Elsa.EntityFrameworkCore`
- `Elsa.EntityFrameworkCore.SqlServer`
- `Elsa.Identity` 添加认证授权模块
- `Elsa.Scheduling` 支持自动调度
- `Elsa.Workflows.Api` Elsa Api 端点
- `Elsa.CSharp` 提供 C# 脚本支持

### 2. 更新 Program.cs

现在，我们需要添加一些代码来使我们的服务器正常工作。 在项目中打开 Program.cs 文件，并将其内容替换为下面提供的代码。 此代码执行许多操作，例如设置数据库连接、启用用户身份验证以及准备服务器以处理工作流。

```csharp
using Elsa.EntityFrameworkCore.Modules.Management;
using Elsa.EntityFrameworkCore.Modules.Runtime;
using Elsa.Extensions;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddElsa(elsa =>
{
    // 公开Elsa API终结点。
    elsa.UseWorkflowsApi(x =>
    {
      var module = x.Module;
      module.AddFastEndpointsAssembly<Program>();
    });
    elsa.AddSwagger();

    // 将管理层配置为使用EF Core。
    elsa.UseWorkflowManagement(management => management.UseEntityFrameworkCore());

    // 将运行时层配置为使用EF Core。
    elsa.UseWorkflowRuntime(runtime => runtime.UseEntityFrameworkCore());
  
    // 用于身份验证/授权的默认标识功能。
    elsa.UseIdentity(identity =>
    {
        identity.TokenOptions = options => options.SigningKey = "sufficiently-large-secret-signing-key"; // This key needs to be at least 256 bits long.
        identity.UseAdminUserProvider();
    });
  
    // 配置ASP。NET身份验证/授权。
    elsa.UseDefaultAuthentication(auth => auth.UseAdminApiKey());
  
    // 启用C#工作流表达式
    elsa.UseCSharp();
    // 启用JavaScript工作流表达式
    elsa.UseJavaScript();
    // 启用HTTP活动。
    elsa.UseHttp();
    // 使用计时器活动。
    elsa.UseScheduling();

  
    // 从应用程序注册自定义活动（如果有）。
    elsa.AddActivitiesFrom<Program>();
  
    // 从应用程序注册自定义工作流（如果有）。
    elsa.AddWorkflowsFrom<Program>();
});

// 配置CORS以允许托管在不同来源上的设计器应用程序调用API。
builder.Services.AddCors(cors => cors
    .AddDefaultPolicy(policy => policy
        .AllowAnyOrigin() // For demo purposes only. Use a specific origin instead.
        .AllowAnyHeader()
        .AllowAnyMethod()
        .WithExposedHeaders("x-elsa-workflow-instance-id"))); // 需要Elsa Studio，以便支持从设计器运行工作流。或者，您可以使用“*”通配符来公开所有标头。

// 添加心跳检测
builder.Services.AddHealthChecks();

// Build the web application.
var app = builder.Build();

// Configure web application's middleware pipeline.
app.UseCors();
app.UseRouting(); // Required for SignalR.
app.UseAuthentication();
app.UseAuthorization();
app.UseWorkflowsApi(); // Use Elsa API endpoints.
app.UseWorkflows(); // Use Elsa middleware to handle HTTP requests mapped to HTTP Endpoint activities.
app.UseSwaggerUI();// 注册Elsa Swagger中间件
app.Run();
```

### 3. 启动服务

若要在端口 5001 上运行应用程序，请执行以下命令：

```c#
dotnet run --urls "https://localhost:5001"
```

访问 https://localhost:5001/swagger/index.html 查看 Swagger 文档

![Swagger 文档](image/Introduction/1712568868597.png)
