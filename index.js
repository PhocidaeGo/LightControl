const app = getApp()

const apikey = 'AJfkH14PA3qiW8iNA=QhEtFmaZA='
const deviceid = '536089674'
const deviceInfoURL = "https://api.heclouds.com/devices/" + deviceid
const getDataStreamURL = "https://api.heclouds.com/devices/" + deviceid + "/datastreams"
const sendCommandURL = "https://api.heclouds.com/cmds"
const stream="LIGHT"


  wx.request({
    url: deviceInfoURL, //设备API地址
  data: {
    "datastream_id":stream             //请求参数
  },
  header: {
    'content-type': 'application/json', // http头部
    "api-key": apikey
  },
  success: function (res) {
    console.log(res.data) //可以看到返回的json格式数据
  }
})




Page({

   // 监听slider
   
    listenerSlider:function(e) {
    //获取滑动后的值
    console.log(e.detail.value);
  }

  
})

 
 
 
 
  
