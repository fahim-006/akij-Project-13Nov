module.exports = (sequelize, DataTypes) => {
    const TestimonialDetail= sequelize.define("testimonialDetail", {
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

        testimonialDetail: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'testimonialDetail',
        },
        
        });
    return TestimonialDetail;
};
    