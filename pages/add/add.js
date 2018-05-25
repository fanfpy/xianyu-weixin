// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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

  updataimg:function(){
    var that = this
    wx.chooseImage({
      sourceType: ['album', 'camera'], 
      success: function (res) {
        //
        var tempFilePaths = res.tempFilePaths
        that.setData({
          img: tempFilePaths
        })
        console.log(res.tempFiles)
        // console.log("临时路径"+tempFilePaths)
      }
    })
  },
  formSubmit:function(e){
    console.log("ceshi")
    console.log(e.detail.value)
    var that = this
    // wx.uploadFile({
    //   url: app.data.apiUrl+'/goods/add',
    //   filePath: that.data.img[0],
    //   name: 'file',
    //   formData:{
      //从全局变量userInfo中获取
    //     userId: e.detail.value.userId,
    //     classificationId: e.detail.value.classificationId,
    //     commetNum:0,
    //     describle: e.detail.value.describle,
    //     name: e.detail.value.name,
    //     price: e.detail.value.pirce,
    //     status:0,
    //     pageView:0,
    //   }
    // })
  }
})