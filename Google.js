var field1
var field2
var field3
var field4
var url_last='http://api.thingspeak.com/channels/1068886/feeds/last.json?api_key=7VF0KX0CJLUUFB8M'
var response_last = UrlFetchApp.fetch(url_last);
let answer_last = JSON.parse(response_last);
if (answer_last['field1'] == null ){
  field3 = answer_last['field3']
  field4 = answer_last['field4']
  entry=answer_last['entry_id']-1
  while (true)
  {
  var url='http://api.thingspeak.com/channels/1068886/feeds/'+entry+'.json?api_key=7VF0KX0CJLUUFB8M'
  var response = UrlFetchApp.fetch(url);
  let answer = JSON.parse(response);
  field1 = answer['field1'];
  field2 = answer['field2'];
  if (field1 != null){
    break;
  }
  entry=answer['entry_id']-1;
  }
}
else if (answer_last['field3'] == null ) {
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

function doPost(e) {

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
  if (userMessage === '冰箱溫度'){
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
        'text': "目前冰箱溫度:"+field1+"°C",
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