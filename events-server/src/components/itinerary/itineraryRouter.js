import express from 'express';

import {
  createItinerary,
  addEvent,
  allItineraries,
  getItinerariesByUsernameController,
} from './itineraryControllers';

const router = express.Router();

router.route('/createItinerary').post(createItinerary);
router.route('/addEventToItinerary').post(addEvent);
router.route('/allItineraries').get(allItineraries);
router.route('/getItinerariesByUsername/:username').get(getItinerariesByUsernameController);

export default router;
