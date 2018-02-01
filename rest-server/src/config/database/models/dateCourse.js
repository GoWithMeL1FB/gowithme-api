import Sequelize from 'sequelize';
import db from '../index';

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
    type: Sequelize.INTEGER,
    allowNull: false
  },
	rating: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
	coments: {
    type: Sequelize.TEXT,
    allowNull: false
  },
	creator: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
	rating_count: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  });


//module.exports = dateCourse;