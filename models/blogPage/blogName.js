module.exports = (sequelize, DataTypes) => {
    const BlogName= sequelize.define("blogName", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },
        
        blogName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'blogName',
        },
        
        });
    return BlogName;
};
    