import Itinerary from '../../config/schemas/itinerary';
import EventInstance from '../../config/schemas/eventsInstance';

// adds a like.. wip
export const likeSQLHelper = ({ owner, username, type, id }) => {
  if (type == 'event') {
    return EventInstance.findOneAndUpdate({ _itineraryId: owner }, {
      $push: {
        'meta.likes': {
          username: username,
          liked: 'true',
        }
      }
    })
  }
  if (type == 'itinerary') {
    return Itinerary.findOneAndUpdate({ owner: owner }, {
      $push: {
        'meta.likes': {
          username: username,
          liked: 'true',
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