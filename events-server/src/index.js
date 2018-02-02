import http from 'http';
import SocketIO from 'socket.io';
// import { each } from 'lodash';

// import Rooms from './rooms';
// import clientEvents from './clientEvents';
import { success } from './lib/logger';

const server = http.createServer();
const io = SocketIO(server);
// const events = new Events(io);

io.on('connection', () => {
  console.log('hello');
});

const PORT = process.env.PORT || 3031;
server.listen(PORT, () => success(`event server listening on port ${PORT}`));
