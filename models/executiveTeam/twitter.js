module.exports = (sequelize, DataTypes) => {
    const ExecutiveTeamTwitter = sequelize.define("executiveTeamTwitter", {
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

        executiveTeamTwitter: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'executiveTeamTwitter',
        },
        
        });
    return ExecutiveTeamTwitter;
};
    