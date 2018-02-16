import {
  getFavesSQLHelper,
  faveSomethingSQLHelper,
  deleteFaveItemSQLHelper,
  getItinEventDetailsSQLHelper,
} from './favoritesSQLHelpers';

import { error } from '../../lib/logger';
import Favorites from '../../config/schemas/favories';

export const getFavesByUsernameQuery = async(username) => {
  try {
    const favesData = await getFavesSQLHelper(username);
    return favesData;
  } catch(err) {
    error('Queries - failed to query db for favorites');
    throw new Error(err.message);
  }
}

export const faveSomethingQuery = async(body) => {
  try {
    const queryStatus = await faveSomethingSQLHelper(body);
    return queryStatus;
  } catch(err) {
    error('Queries - failed to query db for fav itineraries');
    throw new Error(err.message);
  }
}

export const deleteFaveItemQuery = async(body) => {
  try {
    const queryStatus = await deleteFaveItemSQLHelper(body);
    console.log(queryStatus);
    return queryStatus;
  } catch(err) {
    error('Queries - failed to query db for delete');
    throw new Error(err.message);
  }
}

// not working async issue
export const getItinDetailsQuery = async(itinerary) => {
  try {
    let events = [];

    // for (let i = 0; i < itinerary[0].event.length; i++) {
    //   const eventDetail = getItinEventDetailsSQLHelper(itinerary[0].event.ID);
    //   events.push(eventDetail);
    // }

    return events;
  } catch(err) {
    error('Queries - failed to get itin details');
    throw new Error(err.message);
  }
}