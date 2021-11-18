module.exports = (sequelize, DataTypes) => {
    const ServiceMachine= sequelize.define("serviceMachine", {
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

        serviceMachine: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'serviceMachine',
        },
        
        });
    return ServiceMachine;
};
    