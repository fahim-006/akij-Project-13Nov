module.exports = (sequelize, DataTypes) => {
    const DealerNames = sequelize.define("dealerNames", {
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

        nameofDealers: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "nameofDealers"
        }
        
        });
    return DealerNames;
};
    