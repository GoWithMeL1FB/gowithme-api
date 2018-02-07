import { hashPW, PWVerification } from '../bcrypt';

const payload = {
  salt: 10,
  password: '12345',
}

describe('Bcrypt', () => {
  test('it should hash an input', async () => {
    expect.assertions(2);
    const hash = await hashPW(payload.password);
    const isVerified = await PWVerification(payload.password, hash);
    expect(hash).toBeDefined();
    expect(isVerified).toBe(true);
  })
});
