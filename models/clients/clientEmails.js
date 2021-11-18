module.exports = (sequelize, DataTypes) => {
    const ClientEmail = sequelize.define("clientEmail", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },

        idOfClientMobile: {
            type: DataTypes.BIGINT,
            allowNull: false,
            field: 'idOfClientMobiles',
        },
        
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'Email',
        },
        
        });
    return ClientEmail;
};
    