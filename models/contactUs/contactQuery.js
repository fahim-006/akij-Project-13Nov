module.exports = (sequelize, DataTypes) => {
    const QueryContact= sequelize.define("queryContact", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },

        idContactPhone: {
            type: DataTypes.BIGINT,
            allowNull: false,
            field: 'idContactPhone',
        },
        
        queryContact: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'queryContact',
        },
        
        });
    return QueryContact;
};
    