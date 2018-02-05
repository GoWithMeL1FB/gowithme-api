import Sequelize from 'sequelize';
import Promise from 'bluebird';

import { success, error } from '../../lib/logger';

const db = new Sequelize('GoWithMe', 'gowithme', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  logging: false
});

db.authenticate()
  .then(() => {
    success('Connected to MySql database');
  })
  .catch( (err) => {
    error('Attempt to start database failed: ', err);
  });

Promise.promisifyAll(db);
export default db;