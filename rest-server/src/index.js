import http from 'http';
import App from './config/express';
import { success } from '../src/lib/logger';
//import './redis/cron.js';
import './redis/cron'
import './redis/'

require('./config/database');

const app = App.express;

const server = http.createServer(app);
const PORT = 3030;

const serve = server.listen(PORT, (err) => {
  if (err) throw new Error;
  success('successfully connected to port:', PORT);
});

module.exports = { app: app, serve: server }