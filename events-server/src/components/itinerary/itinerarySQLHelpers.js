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
