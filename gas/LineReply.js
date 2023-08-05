const all =SpreadsheetApp.openById("1u7WA7N6AC6LK9lc3iL7_Y92I-oZNUAT2wu3As2pWWIE");
const sheet =all.getSheetByName("food");
const sheet2 =all.getSheetByName("status");
var arr=["B","C","D","E","F"];
var period =["05:00~06:00","10:00~11:00","14:00~15:00","18:00~19:00","23:00~00:00"];
const token ='' 
function doPost(e) {
  var message = JSON.parse(e.postData.contents);
  var replyToken = message.events[0].replyToken;
  var text = message.events[0].message.text;
  var data = {
    replyToken: replyToken,
    messages: [
      {
        "type": "text",
        "text": getReply(text)
      },
    ]
  };
  var option = {
    method: 'post',
    headers: { Authorization: 'Bearer ' + token },
    contentType: 'application/json',
    payload: JSON.stringify(data)
  };
  if(getReply(text)!="") UrlFetchApp.fetch('https://api.line.me/v2/bot/message/reply', option);
}
function getReply(text){
  var row2 = sheet2.getRange("J1").getValue();
  var col2 = sheet2.getRange("J2").getValue();
  var date =sheet2.getRange("A"+row2).getValue();
  var obj="日期:"+getDate(date)+" 時間:"+period[col2-2]+" 食量:"+sheet.getRange(arr[col2-2]+row2).getValue()+" 狀態: "+(sheet2.getRange(arr[col2-2]+row2).getValue()==""?"未完成":"已完成")+" 上次餵食時間: "+new Date(sheet2.getRange("J3").getValue()).toLocaleTimeString()+" 距離時差: "+getDelta()+"分鐘"
  switch(text){
    case "查詢狀態":
      return obj;
    case "Bubu":
      return "汪汪！"
    case "最愛Bubu":
      return "Bubu最愛主人了！"
    default:
      return "";
  }
}
function getDate(date){
  var time =new Date(date);
  var arr=date.toString().split(" ")
  var newDate = arr[3]+"/"+(time.getUTCMonth()+1)+"/"+arr[2]
  return newDate;
}
function getDelta(){
    var last = new Date(sheet2.getRange("J3").getValue()).getTime();
    var now = new Date().getTime();
    var delta = parseInt((now-last)/1000/60);
    return delta;
}