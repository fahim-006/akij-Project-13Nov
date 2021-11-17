module.exports = (sequelize, DataTypes) => {
    const ClientMobile = sequelize.define("clientMobile", {
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
    return ClientMobile;
};
    