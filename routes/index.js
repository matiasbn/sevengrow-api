const express = require('express');
const app = express();

app.use(require('./routes/sensors'));
app.use(require('./routes/control'));

module.exports = app;