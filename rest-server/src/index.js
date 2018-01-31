import http from 'http';

import App from './config/express';
import { success } from '../src/lib/logger';
import  './config/database';
const db = require('./config/database/models');
//const seedTables = require("./config/database/models/seed");

const app = App.express;

const server = http.createServer(app);
const PORT = process.env.PORT;

server.listen(PORT, (err) => {
  if (err) throw new Error;
  success('successfully connected to port:', PORT);
});