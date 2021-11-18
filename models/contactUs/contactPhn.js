module.exports = (sequelize, DataTypes) => {
    const ContactPhone= sequelize.define("contactPhone", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },
        
        contactPhone: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'contactPhone',
        },
        
        });
    return ContactPhone;
};
    