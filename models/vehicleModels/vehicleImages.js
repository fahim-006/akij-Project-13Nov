module.exports = (sequelize, DataTypes) => {
    const VehicleImages = sequelize.define("vehicleImages", {
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
            allowNull: false,
            field: 'image0',
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
    return VehicleImages;
};
    