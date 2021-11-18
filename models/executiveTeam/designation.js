module.exports = (sequelize, DataTypes) => {
    const ExecutiveTeamDesignation = sequelize.define("executiveTeamDesignation", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },

        executiveTeamDesignation: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'executiveTeamDesignation',
        },
        
        });
    return ExecutiveTeamDesignation;
};
    