module.exports = (sequelize, DataTypes) => {
    const ServiceType = sequelize.define("serviceType", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },

        serviceType: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'serviceType',
        },
        
        });
    return ServiceType;
};
    