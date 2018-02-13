import {
  likeSQLHelper,
  statCheckerSQLHelper,
  ratingSQLHelper,
} from './statsSQLHelpers';

import { error } from '../../lib/logger';

export const likeQuery = async(body) => {
  try {
    // const likeChecker = await statCheckerSQLHelper(body);
    // if (likeChecker) {
    //   console.log('queries - likechecker:', likeChecker);
    // };
    const response = await likeSQLHelper(body);
    console.log(response);
    return response;
  } catch(err) {
    error('Queries - failed to query like to db');
    throw new Error(err.message);
  }
}

// ratings
export const ratingQuery = async(body) => {
  try {
    const response = await ratingSQLHelper(body);
    console.log('resp:', response);
    return response;
  } catch(err) {
    error('Query - failed to query db for rating update');
    throw new Error(err.message);
  }
}
