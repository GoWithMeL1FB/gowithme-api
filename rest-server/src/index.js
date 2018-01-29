import http from 'http';

import App from './config/express';
import { success } from '../src/lib/logger';
import './config/database';

const app = App.express;

const server = http.createServer(app);
const PORT = process.env.PORT || 3050;

server.listen(PORT, (err) => {
  if (err) throw new Error;
  success('successfully connected to port:', PORT);
});