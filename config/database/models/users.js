const Sequelize = require('sequelize');
const db = require('../');

const Users = db.define('Users', {
    id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    userid: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    Bio: {
      type: Sequelize.STRING
    }
});

module.exports = Users;