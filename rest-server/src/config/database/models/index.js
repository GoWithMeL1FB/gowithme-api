import users from './users';
import credentials from './credentials';
import categories from './categories';
import dateCourse from './dateCourse';
import events from './events';
import rating from './rating';
import dateCourseEvents from './dateCourseEvents';
import comments from './comments';
import categoryJoin from './categoryJoin';
import { success, error, warning } from '../../../lib/logger';
//const seedTables = require('./models/seed');

//promisafiy sync tables
// const syncTables = async () => {
//   try {
//     // await users.sync()
//     // await credentials.sync();
//     // await dataCourse.sync();
//     // await categories.sync();
//     // await events.sync();
//     // await rating.sync();
//     // await dataCourseEvents.sync();
//     // await comments.sync();
//     // await categoryJoin.sync();
//     // await seedTables();
//     success('users / credential tables synced');
//   } catch (err) {
//     error('error creating database ', err);
//   }
// };
// syncTables();
