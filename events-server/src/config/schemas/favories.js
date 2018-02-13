const mongoose = require('mongoose');
const Itinerary = require('./itinerary');
const EventInstance = require('./eventsInstance');


const FavoritesSchema = new mongoose.Schema({
  owner: {
    type: String
  },
  itinerary: [
    {
      ID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: Itinerary,
      }
    }
  ],
  event: [
    {
      ID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: EventInstance,
      }
    }
  ]
});

const Favorites = mongoose.model('Favorites', FavoritesSchema);
export default Favorites;