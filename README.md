# topfullstack
Nodejs+vuejs全栈开发视频网站

初始化项目：nest new server

创建项目：nest g app admin

- ![1572847836417](C:\Users\DC\AppData\Roaming\Typora\typora-user-images\1572847836417.png)

编译运行：nest start -w admin

使用Crud装饰器快速实现增删改查：

增加数据库连接文件

​	nest g lib db      --->@libs

安装插件：

​	yarn add nestjs-typegoose @typegoose/typegoose

![1572856455744](C:\Users\DC\AppData\Roaming\Typora\typora-user-images\1572856455744.png)

​	yarn add mongoose @types/mongoose

配置users文件夹：

​	nest g mo -p admin users

​	nest g co -p admin users

安装Crud

​	yarn add nestjs-mongoose-crud

![1572856532795](C:\Users\DC\AppData\Roaming\Typora\typora-user-images\1572856532795.png)

安装配置swagger

​	yarn add @nestjs/swagger swagger-ui-express

![1572856366489](C:\Users\DC\AppData\Roaming\Typora\typora-user-images\1572856366489.png)