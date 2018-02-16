import db from '../../config/database';
import {
  getAllUserDataHelper,
  getUserDataHelper,
  updateUserDataHelper
} from './userSQLHelpers';
import { success, error } from '../../lib/logger';
import { getUserStats, setUserImg, getUserImg } from '../../redis/index.js'

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
    let result = [];
    console.log("This should be first", body);
    const queryString = getUserDataHelper(body);
    const usersData = await db.query(queryString);
    const userStats = await getUserStats(body.username);
    const userimage = await getUserImg(`${body.username}img`);
    console.log("***this is the users STATS: ", userimage);
    // should make a helper to do this
     result.push(usersData[0][0])
     result.push(userStats)
     result.push(userimage)
    return result;
  } catch (err) {
    error('could not query user\'s info', err);
  }
}

// update user's info
export const updateUserInfoQuery = async (body) => {
  console.log('update user body', body );
  try {
    const queryString = updateUserDataHelper(body);
    const updatedInfo = await db.query(queryString);
    setUserImg(`${body.username}img`, `${body.profileImage}` )
    success('Quereis - User\'s info was updated')
    return updatedInfo[0];
  } catch (err) {
    error('could not query updated info', err);
  }
}