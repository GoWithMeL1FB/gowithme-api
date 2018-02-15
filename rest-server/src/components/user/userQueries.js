import db from '../../config/database';
import {
  getAllUserDataHelper,
  getUserDataHelper,
  updateUserDataHelper
} from './userSQLHelpers';
import { success, error } from '../../lib/logger';


// gets info of all users
export const userQuery = async () => {
  try {
    const queryString = getAllUserDataHelper();
    const allUsers = await db.query(queryString);
    return allUsers[0];
  } catch (err) {
    error('userQuery error', err);
  }
}

// get logged in user's info
export const getUserInfoQuery = async (body) => {
  try {
    const queryString = getUserDataHelper(body);
    const usersData = await db.query(queryString);
    return usersData[0];
  } catch (err) {
    error('could not query user\'s info', err);
  }
}

// update user's info
export const updateUserInfoQuery = async (body) => {
  try {
    const queryString = updateUserDataHelper(body);
    const updatedInfo = await db.query(queryString);
    success('Quereis - User\'s info was updated')
    return updatedInfo[0];
  } catch (err) {
    error('could not query updated info', err);
  }
}