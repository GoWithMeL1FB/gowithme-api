import express from 'express';

import {
  getFavesController,
  faveSomethingController,
  newFavoritesController,
} from './favoritesControllers';

const router = express.Router();

router.route('/getFavs/:username').get(getFavesController);
router.route('/faveSomething').post(faveSomethingController);
router.route('/newFavoritesSchema').post(newFavoritesController);

export default router;

