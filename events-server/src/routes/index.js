import express from 'express';

import eventRouter from '../components/event/eventRouter';
import itineraryRouter from '../components/itinerary/itineraryRouter';

const router = express.Router();

router.use('/events', eventRouter);
router.use('/itinerary', itineraryRouter);

export default router;
