const app = require('./app')
const cors = require('cors')
const express = require('express');

var corsOptions = {
  origin: "http://localhost:8081"
};
// Using all API

// Headers For API Accessing
app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

const db = require("./models");
db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Akij motors application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
