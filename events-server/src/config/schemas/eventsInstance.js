const mongoose = require('mongoose');
// defining a schema
const { Schema } = mongoose.Schema;

const EventInstanceSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
  },
  title: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
  },
  description: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
  },
  category: {
    type: Schema.Types.ObjectId,
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
      type: Schema.Types.ObjectId,
      ref: 'Event',
    },
  },
  _itineraryId: {
    type: Schema.Types.ObjectId,
    ref: 'Itinerary',
  },
  _eventId: {
    type: Schema.Types.ObjectId,
    ref: 'Events',
  },
});

export const EventInstance = mongoose.model('EventInstance', EventInstanceSchema);
