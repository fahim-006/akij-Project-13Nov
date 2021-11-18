module.exports = (sequelize, DataTypes) => {
    const DealerDistrict = sequelize.define("dealerDistrict", {
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

        districtofDealer: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "districtofDealer"
        }
        
        });
    return DealerDistrict;
};
    