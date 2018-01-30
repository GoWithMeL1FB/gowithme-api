const Sequelize = require("sequelize");
const db = require('../index');

module.exports = db.define('Users', {
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
    Bio: {
      type: Sequelize.STRING
    }
});

// module.exports = Users;