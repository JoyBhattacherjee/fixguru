const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Contests = sequelize.define("contests", {
        name: {
            type: DataTypes.STRING
        },
        startDate: {
            type: DataTypes.DATE
        },
        endDate: {
            type: DataTypes.DATE
        }
    });

    return Contests;
};