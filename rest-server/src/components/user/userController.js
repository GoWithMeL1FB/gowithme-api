import db from '../../config/database';
import { userQuery } from './userQueries';
import { success, error, warning } from '../../lib/logger';
import users from '../../config/database/models/users';

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await userQuery();
    success('all user data fetched');
    res.status(200).send(allUsers);
  } catch (err) {
    error('could not update user info', err);
  }
}