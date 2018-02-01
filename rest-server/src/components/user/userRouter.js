import express from 'express';
import { getAllUsers } from './userController';
const router = express.Router();

router.route('/getAllUsers')
  .get(getAllUsers);

export default router;