module.exports = (sequelize, DataTypes) => {
    const DealerDivision = sequelize.define("dealerDivision", {
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

        dealerDivision: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "dealerDivision"
        }
        
        });
    return DealerDivision;
};
    