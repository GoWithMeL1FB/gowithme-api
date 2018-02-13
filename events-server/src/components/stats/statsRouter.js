import express from 'express';

import {
  likeController,
  ratingController,
} from './statsControllers';

const router = express.Router();

router.route('/likes').put(likeController);
router.route('/rating').put(ratingController);

export default router;