# topfullstack
Nodejs+vuejs全栈开发视频网站

初始化项目：nest new server

单体仓库模式：nest g app admin

- ![1572847836417](C:\Users\DC\AppData\Roaming\Typora\typora-user-images\1572847836417.png)

编译运行：nest start -w admin

使用Crud装饰器快速实现增删改查：

创建共用的数据库

​	nest g lib db      --->@libs

![1572856589749](C:\Users\DC\AppData\Roaming\Typora\typora-user-images\1572856589749.png)

安装数据库模块：

​	yarn add nestjs-typegoose @typegoose/typegoose

![1572856455744](C:\Users\DC\AppData\Roaming\Typora\typora-user-images\1572856455744.png)

安装mongoose

​	yarn add mongoose @types/mongoose

在admin子项目下创建管理用户模块：

​	nest g mo -p admin users

在admin子项目下创建管理用户控制器：

​	nest g co -p admin users

安装Crud

​	yarn add nestjs-mongoose-crud

![1572856532795](C:\Users\DC\AppData\Roaming\Typora\typora-user-images\1572856532795.png)

安装配置swagger接口文档

​	yarn add @nestjs/swagger swagger-ui-express

![1572856366489](C:\Users\DC\AppData\Roaming\Typora\typora-user-images\1572856366489.png)

在admin子项目下创建管理课程模块：

​	nest g mo -p admin courses 

在admin子项目下创建管理课程控制器：

​	nest g co -p admin courses 