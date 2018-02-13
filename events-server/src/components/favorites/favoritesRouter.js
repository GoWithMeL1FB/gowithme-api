import express from 'express';

import {
  getFavesController,
  faveSomethingController,
  newFavoritesController,
  deleteFaveItemController,
} from './favoritesControllers';

const router = express.Router();

router.route('/getFavs/:username').get(getFavesController);
router.route('/faveSomething').post(faveSomethingController);
router.route('/newFavoritesSchema').post(newFavoritesController);
router.route('/deleteFaveItem').delete(deleteFaveItemController);

export default router;

