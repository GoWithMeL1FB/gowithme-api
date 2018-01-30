const Users = require('./users');
const categories = require('./categories');
const dateCourse = require('./dateCourse');
const events = require('./events');
const rating = require('./rating');
const dataCourseEvents = require('./dateCourseEvents');
const comments = require('./comments');
const categoryJoin = require('./categoryJoin');
import { success, error } from '../../../lib/logger';
//const seedTables = require('./models/seed');

//assign dependencies
//try without asyc
Users.sync()
  .then( () => {
    success('USERS table synced')
    categories.sync()
      .then(() => {
        success('CATEGORIES table synced')
        comments.sync()
          .then(() => {
            success('COMMENTS table synced')
            categoryJoin.sync()
              .then(() => {
                success('CATEGORYJOIN table synced')
                dateCourse.sync()
                  .then(() => {
                    success('DATECOURSE table synced')
                    events.sync()
                      .then(() => {
                        success('EVENTS table synced')
                        rating.sync()
                          .then(() => {
                            success('RATING table synced')
                            dataCourseEvents.sync()
                              .then(() => {
                                success('DC-EVENTS table synced')
                              })
                              .catch(() => {
                                error('dateCourseEvents table failed to sync')
                              })
                          })
                          .catch(() => {
                            error('rating table failed to sync')
                          })
                      })
                      .catch(() => {
                        error('events table failed to sync')
                      })
                  })
                  .catch(() => {
                    error('dateCourse table failed to sync')
                  })
              })
              .catch(() => {
                error('categoryJoin table failed to sync')
              })
          })
          .catch(() => {
            error('comments table failed to sync')
          })
      })
      .catch(() => {
        error('categories table failed to sync')
      })
  })
  .catch((err) => {
    error('failed to syn users table: ', err)}
  )

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
