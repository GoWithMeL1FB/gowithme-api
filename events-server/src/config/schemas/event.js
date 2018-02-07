const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Event missing title'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Event missing description'],
    trim: true,
  },
  location: {
    type: String,
    required: [true, 'Event missing location'],
    trim: true,
  },
  category: {
    type: String,
    required: [true, 'Event missing category'],
    // specifies set of allowed values for the field
    enum: ['eat', 'activity', 'visit'],
  },
  attendees: {
    type: String,
    enum: ['1-2', '3-6', '6++'],
  },
});

// compile model from schema and export
const Event = mongoose.model('Event', EventSchema);
export default Event;
