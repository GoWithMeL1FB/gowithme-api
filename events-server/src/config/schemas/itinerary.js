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
  events: [
    {
      _eventId: {
        type: String,
      },
      title: {
        type: String,
      },
      description: {
        type: String,
      },
      time: {
        date: {
          type: String,
        },
        start: {
          type: String,
        },
        end: {
          type: String,
        },
        duration: {
          type: String,
        },
      },
      meta: {
        rating: {
          type: Number,
          default: 0,
          max: 5,
        },
        likes: {
          type: Number,
          default: 0,
        },
      },
      attendees: {
        type: String,
        enum: ['1-2', '3-6', '6++'],
      },
    },
  ],
});

const Itinerary = mongoose.model('Itinerary', ItinerarySchema);
export default Itinerary;
