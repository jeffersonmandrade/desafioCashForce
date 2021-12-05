const express = require('express');
const cors = require("cors");
const propostasRoute  = require('../routes/propostaRoute')

const app = express();
app.use(express.json());
app.use(cors());
app.use('/propostas',propostasRoute)

module.exports = app;