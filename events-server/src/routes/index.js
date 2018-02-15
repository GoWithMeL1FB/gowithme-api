import express from 'express';

import eventRouter from '../components/event/eventRouter';
import itineraryRouter from '../components/itinerary/itineraryRouter';
import favoritesRouter from '../components/favorites/favoritesRouter';
import statsRouter from '../components/stats/statsRouter';
import googleRouter from '../components/google/googleRouter';

const router = express.Router();

router.use('/events', eventRouter);
router.use('/itinerary', itineraryRouter);
router.use('/favorites', favoritesRouter);
router.use('/stats', statsRouter);
router.use('/google', googleRouter);

export default router;
