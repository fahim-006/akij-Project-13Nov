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
db.vehicleImage = require("./vehicleModels/vehicleImages")(sequelize, Sequelize);
db.vehicleExtraImage = require("./vehicleModels/vehicleExtraImage")(sequelize, Sequelize);
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
db.clientImage = require("./clients/clientImages")(sequelize, Sequelize);
//db Clients Models ends


//db Awards Starts
db.awardTotal = require("./awards/totalAwards")(sequelize, Sequelize);
db.awardDetails = require("./awards/awardDetails")(sequelize, Sequelize);
//db Awards ends

//db Services Starts
db.serviceTypes = require("./services/serviceTypes")(sequelize, Sequelize);
db.serviceNames = require("./services/serviceName")(sequelize, Sequelize);
db.serviceDetails = require("./services/serviceDetails")(sequelize, Sequelize);
db.imageServices = require("./services/imageServices")(sequelize, Sequelize);
db.serviceMachines = require("./services/serviceMachines")(sequelize, Sequelize);
//db Services ends

//db Testimonials Starts
db.testimonialName = require("./testimonials/testimonialName")(sequelize, Sequelize);
db.testimonialDesignations = require("./testimonials/testimonialDesignations")(sequelize, Sequelize);
db.testimonialImages = require("./testimonials/testimonialImages")(sequelize, Sequelize);
db.testimonialDetails = require("./testimonials/testimonialDetails")(sequelize, Sequelize);
//db Testimonials ends

//db Contact us Starts
db.contactPhn = require("./contactUs/contactPhn")(sequelize, Sequelize);
db.addressContact = require("./contactUs/addressContact")(sequelize, Sequelize);
db.emailContact = require("./contactUs/contactEmail")(sequelize, Sequelize);
db.queryContact = require("./contactUs/contactQuery")(sequelize, Sequelize);
//db Contact us ends

//db Blog Starts
db.blogName = require("./blogPage/blogName")(sequelize, Sequelize);
db.newsLetter = require("./blogPage/newsLetter")(sequelize, Sequelize);
db.popularPost = require("./blogPage/popularPost")(sequelize, Sequelize);
db.blogDetails = require("./blogPage/blogDetails")(sequelize, Sequelize);
//db Blog ends

//db About Us Starts
db.aboutUsTitle = require("./abousUs/aboutUsTitle")(sequelize, Sequelize);
db.aboutUsDetails = require("./abousUs/aboutUsDetails")(sequelize, Sequelize);
//db About Us ends

//db executive Team Starts
db.executiveTeamDesignation = require("./executiveTeam/designation")(sequelize, Sequelize);
db.executiveTeamName = require("./executiveTeam/name")(sequelize, Sequelize);
db.executiveTeamFacebook = require("./executiveTeam/facebookAddress")(sequelize, Sequelize);
db.executiveTeamInstagram = require("./executiveTeam/instagram")(sequelize, Sequelize);
db.executiveTeamTwitter = require("./executiveTeam/twitter")(sequelize, Sequelize);
//db executive Team ends

//db Career Starts
db.jobTitle = require("./career/jobtitle")(sequelize, Sequelize);
db.jobDetail = require("./career/jobDetails")(sequelize, Sequelize);
db.jobVacancy = require("./career/vacancy")(sequelize, Sequelize);
db.jobSalary = require("./career/jobSalary")(sequelize, Sequelize);
//db Career 

module.exports = db;
