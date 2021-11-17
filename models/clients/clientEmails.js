module.exports = (sequelize, DataTypes) => {
    const ClientEmails = sequelize.define("clientEmails", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },

        idOfClientMobiles: {
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
    return ClientEmails;
};
    