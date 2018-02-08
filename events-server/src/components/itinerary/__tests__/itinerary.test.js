import request from 'supertest';
const app = require('../../../').app;
const server = require('../../../').serve;

const itinerary = {
  owner: 'kevin',
  title: 'Creating Itinerary With Jest'
};

beforeAll((done) => {
  server.close();
  done();
});

afterAll((done) => {
  server.close();
  done();
})

describe('Itinerary', () => {
  test('it should create an itinerary', async() => {
    expect.assertions(2);
    const { status, text} = await request(app.listen(3244))
      .post('/api/itinerary/createItinerary')
      .send(itinerary);
    expect(text).toContain('Creating Itinerary With Jest')
    expect(status).toBe(200);
  });

// has problems catching errors that are being thrown in Itinerary schema
  // test('it should fail if input is missing info', async() => {
  //   const apple = async() => {
  //     await request(app.listen(3009))
  //       .post('/api/itinerary/createItinerary')
  //       .send({ owner: 'kevin' });
  //   }
  //   expect(apple).toThrow(/ValidationError:/);
  // });

// does not work because eventID and itineraryID will always change
  // test('it should add an event to user itinerary', () => {
  //   expect.assertions(1);
  //   const { status, text } = await request(app.listen(8473))
  //     .post('/api/itinerary/addEventToItinerary')
  //     .send('')
  // })
});