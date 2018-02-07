require('dotenv').config();

import request from 'supertest';
import { app, server } from '../../../'

// import {
//   dropUserTable,
//   dropCredentialsTable,
//   createUsersTable,
//   createCredentialsTable,
// } from '../../../lib/SQL';

const payload = {
  id: 3,
  email: 'kevin123@google.com',
  username: 'kevinvoduy123',
  firstname: 'keivn',
  lastname: 'vo',
  bio: 'has a dog named leo',
  birthday: 1990,
};

beforeAll(async () => {
  // await dropUserTable;
  // await dropCredentialsTable;
  // await createUsersTable;
  // await createCredentialsTable;
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
      .get('/api/user/fetchUsersInfo/3')
    expect(text).toContain('kevin123@google.com');
    expect(status).toBe(200);
  });

  test('it should update users info', async () => {
    expect.assertions(2);
    const { text, status} = await request(app)
      .put('/api/user/updateUser')
      .send(payload)
    expect(text).toContain('Rows matched: 1');
    expect(status).toBe(200);
  });
});

