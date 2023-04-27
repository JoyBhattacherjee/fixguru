module.exports = (sequelize, Sequelize) => {
    const Customers = sequelize.define("customers", {
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        }
    });

    return Customers;
};