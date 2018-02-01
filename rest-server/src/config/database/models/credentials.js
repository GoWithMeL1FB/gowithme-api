import Sequelize from 'sequelize';
import db from '../index';

module.exports = db.define('credentials', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  hashedPassword: {
    type: Sequelize.STRING,
    unique: true,
  },
  user_ID: {
    type: Sequelize.INTEGER,
  }
})