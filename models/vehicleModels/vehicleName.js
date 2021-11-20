module.exports = (sequelize, DataTypes) => {
    const VehicleName = sequelize.define("vehicleName", {
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

        VehicleName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            field: 'VehicleName',
        },
        
        });
    return VehicleName;
};
    