module.exports = (sequelize, DataTypes) => {
    const VehicleExtraImage = sequelize.define("vehicleExtraImage", {
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
        
        image1 : {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'image1',
        },

        image2 : {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'image2',
        }

        });
    return VehicleExtraImage;
};
    