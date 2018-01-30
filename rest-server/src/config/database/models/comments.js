const Sequelize = require('sequelize');
const db = require('../');

module.exports = db.define( 'comments', {
	id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
	user_id: {
    type: Sequelize.INTEGER
  },
	text: {
    type: Sequelize.STRING
  },
	dateCourse_id: {
    type: Sequelize.INTEGER
  }

});

