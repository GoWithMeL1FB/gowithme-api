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
    const postUserData = signUpHelper(body);
    const getUserId = getUserIDHelper(body);

    // post info to db
    db.query(postUserData);

    // queries for user's id
    const userID = await db.query(getUserId);

    // store password with id
    const postUserPassword = storePasswordHelper(body, userID[0][0]);
    db.query(postUserPassword);
  } catch (err) {
    warning('signUpQuery - error= ', err);
    throw new Error(err);
  }
};

export const loginQuery = async (body) => {
  try {
    const queryString = loginHelper(body);
    const data = await db.query(queryString);
    const passwordQuery = findDbPasswordHelper(data[0][0]);

    const password = await db.query(passwordQuery);
    success('loginQuery - successfully retrieved data');
    const userInfo = Object.assign(data[0][0], password[0][0])

    return userInfo;
    // db.end();
  } catch (err) {
    error('loginQuery - error= ', err);
    throw new Error(err);
  }
}
