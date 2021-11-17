module.exports = (sequelize, DataTypes) => {
    const DealerMobile = sequelize.define("dealerMobile", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },

        mobileNum: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'mobileNum',
        },
        
        });
    return DealerMobile;
};
    