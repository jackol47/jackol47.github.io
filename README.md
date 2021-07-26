# TYUniAudioManager 

手机音频相关API



类型|版本|适用平台|负责人
-|-|-|-
|1.0.0|all|ailun.huang@tuya.com

> **1.0.0 Changelog:**  
> none


## 方法


### play 

播放



起始版本|适用平台
-|-
1.0.0|all

序号|参数名|参数类型|描述
-|-|-|-
1|innerAudioBean|InnerAudioBean|InnerAudioBean
2|success|SuccessCb&lt;Null&gt;|成功
3|fail|FailureCb|失败


### seek 

跳转到指定位置



起始版本|适用平台
-|-
1.0.0|all

序号|参数名|参数类型|描述
-|-|-|-
1|innerAudioSeekBean|InnerAudioSeekBean|InnerAudioSeekBean
2|success|SuccessCb&lt;Null&gt;|成功
3|fail|FailureCb|失败


### stop 

停止。停止后的音频再播放会从头开始播放



起始版本|适用平台
-|-
1.0.0|all

序号|参数名|参数类型|描述
-|-|-|-
1|innerAudioContext|InnerAudioContext|InnerAudioContext
2|success|SuccessCb&lt;Null&gt;|成功
3|fail|FailureCb|失败


### destroy 

销毁当前实例



起始版本|适用平台
-|-
1.0.0|all

序号|参数名|参数类型|描述
-|-|-|-
1|innerAudioContext|InnerAudioContext|InnerAudioContext
2|success|SuccessCb&lt;Null&gt;|成功
3|fail|FailureCb|失败


## 事件

