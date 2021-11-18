module.exports = (sequelize, DataTypes) => {
    const PopularPost= sequelize.define("popularPost", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },
        
        popularPost: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'popularPost',
        },
        
        });
    return PopularPost;
};
    