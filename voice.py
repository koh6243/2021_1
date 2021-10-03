import speech_recognition as sr
from time import sleep
import paho.mqtt.publish as publish

mqttHost = "mqtt.thingspeak.com"
channelID = "你的ID"
apiKey = "你的APIKEY"
tTransport = "websockets"
tPort = 80
tTLS = None
topic = "channels/" + channelID + "/publish/" + apiKey

#obtain audio from the microphone
while 1:
    r=sr.Recognizer()

    with sr.Microphone() as source:
        print("Please wait. Calibrating microphone...")
    #listen for 5 seconds and create the ambient noise energy level
        r.adjust_for_ambient_noise(source, duration=2)
        print("Say something!")
        audio=r.listen(source)

# recognize speech using Google Speech Recognition
        try:
            T=""
            print("Google Speech Recognition thinks you said:")
            print(r.recognize_google(audio, language="zh-TW"))  
            react=r.recognize_google(audio, language="zh-TW")
            if react=="冰箱溫度":
                T="1"
		print("ok")
            elif react=="冰箱濕度":
                T="2"
		print("ok")
            elif react=="冰箱溫濕度":
                T="3"
		print("ok")
            elif react=="環境溫度":
                T="4"
		print("ok")
            elif react=="環境濕度":
                T="5"
		print("ok")
            elif react=="環境溫濕度":
                T="6"
		print("ok")
            elif react=="全部溫度":
                T="7"
		print("ok")
            elif react=="全部濕度":
                T="8"
		print("ok")
            elif react=="全部":
                T="9"
            	print("ok")
            tPayload = "field5=" + T
            publish.single(topic, payload=tPayload, hostname=mqttHost, port=tPort, tls=tTLS, transport=tTransport)
        except sr.UnknownValueError:
            print("Google Speech Recognition could not understand audio")
        except sr.RequestError as e:
            print("No response from Google Speech Recognition service: {0}".format(e))
    print("wait 15 seconds")
    count=15
    while 1:
        print(count,"second")
        sleep(1)
        count-=1
        if count==0 :
            break