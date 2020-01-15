# topfullstack

Nodejs+vuejs 全栈开发视频网站

初始化项目：nest new server

单体仓库模式：nest g app admin

- ![1572847836417](C:\Users\DC\AppData\Roaming\Typora\typora-user-images\1572847836417.png)

编译运行：nest start -w admin

使用 Crud 装饰器快速实现增删改查：

创建共用的数据库

​ nest g lib db --->@libs

![1572856589749](C:\Users\DC\AppData\Roaming\Typora\typora-user-images\1572856589749.png)

安装数据库模块：

​ yarn add nestjs-typegoose @typegoose/typegoose

![1572856455744](C:\Users\DC\AppData\Roaming\Typora\typora-user-images\1572856455744.png)

安装 mongoose

​ yarn add mongoose @types/mongoose

在 admin 子项目下创建管理用户模块：

​ nest g mo -p admin users

在 admin 子项目下创建管理用户控制器：

​ nest g co -p admin users

安装 Crud

​ yarn add nestjs-mongoose-crud

![1572856532795](C:\Users\DC\AppData\Roaming\Typora\typora-user-images\1572856532795.png)

安装配置 swagger 接口文档

​ yarn add @nestjs/swagger swagger-ui-express

![1572856366489](C:\Users\DC\AppData\Roaming\Typora\typora-user-images\1572856366489.png)

在 admin 子项目下创建管理课程模块：

​ nest g mo -p admin courses

在 admin 子项目下创建管理课程控制器：

​ nest g co -p admin courses

安装 axios

​ yarn add axios types/axios

安装 avue 重新修改项目的增删改查
​ yarn add @smallwei/avue
yarn 更新依赖包指令
 yarn upgrade-interactive --latest

安装bcryptjs（加密相关）
 yarn add bcryptjs  代码提示yarn add -D @types/bcryptjs

安装passport（拦截响应有关）
 yarn add @nestjs/passport passport passport-local passport-jwt
代码提示
 yarn add -D @types/passport @types/passport @types/passport-local @types/passport-jwt

