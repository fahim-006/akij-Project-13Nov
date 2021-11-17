const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//db vehicle Models starts
db.vehicleTypes = require("./vehicleModels/vehicleTypes")(sequelize, Sequelize);
db.vehicleName = require("./vehicleModels/vehicleName")(sequelize, Sequelize);
db.vehicleDetails = require("./vehicleModels/vehicleDetails")(sequelize, Sequelize);
//db vehicle Models ends


//db Dealers Models starts
db.dealerMobileNo = require("./Dealers/dealerMobile")(sequelize, Sequelize);
db.dealerDivison = require("./Dealers/dealerDivisions")(sequelize, Sequelize);
db.dealerName = require("./Dealers/dealerNames")(sequelize, Sequelize);
db.dealerAddress = require("./Dealers/dealerAddress")(sequelize, Sequelize);
db.dealerEmail = require("./Dealers/dealerEmails")(sequelize, Sequelize);
db.totalNmDealers = require("./Dealers/totalNmDealers")(sequelize, Sequelize);
db.districtofDealers = require("./Dealers/dealerDistrict")(sequelize, Sequelize);
//db Dealers Models ends

//db Clients Models starts
db.clientMobileNo = require("./clients/clientPhone")(sequelize, Sequelize);
db.clientName = require("./clients/clientNames")(sequelize, Sequelize);
db.clientAddress = require("./clients/clientAddress")(sequelize, Sequelize);
db.clientEmail = require("./clients/clientEmails")(sequelize, Sequelize);
//db Clients Models ends


module.exports = db;
