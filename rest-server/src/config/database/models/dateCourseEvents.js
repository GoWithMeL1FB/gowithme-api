import Sequelize from 'sequelize';
import db from '../index';

module.exports = db.define( 'DataCourseEvents', {
	dataCourse_id: {
    type: Sequelize.INTEGER
  },
	event_id: {
    type: Sequelize.INTEGER
  }
});


