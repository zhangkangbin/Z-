Page({
  data: {
    images: ['https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=431792944,1008990118&fm=200&gp=0.jpg',
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2963063415,885010902&fm=27&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1273371833,1624714373&fm=27&gp=0.jpg'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0
  },
  changeProperty: function (e) {
    var propertyName = e.currentTarget.dataset.propertyName
    var newData = {}
    newData[propertyName] = e.detail.value
    this.setData(newData)
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },


   goMassageTap(){

wx.navigateTo({
  url: '../msg/index',
})
     console.log("d");
   },
  
   loanRecordTap() {

     wx.navigateTo({
       url: '../loanRecord/record',
     })
 
   }
,

   scanTap(){

     wx.scanCode({
       success: (res) => {
         console.log(res)
       }
     })

   },

   loanTap(){

     wx.navigateTo({
       url: '../loan/loan',
     })
     

   }



   

})
