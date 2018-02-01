import Sequelize from 'sequelize';
import db from '../index';

module.exports = db.define( 'categories', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
	name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

//module.exports = categories;
