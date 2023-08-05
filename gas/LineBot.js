var channelToken =''
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