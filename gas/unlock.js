function unlock() {
    var target=sheet2.getRange(arr[col2-2]+row2);
    if(target.getValue()=='') return; // 防止惡意刷新
    var destination = sheet2.getRange(arr[col2-3]+row2);
    var data = new Date(new Date(target.getValue()).getTime()-23*60*1000);
    var newData = Utilities.formatDate(data,"GMT+8","HH:mm");
    destination.setValue(newData);
    target.clearContent();
  }
  function autoApply(){
    var isOpen = sheet.getRange("J7").getValue();
    var judgeTarget = sheet.getRange("B"+(row2+1)).getValue();
    var destination = sheet.getRange("B"+(row2+1)+":F"+(row2+1));
    if(judgeTarget=="" && isOpen) {
      var num = calculate();
      var arr = [[num,num+"+益生菌","無",num,num+"+益生菌"]];
      destination.setHorizontalAlignment("center");
      destination.setValues(arr);
    }
  }
  function calculate(){
    var weight = sheet.getRange("J3").getValue();
    var param = sheet.getRange("J5").getValue();
    var count = sheet.getRange("J6").getValue();
    return parseInt(70*Math.pow(weight,0.75)*param/count);
  }