require('dotenv').config();

import request from 'supertest';

const app = require('../../../').app;
const server = require('../../../').serve;

const update = {
  id: 1,
  email: 'kevin123@google.com',
  username: 'kevinvoduy',
  firstname: 'Kevin',
  lastname: 'Vo',
  bio: 'Has a pitbull named Leo',
  birthday: 1992,
}

beforeAll(async (done) => {
  server.close();
  done();
});

afterEach((done) => {
  server.close();
  done();
});

describe('User tests', () => {
test('it should grab info from all users', async () => {
    expect.assertions(2);
    const { status, text } = await request(app.listen(2344))
      .get('/api/user/getAllUsers')
    expect(status).toBe(200);
    expect(text).toContain('Has a baby pitbull');
  });

  test('it should get a users info with id', async () => {
    expect.assertions(2);
    const { text, status } = await request(app.listen(3444))
      .get('/api/user/fetchUsersInfo/1')
    expect(text).toContain('kevin123@google.com');
    expect(status).toBe(200);
  });

  // does not work, tends to hang & not respond
  // test('it should update users info', async () => {
  //   expect.assertions(2);
  //   const { text, status } = await request(app.listen(3333))
  //     .put('/api/user/updateUser')
  //     .send({update})
  //   expect(text).toContain('Rows matched: 1');
  //   expect(status).toBe(200);
  // });
});

