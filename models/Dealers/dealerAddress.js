module.exports = (sequelize, DataTypes) => {
    const AddressDealer = sequelize.define("addressDealer", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },

        idOfDealerMobile: {
            type: DataTypes.BIGINT,
            allowNull: false,
            field: 'idOfDealerMobile',
        },

        addressofDealer: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "addressofDealer"
        }
        
        });
    return AddressDealer;
};
    