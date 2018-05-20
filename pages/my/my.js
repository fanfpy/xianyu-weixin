var app = getApp();

Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo:null,
    //判断用户是否授权 来决定是否显示登陆按钮
    isUser: false,
    userInfoForSql:null
  },
  onLoad: function () {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          that.setData({
            isUser: true,
          })
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          that.setData({
            isUser:true,
          })
          wx.getUserInfo({
            success: function (res) {
              that.setData({
                userInfo: res.userInfo,
              })
              console.log(res.userInfo),
              //给全局变量赋值
              app.data.userInfo = res.userInfo
              //查看数据库是否存在openid
              wx.request({
                url: app.data.apiUrl + '/user/openid/' + app.data.openid,
                method: 'GET',
                success: function (res) {
                  if (res.data.data == null) {
                    wx.request({
                      url: app.data.apiUrl + '/user/',
                      method: 'POST',
                      header: {
                        "Content-Type": "application/x-www-form-urlencoded" // 默认值
                      },
                      data: {
                        username: that.data.userInfo.nickNmae,
                        password: '',
                        qq: '',
                        email: '',
                        goodsNum: 0,
                        power: 0,
                        status: 0,
                        userImg: that.data.userInfo.avatarUrl,
                        phone: '',
                        openid: app.data.openid
                      },
                      success:function(res){
                        console.log("post后返回的数据"+res.data.msg)
                      }
                    })
                  }else{
                    //假如openid存在
                    that.setData({
                      userInfoForSql:res.data.data
                    })
                    console.log(that.data.userInfoForSql)
                  }
                }
              })
            }
          })
        }
      },
    })
  },
})