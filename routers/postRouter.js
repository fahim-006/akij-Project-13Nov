const router = require('express').Router();
const upload = require('../middlewares/multerVehicleTypeMainImage');
const multer = require('multer');
const db = require("../models");
const vehicleTypePhoto = db.vehicleImage;
const vehicleTypeExtraPhoto = db.vehicleExtraImage;

//POST in vehicleTypePhoto
router.route('/vehicletypephoto')
    .post(async (req, res) => {
        upload(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                    console.log(err)
            } else if (err) {
                console.log(err)
            }
            console.log(`File is ${req.file}`);
            console.log((req.body)); //req body te ja ja asbe
            // image, caption
            //inserting in DB
            // Validate request
            // Create data for photo
            const photoData = {
                idOfVehicleType : req.body.idOfVehicleType,
                image0: req.file.path
            };
          
            // Save in the database
            vehicleTypePhoto.create(photoData)
              .then(data => {
                res.send(data);
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while creating the Tutorial."
                });
              });
             //inserting in DB ends
        })
    })


//POST in vehicleTypePhoto
router.route('/vehicletypeextraphoto')
    .post(async (req, res) => {
        upload(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                    console.log(err)
            } else if (err) {
                console.log(err)
            }
            console.log(`File is ${req.file}`);
            console.log((req.body)); //req body te ja ja asbe
            // image, caption
            //inserting in DB
      
                // Validate request
              
                // Create data for photo
                const photoData = {
                    idOfVehicleType : req.body.idOfVehicleType,
                    image1: req.file.path,
                    image2: req.file.path
                };
              
                // Save in the database
                vehicleTypeExtraPhoto.create(photoData)
                  .then(data => {
                    res.send(data);
                  })
                  .catch(err => {
                    res.status(500).send({
                      message:
                        err.message || "Some error occurred while creating the Tutorial."
                    });
                  });
             
            //inserting in DB ends
        })
    })

module.exports = router;