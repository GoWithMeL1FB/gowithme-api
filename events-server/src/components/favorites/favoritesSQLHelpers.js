import Favorites from '../../config/schemas/favories';
import EventInstance from '../../config/schemas/eventsInstance';

export const getFavesSQLHelper = (username) => (
  Favorites.find({ owner: username})
)

export const faveSomethingSQLHelper = ({ owner, type, id }) => {
  if (type == 'itinerary') {
    return Favorites.findOneAndUpdate({ owner: owner }, {
      $push: { itinerary: { ID: id } },
    });
  } else {
    return Favorites.findOneAndUpdate({ owner: owner }, {
      $push: { event: { ID: id } },
    });
  }
}

export const deleteFaveItemSQLHelper = ({owner, type, id }) => {
  if (type == 'itinerary') {
    return Favorites.findOneAndUpdate({ owner: owner }, {
      $pull: { itinerary: { ID: id } },
    });
  } else {
    return Favorites.findOneAndUpdate({ owner: owner }, {
      $pull: { event: { ID: id } },
    });
  }
}

export const getItinEventDetailsSQLHelper = (ID) => (
  EventInstance.findById(ID, (err) => {
    if (err) {
      console.error('SQLHelper - could not get info with id \n', err);
    }
  })
);
