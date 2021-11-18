module.exports = (sequelize, DataTypes) => {
    const TestimonialDesignation= sequelize.define("testimonialDesignation", {
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

        testimonialDesignation: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'testimonialDesignation',
        },
        
        });
    return TestimonialDesignation;
};
    