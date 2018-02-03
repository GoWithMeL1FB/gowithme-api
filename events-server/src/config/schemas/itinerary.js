const mongoose = require('mongoose');

const { Schema } = mongoose.Schema;

const ItinerarySchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
  },
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
        type: Schema.Types.ObjectId,
        ref: 'EventInstance',
        required: [true],
      },
      title: String,
      description: String,
      time: {
        date: {
          type: Schema.Types.ObjectId,
          ref: 'Itinerary',
        },
        start: {
          type: Schema.Types.ObjectId,
          ref: 'Itinerary',
        },
        end: {
          type: Schema.Types.ObjectId,
          ref: 'Itinerary',
        },
        duration: {
          type: Schema.Types.ObjectId,
          ref: 'Itinerary',
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

export const Itinerary = mongoose.model('Itinerary', ItinerarySchema);
