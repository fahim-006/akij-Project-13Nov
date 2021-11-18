//  Author: Mashrur Hossain Khan
//  Create Date: 18/11/2021
//  Modify Date: 18/11/2021
//  Description: Vehicle Types controller file for rest api project for FamousAuto

// Model import
const models = require("../models");
const  VehicleTypes = models.vehicleTypes;

// Create VehicleTypes
exports.createVehicleTypes = async function (req, res) {
    let body = req.body;
    try {
        await VehicleTypes.create({
            typeofVehicle: body.typeofVehicle,            
        })
        .then((vehicle) => {
            res.status(200).json("Vehicle Type has created successfully");
         
        })
        .catch((err) => {
          return res.status(500).json("Something error there " + err);
        });
      //exports.authenticate(req, res);
    } catch (e) {
      return res.status(400).send({ error: e.message });
    }
  };

  // Get all getAllVehicleTypes
exports.getAllVehicleTypes = async function (req, res) {
  try {
    await VehicleTypes.findAll()
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

//edit VehicleTypes
module.exports.updateVehicleTypesById = async (req, res) => {
  const id = req.params.id;
  let body = req.body;
  //console.log(`req.body.email= ${req.body.email}`)
  try {
    await VehicleTypes.update( {    
        typeofVehicle: body.typeofVehicle,
    }, 
      {where : { id: id}}
      )
      .then((vehicles) => {
        res.status(200).json(vehicles);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
 
}

//get VehicleTypes by ID
module.exports.getVehicleTypesById = async (req, res) => {
  const id = req.params.id;
  //console.log(`req.body.email= ${req.body.email}`)
  try {
    await VehicleTypes.findByPk(id)
      .then((vehicles) => {
        res.status(200).json(vehicles);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
 
}

module.exports.deleteVehicleTypesById =  async(req, res) => {
  await VehicleTypes.destroy({
    where:{
      id: req.params.id
    }
  })
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}