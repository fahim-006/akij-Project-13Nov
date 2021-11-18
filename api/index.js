//  Author: Mashrur Hossain Khan
//  Create Date: 18/11/2021
//  Modify Date: 18/11/2021
//  Description: Main API file for rest api project for Akij Motors

// Library imports
var express = require("express");
var router = express.Router();

//Import Akij Motors controller
const vehicleTypesController = require("../controllers/vehicleTypesController");

// Entery point of the Application
router.get("/", (req, res) => res.send("Hello World"));


//vehicletype APIs
router.post(
    "/api/create/vehicletype",
    vehicleTypesController.createVehicleTypes
)
  
router.get(
    "/api/getall/vehicletype",
    vehicleTypesController.getAllVehicleTypes
)
  
router.put(
      "/api/update/vehicletype/:id",
      vehicleTypesController.updateVehicleTypesById
)
  
router.get(
      "/api/vehicletype/:id",
      vehicleTypesController.getVehicleTypesById
)
  
router.delete(
      "/api/vehicletype/:id",
      vehicleTypesController.deleteVehicleTypesById
)

module.exports = router;
