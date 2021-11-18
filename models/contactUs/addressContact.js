module.exports = (sequelize, DataTypes) => {
    const AddressContact= sequelize.define("addressContact", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },

        idContactPhone: {
            type: DataTypes.BIGINT,
            allowNull: false,
            field: 'idContactPhone',
        },
        
        addressContact: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'addressContact',
        },
        
        });
    return AddressContact;
};
    