//index.js
//获取应用实例
var app = getApp();

Page({
  data: {
    imgUrls: [
      '/img/lunbo3.jpg',
      '/img/lunbo2.png',
      '/img/lunbo1.jpg',
      '/img/lunbo4.jpg'
    ],
    goods:null,
  },

  onShow:function(){
    console.log("检测首页是否能取值" + app.data.userInfo.nickName);
    var that= this
    wx.request({
      url: app.data.apiUrl+'/goods/hot/list',
      success:function(res){
          that.setData({
            goods:res.data.data
          })
          //console.log("你在哪里" + app.data.openid)
      }
    })
  }
})

