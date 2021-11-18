module.exports = (sequelize, DataTypes) => {
    const DealerTotalNum = sequelize.define("dealerTotalNum", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },

        totalDealer: {
            type: DataTypes.BIGINT,
            allowNull: false,
            field: "totalDealer"
        }
        
        });
    return DealerTotalNum;
};
    