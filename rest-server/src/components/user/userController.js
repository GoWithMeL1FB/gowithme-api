import db from '../../config/database';
import { userQuery, getUserInfoQuery, updateUserInfoQuery } from './userQueries';
import { success, error } from '../../lib/logger';

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
    error('could not fetch user\'s data', err);
  }
}

export const updateUserInfo = async (req, res) => {
  try {
    const update = await updateUserInfoQuery(req.body);
    success('user\'s info was updated');
    res.status(200).send(update.info);
  } catch (err) {
    error('was not able to update user info');
  }
}