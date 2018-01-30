const Sequelize = require('sequelize');


const db = new Sequelize('GoWithMe', 'gowithme', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  logging: false,
});

// const seedTables = require('./models/seed');

db.authenticate()
  .then( () =>{
    //run seed function
    // seedTables();
    console.log('Connected to database GoWithMe!');
  })
  .catch( (err) => {
    console.log('Attempt to start database failed: ', err);
  });

module.exports = db;