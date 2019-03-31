var app = getApp();

Page({
  data: {
     userInfo:null,
    //判断用户是否授权 来决定是否显示登陆按钮
  },
 
 onLoad:function(){
   var that = this
   wx.getStorage({
     key: 'userInfo',
     success: function(res) {
       console.log(res)
       that.setData({
         userInfo:res.data
       })
     },
   })
   }
 
})