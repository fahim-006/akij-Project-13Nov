module.exports = (sequelize, DataTypes) => {
    const JobTitle = sequelize.define("jobTitle", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },

        jobTitle: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'jobTitle',
        },
        
        });
    return JobTitle;
};
    