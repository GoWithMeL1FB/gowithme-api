import Sequelize from 'sequelize';
import Promise from 'bluebird';

import { success, error } from '../../lib/logger';

const db = new Sequelize(process.env.AWS_DATABASE, process.env.AWS_USER, process.env.AWS_PASSWORD, {
  host: process.env.AWS_HOST,
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