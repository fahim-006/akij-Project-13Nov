module.exports = (sequelize, DataTypes) => {
    const JobVacancy = sequelize.define("jobVacancy", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },

        idOFJobTitle: {
            type: DataTypes.BIGINT,
            allowNull: false,
            field: 'idOFJobTitle',
        },

        jobVacancy: {
            type: DataTypes.BIGINT,
            allowNull: false,
            field: 'jobVacancy',
        },
        
        });
    return JobVacancy;
};
    