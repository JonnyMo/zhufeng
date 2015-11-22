#服务器
- 能提供服务的都是服务器

- 能提供定位，告诉别人在什么地方提供服务

- 如何找到一台计算机 IP地址=国风美唐四号楼
- 端口是  = 房间号

- http 90 tcp 8080 ftp 20
#客户端
- 需要服务，能发起请求就叫客户
- 浏览器 命令行 QQ 微信

#数据

#协议
- 人与人的通信
1.

123.57.143.189 

#普通网站的访问流程
1.浏览器（其他客户端）向服务器发送请求 
2.先解析域名， DNS域名解析服务器（chrome ）-->搜索操作系统缓存-->读取本地host文件
dns 服务器
3.客户端通过随机端口通过TCP三次握手，与服务器建立连接
4.浏览器要发送http 请求

#netstat 命令
tcp 协议的特点

#URL统一资源定位符
http://user:pass@zhufengpeixun.cn:80/node/index.html?type=1#top
http:协议名
user:pass 登录信息（认证）   //可以试试git的地址上加用户名和密码，这样就不用输入用户名和密码了
zhufengpeixun.cn 服务器地址（域名，可以是ip）
80 端口号
/node/index.html uri
type=1 查询字符串

#请求
请求头
> GET / HTTP/1.1
> User-Agent: curl/7.41.0 客户端版本
> Host: localhost:8888 请求主机和端口
> Accept: */*     可以接收的文档类型

响应
>
< HTTP/1.1 200 OK
< ContentType: text/html, chaset=utf-8
< Date: Sat, 21 Nov 2015 07:57:21 GMT
< Connection: keep-alive
< Transfer-Encoding: chunked
<
鍐呭* Connection #0 to host localhost left intact   


curl -H 'name:zfpx' -v http://localhost:8888


过滤端口的命令
netstat -anto | findstr "8080"


