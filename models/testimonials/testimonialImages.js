module.exports = (sequelize, DataTypes) => {
    const TestimonialImage= sequelize.define("testimonialImage", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },

        idofTestimonialName: {
            type: DataTypes.BIGINT,
            allowNull: false,
            field: 'idofTestimonialName',
        },

        testimonialImage: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'testimonialImage',
        },
        
        });
    return TestimonialImage;
};
    