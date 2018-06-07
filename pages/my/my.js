var app = getApp();

Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // userInfo:null,
    //判断用户是否授权 来决定是否显示登陆按钮
    isUser: false,
    userInfoForSql:null
  },
 
 onLoad:function(){
   var that = this
   if(that.data.userInfoForSql==null){
     wx.request({
       url: app.data.apiUrl + '/user/openid/' + app.data.openid,
       method: 'GET',
       success:function(res){
         if(res.data.data!=null){
           that.setData({
             userInfoForSql: res.data.data,
             isUser: true,
           })
         }
         console.log("my页 26行")
         console.log(res.data.data)
         app.data.userInfo = res.data.data
       }
     })
   }
 },

  bindGetUserInfo: function (e) {
    var that = this 
    console.log(e.detail.userInfo)
    var userInfo = e.detail.userInfo
    if(app.data.openid!=null){
      //添加一个延迟 以免有人手速太快
      wx.showToast({
        title: '',
        icon: 'loading',
        duration: 1000
      })
      wx.request({
        //检测此openid是否注册
        url: app.data.apiUrl + '/user/openid/' + app.data.openid,
        method: 'GET',
        success: function (res) {
          //假如此账号未注册
          if (res.data.data == null) {
            wx.request({
              url: app.data.apiUrl + '/user/',
              method: 'POST',
              header: {
                'content-type': 'application/x-www-form-urlencoded'
              },
              data: {
                username: userInfo.nickName,
                password: '',
                qq: '',
                email: '',
                goodsNum: 0,
                power: 0,
                status: 0,
                userImg: userInfo.avatarUrl,
                phone: '',
                openid: app.data.openid
              },
              success: function (res) {
                console.log("post后返回的数据" + res.data.msg + res.data.data.username)
              }
            })
          }else{
            //账号已注册 将信息传入userInfoSql
            that.setData({
              userInfoForSql:res.data.data,
              isUser: true,
            })
            //同时把数据也传递给全局变量userInfo
            app.data.userInfo = res.data.data
            console.log(that.data.userInfoForSql)
          }
        }
      })
    }
  },
})