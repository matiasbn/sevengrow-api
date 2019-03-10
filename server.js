require('dotenv').config({ path: '.env' });
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Configuración global de rutas
app.use(require('./routes/index'));

mongoose.connect(process.env.MONGO_URL, (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});

app.listen(process.env.API_PORT, () => {
    console.log('Escuchando puerto: ', process.env.API_PORT);
});