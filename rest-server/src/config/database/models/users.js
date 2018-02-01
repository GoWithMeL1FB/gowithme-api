import Sequelize from 'sequelize';
import db from '../index';

module.exports = db.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: Sequelize.STRING
  },
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  birthday: {
    type: Sequelize.INTEGER
  },
  bio: {
    type: Sequelize.STRING
  }
});

// module.exports = Users;