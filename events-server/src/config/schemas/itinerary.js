const mongoose = require('mongoose');

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
      event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EventInstance',
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
    likes: [
      {
        username: {
          type: String,
        },
        liked: {
          type: Boolean,
          enum: ['true', 'false'],
          default: 'false',
        }
      }
    ],
    shares: [
      {
        username: {
          type: String,
        },
        shares: {
          type: Boolean,
          enum: ['true', 'false'],
          default: 'false',
        }
      }
    ],
  },
});

const Itinerary = mongoose.model('Itinerary', ItinerarySchema);
export default Itinerary;
