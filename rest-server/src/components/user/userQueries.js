import db from '../../config/database';
import { getAllUserDataHelper, getUserDataHelper } from './userSQLHelpers';
import { success, error, warning } from '../../lib/logger';

export const userQuery = async () => {
  try {
    const queryString = getAllUserDataHelper();
    const allUsers = await db.query(queryString);
    return allUsers[0];
  } catch (err) {
    error('userQuery error', err)
  }
}

export const getUserInfoQuery = async (body) => {
  try {
    console.log('user query id:', body)
    const queryString = getUserDataHelper(body);
    const usersData = await db.query(queryString);
    return usersData[0];
  } catch (err) {
    error('could not query user\'s info', err)
  }
}