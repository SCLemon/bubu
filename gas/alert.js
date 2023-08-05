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