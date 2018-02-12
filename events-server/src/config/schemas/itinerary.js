const mongoose = require('mongoose');
const Event = require('./event');

const ItinerarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'give itinerary a name'],
  },
  owner: {
    type: String,
    required: [true, 'this itinerary needs an owner'],
  },
  image: {
    type: String,
  },
  events: [
    {
      _eventId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: Event,
      },
    },
  ],
  meta: {
    stars: [
      {
        username: {
          type: String,
        },
        rating: {
          type: Number,
          default: 0,
          max: 5,
        },
      }
    ],
    likes: {
      type: Number,
      default: 0,
    },
    shares: {
      type: Number,
      default: 0,
    },
  },
});

const Itinerary = mongoose.model('Itinerary', ItinerarySchema);
export default Itinerary;
