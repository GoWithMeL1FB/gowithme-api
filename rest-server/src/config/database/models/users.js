const Sequelize = require("sequelize");
const db = require('../index');

module.export = db.define('Users', {
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

// module.exports = Users;