// food
var sheet =SpreadsheetApp.getActive().getSheetByName("food");
var row = sheet.getRange("J1").getValue();
var col = sheet.getRange("J2").getValue();
var arr=["B","C","D","E","F"];
var period =["05:00~06:00","10:00~11:00","14:00~15:00","18:00~19:00","23:00~00:00"];
var mail = sheet.getRange("L1:L").getValues();
function main() {
  var str = arr[col-2]+row;
  var time = period[col-2];
  var data = sheet.getRange(str).getValue();
  console.log(str)
  send(time,data);
  update();
}
function update(){
  col++;
  if(col>6){
    col=2;
    row++;
  }
  sheet.getRange("J1").setValue(row);
  sheet.getRange("J2").setValue(col);
}
function send(time,data){
    var date =sheet.getRange("A"+row).getValue();
    var body = "<table border='1' style='text-align: center; width: 300px; height: 110px;'><tr><td colspan='2'>Bubu 飲食提醒</td></tr><tr><td colspan='2'>"+getDate(date)+"</td></tr><tr><td>"+time+"</td><td>"+data+"</td></tr><tr><td colspan='2'><a href='https://sclemon.github.io/bubu/'><button style='width: 80%; margin: 0 auto; line-height:2;'>前往確認</button></a></td></tr></table>"
    for(var i=1;i<mail.length;i++){
      try{
        if(mail[i]=='') break;
        MailApp.sendEmail(mail[i][0],"Bubu 餵食提醒","",{
          name:"Bubu 餵食小記",
          htmlBody:body
        });
      }catch(e){
        continue;
      }
    }
    if(getDelta()>= 4*60) sendLine("hungry");
}
function getDate(date){
  var time =new Date(date);
  var arr=date.toString().split(" ")
  var newDate = arr[3]+"/"+(time.getUTCMonth()+1)+"/"+arr[2]
  return newDate;
}
// status
var sheet2 = SpreadsheetApp.getActive().getSheetByName("status");
var row2 = sheet2.getRange("J1").getValue();
var col2 = sheet2.getRange("J2").getValue();
function doGet() {
  var date =sheet2.getRange("A"+row2).getValue();
  var obj={
    date:getDate(date),
    time:period[col2-2],
    food:sheet.getRange(arr[col2-2]+row2).getValue(),
    status:sheet2.getRange(arr[col2-2]+row2).getValue(),
    weight:sheet.getRange("J3").getValue(),
    unit:sheet.getRange("J4").getValue(),
    hasFood:hasFood(),
    last:new Date(sheet2.getRange("J3").getValue()).toLocaleTimeString()
  }
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
function doPost(e){
  var users = sheet2.getRange("L1:L5").getValues();
  var param = e.parameter;
  var user = param.user;
  var doUnlock = param.unlock=="true"?true:false;
  var flag = 0;
  for(var i=0;i<users.length;i++){
    if(user==users[i][0]){
      flag=1;
      break;
    }
  }
  if(flag){
    if(doUnlock && col2==2) return ContentService.createTextOutput("Not Allowed").setMimeType(ContentService.MimeType.TEXT);
    else if(doUnlock && col2!=2) unlock();
    else{
      var str = arr[col2-2]+row2;
      var target = sheet2.getRange(str);
      target.setValue(getNow());
      target.setHorizontalAlignment("center");
      sheet2.getRange("J3").setValue(new Date());
      sendLine("full");
    }
    return ContentService.createTextOutput("success").setMimeType(ContentService.MimeType.TEXT);
  }
  else return ContentService.createTextOutput("NO permission").setMimeType(ContentService.MimeType.TEXT);
}
function updateStatus(){
  col2++;
  if(col2>6){
    col2=2;
    row2++;
  }
  sheet2.getRange("J1").setValue(row2);
  sheet2.getRange("J2").setValue(col2);
}
function getNow(){
  var fragment = new Date().toString().split(" ")[4];
  var now = fragment.split(":")[0]+":"+fragment.split(":")[1];
  return now;
}
function hasFood(){
  var row =sheet2.getRange("J1").getValue();
  var data = sheet.getRange("B"+row+":F"+row).getValues();
  var num=0;
  for(var i=0;i<data[0].length;i++)  data[0][i]!='無'? num++:'';
  return num;
}
// alert
function alert() {
    var delta = getDelta();
    if(delta >= 9.0*60){
      sendAlert(delta);
      sendLine("angry");
    }
    else if(delta>=7.5*60){
      sendLine("forget");
    }
    else if(delta>=5.5*60){
      sendLine("hungry");
    }
}
function sendAlert(delta){
    var body = "<table border='1' style='text-align: center; height: 110px;'><tr><td colspan='2'>Bubu 飲食警示</td></tr><tr><td colspan='2' style='color:red; font-size:32px;'>距離上次餵食："+delta+"分鐘</td></tr><tr><td colspan='2'><a href='https://sclemon.github.io/bubu/'><button style='width: 80%; margin: 0 auto; line-height:2; '>前往確認</button></a></td></tr></table>"
    for(var i=1;i<mail.length;i++){
      try{
        if(mail[i]=='') break;
        MailApp.sendEmail(mail[i][0],"Bubu 飲食警示","",{
          name:"Bubu 飲食警示",
          htmlBody:body
        });
      }catch(e){
        continue;
      }
    }
}
function getDelta(){
    var last = new Date(sheet2.getRange("J3").getValue()).getTime();
    var now = new Date().getTime();
    var delta = parseInt((now-last)/1000/60);
    return delta;
}
// line notify
const group ='8B5lTLsEzFTogvtzS4mLtnnpqgRh5XGW6z9daGN9v67'
function sendLine(filter) {
  var obj={};
  if(filter == "hungry"){
    obj={
      message: "Bubu 感到肚子餓餓！！ 距離上次餵食："+getDelta()+"分鐘以前",
      stickerPackageId:"6362", 
      stickerId:"11087931"
    }
  }
  else if(filter =="angry"){
    obj={
      message: "我需要救星，我已經有"+getDelta()+"分鐘沒有進食了！！",
      stickerPackageId:"8525",
      stickerId:"16581292"
    }
  }
  else if(filter =="forget"){
    obj={
      message: "可以不要忘記餵我嗎QQ，你忍心讓我餓了"+getDelta()+"分鐘嗎，怒怒！",
      stickerPackageId:"11537",
      stickerId:"52002751"
    }
  }
  else{
    obj={
      message: "我吃飽了，開心開心！！",
      stickerPackageId:"6362",
      stickerId:"11087924"
    }
  }
  var option = {
    method: 'post',
    headers: { Authorization: 'Bearer ' + group },
    payload: obj
  };
  UrlFetchApp.fetch('https://notify-api.line.me/api/notify', option);
}
// line messaging
var channelToken ='yt3esI4y4IFmkddFLPD5Qpyikbz/oWrfPOh9BhYcNgsM4mc0KVFLalVTIO8oF/uq6+l0TsL1adN3V7fgqZMYbSOW/GoBHoP8yXmXBKs+1gTL2P7YJE0FvKzbcu3eHs/tKZddUbDmObFwTyJd15G9SwdB04t89/1O/w1cDnyilFU='
function pushMsg(filter) {
  var msg = 
  filter=="hungry"?"Bubu 感到肚子餓餓！！ 距離上次餵食："+getDelta()+"分鐘以前":
  filter=="angry"?"我好餓ＱＱ，我已經有"+getDelta()+"分鐘沒有進食了！！":
  filter=="forget"?"可以不要忘記餵我嗎QQ，你忍心讓我餓了"+getDelta()+"分鐘嗎，怒怒！":"我吃飽了，開心開心！！";
  var url = 'https://api.line.me/v2/bot/message/push';
  var opt = {
  'headers': {
    'Content-Type': 'application/json; charset=UTF-8',
    'Authorization': 'Bearer ' + channelToken,
  },
  'method': 'POST',
  'payload': JSON.stringify({
    "to":"C4bd9e9a2ced702c71ec1d22fe6ac195b",
    "messages": [{
        "type": "text", 
        "text": message
    }]
  })
 };
 UrlFetchApp.fetch(url, opt);
}
// unlock & autoApply
function unlock() {
    var target=sheet2.getRange(arr[col2-2]+row2);
    var destination = sheet2.getRange(arr[col2-3]+row2);
    destination.setValue(target.getValue());
    target.clearContent();
  }
  function autoApply(){
    var isOpen = sheet.getRange("J7").getValue();
    var judgeTarget = sheet.getRange("B"+(row+1)).getValue();
    var destination = sheet.getRange("B"+(row+1)+":F"+(row+1));
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