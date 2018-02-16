import express from 'express';

import {
  createEventController,
  getAllEventsController,
  getEventsByItinController,
} from './eventControllers';

const router = express.Router();

router.route('/createEvent').post(createEventController);
router.route('/getAllEvents').get(getAllEventsController);
router.route('/getEventsByItin/:id').get(getEventsByItinController);

export default router;
