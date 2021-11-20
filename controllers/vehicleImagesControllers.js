//  Author: Mashrur Hossain Khan
//  Create Date: 20/11/2021
//  Modify Date: 20/11/2021
//  Description: Vehicle Images controller file for rest api project for Akij Motors

// Model import
const models = require("../models");
const  VehicleImages = models.vehicleImage;

// Get all getAllVehicleImages
exports.getAllVehicleImages = async function (req, res) {
  try {
    await VehicleImages.findAll()
      .then((vehicles) => {
        res.status(200).json(vehicles);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};


 