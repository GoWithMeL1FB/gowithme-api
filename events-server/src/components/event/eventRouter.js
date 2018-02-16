import express from 'express';

import {
  createEventController,
  getAllEventsController,
  getEventsByItinController,
  eventByIdController,
} from './eventControllers';

const router = express.Router();

router.route('/createEvent').post(createEventController);
router.route('/getAllEvents').get(getAllEventsController);
router.route('/getEventsByItin/:id').get(getEventsByItinController);
router.route('/getEventById/:id').get(eventByIdController);

export default router;
