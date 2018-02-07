import request from 'supertest';
import app from '../../../';

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

beforeAll(async () => {

});

describe('Event creation', () => {
  // test('it should create an event', async () => {
  //   expect.assertions(2);
  //   const { status, text } = await request(app)
  //     .post('/api/events/createEvent')
  //     .send(payload);
  //   expect(status).toBe(200);
  //   expect(text).toContain('Lorem ipsum')
  // });

  test('it should fail to if missing req input', async () => {
    expect.assertions(1);
    const { status } = await request(app)
      .post('/api/events/createEvent')
      .send({
        title: 'Test Event',
        description: 'Lorem ipsum',
        category: 'whacktivity',
        attendees: '1-2',
      });
    expect(status).toBe(403);
  });
});