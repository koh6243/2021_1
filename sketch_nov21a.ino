#include <Wire.h>
#include "HTU21D.h"
#include <LCD.h>
#include <LiquidCrystal_I2C.h>
#include <SoftwareSerial.h>

//Create an instance of the object
HTU21D myHumidity;
#define I2C_ADDR    0x3F  // Define I2C Address for the PCF8574T 
//---(Following are the PCF8574 pin assignments to LCD connections )----
#define BACKLIGHT_PIN  3
#define  LED_OFF  1
#define  LED_ON  0
/*-----( 宣告I2C LCD 物件/Declare objects )-----*/  
LiquidCrystal_I2C  lcd(I2C_ADDR,2,1,0,4,5,6,7); // declare I2C LCD object
#define RX 7   //ESP8266 的 TX接6
#define TX 6 //ESP8266 RX接7
//WIFI設定
#define ID "WIFIID"
#define PW "WIFIPW"
#define IP "184.106.153.149"
String GET = "GET /update?key=你的apikey";
SoftwareSerial ss(RX,TX); //新增物件

void setup(){
  myHumidity.begin();
  Serial.begin(9600);
  ss.begin(115200);
  sendDebug("AT");
  Loding("sent AT");
  connectWiFi();
  // lcd燈設定為除錯，觀看用
  lcd.begin (16,2); 
  lcd.setBacklightPin(BACKLIGHT_PIN,POSITIVE);
  lcd.setBacklight(LED_ON);
  lcd.backlight();
  lcd.setCursor(0,0);
  lcd.setCursor(0,1);
}
void loop(){
  float humd = myHumidity.readHumidity();//濕度
  float temp = myHumidity.readTemperature();//溫度
  //視窗顯示
  Serial.println(humd,1);
  Serial.println(temp,1);
  //LCD顯示
  lcd.println(humd,1);
  lcd.println(temp,1);
  //上傳
  SentOnCloud( String(temp), String(humd) );
  //設定兩次資料上傳間隔，最少15秒
  delay(300000);
  lcd.clear();
}
boolean connectWiFi(){
    ss.println("AT+CWMODE=1");
    Wifi_connect();
}
void SentOnCloud( String T, String H){ 
    // 設定 ESP8266 作為 Client 端
    String cmd = "AT+CIPSTART=\"TCP\",\"";
    cmd += IP;
    cmd += "\",80";
    sendDebug(cmd);
    if( ss.find( "Error" )){
        Serial.print( "RECEIVED: Error1" );
        return;
    }
    String TH = GET + "&field1=" + T + "&field2=" + H +"\r\n";  //上傳欄位設定 1為冰箱溫度、2為冰箱濕度、3為環境溫度、4為環境濕度
    //顯示上傳
    ss.print( "AT+CIPSEND=" );
    ss.println( TH.length() );
    Serial.print(">");
    Serial.print(TH);
    ss.print(TH);
}
void Wifi_connect(){ //設定WIFI連線
    String cmd="AT+CWJAP=\"";
    cmd+=ID;
    cmd+="\",\"";
    cmd+=PW;
    cmd+="\"";
    sendDebug(cmd);
    Loding("Wifi_connect");
}
void Loding(String state){  //確認是否連線
    for (int timeout=0 ; timeout<10 ; timeout++){
      if(ss.find("OK")){
          Serial.println("RECEIVED: OK");
          break;
      }
      else if(timeout==9){
        Serial.print( state );
        Serial.println(" fail...\nExit2");
      }
      else{
        Serial.print("Wifi Loading...");
        delay(500);
      }
    }
}
void sendDebug(String cmd){ //連線除錯
    Serial.print("SEND: ");
    Serial.println(cmd);
    ss.println(cmd);
}
