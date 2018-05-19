//app.js

App({

  data:{
      openid:null,
      apiUrl:'http://localhost:8080/api',
  },

  onLaunch: function (e) {
    var that = this
    wx.login({
      success: function (res) {
        // console.log(res.code);
        if (res.code) {
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session',
            data: {
              appid:"wx070997be3de9f5a3",
              secret:"fa81eea44e8cb001b8e6d75bb5fb82a8",
              js_code:res.code,
              grant_type:"authorization_code",
            },
            success:function(res){
              that.data.openid = res.data.openid,
              console.log("全局变量openid   "+that.data.openid)
            }
          })
        }
      }
    });
  },

})

