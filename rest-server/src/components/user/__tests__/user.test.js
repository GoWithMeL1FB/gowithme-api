require('dotenv').config();

import request from 'supertest';

const app = require('../../../').app;
const server = require('../../../').serve;

const payload = {
  id: 1,
  email: 'kevin123@google.com',
  username: 'kevinvoduy',
  firstname: 'kevin',
  lastname: 'vo',
  bio: 'has a dog named leo',
  birthday: 1990,
};

const update = {
  email: 'kevin123@google.com',
  username: 'kevinvoduy',
  firstname: 'Kevin',
  lastname: 'Vo',
  bio: 'Has a pitbull named Leo',
  birthday: 1990,
}

beforeAll(async () => {

});

afterEach((done) => {
  server.close();
  done();
});

describe('User tests', () => {
test('it should grab info from all users', async () => {
    expect.assertions(2);
    const { status, text } = await request(app)
      .get('/api/user/getAllUsers')
    expect(status).toBe(200);
    expect(text).toContain('has a dog named leo');
  });

  test('it should get a users info with id', async () => {
    expect.assertions(2);
    const { text, status } = await request(app)
      .get('/api/user/fetchUsersInfo/1')
    expect(text).toContain('kevin123@google.com');
    expect(status).toBe(200);
  });

  test('it should update users info', async () => {
    expect.assertions(2);
    const { text, status} = await request(app)
      .put('/api/user/updateUser')
      .send({update})
    expect(text).toContain('Rows matched: 1');
    expect(status).toBe(200);
  });
});

