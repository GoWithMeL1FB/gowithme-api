const Users = require('./users');
const categories = require('./categories');
//const dateCourse = require('./dateCourse');
//const events = require('./events');
const rating = require('./rating');
//const dataCourseEvents = require('./dateCourseEvents');
const comments = require('./comments');
const categoryJoin = require('./categoryJoin');
import { success, error } from '../../../lib/logger';
//const seedTables = require('./models/seed');

//assign dependencies
//try without asyc
Users
.sync()
.then( () => {
  categories.sync();
})
.then( () => {
  rating.sync();
  comments.sync();
  categoryJoin.sync();

});

module.exports = { Users, categories, rating, comments, categoryJoin };
//promisafiy sync tables
// const syncTables = async () => {
//   try {
//     await users.sync();
//    // await dataCourse.sync();
//     await categories.sync();
//    // await events.sync();
//     await rating.sync();
//    // await dataCourseEvents.sync();
//     await comments.sync();
//     await categoryJoin.sync();
//     await seedTables();
//     success('successfully created users table ');
//   } catch (err) {
//     error('error creating database ', err);
//   }
// };
// syncTables()
