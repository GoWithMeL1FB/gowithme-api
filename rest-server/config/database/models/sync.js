const users = require('./users');
const categories = require('./categories');
const dateCourse = require('./dateCourse');
const events = require('./events');
const rating = require('./rating');
const dataCourseEvents = require('./dateCourseEvents');
const comments = require('./comments');
const categoryJoin = require('./categoryJoin');

//assign dependencies


const syncTables = async () => {
  try {
    await users.sync();
    await dataCourse.sync();
    await categories.sync();
    await events.sync();
    await rating.sync();
    await dataCourseEvents.sync();
    await comments.sync();
    await categoryJoin.sync();
    success('successfully created users table ');
  } catch (err) {
    error('error creating database ', err);
  }
};

module.exports = syncTables