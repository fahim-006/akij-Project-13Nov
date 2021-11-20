module.exports = (sequelize, DataTypes) => {
    const DealerName = sequelize.define("dealerName", {
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

        nameofDealer: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "nameofDealer"
        }
        
        });
    return DealerName;
};
    