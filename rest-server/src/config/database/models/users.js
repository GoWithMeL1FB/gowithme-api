const Sequelize = require("sequelize");
const db = require('../index');

module.export = db.define('Users', {
    id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    email: {
      type: Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    birthday: {
      type: Sequelize.INTEGER
    },
    Bio: {
      type: Sequelize.STRING
    }
});

// module.exports = Users;