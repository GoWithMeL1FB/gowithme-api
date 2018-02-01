import Sequelize from 'sequelize';
import db from '../index';

module.exports = db.define('events', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
	name: {
    type: Sequelize.STRING
  },
	start: {
    type: Sequelize.TIME
  },
	end: {
    type: Sequelize.TIME
  },
	image_id: {
    type: Sequelize.TIME
  },
	category: {
    type: Sequelize.INTEGER
  }

});
//module.exports = events;