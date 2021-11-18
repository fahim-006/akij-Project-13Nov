module.exports = (sequelize, DataTypes) => {
    const JobSalary = sequelize.define("jobSalary", {
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

        jobSalary: {
            type: DataTypes.BIGINT,
            allowNull: false,
            field: 'jobSalary',
        },
        
        });
    return JobSalary;
};
    