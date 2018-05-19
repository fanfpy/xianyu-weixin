Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo:null,
  },
  onLoad: function () {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          that.setData({
            isUser:true,
          })
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo),
              that.setData({
                userInfo:res.userInfo,
              })
            }
          })
        }
      }
    })
  },
})