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