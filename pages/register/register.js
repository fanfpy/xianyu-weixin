// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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

  formSubmit: function (e) {
    console.log("表单数据", e.detail.value);
    if(e.detail.value.username.length==0){
      wx.showToast({
        title: '用户名不能为空',
        icon:'none'
      })
    } else if (e.detail.value.email.length == 0) {
      wx.showToast({
        title: '邮箱不能为空',
        icon: 'none'
      })
    } 
    else if (e.detail.value.qq.length == 0) {
      wx.showToast({
        title: 'QQ不能为空',
        icon: 'none'
      })
    } 
    else if (e.detail.value.phone.length == 0) {
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none'
      })
    } 
    else if (e.detail.value.password.length == 0) {
      wx.showToast({
        title: '密码不能为空',
        icon: 'none'
      })
    } 
    else if (e.detail.value.password != e.detail.value.password1) {
      wx.showToast({
        title: '两次密码不同',
        icon: 'none'
      })
    }
  },
})