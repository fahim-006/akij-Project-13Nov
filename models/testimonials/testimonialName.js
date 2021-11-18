module.exports = (sequelize, DataTypes) => {
    const TestimonialName= sequelize.define("testimonialName", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },

        testimonialName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'testimonialName',
        },
        
        });
    return TestimonialName;
};
    