module.exports = (sequelize, DataTypes) => {
    const BlogDetails= sequelize.define("blogDetails", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },

        idofBlogName: {
            type: DataTypes.BIGINT,
            allowNull: false,
            field: 'idofBlogName',
        },
        
        blogDetails: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'blogDetails',
        },
        
        });
    return BlogDetails;
};
    