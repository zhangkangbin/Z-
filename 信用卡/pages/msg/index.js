//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  
    msglist: ["通知1", "通知2", "通知3", "通知1", "通知6", "通知14", "通知1", "通知66", "通知76", "通知17", "通知1", "通知1", "通知36"]
    
  },


 msgTap(e){

   console.log( e.currentTarget.dataset.id);
},

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  }

})
