import express from 'express';

import { createEventController, createItinerary } from './eventControllers';

const router = express.Router();

router.route('/createEvent').post(createEventController);
router.route('/createItinerary').post(createItinerary);

export default router;
