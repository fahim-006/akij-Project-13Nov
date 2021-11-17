module.exports = (sequelize, DataTypes) => {
    const DealerDistrict = sequelize.define("dealerDistrict", {
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

        districtofDealers: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "districtofDealers"
        }
        
        });
    return DealerDistrict;
};
    