import express from 'express';

import { createEventController, createItinerary, addEvent } from './eventControllers';

const router = express.Router();

router.route('/createEvent').post(createEventController);
router.route('/createItinerary').post(createItinerary);
router.route('/addEventToItinerary').post(addEvent);

export default router;
