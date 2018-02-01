import db from '../../config/database';
import { userQuery, getUserInfoQuery } from './userQueries';
import { success, error, warning } from '../../lib/logger';
import users from '../../config/database/models/users';

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await userQuery(req.params.id);
    success('data of all users sent');
    res.status(200).send(allUsers);
  } catch (err) {
    error('could not fetch users\' info', err);
  }
}

export const getUserInfo = async (req, res) => {
  try {
    const userInfo = await getUserInfoQuery(req.params);
    success('user\'s data fetched');
    res.status(200).send(userInfo);
  } catch (err) {
    error('could not fetch user\'s data', err)
  }
}