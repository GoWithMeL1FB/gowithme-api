const mongoose = require('mongoose');
// defining a schema
const { Schema } = mongoose.Schema;

const EventSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
  },
  title: {
    type: String,
    required: [true, 'Event must have a title'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Give the event a description'],
    trim: true,
  },
  location: {
    type: String,
    required: [true, 'Give the event a location'],
    trim: true,
  },
  catetory: {
    type: String,
    required: [true, 'Give the event a category'],
    // specifies set of allowed values for the field
    enum: ['eat', 'activity', 'visit'],
  },
  attendees: {
    type: String,
    enum: ['1-2', '3-6', '6++'],
  },
});

// compile model from schema
export const Events = mongoose.model('Events', EventSchema);
