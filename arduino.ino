void setup() {
  Serial.begin(9600);
  pinMode(13, OUTPUT); // LED en pin 13
}

void loop() {
  if (Serial.available() > 0) {
    char valor = Serial.read();
    // Format : {Trafic light 1}--{Trafic light 2}
    if (valor == '1') {
      digitalWrite(13, HIGH); // Enciende LED
    } else if (valor == '0') {
      digitalWrite(13, LOW);  // Apaga LED
    }
  }
}
