import db from '../../config/database';
import axios from 'axios';
import { signUpHelper, loginHelper, storePasswordHelper, getUserIDHelper } from './authSQLHelpers';
import { success, error, warning } from '../../lib/logger';
import { getUserDataHelper } from '../user/userSQLHelpers';

export const signUpQuery = async (body) => {
  try {
    const postUserData = signUpHelper(body);
    const getUserId = getUserIDHelper(body);

    db.query(postUserData);
    const userID = await db.query(getUserId);
    const postUserPassword = storePasswordHelper(body, userID[0][0]);

    console.log('userid', userID[0][0], 'body', body, 'userpw', postUserPassword);

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
    // db.end();
    success('loginQuery - successfully retrieved data ', data);
    return data;
  } catch (err) {
    error('loginQuery - error= ', err);
    throw new Error(err);
  }
}