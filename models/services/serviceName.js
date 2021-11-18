module.exports = (sequelize, DataTypes) => {
    const ServiceName= sequelize.define("serviceName", {
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

        serviceName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'serviceName',
        },
        
        });
    return ServiceName;
};
    