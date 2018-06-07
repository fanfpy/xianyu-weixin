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
    num:5, //默认首页初始化五条商品信息
    isList:"new",
    classId:{
        'phone': 1,
        'book':2,
        'computer':3,
      }
  },

  onShow:function(){
    
    var that = this
    wx.request({
      url: app.data.apiUrl + '/goods/'+that.data.isList+'/'+ that.data.num,
      success: function (res) {
        that.setData({
          goods: res.data.data
        })
      }
    })
  },
  onLoad:function(){
    wx.showToast({
      title: '',
      icon: 'loading',
      duration: 1000
    })
  },
  onReachBottom:function(){
    var that = this
    wx.showToast({
      title: '',
      icon:'loading',
      duration:1000
    })
    that.setData({
      num:that.data.num+=5
    })
      wx.request({
        url: app.data.apiUrl + '/goods/'+that.data.isList+'/'+ that.data.num,
        success: function (res) {
          that.setData({
            goods: res.data.data
          })
        }
      })
  },
  newList:function(){
    var that = this 
    this.setData({
      isList:"new"
    })
    that.onShow()
  },
  hotList: function () {
    var that = this
    this.setData({
      isList: "hot"
    })
    that.onShow()
  }
})

