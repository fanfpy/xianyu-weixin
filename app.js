//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  onShow: function (options) {
    // Do something when show.
    wx.getSetting({
      success:function(response){
        console.log(response)
        if (!response.authSetting['scope.userInfo']) {
          wx.authorize({
            scope: 'scope.userInfo',
            success:function(){
              console.log('yes')
            }
          })
        }
      }
    })
  },

  globalData: {
    userInfo: null
  }
})

