// pages/add/add.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:null,
    classId:null,
    classification: null,
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
    var that = this
    wx.request({
      url: app.data.apiUrl + '/goods/class',
      success: function (res) {
        that.setData({
          classification: res.data.data
        })
        console.log(that.data.classification)
      }
    })
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
    // console.log(e.detail.value)
    var that = this
    var value = e.detail.value
    if(value.name==""){
      wx.showToast({
        title: '商品标题不能为空',
        icon:"none"
      })
    }else if(value.describle==""){
      wx.showToast({
        title: '商品描述不能为空',
        icon:"none"
      })
    } else if (value.price<0){
      wx.showToast({
        title: '价格不能小于零',
        icon:"none"
      })
    }else{
      console.log("userId:"+ app.data.userInfo.id+
        "classificationId"+that.data.classId+
        "describle: "+value.describle+
        "name: "+value.name,
        "price: "+value.price,)
      wx.request({
        url: app.data.apiUrl + '/goods/add',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          userId: app.data.userInfo.id,
          classificationId: that.data.classId,
          commetNum: 0,
          describle: value.describle,
          name: value.name,
          price: value.price,
          status: 0,
          pageView: 0,
        },
        success: function (res) {
          console.log(res)
          if(that.data.img!=null){
            for (var i = 0; i < that.data.img.length; i++) {
              wx.uploadFile({
                url: app.data.apiUrl + '/img/add',
                filePath: that.data.img[i],
                name: 'file',
                formData: {
                  goodsId: res.data.data.id,
                },
                success: function () {
                  wx.showToast({
                    title: '上传成功',
                  })
                  wx.switchTab({
                    url: '/pages/index/index',
                  })
                },
                fail: function () {
                  wx.showToast({
                    title: '上传失败',
                  })
                }
              })
            }
          }
        }
      })
    }
  },
  bindPickerChange: function (e) {
    var that = this
    console.log('携带值为', e.detail.value)
    that.setData({
      classId:that.data.classification[e.detail.value].id
    })
  },
})