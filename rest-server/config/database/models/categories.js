const Sequelize = require('sequelize');
const db = require('../');

module.exports = db.define( 'categories', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
	name: {
    type: Sequelize.varchar(30),
    allowNull: false
  }
});

//module.exports = categories;
