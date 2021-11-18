module.exports = (sequelize, DataTypes) => {
    const ServiceDetail= sequelize.define("serviceDetail", {
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

        serviceDetail: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'serviceDetail',
        },
        
        });
    return ServiceDetail;
};
    