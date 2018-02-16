import express from 'express';

import {
  createItinerary,
  addEvent,
  allItineraries,
  getItinerariesByUsernameController,
  getItinById,
} from './itineraryControllers';

const router = express.Router();

router.route('/createItinerary').post(createItinerary);
router.route('/addEventToItinerary').post(addEvent);
router.route('/allItineraries').get(allItineraries);
router.route('/getItinerariesByUsername/:username').get(getItinerariesByUsernameController);
router.route('/getItineraryById/:id').get(getItinById);
export default router;
