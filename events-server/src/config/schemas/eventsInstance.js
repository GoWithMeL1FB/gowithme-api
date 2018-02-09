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
