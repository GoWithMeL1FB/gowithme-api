import mongoose from 'mongoose';
import { success } from '../../lib/logger';

mongoose.connect('mongodb://localhost:27017/gowithme');
mongoose.Promise = global.Promise;
const mongoDB = mongoose.connection;

mongoDB.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoDB.once('connected', () => {
  success('Connected to mongoose database');
});
