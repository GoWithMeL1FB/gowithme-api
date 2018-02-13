import Itinerary from '../../config/schemas/itinerary';
import EventInstance from '../../config/schemas/eventsInstance';

// adds a like.. wip
// check if someone has already liked
export const likeSQLHelper = ({ itineraryID, username, type}) => {
  if (type == 'event') {
    return EventInstance.findOneAndUpdate({ _itineraryId: itineraryID }, {
      $push: {
        'meta.likes': {
          username: username,
          liked: 'true',
        }
      }
    })
  }
  if (type == 'itinerary') {
    return Itinerary.findByIdAndUpdate(itineraryID, {
      $push: {
        'meta.likes': {
          username: username,
          liked: 'true',
        }
      }
    })
  }
}

// ratings ... wip
// need to check if someone has already rated
export const ratingSQLHelper = ({ itineraryID, username, type, rating }) => {
  if (type == 'event') {
    return EventInstance.findOneAndUpdate({ _itineraryId: itineraryID }, {
      $push: {
        'meta.stars': {
          username: username,
          rating: rating,
        }
      }
    })
  }
  if (type == 'itinerary') {
    return Itinerary.findByIdAndUpdate(itineraryID, {
      $push: {
        'meta.stars': {
          username: username,
          rating: rating,
        }
      }
    })
  }
}

// work in progress
// does not work
// export const statCheckerSQLHelper = ({ owner, username, type, id }) => {
//   if (type == 'event') {
//     return  EventInstance
//               .find({ _itinerary: owner })
//               .where({ 'meta.likes': { username: username } })
//   };
//   if (type == 'itinerary') {
//     return  Itinerary
//               .find({ owner: owner })
//   };
// }