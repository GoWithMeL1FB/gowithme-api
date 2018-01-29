const Sequelize = require('sequelize');
const db = require('../');

module.exports = db.define('Users', {
    id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    userid: {
      type: Sequelize.INTEGER
    },
    password: {
      type: Sequelize.STRING
    },
    Bio: {
      type: Sequelize.STRING
    }
});

//module.exports = Users;