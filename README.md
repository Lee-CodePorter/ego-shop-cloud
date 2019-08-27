# spring-cloud

#测试

## 技术体系

| 技术点              | 版本和要求       | 参考书籍                                                     |
| ------------------- | ---------------- | ------------------------------------------------------------ |
| Spring Boot         | 2.1.7.RELEASE    | https://spring.io/projects/spring-boot                       |
| Spring Cloud 全家桶 | Greenwich.SR2    | https://spring.io/projects/spring-cloud                      |
| Mybatis Plus        | 3.2.0            | https://mp.baomidou.com/                                     |
| Redis               | 5.0.5            | https://redis.io/                                            |
| RabbitMQ            | 3.7.17           | https://www.rabbitmq.com                                     |
| ElasticSearch       | 5.4              | https://www.elastic.co/guide/en/elasticsearch/reference/5.4/index.html |
| Mongodb             | 4.2              | https://www.mongodb.com/                                     |
| OAuth2.0 + JWT      | 继承Spring Cloud | https://oauth.net/2/<br />https://jwt.io/                    |
| Swagger2            | 2.9.2中文版本    | https://github.com/xiaoymin/swagger-bootstrap-ui             |
| Vue + Element       | 2.0              | https://cn.vuejs.org/                                        |
| 微信小程序          | 2.6.4            | https://mp.weixin.qq.com/cgi-bin/wx                          |
| 支付宝支付接口      | 支付宝           | https://open.alipay.com/platform/home.htm                    |
| 微信公众号          | 微信             | https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/index |
| Orika               | 1.4.6            | http://orika-mapper.github.io/orika-docs/faq.html            |
| Protostuff          | 1.6.0            | https://mvnrepository.com/search?q=Protostuff                |
| FastDFS             | 1.2.6            | https://mvnrepository.com/tags/github                        |



## 软件架构

![WAI](https://file.leesh.top/GitLab/1.png)

## 开发工具

| 工具名称           | 说明               |
| ------------------ | ------------------ |
| Navicat Premium 12 | 数据库可视化       |
| RedisManager       | Redis 可视化       |
| XShell/Xftp        | ssh 连接工具       |
| Postman            | 接口测试工具       |
| robot 3T           | mgb 可视化工具     |
| VSCode             | 前端vue 开发工具   |
| 微信开发者工具     | 微信小程序开发工具 |
| ECS服务器          | 部署服务           |



## 模块划分

| 模块的名称        | 模块的作用   | 启动端口  |
| ----------------- | ------------ | --------- |
| item-service      | 商品服务模块 | 8080      |
| search-service    | 搜索服务模块 |           |
| transport-service | 物流模块     |           |
| pay-service       | 支付模块     |           |
| order-service     | 订单模块     |           |
| message-service   | 消息模块     |           |
| member-service    | 会员模块     |           |
| cart-service      | 购物车模块   |           |
| manager-service   | 后台中心     |           |
| protal-service    | 前台中心     | 9090      |
| eureka-server     | 注册中心     | 8761-8771 |
| config-server     | 配置中心     | 8888 9999 |
| gateway-server    | 网关         | 81 82 83  |
| auth-server       | 授权中心     | 6666      |
| admin-server      | 监听中心     | 80        |
| ego-common        | 公共模块     |           |
| ego-core          | 核心模块     |           |



## 联系方式

邮箱：272381529@qq.com