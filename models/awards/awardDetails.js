module.exports = (sequelize, DataTypes) => {
    const AwardDetail = sequelize.define("awardDetail", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },

        awardName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'awardName',
        },
        
        awardDetail: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'awardDetail',
        },
        
        });
    return AwardDetail;
};
    