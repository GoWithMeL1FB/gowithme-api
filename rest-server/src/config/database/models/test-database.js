/* Here is want to set up CRUD tests for all database tables 
1. drop all data
2. create data with seed file
3. test seed data exists

*/

const chai = require('chai');

const Users = require('./users');
const categories = require('./categories');
const rating = require('./rating');
const dataCourseEvents = require('./dateCourseEvents');
const comments = require('./comments');
const categoryJoin = require('./categoryJoin');
import { success, error } from '../../../lib/logger';
console.log("database test page");


const assert = chai.assert;
/* sample test setup */
describe('Database checks', function() {
it('should add a Testy user', function(){
  //example assertion test
  const arr = [];
  assert.equal(arr.length, 0)
})

})
