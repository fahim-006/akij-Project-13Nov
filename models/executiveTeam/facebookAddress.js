module.exports = (sequelize, DataTypes) => {
    const ExecutiveTeamFacebook = sequelize.define("executiveTeamFacebook", {
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

        executiveTeamFacebook: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'executiveTeamFacebook',
        },
        
        });
    return ExecutiveTeamFacebook;
};
    