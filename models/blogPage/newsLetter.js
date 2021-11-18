module.exports = (sequelize, DataTypes) => {
    const Newsletter= sequelize.define("newsletter", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },
        
        newsletter: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'newsletter',
        },
        
        });
    return Newsletter;
};
    