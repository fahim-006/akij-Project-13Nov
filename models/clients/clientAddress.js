module.exports = (sequelize, DataTypes) => {
    const AddressClient= sequelize.define("addressClient", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },

        idOfClientMobile: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'idOfClientMobile',
        },
        
        addressClient: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'addressClient',
        },
        
        });
    return AddressClient;
};
    