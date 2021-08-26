## RequestTask


RequestTask.request(object Object)
发起 HTTPS 网络请求

RequestTask.abort()
中断请求任务

RequestTask.onHeadersReceived(function callback)
监听 HTTP Response Header 事件。会比请求完成事件更早

RequestTask.offHeadersReceived(function callback)
取消监听 HTTP Response Header 事件

  
