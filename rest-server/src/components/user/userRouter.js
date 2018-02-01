import express from 'express';
import { getAllUsers, getUserInfo } from './userController';
const router = express.Router();

router.route('/getAllUsers')
  .get(getAllUsers);
  router.route('/fetchUsersInfo/:id')
  .get(getUserInfo);

export default router;