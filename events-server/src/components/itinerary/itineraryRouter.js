import express from 'express';

import { createItinerary, addEvent, allItineraries } from './itineraryControllers';

const router = express.Router();

router.route('/createItinerary').post(createItinerary);
router.route('/addEventToItinerary').post(addEvent);
router.route('/allItineraries').get(allItineraries);

export default router;
