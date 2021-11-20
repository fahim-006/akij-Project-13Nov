//  Author: Mashrur Hossain Khan
//  Create Date: 20/11/2021
//  Modify Date: 20/11/2021
//  Description: Vehicle Details controller file for rest api project for Akij Motors

// Model import
const models = require("../models");
const  VehicleDetail = models.vehicleDetail;

// Create VehicleTypes
exports.createVehicleDetail = async function (req, res) {
    let body = req.body;
    try {
        await VehicleDetail.create({
            idOfVehicleType: body.idOfVehicleType,
            tagline: body.tagline,
            detail: body.detail            
        })
        .then((vehicle) => {
            res.status(200).json("Vehicle Details has created successfully");
         
        })
        .catch((err) => {
          return res.status(500).json("Something error there " + err);
        });
      //exports.authenticate(req, res);
    } catch (e) {
      return res.status(400).send({ error: e.message });
    }
  };

// Get all getAllVehicleDetails
exports.getAllVehicleDetails = async function (req, res) {
  try {
    await VehicleDetail.findAll()
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


 