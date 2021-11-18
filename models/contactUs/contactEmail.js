module.exports = (sequelize, DataTypes) => {
    const EmailContact= sequelize.define("emailContact", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },

        idContactPhone: {
            type: DataTypes.BIGINT,
            allowNull: false,
            field: 'idContactPhone',
        },
        
        emailContact: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'emailContact',
        },
        
        });
    return EmailContact;
};
    