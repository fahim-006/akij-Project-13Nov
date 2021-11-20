module.exports = (sequelize, DataTypes) => {
    const VehicleImage = sequelize.define("vehicleImage", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },

        idOfVehicleType:{
            type: DataTypes.BIGINT,
            allowNull: false,
            field: 'idOfVehicleType',
        },
        
        image0 : {
            type: DataTypes.STRING,
            field: 'image0',
        },

     
        });
    return VehicleImage;
};
    