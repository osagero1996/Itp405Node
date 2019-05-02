const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define('organization', {
    id: {
        field: 'OrganizationId',
        type: Sequelize.INTEGER,
        primaryKey: true
    },

    name: {
        field: 'Name',
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: true,
                msg: 'Name is required'
            }
        }
    }
}, {
    timestamps: false,
});