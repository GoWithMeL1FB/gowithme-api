import express from 'express';

import eventRouter from '../components/event/eventRouter';

const router = express.Router();

router.use('/events', eventRouter);

export default router;
