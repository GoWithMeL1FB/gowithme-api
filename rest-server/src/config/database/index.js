import Sequelize from 'sequelize';
import { success, error } from '../../lib/logger';

// import Promise from 'bluebird';
import Promise from 'bluebird';
// const seedTables = require('./models/seed');

const db = new Sequelize('GoWithMe', 'gowithme', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  logging: false
});

// const seedTables = require('./models/seed');

db.authenticate()
  .then(() =>{
    //run seed function
    // seedTables();
    success('Connected to database GoWithMe!');

  })
  .catch( (err) => {
    error('Attempt to start database failed: ', err);
  });

Promise.promisifyAll(db);
module.exports = db;