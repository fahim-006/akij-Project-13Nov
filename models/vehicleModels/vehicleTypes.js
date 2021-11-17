module.exports = (sequelize, DataTypes) => {
    const VehicleTypes = sequelize.define("vehicleTypes", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },

        typeofVehicle: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'typeofVehicle',
        },
        
        });
    return VehicleTypes;
};
    