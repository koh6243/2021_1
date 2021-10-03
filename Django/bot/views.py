from django.shortcuts import render
from django.http import HttpResponse, HttpResponseBadRequest, HttpResponseForbidden
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
 
from linebot import LineBotApi, WebhookParser
from linebot.exceptions import InvalidSignatureError, LineBotApiError
from linebot.models import MessageEvent, TextSendMessage

line_bot_api = LineBotApi(settings.LINE_CHANNEL_ACCESS_TOKEN)
parser = WebhookParser(settings.LINE_CHANNEL_SECRET)

import requests

host='http://api.thingspeak.com'
read_api_key='7VF0KX0CJLUUFB8M'
channel_id='1068886'

url='%s/channels/%s/feeds/last.json?api_key=%s' \
     %(host, channel_id, read_api_key)
field1=''
field2=''
field3=''
field4=''
@csrf_exempt
def callback(request):
 
    if request.method == 'POST':
        signature = request.META['HTTP_X_LINE_SIGNATURE']
        body = request.body.decode('utf-8')
 
        try:
            events = parser.parse(body, signature)  # 傳入的事件
        except InvalidSignatureError:
            return HttpResponseForbidden()
        except LineBotApiError:
            return HttpResponseBadRequest()
 
        for event in events:
            if event.message.text=="冰箱溫度"or"冰箱濕度"or"環境溫度"or"環境濕度"or"冰箱溫溼度"or"環境溫溼度"or"全部溫度"or"全部濕度"or"全部":              
                try:
                    r=requests.get(url)                   
                except:
                    print('requests.get() exception occurred!')
                answer=r.json()
                if answer['field1']!=None:
                    field1=answer['field1']
                    field1=answer['field1']
                    field2=answer['field2']
                    entry=answer['entry_id']-1
                    url_1='https://api.thingspeak.com/channels/1068886l/feeds/'+str(entry)+'.json?key=7VF0KX0CJLUUFB8M'
                    try:
                        r = requests.get(url_1)
                    except:   
                        print('urequests.get() exception occurred!')
                    answer=r.json()
                    field3=answer['field3']
                    field4=answer['field4']
                elif answer['field3']!=None:
                    field3=answer['field3']
                    field4=answer['field4']
                    entry=answer['entry_id']-1
                    url_1='https://api.thingspeak.com/channels/1068886l/feeds/'+str(entry)+'.json?key=7VF0KX0CJLUUFB8M'
                    try:
                        r = requests.get(url_1)
                    except:
                        print('urequests.get() exception occurred!')
                    answer=r.json()
                    field1=answer['field1']
                    field2=answer['field2']
                if event.message.text=="冰箱溫度":
                    line_bot_api.reply_message(
                    event.reply_token,
                    TextSendMessage(text="目前冰箱溫度:"+field1+"°C")
                    )
                if event.message.text=="冰箱濕度":
                    line_bot_api.reply_message(
                    event.reply_token,
                    TextSendMessage(text="目前冰箱濕度:"+field2+"%")
                    )
                if event.message.text=="環境溫度":
                    line_bot_api.reply_message(
                    event.reply_token,
                    TextSendMessage(text="目前環境溫度:"+field3+"°C")
                    )
                if event.message.text=="環境濕度":
                    line_bot_api.reply_message(
                    event.reply_token,
                    TextSendMessage(text="目前環境濕度:"+field4+"%")
                    )
                if event.message.text=="冰箱溫濕度":
                    line_bot_api.reply_message(
                    event.reply_token,
                    TextSendMessage(text="目前冰箱溫度:"+field1+"°C\n"+"目前冰箱濕度:"+field2+"%")
                    )
                if event.message.text=="環境溫濕度":
                    line_bot_api.reply_message(
                    event.reply_token,
                    TextSendMessage(text="目前環境溫度:"+field3+"°C\n"+"目前環境濕度:"+field4+"%")
                    )
                if event.message.text=="全部溫度":
                    line_bot_api.reply_message(
                    event.reply_token,
                    TextSendMessage(text="目前冰箱溫度:"+field1+"°C\n"+"目前環境溫度:"+field3+"°C")
                    )
                if event.message.text=="全部濕度":
                    line_bot_api.reply_message(
                    event.reply_token,
                    TextSendMessage(text="目前冰箱濕度:"+field2+"%\n"+"目前環境濕度:"+field4+"%")
                    )
                if event.message.text=="全部":
                    line_bot_api.reply_message(
                    event.reply_token,
                    TextSendMessage(text="目前冰箱溫度:"+field1+"°C\n"+"目前冰箱濕度:"+field2+"%\n"+"目前環境溫度:"+field3+"°C\n"+"目前環境濕度:"+field4+"%")
                    )               
            return HttpResponse()
    else:
        return HttpResponseBadRequest()



    
    