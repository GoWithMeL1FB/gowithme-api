const Sequelize = require('sequelize');

// import Promise from 'bluebird';
const Promise = require('bluebird');
// const seedTables = require('./models/seed');

const db = new Sequelize('GoWithMe', 'root', '', {
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
    console.log('Connected to database GoWithMe!');

  })
  .catch( (err) => {
    console.log('Attempt to start database failed: ', err);
  });

Promise.promisifyAll(db);
module.exports = db;