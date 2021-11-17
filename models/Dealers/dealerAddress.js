module.exports = (sequelize, DataTypes) => {
    const DealerAddress = sequelize.define("dealerAddress", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },

        idOfDealerMobiles: {
            type: DataTypes.BIGINT,
            allowNull: false,
            field: 'idOfDealerMobiles',
        },

        addressofDealers: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "addressofDealers"
        }
        
        });
    return DealerAddress;
};
    