import users from './users';
import categories from './categories';
import dateCourse from './dateCourse';
import events from './events';
import rating from './rating';
import dateCourseEvents from './dateCourseEvents';
import comments from './comments';
import categoryJoin from './categoryJoin';
import { success, error, warning } from '../../../lib/logger';
//const seedTables = require('./models/seed');

//assign dependencies
//try without asyc
// Users.sync()
//   .then( () => {
//     categories.sync()
//       .then(() => {
//         comments.sync()
//           .then(() => {
//             categoryJoin.sync()
//               .then(() => {
//                 dateCourse.sync()
//                   .then(() => {
//                     events.sync()
//                       .then(() => {
//                         rating.sync()
//                           .then(() => {
//                             dateCourseEvents.sync()
//                               .then(() => {
//                                 success('tables - all synced')
//                               })
//                               .catch(() => {
//                                 error('dateCourseEvents table failed to sync')
//                               })
//                           })
//                           .catch(() => {
//                             error('rating table failed to sync')
//                           })
//                       })
//                       .catch(() => {
//                         error('events table failed to sync')
//                       })
//                   })
//                   .catch(() => {
//                     error('dateCourse table failed to sync')
//                   })
//               })
//               .catch(() => {
//                 error('categoryJoin table failed to sync')
//               })
//           })
//           .catch(() => {
//             error('comments table failed to sync')
//           })
//       })
//       .catch(() => {
//         error('categories table failed to sync')
//       })
//   })
//   .catch((err) => {
//     error('failed to syn users table: ', err)}
//   )

// module.exports = { users, categories, rating, comments, categoryJoin };
//promisafiy sync tables
const syncTables = async () => {
  try {
    await users.sync();
   // await dataCourse.sync();
    await categories.sync();
   // await events.sync();
    await rating.sync();
   // await dataCourseEvents.sync();
    await comments.sync();
    await categoryJoin.sync();
    // await seedTables();
    success('successfully created users table ');
  } catch (err) {
    error('error creating database ', err);
  }
};
syncTables()
