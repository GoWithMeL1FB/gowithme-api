import {
  getFavesSQLHelper,
  faveSomethingSQLHelper,
} from './favoritesSQLHelpers';

import { error } from '../../lib/logger';
import Favorites from '../../config/schemas/favories';

export const getFavesByUsernameQuery = async (body) => {
  try {
    const favesData = await getFavesSQLHelper(body);
    console.log('queries - favs data:', favesData);
    return favesData;
  } catch(err) {
    error('Queries - failed to query db for favorites');
    throw new Error(err.message);
  }
}

export const faveSomethingQuery = async (body) => {
  try {
    const queryStatus = await faveSomethingSQLHelper(body);
    console.log('queries - query status:', queryStatus);
    return queryStatus;
  } catch(err) {
    error('Queries - failed to query db for fav itineraries');
    throw new Error(err.message);
  }
}

