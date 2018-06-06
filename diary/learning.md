###day1
####Dom事件
* 事件流：冒泡流
* 事件处理程序：HTML事件/DOM0/DOM2/IE   跨浏览器
* 事件对象 ：事件封装成event对象
* 事件类型：鼠标、键盘
####js动画
* 运动框架
####jquery
* 瀑布流布局
####seo
* search Engine Optimization

###day2
####Bootstrap：浏览
####Ps ：切图
####NodeJs：
* 稳定版：偶数位 0.10.x
* 安装、运行demo
* CommonJs规范

###day3
####NodeJs：
* 模块： 类似于类，引入模块类似于初始化对象。 
* API：url http querystring
* this 指向当前函数拥有者
* call reply 继承
* nio: 
####ES6
* let和const命令 :let声明的变量只在它所在的代码块有效。
* 感觉大部分概念基本类似于java
* 箭头函数

###day4
####NodeJs
* API:http 源码、事件机制
* 性能测试 nodedemo  8C12G KVM ：tps:5000-9000 波动 springboot 2000 -》标准配置下的 springBoot 12k ttl 30ms ，node 9k 38ms  从稳定性、性能上 springboot更优。
* 简单http爬虫：cheerio 对html解析提供api，类似于jqury dom
* 事件模块EventEmiiter

####Promise
* 对象状态：pending fulfilled rejected
* net 模块


###day5
####NodeJs
* buffer（缓存对象）:默认utf-8编码
* smalloc:内存操作相关
* Stream流(readable writable Duplex tarnsform)，流里以buffer传递
* 管道 .pipe()
* 多进程//TODO 主要涉及node对服务器多核cpu的利用

####less
* 类似于JQuery
* 便于写css
* 编译（NodeJs编译、koala等工具、浏览器端使用）
* 更换npm淘宝镜像 npm config set registry https://registry.npm.taobao.org
* 安装ws依赖的lessc npm install -g less 配置ws自动编译(有bug，直接命令行编译 ——》bug原因，cmd路径配置错误修复,配置成功)

###day5
####less
* 注释 1、/* */  2、//
* 变量 @variable:value;
* 混合 带参（默认值）
* 匹配模式（类似于多参）
* 运算
* 嵌套规则
* 避免编译
