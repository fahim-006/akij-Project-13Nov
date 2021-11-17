module.exports = (sequelize, DataTypes) => {
    const ClientAddress = sequelize.define("clientAddress", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },

        idOfClientMobiles: {
            type: DataTypes.BIGINT,
            allowNull: false,
            field: 'idOfClientMobiles',
        },
        
        Address: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'address',
        },
        
        });
    return ClientAddress;
};
    