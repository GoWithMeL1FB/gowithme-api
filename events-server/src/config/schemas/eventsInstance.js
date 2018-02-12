const mongoose = require('mongoose');

const EventInstanceSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  photo: {
    prefix: {
      type: String,
    },
    suffix: {
      type: String
    },
  },
  price: {
    type: String,
  },
  time: {
    date: {
      type: Date,
      default: Date.now(),
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
  attendees: {
    type: String,
  },
  _itineraryId: {
    type: String,
  },
  _eventId: {
    type: String,
  },
});

const EventInstance = mongoose.model('EventInstance', EventInstanceSchema);
export default EventInstance;
