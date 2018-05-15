Page({

  data: {

    recordList: ["1", "2", "33"],


    leftClass: "text-content-left-click",
    rightClass: "text-content-right",
    rgList: [
      { 'value': '借款', 'selected': false, 'css': 'text-content-left-click' },
      { 'value': '还款', 'selected': true, 'css': 'text-content-right' },

    ]

  }

  
  , recordRgTap(e) {


    var index = e.target.dataset.index;
   // console.log(index);
  
    var list = this.data.rgList;

    if (index == 0) {
      // 写回数据
      list[0].css = "text-content-left-click"
      list[1].css = "text-content-right"
    
    } else {


      list[0].css ="text-content-left"
      list[1].css = "text-content-right-click"
    }

    this.setData({
      rgList: list
    });
   // console.log(this.data.rgList[index].css);
  }
 


})