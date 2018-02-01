import db from '../../config/database';
import { getAllUserDataHelper } from './userSQLHelpers';
import { success, error, warning } from '../../lib/logger';

export const userQuery = async (req, res) => {
  try {
    const queryString = getAllUserDataHelper();
    const allUsers = await db.query(queryString)
      // .spread((data) => {
      //   console.log('res of get', data);
      //   return data
      // })
      // .catch((err) => {
      //   console.log('this is undef', err);
      // })
      return allUsers[0]
  } catch (err) {
    error('userQuery error', err)
  }
}