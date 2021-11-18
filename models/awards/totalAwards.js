module.exports = (sequelize, DataTypes) => {
    const TotalAward = sequelize.define("totalAward", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },

        totalAward: {
            type: DataTypes.BIGINT,
            allowNull: false,
            field: 'totalAward',
        },
        
        });
    return TotalAward;
};
    