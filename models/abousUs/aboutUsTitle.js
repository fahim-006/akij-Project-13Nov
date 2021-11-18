module.exports = (sequelize, DataTypes) => {
    const AboutUsTitle = sequelize.define("aboutUsTitle", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },

        aboutUsTitle: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'aboutUsTitle',
        },
        
        });
    return AboutUsTitle;
};
    