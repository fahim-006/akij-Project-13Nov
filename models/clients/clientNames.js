module.exports = (sequelize, DataTypes) => {
    const ClientName = sequelize.define("clientName", {
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
        
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'Name',
        },
        
        });
    return ClientName;
};
    