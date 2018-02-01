import db from '../../config/database';
import { getAllUserDataHelper, getUserDataHelper, updateUserDataHelper} from './userSQLHelpers';
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
    const queryString = getUserDataHelper(body);
    const usersData = await db.query(queryString);
    return usersData[0];
  } catch (err) {
    error('could not query user\'s info', err)
  }
}

export const updateUserInfoQuery = async (body) => {
  try {
    const queryString = updateUserDataHelper(body);
    const updatedInfo = await db.query(queryString);
    console.log('updated info - qyeryies:', updatedInfo);
  } catch (err) {
    error('could not query updated info', err)
  }
}