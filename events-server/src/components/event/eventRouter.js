import express from 'express';

import { createEventController, getAllEventsController } from './eventControllers';

const router = express.Router();

router.route('/createEvent').post(createEventController);
router.route('/getAllEvents').get(getAllEventsController)
export default router;
