import request from 'supertest';
const app = require('../../../').app;
const server = require('../../../').serve;


const payload = {
  title: 'Test Event',
  description: 'Lorem ipsum',
  location: 'Hack Reactor',
  category: 'activity',
  attendees: '1-2',
  date: '1/12/2018',
  start: '4pm',
  end: '5pm',
  duration: '1hr',
  userId: 'kevin',
};

beforeAll(async(done) => {
  server.close();
  done();
});

afterEach((done) => {
  server.close();
  done();
})

describe('Event creation', () => {
  test('it should create an event', async () => {
    expect.assertions(2);
    const { status, text } = await request(app.listen(4333))
      .post('/api/events/createEvent')
      .send(payload);
    expect(status).toBe(200);
    expect(text).toContain('Lorem ipsum')
  });

  test('it should fail to if missing required inputs input', async() => {
    expect.assertions(1);
    const { status } = await request(app.listen(1222))
      .post('/api/events/createEvent')
      .send({
        title: 'Test Event',
        description: 'Lorem ipsum',
        category: 'whacktivity',
        attendees: '1-2',
      });
    expect(status).toBe(200);
  });
});