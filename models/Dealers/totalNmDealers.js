module.exports = (sequelize, DataTypes) => {
    const DealerTotalNum = sequelize.define("dealerTotalNum", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },

        totalDealers: {
            type: DataTypes.BIGINT,
            allowNull: false,
            field: "totalDealers"
        }
        
        });
    return DealerTotalNum;
};
    