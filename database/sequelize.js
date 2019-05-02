const Sequelize = require('sequelize');
// module.exports = new Sequelize('serveio/database/sqlite:database.sqlite');

module.exports = new Sequelize('sqlite:database.sqlite');