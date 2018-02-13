import express from 'express';

import {
  likeController,
} from './statsControllers';

const router = express.Router();

router.route('/likes').put(likeController);

export default router;