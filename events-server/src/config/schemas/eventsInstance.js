const mongoose = require('mongoose');

const EventInstanceSchema = new mongoose.Schema({
  title: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
  },
  description: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
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
    attendees: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event',
    },
  },
  _itineraryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Itinerary',
  },
  _eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Events',
  },
});

export const EventInstance = mongoose.model('EventInstance', EventInstanceSchema);
