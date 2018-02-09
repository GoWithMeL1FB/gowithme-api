import { getEventInfoHelper, addEventToHelper, allItinerariesHelper } from './itinerarySQLHelpers';
import { success, error } from '../../lib/logger';

export const getEventInfo = async (body) => {
  try {
    const eventInfo = await getEventInfoHelper(body);
    // success('Queries - queried event info');
    return eventInfo;
  } catch (err) {
    // error('Queries - could not query db for info \n', err);
    return err.message;
  }
};

// adds event to user's itinerary
export const addEventToItin = async (body, event) => {
  try {
    // craetes query with given inputs
    await addEventToHelper(body, event);
    success('Queries - added event to itinerary');
    return 'Awesome! Event added to itinerary';
  } catch (err) {
    error('Queries -  could not query db for add event\n', err);
    return err.message;
  }
};

export const allItineraryQuery = async (body) => {
  try {
    const itin = await allItinerariesHelper();
    console.log('queries - itin:', itin)
    return itin;
  } catch(err) {
    error('Queries - failed to get all itineraries')
  }
}
