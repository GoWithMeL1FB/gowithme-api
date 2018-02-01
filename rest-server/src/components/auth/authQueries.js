import db from '../../config/database';
import axios from 'axios';
import { signUpHelper, loginHelper } from './authSQLHelpers';
import { success, error, warning } from '../../lib/logger';

// fix queryAsync
export const signUpQuery = async (body) => {
  try {
    const queryString = signUpHelper(body);
    db.queryAsync(queryString)
      // cannot catch errors here... wtf
      // .then((res) => {
      //   if (!res) { warning('insert err')}
      //   warning('signUpQuery - inserted data ');
      // })
      // .catch((err) => {
      //   warning('Validation Err', err);
      // })
    // db.release();
  } catch (err) {
    error('signUpQuery - error= ', err);
    throw new Error(err);
  }
};
// fix queryAsync
export const loginQuery = async (body) => {
  try {
    const queryString = loginHelper(body);
    const data = await db.queryAsync(queryString);
    // db.end();
    success('loginQuery - successfully retrieved data ', data);
    return data;
  } catch (err) {
    error('loginQuery - error= ', err);
    throw new Error(err);
  }
}