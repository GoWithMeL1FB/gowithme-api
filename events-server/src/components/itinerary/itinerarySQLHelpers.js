import Itinerary from '../../config/schemas/itinerary';
import EventInstance from '../../config/schemas/eventsInstance';
import { success, error } from '../../lib/logger';


// uses event id to find event's info
export const getEventInfoHelper = ({ eventId }) => (
  EventInstance.findById(eventId, (err) => {
    if (err) {
      error('SQLHelper - could not get info with id \n', err);
    }
    success('SQLHelper - event id found');
  })
);

// finds itinerary and pushes event into events array
export const addEventToHelper = ({ itineraryId }, event) => (
  Itinerary.findByIdAndUpdate(itineraryId, {
    $push: { events: event },
  })
);

// fetches all itineraries
export const allItinerariesHelper = () => (
  Itinerary.find()
)

// fetches itin by username
export const getItinerarByUsernameSQLHelper = async (username) => {
  console.log('aer werwe a', username)
  console.log('aer werwe a', typeof username)
  let results;
  await Itinerary.find({owner: 'karolee'}, (err, data) => {
    if (err) {
      console.log('hey')
      throw new Error(err)
    } else {
      console.log('dataaaa= ', data)
      results = data
    }
  })
  console.log('results= ', results)
  return results
};
