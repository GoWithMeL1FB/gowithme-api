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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EventInstance',
        default: 'no reference',
      },
      title: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EventInstance',
        default: 'no reference',
      },
      description: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EventInstance',
        default: 'no reference',
      },
      time: {
        date: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'EventInstance',
          default: 'no reference',
        },
        start: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'EventInstance',
          default: 'no reference',
        },
        end: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'EventInstance',
          default: 'no reference',
        },
        duration: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'EventInstance',
          default: 'no reference',
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
