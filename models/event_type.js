const sequelize = require('../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define('event_type', {
    id: {
        field: 'EventTypeId',
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
    timestamps:false
});