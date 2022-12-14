import{_ as t,Z as s,$ as o,a0 as n,a1 as r,a2 as i,H as p}from"./framework-e7ac220c.js";const a={},A=i("p",null,"这是自我介绍页",-1);function P(l,c){const e=p("Presentation");return s(),o("div",null,[n("more"),A,r(e,{id:"presentation-4",code:"eJydkM9Kw0AQxu/7FOv2vAmhtkpMghevnrzLtt22i2k2ZKcQPakXDxW00IMIIt5Ea0WkUFIfJyHtSR/B1eqhUP9QmLnMMN/3mw85K5RiQ/mixm1cY8AoRCxQAoQMXPI5J7M5a4OkLBAtBhxT6iFUKOBs0Jl273V9CXGft3gANq76TCmXRLQugAKPgcxu3q67J9+NEKVoAcGc0wIrlI4O09Gdsb21k992suQs6178139JRyfECvZ97pK6DIAqccDtUimMN4inSdIkSUfj6c3w9eXSYRhY1ODgkt2Kz4I9gpsRr7ukCRAq2zQbUtZUHBsNAc12xRCSeD+uHJN5jhlqnF8A8t4wezifHg/ywZMGsNbLxbXyqmUVrU2rXDSqsvWnxOSolz+PtdDk8WpeYnZKP2LTieT9fpqc6kfROxOR1Vg=",theme:"auto"}),n(` @slidestart

## 宋鑫鑫个人介绍

个人主页：https://goodsxx.github.io

电子邮箱：18637641131@163.com

联系电话：18637641131

职业：.NET开发工程师

---

### 专业技能

<div style="text-align:left;">
    <p style="font-size:25px;"><strong>后端：</strong>Asp.Net+EF/掌握；Asp.Net Core+EF Core/掌握；</p>
    <p style="font-size:25px;"><strong>中间件：</strong>Redis缓存/应用；消息队列/应用；</p>
    <p style="font-size:25px;"><strong>数据库：</strong>SqlServer/掌握；MySQL/应用；Oracle/应用；MongoDB/了解；</p>
    <p style="font-size:25px;"><strong>框架：</strong>ABP/应用；ABP vNext/了解；分布式、微服务/了解;</p>
    <p style="font-size:25px;"><strong>其他：</strong>Linux/应用；Docker/应用；Nginx/应用；Consul/应用；Ocelot/应用；</p>
    <p style="font-size:25px;"><strong>前端：</strong>Vue全家桶/ 掌握；Bootstrap/掌握 ；HTML/掌握；Jquery/掌握；TS/应用；</p>
    <p style="font-size:25px;"><strong>前端组件库：</strong>Element/掌握；iView/掌握；Vant/掌握；ECharts/掌握;</p>
    <p style="font-size:25px;"><strong>版本/Bug管理：</strong>Git；禅道；YAPI；Tower等</p>
</div>

---

## 项目经历

👇

--

## 联众智慧

    联众智慧科技股份有限公司是以智慧医院和智慧区域卫生为核心的医疗健康信息化整体解决方案提供商和服务商， 通过协助医疗机构以权威的信息化评审为目标，构建全面完善的HIT管理体系。1999年创建以来，一直专注于智慧医疗健康行业信息系统的研发、 推广。作为国家高新软件企业，通过了系统集成二级、CMMI5、ITSS二级、ISO9001:2008等证。

[主要负责联众智慧新一代云His的开发、测试、及Bug修复等]

主要项目经验

联众智慧新一代云His|医院业务全过程信息管理系统(SaaS)

主要负责His系统药房、药库、门诊结算、住院医生站、住院护士站、住院结算等模块的服务端开发。
服务端是由.Net Core+EF Core+Docker+K8s+网关+消息队列等构建的微服务，数据库使用Oracle，前端使用Vue开发。
按照设计标准如期完成了上述模块的开发工作、测试工作，确保了His系统成功交付，该套系统截止4月份已成功在台州市黄岩区东城街道社区卫生服务中心和江口街道社区卫生服务中心上线运行。

--

## 慢慢买

慢慢买是一个中立的商品搜索推荐引擎，是网购的“比价神器”。10年来专注为用户推荐高性价比的商品，同时开发了全网比价、历史价格查询等购物决策助手，力求帮助消费者实现信息对称，更快做出购物决策。

[主要负责慢慢买APP服务端开发；PC主站维护；对应后台管理系统的设计、开发、重构及维护；部分H5开发]

主要项目经验

慢慢买APP|导购平台

负责慢慢买APP慢友社区、精选折扣、全网折扣、首页算法等模块的服务端开发。
服务端基于Web Api+Redis+消息队列+ES构建，数据库使用SQL Server。
利用消息队列和缓存完成了上述模块的性能优化，平均加载时间缩短1-3s，点赞、评论、收藏等操作反馈更迅速。
对商品内页做了埋点，利用消息队列记录用户每次的点击和浏览行为，服务端开发队列消费工具，利用ThreadPool线程池对对队列进行消费，同时根据一定的规则计算出每个用户的个性化数据，针对用户进行个性化推荐。
经过上述优化，APP相应版块的用户留存、日活等有了显著提升，首页的CTR、GMV等数据有明显的提高。

--

慢慢买爆料后台(移动端+PC端)|面向小编爆料运营管理后台
负责整个H5后台的完整开发和PC后台的重构
H5前端基于Vue全家桶+TS+Vant UI搭建，PC前端使用vue-typescript-admin搭建
服务端使用ABP框架进行开发，替换框架自身登陆模块使之能接入现有数据人员权限数据库，利用ABP的IOC容器、依赖注入、多层架构、动态Web Api+Swagger UI等实现业务的快速开发
PC+H5后台的逐步完善，极大地提高了运营部门的工作效率，移动端后台的上线，使得运营人员可以随时随地的处理突发问题，为相关业务线的目标达成提供了有力的支撑

-=

社区后台管理系统|慢慢买APP慢友社区后台
负责社区后台的前端重构，以及富文本编辑器的优化
前端使用vue-typescript-admin重构，替换掉原来的LayUI，是的交互性和便捷性有明显的提高，能够应对更复杂的场景。同时使用TinyMCE编辑器替换百度编辑器，并在此基础上进行了大量的自定义API开发，支持文档意见贴入格式化、图片自动上传、在文档中生成自定义卡片等功能
上述工作的完成，明显降低了社区运营的系统操作成本，同时编辑器的迭代也让不同的小编在发布文章时，都会呈现出一个一致的风格和效果，让APP社区版块的整体感官明显提升了一个档次，让我们的小编们能够集中精力在内容产出上

--

## 格上出行

        格上出行，台湾知名汽车厂商——裕隆集团旗下品牌，优选纳智捷车型，提供专车、两岸一条龙接送等业务；

[主要负责：格上出行网约车后台、营运流程管理后台的前后端开发；BPM开发；现有项目的优化及二次开发；数据库维护等]
主要项目经验：
营运流程管理|公司内部人员使用的操作平台，服务于资产管理和运营活动的展开。
负责车籍维护、厂商维护、车辆调度等模块的前端开发、后端API开发、数据库创建、前后端联调。
前端基于Vue+ts+iView构建，后端由基于Asp.Net Core的ABP构建，数据库使用SQL Server。
完成了相关模块的整个前后端开发，前端运用VueRouter进行模块封装，用VueX进行多组件状态管控，独立组件模块，完成复杂表单开发，并且利用ts把数据、函数和类封装在模块中，增加扩展性，更易维护。
相关功能上线后，相关作业由线下转为线上，大大简化了营运部门的工作流程，极大地提高了工作效率。




BI营运分析|网约车订单数据可视化后台

负责营收分析、运力分析、会员分析等模块的前端、后端API开发及联调。
前端基于Vue+iView+ECharts构建，后端由基于Asp.Net Core的ABP构建 。
完成了相关模块的后端API开发，完成了前端各个模块页面设计，根据需求提供相应的可视化图表，并支持以天、周、月为单位对过往订单数据进行查询分析。
系统上线后，为营运部门日常工作提供了很大的便利，有准确稳定的数据支撑，才能合理规划运营方向。




吉时专车后台|网约车后台管理

负责定价管理、优惠设定等模块的前端开发、联调。
前端基于Vue+Element构建，API基于Java编写。
完成了相关模块前端的开发、联调，对表单进行动态渲染及验证优化、数据行合并、异步加载等提高效率，让数据展现更简明，维护更简单，操作更简便。
相关模块完成后，可以更有效率的对APP进行管理。




两岸一条龙预约平台|大陆-台湾机场接送预约

负责机场接送、预约记录查询、包车等模块和支付宝支付接口开发，自动发送邮件、验证码等。
前端基于Bootstr+Jquery+Ajax，后端基于Asp.Net开发的WebForm，数据库使用SQL Server
利用Asp.Net Web的服务端控件进行快速的表单开发，配合Bootstrap进行页面排版，支付宝通过沙箱完成了异步回调的效验。
网站在短时间快速上线，在春运期间为公司两岸机场接送业务的开展提供了有力支撑。
---

## 工作荣誉



---

## 个人总结

3年以上B/S开发经验。
掌握Asp.Net相关的后端技术，有.Net Core及多层架构的开发经验。
有ABP架构的开发经验，了解ABP vNext。
掌握Sql Serve数据库，并对Oracle、MySQL有一定的经验，了解MongoDB。
掌握Vue全家桶，对模块化、组件化以及数据可视化有一定经验。
对消息队列、Redis缓存等中间件有一定的使用经验。
拥有Linux、Docker部署项目的经验。
了解Nginx负载均衡、Consul服务注册与发现、Ocelot网关。
在项目中拥有前端、后端、数据库的完整开发经验。
拥有基于分布式、微服务架构项目的开发经验。
有良好的团队合作精神和积极主动的沟通意识。
乐于分享，善于学习，对新技术始终充满热情。

@slideend `)])}const u=t(a,[["render",P],["__file","intro.html.vue"]]);export{u as default};
