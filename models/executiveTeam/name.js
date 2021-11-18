module.exports = (sequelize, DataTypes) => {
    const ExecutiveTeamName = sequelize.define("executiveTeamName", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },

        idofExecutiveTeamDesignation: {
            type: DataTypes.BIGINT,
            allowNull: false,
            field: 'idofExecutiveTeamDesignation',
        },

        executiveTeamName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'executiveTeamName',
        },
        
        });
    return ExecutiveTeamName;
};
    