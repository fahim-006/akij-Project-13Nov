module.exports = (sequelize, DataTypes) => {
    const DealerEmail = sequelize.define("dealerEmail", {
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

        emailofDealer: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "emailofDealer"
        }
        
        });
    return DealerEmail;
};
    