const Sequelize = require("sequelize");
const db = require('../index');

module.exports = db.define('rating', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
	user_id: {
    type: Sequelize.INTEGER,
  },
	dateCourse: {
    type: Sequelize.INTEGER
  },
	rating: {
    type: Sequelize.INTEGER
  }
});