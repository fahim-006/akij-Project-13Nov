const express = require('express')
const app = express();
const cors = require('cors');
const api = require('./api')
app.use(express.json()); //post method json data handle
app.use(cors());

const vehicleTypesAPI = require ('./api')

app.use('/api', vehicleTypesAPI);
app.use(api);

module.exports = app;
