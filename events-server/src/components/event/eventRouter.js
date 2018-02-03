import express from 'express';

import { createEventController } from './eventControllers';

const router = express.Router();

router.route('/createEvent').post(createEventController);

export default router;
