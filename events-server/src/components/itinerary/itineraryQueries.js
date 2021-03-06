import {
  getEventInfoHelper,
  addEventToHelper,
  allItinerariesHelper,
  getItinerarByUsernameSQLHelper,
  getItinByIdSQLHelper,
} from './itinerarySQLHelpers';
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

// gets all itin
export const allItineraryQuery = async (body) => {
  try {
    const itin = await allItinerariesHelper();
    console.log('queries - itin:', itin)
    return itin;
  } catch(err) {
    error('Queries - failed to get all itineraries')
    throw new Error(err.message);
  }
};

// get all itin by username
export const getItinerariesByUsernameQuery = async (username) => {
  try {
    // calls db for events by username
    const data = await getItinerarByUsernameSQLHelper(username);
    return data;
  } catch(err) {
    error('Queries - failed to fetch events by username');
    throw new Error(err.message);
  }
};

export const getItinByIdQuery = async(id) => {
  try {
    const details = await getItinByIdSQLHelper(id);
    return details;
  } catch(err) {
    error('Queries - failed to fetch events by id');
    throw new Error(err.message);
  }
}
