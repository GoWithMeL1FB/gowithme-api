import express from 'express';

import eventRouter from '../components/event/eventRouter';
import itineraryRouter from '../components/itinerary/itineraryRouter';
import favoritesRouter from '../components/favorites/favoritesRouter';

const router = express.Router();

router.use('/events', eventRouter);
router.use('/itinerary', itineraryRouter);
router.use('/favorites', favoritesRouter);

export default router;
