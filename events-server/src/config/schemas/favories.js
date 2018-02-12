const mongoose = require('mongoose');

const FavoritesSchema = new mongoose.Schema({
  itineraries: [
    {
      _itineraryId: {
        type: mongoose.SchemaTypes.ObjectId,
      }
    }
  ],
  events: [
    {
      _eventId: {
        type: mongoose.SchemaTypes.ObjectId,
      }
    }
  ]
});

const Favorites = mongoose.model('Favorites', FavoritesSchema);
export default Favorites;