//  Author: Mashrur Hossain Khan
//  Create Date: 18/11/2021
//  Modify Date: 18/11/2021
//  Description: Main API file for rest api project for Akij Motors

// Library imports
var express = require("express");
var router = express.Router();

//Import Akij Motors controller starts
const vehicleTypesController = require("../controllers/vehicleTypesController");
const vehicleNameController = require("../controllers/vehicleNameController");
const vehicleDetailController = require("../controllers/vehicleDetailController");
const vehicleImageController = require("../controllers/vehicleImagesControllers");
//Import Akij Motors controller ends

// Entery point of the Application
router.get("/", (req, res) => res.send("Hello World"));

//vehicle type APIs starts
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
//vehicle type APIs ends

//vehicle Name APIs starts
router.post(
      "/api/create/vehiclename",
      vehicleNameController.createVehicleNames
  )

router.get(
      "/api/getall/vehiclename",
      vehicleNameController.getAllVehicleNames
  )
  
//vehicle Name APIs ends

//vehicle Details APIs starts
router.post(
      "/api/create/vehicledetail",
      vehicleDetailController.createVehicleDetail
  )

router.get(
      "/api/getall/vehicledetail",
      vehicleDetailController.getAllVehicleDetails
  )
//vehicle Details APIs ends


//vehicle Images APIs starts
router.get(
      "/api/getall/vehicleimage",
      vehicleImageController.getAllVehicleImages
  )
//vehicle Images APIs ends


module.exports = router;
