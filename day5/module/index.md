#模块
##JS不足

- JS没有模块系统，不支持封闭的作用域和依赖管理

- 没有标准库， 文件系统， 流

##Common.js 规范
在node中以模块划分所有的功能，一个文件就是一个模块
实现require方法，用于加载依赖的模块
npm 基于common.js,实现自动加载和安装依赖
把很多的模块组装成一个包（项目）

#模块和包的优点
- 可以实现作用域的封装，封装变量
- 增强内聚性
- 有助于分工
- 有助单元和集成测试，提高代码测试

#如何从模块外部访问模块内部
var exports = module.exports;

#模块的加载策略
分两种
1. 原生（亲生模块，核心模块） 模块，node 自己先加载
global.process.modelLoadList

2.文件模块 动态加载的，比原生的慢，位置不固定

#如何加载文件模块
分三种
1. js脚本文件，需要先读取到内存里，然后进行编译运行
2. json文件， fs 读取到内存，然后转成json对象
3. node 二进制的，直接使用 .dll 

#如何查找文件模块
如何是相对路径或绝对路径
require('./home.js');
require('/');

##如果没有路径
require("home");

#package.json
- 分享项目方便
- 方便记录版本号
- 通过包来管理一组具有相互依赖的模块，进行封装

#npm 包管理器
npm help
npm search mysql
npm view mime    查看包的详细信息

npm install -g mime //全局安装
安装到  c:\Users\Administrtor

npm root -g //显示全局安装目录


npm config set prefix "e:\"


npm install mime@1.0.0
npm update mime
npm uninstall mime;






