#include <WiFi.h>
#include <Firebase_ESP_Client.h>

#include <DHT.h>
#include <OneWire.h>
#include <DallasTemperature.h>
#include <time.h>

//
// ======================================================
// WIFI CREDENTIALS
// ======================================================
//
#define WIFI_SSID "ree"
#define WIFI_PASSWORD "chachacha18"

//
// =====================================================
// FIREBASE CREDENTIALS
// ======================================================
//

#define API_KEY "AIzaSyDKW78SpOM7nXhKKvwTTLOigBsvcTc0HWc"
#define DATABASE_URL "https://mistora-fb941-default-rtdb.firebaseio.com/"
#define USER_EMAIL "embeddedsystem@mistora.com"
#define USER_PASSWORD "mistora1234"
#define PROJECT_ID "mistora-fb941"

//
// ======================================================
// FIREBASE OBJECTS
// ======================================================
//
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

//
// ======================================================
// GPIO ASSIGNMENTS
// ======================================================
//
#define ATOMIZER_PIN 26
#define PUMP_PIN 25
#define FLOAT_SWITCH_PIN 27

#define DHTPIN 32
#define DHTTYPE DHT11

#define ONE_WIRE_BUS 33

#define TDS_PIN 34

//
// ======================================================
// SENSOR INITIALIZATION
// ======================================================
//
DHT dht(DHTPIN, DHTTYPE);

OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature waterSensor(&oneWire);

//
// ======================================================
// THRESHOLDS
// ======================================================
//

// HUMIDITY
const float LOW_HUMIDITY = 55.0;
const float HIGH_HUMIDITY = 85.0;
const float CRITICAL_HUMIDITY = 90.0;

// WATER TEMPERATURE
const float LOW_WATER_TEMP = 18.0;
const float HIGH_WATER_TEMP = 28.0;
const float CRITICAL_WATER_TEMP = 30.0;

// AIR TEMPERATURE
const float LOW_AIR_TEMP = 18.0;
const float HIGH_AIR_TEMP = 30.0;
const float CRITICAL_AIR_TEMP = 35.0;

//
// ======================================================
// VARIABLES
// ======================================================
//
bool atomizerState = false;
String systemStatus = "NORMAL";

float TDS_FACTOR = 0.5;
float tdsValue = 0;

//
// --- MANUAL DASHBOARD CONTROL ---
// Duration the manual dashboard trigger keeps the atomizer forced ON (ms)
const unsigned long MANUAL_OVERRIDE_MS = 30000UL; // 30 seconds default
unsigned long manualOverrideUntil = 0;

// last seen remote command value to detect new trigger
long lastRemoteMistValue = 0;

// remote automation mode: true = automatic control allowed, false = manual only
bool autoModeEnabled = true;
// --------------------------------

//
// ======================================================
// TIME FUNCTION (Firestore SAFE)
// ======================================================
String getISOTimeUTC() {

  time_t now;
  time(&now);

  struct tm timeinfo;
  gmtime_r(&now, &timeinfo);

  char buffer[30];

  strftime(
    buffer,
    sizeof(buffer),
    "%Y-%m-%dT%H:%M:%SZ",
    &timeinfo
  );

  return String(buffer);
}
//
// ======================================================
// SETUP
// ======================================================
//
void setup() {

  Serial.begin(115200);

  //
  // Initialize Sensors
  //
  dht.begin();
  waterSensor.begin();

  analogReadResolution(12);
  analogSetAttenuation(ADC_11db);

  //
  // Pin Modes
  //
  pinMode(ATOMIZER_PIN, OUTPUT);
  pinMode(PUMP_PIN, OUTPUT);

  pinMode(FLOAT_SWITCH_PIN, INPUT_PULLUP);

  digitalWrite(ATOMIZER_PIN, LOW);
  digitalWrite(PUMP_PIN, LOW);

  //
  // CONNECT WIFI
  //
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);

  Serial.print("Connecting to WiFi");

  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }

  Serial.println();
  Serial.println("WiFi Connected!");
  //
  // TIME SYNC (IMPORTANT)
  //
  configTime(0, 0, "pool.ntp.org", "time.nist.gov");

  Serial.print("Syncing time");

  time_t now = time(nullptr);

  while (now < 1700000000) {  // real-world timestamp threshold (2024+)
    delay(500);
    Serial.print(".");
    now = time(nullptr);
  }

  Serial.println("\nTime fully synced");
  Serial.print("Firestore Time: ");
  Serial.println(getISOTimeUTC());

  struct tm timeinfo;

  if (getLocalTime(&timeinfo)) {
    Serial.println(&timeinfo, "%A, %B %d %Y %H:%M:%S");
  }

  //
  // FIREBASE CONFIG
  //
  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;

  //
  // Authentication
  //
  auth.user.email = USER_EMAIL;
  auth.user.password = USER_PASSWORD;

  config.token_status_callback = nullptr;

  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);

  Serial.print("Waiting for Firebase auth");

  while (!Firebase.ready()) {
    Serial.print(".");
    delay(500);
  }

  Serial.println();
  Serial.println("Firebase Auth Ready");
  Serial.println("Firebase Connected!");

}

// ==============================
// TDS FUNCTION
// ==============================
float readTDS(float waterTemp) {

  int rawADC = analogRead(TDS_PIN);
  float voltage = rawADC * (3.3 / 4095.0);

  // Temperature compensation (uses SAME loop reading)
  float compensationCoefficient = 1.0 + 0.02 * (waterTemp - 25.0);
  float compensationVoltage = voltage / compensationCoefficient;

  float ecValue =
      (133.42 * pow(compensationVoltage, 3)
    - 255.86 * pow(compensationVoltage, 2)
    + 857.39 * compensationVoltage) * TDS_FACTOR;

  float tds = ecValue * 0.5;

  return tds;
}

// ==============================
// Historical Readings
// ==============================

void logSnapshot(float humidity,
                 float airTemp,
                 float waterTemp,
                 float tdsValue,
                 bool atomizerState,
                 bool waterLow,
                 String status) {

  FirebaseJson logs;

  logs.set("fields/humidity/doubleValue", humidity);
  logs.set("fields/airTemperature/doubleValue", airTemp);
  logs.set("fields/waterTemperature/doubleValue", waterTemp);
  logs.set("fields/tds/doubleValue", tdsValue);

  logs.set("fields/atomizerState/booleanValue", atomizerState);
  logs.set("fields/waterLow/booleanValue", waterLow);
  logs.set("fields/systemStatus/stringValue", status);


  logs.set("fields/timestamp/timestampValue", getISOTimeUTC());

  
  String logPath = "sensor_readings/logs/history/" + String((uint32_t)time(nullptr));
  if (Firebase.Firestore.createDocument(
        &fbdo,
        PROJECT_ID,
        "",
        logPath.c_str(),
        logs.raw())) {

    Serial.println("Log saved");

  } else {

    Serial.print("Log failed: ");
    Serial.println(fbdo.errorReason());
  }
}

// --- MANUAL DASHBOARD CONTROL HELPER ---
// Checks RTDB path "controls/mist_now" for an integer command value (e.g., a timestamp).
// If value changes (and is non-zero) we treat it as a new manual trigger.
bool checkRemoteMistTrigger() {
  // Attempt to read integer at /controls/mist_now
  if (Firebase.RTDB.getInt(&fbdo, "/controls/mist_now")) {
    long remoteVal = fbdo.intData();
    if (remoteVal != lastRemoteMistValue && remoteVal != 0) {
      lastRemoteMistValue = remoteVal;
      return true;
    }
  } else {
    // On read error, log reason but continue (don't block system)
    Serial.print("RTDB read failed: ");
    Serial.println(fbdo.errorReason());
  }
  return false;
}

// Reads /controls/auto_mode as a 0/1 flag and updates the local mode state.
void syncRemoteAutoMode() {
  if (Firebase.RTDB.getInt(&fbdo, "/controls/auto_mode")) {
    autoModeEnabled = fbdo.intData() != 0;
  } else {
    Serial.print("RTDB auto_mode read failed: ");
    Serial.println(fbdo.errorReason());
  }
}
// --------------------------------------


// ======================================================
// LOOP
// ======================================================
//
void loop() {

  //
  // READ SENSORS
  //
  bool waterLow = digitalRead(FLOAT_SWITCH_PIN);

  float humidity = dht.readHumidity();
  float airTemp = dht.readTemperature();

  waterSensor.requestTemperatures();
  float waterTemp = waterSensor.getTempCByIndex(0);
  if (waterTemp == DEVICE_DISCONNECTED_C) {
    Serial.println("Water temp sensor error");
  return;
  }

  tdsValue = readTDS(waterTemp);

  //
  // SENSOR CHECK
  //
  if (isnan(humidity) || isnan(airTemp)) {

    Serial.println("DHT11 SENSOR ERROR");
    return;
  }

  syncRemoteAutoMode();

  //
  // --- CHECK DASHBOARD MANUAL TRIGGER ---
  // If dashboard button set /controls/mist_now to a new non-zero int (timestamp),
  // start a manual override window and force atomizer ON for that duration.
  //
  if (checkRemoteMistTrigger()) {
    manualOverrideUntil = millis() + MANUAL_OVERRIDE_MS;
    digitalWrite(ATOMIZER_PIN, HIGH);
    atomizerState = true;
    Serial.println("Manual mist triggered from dashboard (override active)");
    // Optionally acknowledge by writing an ack timestamp (keeps UI informed)
    Firebase.RTDB.setInt(&fbdo, "/controls/mist_now_ack", lastRemoteMistValue);
  }

  //
  // ==================================================
  // PRIORITY 1 — WATER LEVEL SAFETY
  // ==================================================
  //
  if (waterLow == HIGH) {

    systemStatus = "LOW WATER";

    Serial.println("\nLOW WATER LEVEL DETECTED!");

    //
    // Emergency Shutdown
    //
    digitalWrite(ATOMIZER_PIN, LOW);
    atomizerState = false;

    //
    // Pump ON
    //
    digitalWrite(PUMP_PIN, HIGH);

    Serial.println("Pump: ON");
    Serial.println("Atomizer: OFF");
  }

  else {

    //
    // Water Normal
    //
    digitalWrite(PUMP_PIN, LOW);

    //
    // If automation is disabled, only honor the manual override window.
    //
    if (!autoModeEnabled) {
      if (millis() < manualOverrideUntil) {
        systemStatus = "MANUAL OVERRIDE";
        digitalWrite(ATOMIZER_PIN, HIGH);
        atomizerState = true;
        Serial.println("\nMANUAL OVERRIDE ACTIVE (dashboard)");
      } else {
        systemStatus = "MANUAL MODE";
        digitalWrite(ATOMIZER_PIN, LOW);
        atomizerState = false;
      }
    }
    //
    // If manual override window is active, keep atomizer forced ON and skip automatic conditions.
    //
    else if (millis() < manualOverrideUntil) {
      systemStatus = "MANUAL OVERRIDE";
      digitalWrite(ATOMIZER_PIN, HIGH);
      atomizerState = true;
      Serial.println("\nMANUAL OVERRIDE ACTIVE (dashboard)");
    }
    //
    // ==================================================
    // CRITICAL CONDITIONS (AUTOMATIC BEHAVIOR)
    // ==================================================
    //
    else {

      //
      // CRITICAL HIGH AIR TEMP
      //
      if (airTemp > CRITICAL_AIR_TEMP) {

        systemStatus = "CRITICAL AIR TEMP";

        digitalWrite(ATOMIZER_PIN, HIGH);
        atomizerState = true;

        Serial.println("\nCRITICAL AIR TEMPERATURE!");
      }

      //
      // CRITICAL HIGH WATER TEMP
      //
      else if (waterTemp > CRITICAL_WATER_TEMP) {

        systemStatus = "CRITICAL WATER TEMP";

        digitalWrite(ATOMIZER_PIN, HIGH);
        atomizerState = true;

        Serial.println("\nCRITICAL WATER TEMPERATURE!");
      }

      //
      // EXTREME HUMIDITY
      //
      else if (humidity > CRITICAL_HUMIDITY) {

        systemStatus = "EXTREME HUMIDITY";

        digitalWrite(ATOMIZER_PIN, LOW);
        atomizerState = false;

        Serial.println("\nEXTREME HUMIDITY!");
      }

      //
      // LOW HUMIDITY
      //
      else if (humidity < LOW_HUMIDITY) {

        systemStatus = "LOW HUMIDITY";

        digitalWrite(ATOMIZER_PIN, HIGH);
        atomizerState = true;

        Serial.println("\nLOW HUMIDITY");
      }

      //
      // HIGH WATER TEMP
      //
      else if (waterTemp > HIGH_WATER_TEMP) {

        systemStatus = "HIGH WATER TEMP";

        digitalWrite(ATOMIZER_PIN, HIGH);
        atomizerState = true;

        Serial.println("\nHIGH WATER TEMPERATURE");
      }

      //
      // HIGH AIR TEMP
      //
      else if (airTemp > HIGH_AIR_TEMP) {

        systemStatus = "HIGH AIR TEMP";

        digitalWrite(ATOMIZER_PIN, HIGH);
        atomizerState = true;

        Serial.println("\nHIGH AIR TEMPERATURE");
      }

      //
      // HIGH HUMIDITY
      //
      else if (humidity > HIGH_HUMIDITY) {

        systemStatus = "HIGH HUMIDITY";

        digitalWrite(ATOMIZER_PIN, LOW);
        atomizerState = false;

        Serial.println("\nHIGH HUMIDITY");
      }

      //
      // LOW WATER TEMP
      //
      else if (waterTemp < LOW_WATER_TEMP) {

        systemStatus = "LOW WATER TEMP";

        digitalWrite(ATOMIZER_PIN, LOW);
        atomizerState = false;

        Serial.println("\nLOW WATER TEMPERATURE");
      }

      //
      // LOW AIR TEMP
      //
      else if (airTemp < LOW_AIR_TEMP) {

        systemStatus = "LOW AIR TEMP";

        digitalWrite(ATOMIZER_PIN, LOW);
        atomizerState = false;

        Serial.println("\nLOW AIR TEMPERATURE");
      }

      //
      // STABLE CONDITIONS
      //
      else {

        systemStatus = "STABLE";

        Serial.println("\nENVIRONMENT STABLE");
      }
    } // end automatic logic
  }

  //
  // ==================================================
  // SERIAL MONITOR OUTPUT
  // ==================================================
  //
  Serial.println("----------------------------------");

  Serial.print("Humidity: ");
  Serial.println(humidity);

  Serial.print("Air Temp: ");
  Serial.println(airTemp);

  Serial.print("Water Temp: ");
  Serial.println(waterTemp);

  Serial.print("TDS: ");
  Serial.print(tdsValue);
  Serial.println(" ppm");

  Serial.print("Atomizer State: ");
  Serial.println(atomizerState ? "ON" : "OFF");

  Serial.print("System Status: ");
  Serial.println(systemStatus);

//
  // ==================================================
  // LIVE DATA (FAST DASHBOARD)
  // ==================================================
  //
  FirebaseJson latest;

  latest.set("fields/humidity/doubleValue", humidity);
  latest.set("fields/airTemperature/doubleValue", airTemp);
  latest.set("fields/waterTemperature/doubleValue", waterTemp);
  latest.set("fields/tds/doubleValue", tdsValue);

  latest.set("fields/atomizerState/booleanValue", atomizerState);
  latest.set("fields/systemStatus/stringValue", systemStatus);
  latest.set("fields/waterLow/booleanValue", waterLow);

  latest.set("fields/timestamp/timestampValue", getISOTimeUTC());


  String latestPath = "sensor_readings/latest";
  if (Firebase.Firestore.patchDocument(
      &fbdo,
      PROJECT_ID,
      "",
      latestPath.c_str(),
      latest.raw(),
      "")
  ) {
    Serial.println("Firestore write success");
  } else {Serial.println(fbdo.errorReason());
  };

  //
  // ==================================================
  // HISTORICAL LOGS
  // (append-only)
  // ==================================================
  //
  logSnapshot(
    humidity,
    airTemp,
    waterTemp,
    tdsValue,
    atomizerState,
    waterLow,
    systemStatus
  );

  delay(5000);
}
#include <WiFi.h>
#include <Firebase_ESP_Client.h>

#include <DHT.h>
#include <OneWire.h>
#include <DallasTemperature.h>
#include <time.h>

//
// ======================================================
// WIFI CREDENTIALS
// ======================================================
//
#define WIFI_SSID "ree"
#define WIFI_PASSWORD "chachacha18"

//
// =====================================================
// FIREBASE CREDENTIALS
// ======================================================
//

#define API_KEY "AIzaSyDKW78SpOM7nXhKKvwTTLOigBsvcTc0HWc"
#define DATABASE_URL "https://mistora-fb941-default-rtdb.firebaseio.com/"
#define USER_EMAIL "embeddedsystem@mistora.com"
#define USER_PASSWORD "mistora1234"
#define PROJECT_ID "mistora-fb941"

//
// ======================================================
// FIREBASE OBJECTS
// ======================================================
//
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

//
// ======================================================
// GPIO ASSIGNMENTS
// ======================================================
//
#define ATOMIZER_PIN 26
#define PUMP_PIN 25
#define FLOAT_SWITCH_PIN 27

#define DHTPIN 32
#define DHTTYPE DHT11

#define ONE_WIRE_BUS 33

#define TDS_PIN 34

//
// ======================================================
// SENSOR INITIALIZATION
// ======================================================
//
DHT dht(DHTPIN, DHTTYPE);

OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature waterSensor(&oneWire);

//
// ======================================================
// THRESHOLDS
// ======================================================
//

// HUMIDITY
const float LOW_HUMIDITY = 55.0;
const float HIGH_HUMIDITY = 85.0;
const float CRITICAL_HUMIDITY = 90.0;

// WATER TEMPERATURE
const float LOW_WATER_TEMP = 18.0;
const float HIGH_WATER_TEMP = 28.0;
const float CRITICAL_WATER_TEMP = 30.0;

// AIR TEMPERATURE
const float LOW_AIR_TEMP = 18.0;
const float HIGH_AIR_TEMP = 30.0;
const float CRITICAL_AIR_TEMP = 35.0;

//
// ======================================================
// VARIABLES
// ======================================================
//
bool atomizerState = false;
String systemStatus = "NORMAL";

float TDS_FACTOR = 0.5;
float tdsValue = 0;

//
// --- MANUAL DASHBOARD CONTROL ---
// Duration the manual dashboard trigger keeps the atomizer forced ON (ms)
const unsigned long MANUAL_OVERRIDE_MS = 30000UL; // 30 seconds default
unsigned long manualOverrideUntil = 0;

// last seen remote command value to detect new trigger
long lastRemoteMistValue = 0;
// --------------------------------

//
// ======================================================
// TIME FUNCTION (Firestore SAFE)
// ======================================================
String getISOTimeUTC() {

  time_t now;
  time(&now);

  struct tm timeinfo;
  gmtime_r(&now, &timeinfo);

  char buffer[30];

  strftime(
    buffer,
    sizeof(buffer),
    "%Y-%m-%dT%H:%M:%SZ",
    &timeinfo
  );

  return String(buffer);
}
//
// ======================================================
// SETUP
// ======================================================
//
void setup() {

  Serial.begin(115200);

  //
  // Initialize Sensors
  //
  dht.begin();
  waterSensor.begin();

  analogReadResolution(12);
  analogSetAttenuation(ADC_11db);

  //
  // Pin Modes
  //
  pinMode(ATOMIZER_PIN, OUTPUT);
  pinMode(PUMP_PIN, OUTPUT);

  pinMode(FLOAT_SWITCH_PIN, INPUT_PULLUP);

  digitalWrite(ATOMIZER_PIN, LOW);
  digitalWrite(PUMP_PIN, LOW);

  //
  // CONNECT WIFI
  //
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);

  Serial.print("Connecting to WiFi");

  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }

  Serial.println();
  Serial.println("WiFi Connected!");
  //
  // TIME SYNC (IMPORTANT)
  //
  configTime(0, 0, "pool.ntp.org", "time.nist.gov");

  Serial.print("Syncing time");

  time_t now = time(nullptr);

  while (now < 1700000000) {  // real-world timestamp threshold (2024+)
    delay(500);
    Serial.print(".");
    now = time(nullptr);
  }

  Serial.println("\nTime fully synced");
  Serial.print("Firestore Time: ");
  Serial.println(getISOTimeUTC());

  struct tm timeinfo;

  if (getLocalTime(&timeinfo)) {
    Serial.println(&timeinfo, "%A, %B %d %Y %H:%M:%S");
  }

  //
  // FIREBASE CONFIG
  //
  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;

  //
  // Authentication
  //
  auth.user.email = USER_EMAIL;
  auth.user.password = USER_PASSWORD;

  config.token_status_callback = nullptr;

  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);

  Serial.print("Waiting for Firebase auth");

  while (!Firebase.ready()) {
    Serial.print(".");
    delay(500);
  }

  Serial.println();
  Serial.println("Firebase Auth Ready");
  Serial.println("Firebase Connected!");

}

// ==============================
// TDS FUNCTION
// ==============================
float readTDS(float waterTemp) {

  int rawADC = analogRead(TDS_PIN);
  float voltage = rawADC * (3.3 / 4095.0);

  // Temperature compensation (uses SAME loop reading)
  float compensationCoefficient = 1.0 + 0.02 * (waterTemp - 25.0);
  float compensationVoltage = voltage / compensationCoefficient;

  float ecValue =
      (133.42 * pow(compensationVoltage, 3)
    - 255.86 * pow(compensationVoltage, 2)
    + 857.39 * compensationVoltage) * TDS_FACTOR;

  float tds = ecValue * 0.5;

  return tds;
}

// ==============================
// Historical Readings
// ==============================

void logSnapshot(float humidity,
                 float airTemp,
                 float waterTemp,
                 float tdsValue,
                 bool atomizerState,
                 bool waterLow,
                 String status) {

  FirebaseJson logs;

  logs.set("fields/humidity/doubleValue", humidity);
  logs.set("fields/airTemperature/doubleValue", airTemp);
  logs.set("fields/waterTemperature/doubleValue", waterTemp);
  logs.set("fields/tds/doubleValue", tdsValue);

  logs.set("fields/atomizerState/booleanValue", atomizerState);
  logs.set("fields/waterLow/booleanValue", waterLow);
  logs.set("fields/systemStatus/stringValue", status);


  logs.set("fields/timestamp/timestampValue", getISOTimeUTC());

  
  String logPath = "sensor_readings/logs/history/" + String((uint32_t)time(nullptr));
  if (Firebase.Firestore.createDocument(
        &fbdo,
        PROJECT_ID,
        "",
        logPath.c_str(),
        logs.raw())) {

    Serial.println("Log saved");

  } else {

    Serial.print("Log failed: ");
    Serial.println(fbdo.errorReason());
  }
}

// --- MANUAL DASHBOARD CONTROL HELPER ---
// Checks RTDB path "controls/mist_now" for an integer command value (e.g., a timestamp).
// If value changes (and is non-zero) we treat it as a new manual trigger.
bool checkRemoteMistTrigger() {
  // Attempt to read integer at /controls/mist_now
  if (Firebase.RTDB.getInt(&fbdo, "/controls/mist_now")) {
    long remoteVal = fbdo.intData();
    if (remoteVal != lastRemoteMistValue && remoteVal != 0) {
      lastRemoteMistValue = remoteVal;
      return true;
    }
  } else {
    // On read error, log reason but continue (don't block system)
    Serial.print("RTDB read failed: ");
    Serial.println(fbdo.errorReason());
  }
  return false;
}
// --------------------------------------


// ======================================================
// LOOP
// ======================================================
//
void loop() {

  //
  // READ SENSORS
  //
  bool waterLow = digitalRead(FLOAT_SWITCH_PIN);

  float humidity = dht.readHumidity();
  float airTemp = dht.readTemperature();

  waterSensor.requestTemperatures();
  float waterTemp = waterSensor.getTempCByIndex(0);
  if (waterTemp == DEVICE_DISCONNECTED_C) {
    Serial.println("Water temp sensor error");
  return;
  }

  tdsValue = readTDS(waterTemp);

  //
  // SENSOR CHECK
  //
  if (isnan(humidity) || isnan(airTemp)) {

    Serial.println("DHT11 SENSOR ERROR");
    return;
  }

  //
  // --- CHECK DASHBOARD MANUAL TRIGGER ---
  // If dashboard button set /controls/mist_now to a new non-zero int (timestamp),
  // start a manual override window and force atomizer ON for that duration.
  //
  if (checkRemoteMistTrigger()) {
    manualOverrideUntil = millis() + MANUAL_OVERRIDE_MS;
    digitalWrite(ATOMIZER_PIN, HIGH);
    atomizerState = true;
    Serial.println("Manual mist triggered from dashboard (override active)");
    // Optionally acknowledge by writing an ack timestamp (keeps UI informed)
    Firebase.RTDB.setInt(&fbdo, "/controls/mist_now_ack", lastRemoteMistValue);
  }

  //
  // ==================================================
  // PRIORITY 1 — WATER LEVEL SAFETY
  // ==================================================
  //
  if (waterLow == HIGH) {

    systemStatus = "LOW WATER";

    Serial.println("\nLOW WATER LEVEL DETECTED!");

    //
    // Emergency Shutdown
    //
    digitalWrite(ATOMIZER_PIN, LOW);
    atomizerState = false;

    //
    // Pump ON
    //
    digitalWrite(PUMP_PIN, HIGH);

    Serial.println("Pump: ON");
    Serial.println("Atomizer: OFF");
  }

  else {

    //
    // Water Normal
    //
    digitalWrite(PUMP_PIN, LOW);

    //
    // If manual override window is active, keep atomizer forced ON and skip automatic conditions.
    //
    if (millis() < manualOverrideUntil) {
      systemStatus = "MANUAL OVERRIDE";
      digitalWrite(ATOMIZER_PIN, HIGH);
      atomizerState = true;
      Serial.println("\nMANUAL OVERRIDE ACTIVE (dashboard)");
    }
    //
    // ==================================================
    // CRITICAL CONDITIONS (AUTOMATIC BEHAVIOR)
    // ==================================================
    //
    else {

      //
      // CRITICAL HIGH AIR TEMP
      //
      if (airTemp > CRITICAL_AIR_TEMP) {

        systemStatus = "CRITICAL AIR TEMP";

        digitalWrite(ATOMIZER_PIN, HIGH);
        atomizerState = true;

        Serial.println("\nCRITICAL AIR TEMPERATURE!");
      }

      //
      // CRITICAL HIGH WATER TEMP
      //
      else if (waterTemp > CRITICAL_WATER_TEMP) {

        systemStatus = "CRITICAL WATER TEMP";

        digitalWrite(ATOMIZER_PIN, HIGH);
        atomizerState = true;

        Serial.println("\nCRITICAL WATER TEMPERATURE!");
      }

      //
      // EXTREME HUMIDITY
      //
      else if (humidity > CRITICAL_HUMIDITY) {

        systemStatus = "EXTREME HUMIDITY";

        digitalWrite(ATOMIZER_PIN, LOW);
        atomizerState = false;

        Serial.println("\nEXTREME HUMIDITY!");
      }

      //
      // LOW HUMIDITY
      //
      else if (humidity < LOW_HUMIDITY) {

        systemStatus = "LOW HUMIDITY";

        digitalWrite(ATOMIZER_PIN, HIGH);
        atomizerState = true;

        Serial.println("\nLOW HUMIDITY");
      }

      //
      // HIGH WATER TEMP
      //
      else if (waterTemp > HIGH_WATER_TEMP) {

        systemStatus = "HIGH WATER TEMP";

        digitalWrite(ATOMIZER_PIN, HIGH);
        atomizerState = true;

        Serial.println("\nHIGH WATER TEMPERATURE");
      }

      //
      // HIGH AIR TEMP
      //
      else if (airTemp > HIGH_AIR_TEMP) {

        systemStatus = "HIGH AIR TEMP";

        digitalWrite(ATOMIZER_PIN, HIGH);
        atomizerState = true;

        Serial.println("\nHIGH AIR TEMPERATURE");
      }

      //
      // HIGH HUMIDITY
      //
      else if (humidity > HIGH_HUMIDITY) {

        systemStatus = "HIGH HUMIDITY";

        digitalWrite(ATOMIZER_PIN, LOW);
        atomizerState = false;

        Serial.println("\nHIGH HUMIDITY");
      }

      //
      // LOW WATER TEMP
      //
      else if (waterTemp < LOW_WATER_TEMP) {

        systemStatus = "LOW WATER TEMP";

        digitalWrite(ATOMIZER_PIN, LOW);
        atomizerState = false;

        Serial.println("\nLOW WATER TEMPERATURE");
      }

      //
      // LOW AIR TEMP
      //
      else if (airTemp < LOW_AIR_TEMP) {

        systemStatus = "LOW AIR TEMP";

        digitalWrite(ATOMIZER_PIN, LOW);
        atomizerState = false;

        Serial.println("\nLOW AIR TEMPERATURE");
      }

      //
      // STABLE CONDITIONS
      //
      else {

        systemStatus = "STABLE";

        Serial.println("\nENVIRONMENT STABLE");
      }
    } // end automatic logic
  }

  //
  // ==================================================
  // SERIAL MONITOR OUTPUT
  // ==================================================
  //
  Serial.println("----------------------------------");

  Serial.print("Humidity: ");
  Serial.println(humidity);

  Serial.print("Air Temp: ");
  Serial.println(airTemp);

  Serial.print("Water Temp: ");
  Serial.println(waterTemp);

  Serial.print("TDS: ");
  Serial.print(tdsValue);
  Serial.println(" ppm");

  Serial.print("Atomizer State: ");
  Serial.println(atomizerState ? "ON" : "OFF");

  Serial.print("System Status: ");
  Serial.println(systemStatus);

//
  // ==================================================
  // LIVE DATA (FAST DASHBOARD)
  // ==================================================
  //
  FirebaseJson latest;

  latest.set("fields/humidity/doubleValue", humidity);
  latest.set("fields/airTemperature/doubleValue", airTemp);
  latest.set("fields/waterTemperature/doubleValue", waterTemp);
  latest.set("fields/tds/doubleValue", tdsValue);

  latest.set("fields/atomizerState/booleanValue", atomizerState);
  latest.set("fields/systemStatus/stringValue", systemStatus);
  latest.set("fields/waterLow/booleanValue", waterLow);

  latest.set("fields/timestamp/timestampValue", getISOTimeUTC());


  String latestPath = "sensor_readings/latest";
  if (Firebase.Firestore.patchDocument(
      &fbdo,
      PROJECT_ID,
      "",
      latestPath.c_str(),
      latest.raw(),
      "")
  ) {
    Serial.println("Firestore write success");
  } else {Serial.println(fbdo.errorReason());
  };

  //
  // ==================================================
  // HISTORICAL LOGS
  // (append-only)
  // ==================================================
  //
  logSnapshot(
    humidity,
    airTemp,
    waterTemp,
    tdsValue,
    atomizerState,
    waterLow,
    systemStatus
  );

  delay(5000);
}
