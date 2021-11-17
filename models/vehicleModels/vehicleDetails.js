module.exports = (sequelize, DataTypes) => {
    const VehicleDetails = sequelize.define("vehicleDetails", {
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

        tagline: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'tagline',
        },

        details: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'details',
        },
        
        });
    return VehicleDetails;
};
    