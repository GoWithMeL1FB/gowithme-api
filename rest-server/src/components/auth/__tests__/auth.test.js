require('dotenv').config();

import request from 'supertest';
import app from '../../../'

const payload = {
  email: 'kevin123@google.com',
  username: 'kevinvoduy123',
  firstname: 'keivn',
  lastname: 'vo',
  bio: 'has a dog named leo',
  birthday: 1990,
  password: 'kevinvoduy123',
};

// beforeAll(() => {
//
// });

describe('Authorization token', () => {
  test('it should attatch a token to the user', async () => {
    expect.assertions(1);
    const { status } = await request(app)
      .post('/api/auth/signup')
      .send(payload)
    expect(status).toBe(200);
  });
});

describe('User Login', () => {
  test('it should log a user in', async () => {
    expect.assertions(1);
    const { status } = await request(app)
      .post('/api/auth/login')
      .send({username: 'kevinvoduy123', password: 'kevinvoduy123'})
    expect(status).toBe(200);
  })
})