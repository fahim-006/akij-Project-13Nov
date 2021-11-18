module.exports = (sequelize, DataTypes) => {
    const ServiceImage= sequelize.define("serviceImage", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },

        idofServiceType: {
            type: DataTypes.BIGINT,
            allowNull: false,
            field: 'idofServiceType',
        },

        serviceImage: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'serviceImage',
        },
        
        });
    return ServiceImage;
};
    