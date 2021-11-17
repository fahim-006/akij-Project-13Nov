module.exports = (sequelize, DataTypes) => {
    const ClientTotal = sequelize.define("clientTotal", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },

        happyClient: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'happyClient',
        },
        
        totalClient: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'totalClient',
        },
        
        });
    return ClientTotal;
};
    