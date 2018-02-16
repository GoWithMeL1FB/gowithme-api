const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    enum: ['eat', 'activity', 'visit'],
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
  attendees: {
    type: String,
    enum: ['1-2', '3-6', '6++'],
  },
});

// compile model from schema and export
const Event = mongoose.model('Event', EventSchema);
export default Event;
