module.exports = (sequelize, DataTypes) => {
    const AboutUsDetails = sequelize.define("aboutUsDetails", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },

        idOfAboutUsTile: {
            type: DataTypes.BIGINT,
            allowNull: false,
            field: 'idOfAboutUsTile',
        },

        aboutUsDetails: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'aboutUsDetails',
        },
        
        });
    return AboutUsDetails;
};
    