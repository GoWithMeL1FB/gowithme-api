import express from 'express';

import { createItinerary, addEvent } from './itineraryControllers';

const router = express.Router();

router.route('/createItinerary').post(createItinerary);
router.route('/addEventToItinerary').post(addEvent);

export default router;
