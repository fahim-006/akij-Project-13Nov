module.exports = (sequelize, DataTypes) => {
    const VehicleDetail = sequelize.define("vehicleDetail", {
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

        detail: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'detail',
        },
        
        });
    return VehicleDetail;
};
    