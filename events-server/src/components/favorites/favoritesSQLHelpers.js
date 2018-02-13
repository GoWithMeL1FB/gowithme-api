import Favorites from '../../config/schemas/favories';

export const getFavesSQLHelper = (owner) => (
  Favorites.find({ owner: '${owner}'})
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