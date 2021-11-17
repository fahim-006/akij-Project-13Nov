module.exports = (sequelize, DataTypes) => {
    const DealerEmails = sequelize.define("dealerEmail", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },

        idOfDealerMobiles: {
            type: DataTypes.BIGINT,
            allowNull: false,
            field: 'idOfDealerMobiles',
        },

        emailofDealers: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "emailofDealers"
        }
        
        });
    return DealerEmails;
};
    