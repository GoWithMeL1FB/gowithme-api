import {
  likeSQLHelper,
  statCheckerSQLHelper,
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
