

## ty.request
 
发起 HTTPS 网络请求


## 参数


### object Object
  
属性|类型|默认值|必填|说明
-|-|-|-|-
url|string|| 是|开发者服务器接口地址
data|string||否|请求的参数
header|Map<string, string>||否|设置请求的 header，header 中不能设置 Referer。content-type 默认为 application/json
timeout|number||否|超时时间，单位为毫秒
method|string|| 是|HTTP 请求方法
dataType|string||否|返回的数据格式
responseType|string|text|否|返回的数据类型
enableHttp2|boolean|false|否|enableHttp2
enableQuic|boolean|false|否|enableQuic
enableCache|boolean|false|否|enableCache



 
   
### object.method的合法值
值|说明
-|-
  OPTIONS|HTTP 请求 OPTIONS
  GET|HTTP 请求 GET
  HEAD|HTTP 请求 HEAD
  POST|HTTP 请求 POST
  PUT|HTTP 请求 PUT
  DELETE|HTTP 请求 DELETE
  TRACE|HTTP 请求 TRACE
  CONNECT|HTTP 请求 TRACE
   
### object.dataType的合法值
值|说明
-|-
  json|HTTPDataType JSON
   
 

### object.success 回调函数
### 参数
### Object.res
属性|类型|说明
-|-|-
  data| string | 开发者服务器返回的数据
  statusCode| number | 开发者服务器返回的 HTTP 状态码
  header| Map&lt;string, string&gt; | 开发者服务器返回的 HTTP Response Header
  cookies| Array&lt;string&gt; | 开发者服务器返回的 cookies，格式为字符串数组
  profile| Profile | 网络请求过程中一些调试信息
  taskId| string | 网络请求id，用户取消、监听等操作
  
  ### res.profile的结构
属性|类型|说明
-|-|-
redirectStart| number | 第一个 HTTP 重定向发生时的时间。有跳转且是同域名内的重定向才算，否则值为 0
  redirectEnd| number | 最后一个 HTTP 重定向完成时的时间。有跳转且是同域名内部的重定向才算，否则值为 0
  fetchStart| number | 组件准备好使用 HTTP 请求抓取资源的时间，这发生在检查本地缓存之前
  domainLookupStart| number | DNS 域名查询开始的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等
  domainLookupEnd| number | DNS 域名查询完成的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等
  connectStart| number | HTTP（TCP） 开始建立连接的时间，如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接开始的时间
  connectEnd| number | HTTP（TCP） 完成建立连接的时间（完成握手），如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接完成的时间。注意这里握手结束，包括安全连接建立完成、SOCKS 授权通过
  SSLconnectionStart| number | SSL建立连接的时间,如果不是安全连接,则值为 0
  SSLconnectionEnd| number | SSL建立完成的时间,如果不是安全连接,则值为 0
  requestStart| number | HTTP请求读取真实文档开始的时间（完成建立连接），包括从本地读取缓存。连接错误重连时，这里显示的也是新建立连接的时间
  requestEnd| number | HTTP请求读取真实文档结束的时间
  responseStart| number | HTTP 开始接收响应的时间（获取到第一个字节），包括从本地读取缓存
  responseEnd| number | HTTP 响应全部接收完成的时间（获取到最后一个字节），包括从本地读取缓存
  rtt| number | 当次请求连接过程中实时 rtt
  estimate_nettype| string | 评估的网络状态 slow 2g/2g/3g/4g
  httpRttEstimate| number | 协议层根据多个请求评估当前网络的 rtt（仅供参考）
  transportRttEstimate| number | 传输层根据多个请求评估的当前网络的 rtt（仅供参考）
  downstreamThroughputKbpsEstimate| number | 评估当前网络下载的kbps
  throughputKbps| number | 当前网络的实际下载kbps
  peerIP| string | 当前请求的IP
  port| number | 当前请求的端口
  socketReused| boolean | 是否复用连接
  sendBytesCount| number | 发送的字节数
  receivedBytedCount| number | 收到字节数
  


### 示例代码
```
ty.request({
url: xxx,
method: xxx,
})
```







