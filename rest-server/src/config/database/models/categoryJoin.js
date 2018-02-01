import Sequelize from 'sequelize';
import db from '../index';

module.exports = db.define( 'categoryJoin', {
	category: {
    type: Sequelize.STRING
  },
	mark_type: {
    type: Sequelize.INTEGER
  },
	event_id: {
    type: Sequelize.INTEGER
  }
});