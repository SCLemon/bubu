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
  