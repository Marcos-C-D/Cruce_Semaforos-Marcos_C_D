const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const express = require('express');
const app = express();

const puerto = new SerialPort({ path: 'COM7', baudRate: 9600 });

app.use(express.text());
app.post('/checkbox', (req, res) => {
  puerto.write(req.body + '\n'); // Envía con salto de línea
  res.send('OK');
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
