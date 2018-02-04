import http from 'http';
// import mongoose from 'mongoose';
import App from './config/express';
import { success } from './lib/logger';
import './config/mongo';

const app = App.express;
const server = http.createServer(app);

const PORT = process.env.PORT || 3031;
server.listen(PORT, (err) => {
  if (err) throw new Error('failed to start evevnts server');
  success('succeessfully connected to server on port', PORT);
});
