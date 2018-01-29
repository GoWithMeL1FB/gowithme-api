require('dotenv').config();

import { success, error } from '../../lib/logger';

const Sequelize = require('sequelize');
const db = new Sequelize('GoWithMe', 'root', '', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
});

db.authenticate()
.then( ()=>{
  //run seed function
  console.log('Connected to database GoWithMe!');
})
.catch( (err) => {
  console.log('Attempt to start database failed: ', err);
} );

module.exports = db;