const Sequelize = require('sequelize');
const db = require('../');

module.exports = db.define( 'DataCourseEvents', {
	dataCourse_id: {
    type: Sequelize.INTEGER
  },
	event_id: {
    type: Sequelize.INTEGER
  }
});


