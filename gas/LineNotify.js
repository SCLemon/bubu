const group =''
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