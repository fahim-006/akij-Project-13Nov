module.exports = (sequelize, DataTypes) => {
    const ClientImage = sequelize.define("clientImage", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },

        idOfClientMobile: {
            type: DataTypes.BIGINT,
            allowNull: false,
            field: 'idOfClientMobile',
        },
        
        clientImage: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'clientImage',
        },
        
        });
    return ClientImage;
};
    