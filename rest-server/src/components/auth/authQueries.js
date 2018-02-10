import db from '../../config/database';
import {
  signUpHelper,
  loginHelper,
  storePasswordHelper,
  getUserIDHelper,
  findDbPasswordHelper
} from './authSQLHelpers';
import { success, error, warning } from '../../lib/logger';
import { getUserDataHelper } from '../user/userSQLHelpers';

export const signUpQuery = async (body) => {
  try {

    // post info to db
    const postUserData = await signUpHelper(body);
    const post = await db.query(postUserData);

    // queries for user's id
    const getUserId = await getUserIDHelper(body);
    const userID = await db.query(getUserId);

    // store password with id
    const postUserPassword = await storePasswordHelper(body, userID[0][0]);
    db.query(postUserPassword);
  } catch (err) {
    warning('signUpQuery - error:', err);
    throw new Error(err);
  }
};

export const loginQuery = async (body) => {
  try {
    // gets id, username, and email from db
    const queryString = loginHelper(body);
    const data = await db.query(queryString);

    // grabs hashed password that was saved with user
    const passwordQuery = findDbPasswordHelper(data[0][0]);
    const password = await db.query(passwordQuery);

    // success('loginQuery - successfully retrieved data');
    const userInfo = Object.assign(data[0][0], password[0][0]);
    return userInfo;
    // db.end();
  } catch (err) {
    error('loginQuery - error= ', err);
    throw new Error(err);
  }
}
