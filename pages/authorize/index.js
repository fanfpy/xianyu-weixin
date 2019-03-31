// pages/authorize/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.login({
      success(res) {
        if (res.code) {
          that.setData({
            code:res.code
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  bindGetUserInfo:function(e){
    wx.request({
      url: app.data.apiUrl+'user/code',
      data:{
        code:this.data.code,
        encryptedData:e.detail.encryptedData,
        iv:e.detail.iv
      },
      success(e){
       console.log(e.data.data)
       wx.setStorage({
         key: 'userInfo',
         data: e.data.data,
        success(){
          wx.navigateBack()
        }
       })
      }
    })
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userInfo']) {
          // 未授权
         
        }
      }
    })
  }
  
})