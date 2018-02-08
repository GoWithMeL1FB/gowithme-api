require('dotenv').config();

import request from 'supertest';

// import {
//   dropUserTable,
//   dropCredentialsTable,
//   createUsersTable,
//   createCredentialsTable,
// } from '../../../lib/SQL';

const app = require('../../../').app;
const server = require('../../../').serve;

const payload = {
  email: 'donnie123@google.com',
  username: 'donnie123',
  firstname: 'Donnie',
  lastname: 'Vo',
  bio: 'OWNS a dog named leo',
  birthday: 1995,
  password: 'donnie123',
};

beforeAll(async () => {
  // await dropUserTable;
  // await dropCredentialsTable;
  // await createUsersTable;
  // await createCredentialsTable;
});

afterEach((done) => {
  server.close();
  done();
})

describe('Attatch authorization token / Signup', () => {
  test('it should attatch a token to the user', async () => {
    expect.assertions(1);
    const { status } = await request(app.listen(1234))
      .post('/api/auth/signup')
      .send(payload);
    expect(status).toBe(200);
  });
});

describe('User Login', () => {
  test('it should log a user in', async () => {
    expect.assertions(1);
    const { status } = await request(app.listen(1452))
      .post('/api/auth/login')
      .send({username: 'donnie123', password: 'donnie123'});
    expect(status).toBe(200);
  })
})