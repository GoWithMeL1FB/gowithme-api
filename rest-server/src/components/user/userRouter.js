import express from 'express';
import { getAllUsers, getUserInfo, updateUserInfo } from './userController';
const router = express.Router();

router.route('/getAllUsers')
  .get(getAllUsers);
router.route('/fetchUsersInfo/:id')
  .get(getUserInfo);
router.route('/updateUser')
  .put(updateUserInfo);

export default router;