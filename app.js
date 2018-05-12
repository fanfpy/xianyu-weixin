//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if(res.code){
          console.log("【用户id】="+res.code)
        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },

  tabBar: {
    "color": "#9E9E9E",
    "selectedColor": "#f00",
    "backgroundColor": "#fff",
    "borderStyle": "#ccc",
    "list": [{
      "pagePath": "/pages/index/index",
      "text": "主页",
      "iconPath": "/img/home.png",
      "selectedIconPath": "/img/home.png",
      "pageTum": "redirect",
      "selectedColor": "#4EDF80",
      active: true
    },
      {
        "pagePath": "/pages/index/index",
        "text": "主页",
        "iconPath": "/img/home.png",
        "selectedIconPath": "/img/home.png",
        "pageTum": "redirect",
        "selectedColor": "#4EDF80",
        active: true
      },
      {
        "pagePath": "/pages/index/index",
        "text": "主页",
        "iconPath": "/img/home.png",
        "selectedIconPath": "/img/home.png",
        "pageTum": "redirect",
        "selectedColor": "#4EDF80",
        active: true
      }],
    "position": "bottom"
  }

})

