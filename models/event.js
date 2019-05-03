const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define('event', {
    id: {
        field: 'EventId',
        type: Sequelize.INTEGER,
        primaryKey: true
    },

    title: {
        field: 'Title',
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: true,
                msg: 'Title is required'
            }
        }
    },

    address: {
        field: 'Address',
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: true,
                msg: 'Address is required'
            }
        }

    },

    city: {
        field: 'City',
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: true,
                msg: 'City is required'
            }
        }

    },

    state: {
        field: 'State',
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: true,
                msg: 'State is required'
            }
        }

    },

    zip_code: {
        field: 'ZipCode',
        type: Sequelize.INTEGER,
        validate: {
            isNumeric: {
                args: true,
                msg: 'Must be a number'
            },
            notEmpty: {
                args:true,
                msg: 'Zip Code is required'
            }

        }

    },

    date: {
        field: 'Date',
        type: Sequelize.DATEONLY,
        validate: {
            notEmpty: {
                args: true,
                msg: 'Date is required'
            }
        }
    },

    start_time: {
        field: 'StartTime',
        type: Sequelize.TIME,
        validate: {
            notEmpty: {
                args:true,
                msg: 'Start time is required'
            }
        }
    },

    end_time: {
        field: 'EndTime',
        type: Sequelize.TIME,
        validate: {
            notEmpty: {
                args:true,
                msg: 'End time is required'
            }
        }
    },

    // event_type_id: {
    //     field: 'EventTypeId',
    //     type: Sequelize.INTEGER,
    //     validate: {
    //         isNumeric: {
    //             args: true,
    //             msg: 'Must be a number'
                
    //         },
    //         notEmpty: {
    //             args:true,
    //             msg: 'Event Type is required'
    //         }

    //     }

    // },

    org_id: {
        field: 'OrganizationId',
        type: Sequelize.INTEGER,
        validate: {
            isNumeric: {
                args: true,
                msg: 'Must be a number'
                
            },
            notEmpty: {
                args:true,
                msg: 'Organization is required'
            }

        }

    },

    // user_id: {
    //     field: 'UserId',
    //     type: Sequelize.INTEGER,
    //     validate: {
    //         isNumeric: {
    //             args: true,
    //             msg: 'Must be a number'
                
    //         },
    //         notEmpty: {
    //             args:true,
    //             msg: 'User is required'
    //         }

    //     }

    // },
}, {
    timestamps: false,
});