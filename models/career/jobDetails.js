module.exports = (sequelize, DataTypes) => {
    const JobDetail = sequelize.define("jobDetail", {
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

        jobDetail: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'jobDetail',
        },
        
        });
    return JobDetail;
};
    