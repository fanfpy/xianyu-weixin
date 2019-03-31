//app.js

App({
  data:{
      apiUrl:'http://192.168.1.100:8080/api/',
  },

  onLaunch: function (e) {
    var that = this
    wx.getStorage({
      key: 'userInfo',
      success: function(res) {
        
      },
      fail(){
        console.log("===========未登录============")
        setTimeout(function () {
          wx.navigateTo({
            url: '/pages/authorize/index',
          })
        }, 1000)
        return
      }
    })
  }
})

