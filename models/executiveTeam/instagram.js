module.exports = (sequelize, DataTypes) => {
    const ExecutiveTeamInstagram = sequelize.define("executiveTeamInstagram", {
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

        executiveTeamInstagram: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'executiveTeamInstagram',
        },
        
        });
    return ExecutiveTeamInstagram;
};
    