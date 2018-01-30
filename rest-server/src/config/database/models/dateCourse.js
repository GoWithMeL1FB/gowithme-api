const Sequelize = require('sequelize');
const db = require('../');

module.exports = db.define('dateCourse', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
	begin: {
    type: Sequelize.TIME,
    allowNull: false
  },
	end: {
    type: Sequelize.TIME,
    allowNull: false
  },
	people: {
    type: Sequelize.smallint,
    allowNull: false
  },
	rating: {
    type: Sequelize.tinyint,
    allowNull: false
  },
	coments: {
    type: Sequelize.TEXT,
    allowNull: false
  },
	creator: {
    type: Sequelize.tinyint,
    allowNull: false
  },
	rating_count: {
    type: Sequelize.tinyint,
    allowNull: false
  },

  });


//module.exports = dateCourse;