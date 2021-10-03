var field1  //冰箱溫度
var field2  //冰箱濕度
var field3  //環境溫度
var field4  //環境濕度
var url_last='http://api.thingspeak.com/channels/1068886/feeds/last.json?api_key=7VF0KX0CJLUUFB8M' //抓取Thingspeak最新一筆資料
var response_last = UrlFetchApp.fetch(url_last);
let answer_last = JSON.parse(response_last);
if (answer_last['field1'] == null ){      //由於Arduino上傳時間有誤差，所以可能最新資料只有環境沒有冰箱的資料，所以要檢查抓取資料是否為空
  field3 = answer_last['field3']    //如果冰箱為空值，則代表最新一筆為環境的資料，把它抓進去環境的變數裡
  field4 = answer_last['field4']    //把它抓進去環境的變數裡
  entry=answer_last['entry_id']-1   //最新一筆為環境，所以要回去之前的資料庫找最新的冰箱資料
  while (true)   //直到找到最新的冰箱資料前都不會停止
  {
  var url='http://api.thingspeak.com/channels/1068886/feeds/'+entry+'.json?api_key=7VF0KX0CJLUUFB8M' //將url修改為找特定的上傳id而不是最新的資料
  var response = UrlFetchApp.fetch(url);
  let answer = JSON.parse(response);
  field1 = answer['field1']; //把資料抓進去變數
  field2 = answer['field2']; //把資料抓進去變數
  if (field1 != null){  //如果不是空值才會跳脫迴圈
    break;
  }
  entry=answer['entry_id']-1; //由於是空值所以繼續找之前的資料庫id
  }
}
else if (answer_last['field3'] == null ) { //與上面相反，這種情況為只有冰箱而沒有環境的資料
  field1 = answer_last['field1']
  field2 = answer_last['field2']
  entry=answer_last['entry_id']-1
  while (true){
  var url='http://api.thingspeak.com/channels/1068886/feeds/'+entry+'.json?api_key=7VF0KX0CJLUUFB8M'
  var response = UrlFetchApp.fetch(url);
  let answer = JSON.parse(response);
  field3 = answer['field3'];
  field4 = answer['field4'];
  if (field3 != null){
    break;
  }
  entry=answer['entry_id']-1;
  }
}

function doPost(e) {  //line bot的設定

  var CHANNEL_ACCESS_TOKEN = '你的LINE CHANNEL_ACCESS_TOKEN';
  var msg = JSON.parse(e.postData.contents);
  console.log(msg);

  // 取出 replayToken 和發送的訊息文字
  var replyToken = msg.events[0].replyToken;
  var userMessage = msg.events[0].message.text;

  if (typeof replyToken === 'undefined') {
    return;
  }

  var url = 'https://api.line.me/v2/bot/message/reply';
  if (userMessage === '冰箱溫度'){ //當使用者在聊天室打關鍵字時
  UrlFetchApp.fetch(url, {
      'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'replyToken': replyToken,
      'messages': [{
        'type': 'text',
        'text': "目前冰箱溫度:"+field1+"°C", //回應關鍵字的資料
      }],
    }),
  });
}
if (userMessage === '冰箱濕度'){
  UrlFetchApp.fetch(url, {
      'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'replyToken': replyToken,
      'messages': [{
        'type': 'text',
        'text': "目前冰箱濕度:"+field2+"%",
      }],
    }),
  });
}
if (userMessage === '冰箱溫濕度'){
  UrlFetchApp.fetch(url, {
      'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'replyToken': replyToken,
      'messages': [{
        'type': 'text',
        'text': "目前冰箱溫度:"+field1+"°C\n"+"目前冰箱濕度:"+field2+"%",
      }],
    }),
  });
}
if (userMessage === '環境溫度'){
  UrlFetchApp.fetch(url, {
      'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'replyToken': replyToken,
      'messages': [{
        'type': 'text',
        'text': "目前環境溫度:"+field3+"°C",
      }],
    }),
  });
}
if (userMessage === '環境濕度'){
  UrlFetchApp.fetch(url, {
      'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'replyToken': replyToken,
      'messages': [{
        'type': 'text',
        'text': "目前環境溫度:"+field4+"%",
      }],
    }),
  });
}
if (userMessage === '環境溫濕度'){
  UrlFetchApp.fetch(url, {
      'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'replyToken': replyToken,
      'messages': [{
        'type': 'text',
        'text': "目前環境溫度:"+field3+"°C\n"+"目前環境濕度:"+field4+"%",
      }],
    }),
  });
}
if (userMessage === '全部溫度'){
  UrlFetchApp.fetch(url, {
      'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'replyToken': replyToken,
      'messages': [{
        'type': 'text',
        'text': "目前冰箱溫度:"+field1+"°C\n"+"目前環境溫度:"+field3+"°C",
      }],
    }),
  });
}
if (userMessage === '全部濕度'){
  UrlFetchApp.fetch(url, {
      'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'replyToken': replyToken,
      'messages': [{
        'type': 'text',
        'text': "目前冰箱濕度:"+field2+"%\n"+"目前環境濕度:"+field4+"%",
      }],
    }),
  });
}
  if (userMessage === '全部'){
  UrlFetchApp.fetch(url, {
      'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'replyToken': replyToken,
      'messages': [{
        'type': 'text',
        'text': "目前冰箱溫度:"+field1+"°C\n"+"目前冰箱濕度:"+field2+"%\n"+"目前環境溫度:"+field3+"°C\n"+"目前環境濕度:"+field4+"%",
      }],
    }),
  });
}
}
