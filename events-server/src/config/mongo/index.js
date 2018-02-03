import { success } from '../../lib/logger';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/gowithme');
// what does this do??
mongoose.Promise = global.Promise;
const mongoDB = mongoose.connection;

mongoDB.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoDB.once('connected', () => {
  success('Connected to mongoose database');
});
