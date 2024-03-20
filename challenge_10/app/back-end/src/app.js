const express = require('express');
const cors = require('cors');
const routes = require('./routes/');
const errorHandler = require('./middlewares/error');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/user', routes);
app.use(errorHandler);

module.exports = app;