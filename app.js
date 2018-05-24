//app.js

App({

  data:{
      openid:null,
      apiUrl:'http://127.0.0.1:8080/api',
      userInfo:null
  },

  onLaunch: function (e) {
    //"getOenid"
    this.getOpenid();
  },

    getOpenid:function(){
      var that = this
      wx.login({
        success: function (res) {
          // console.log(res.code);
          if (res.code) {
            wx.request({
              url: 'https://api.weixin.qq.com/sns/jscode2session',
              data: {
                appid: "wx070997be3de9f5a3",
                secret: "fa81eea44e8cb001b8e6d75bb5fb82a8",
                js_code: res.code,
                grant_type: "authorization_code",
              },
              success: function (res) {
                that.data.openid = res.data.openid;
                //console.log("openid   " + res.data.openid)
                console.log("你特么到低啥时候执行的" + res.data.openid+"  "+that.data.openid)
              }
            })
          }
        }
      });
    },

    isUser:function(openid){
      var that = this
      
    }
})

