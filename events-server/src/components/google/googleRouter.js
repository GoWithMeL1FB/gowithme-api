import express from 'express';

import { getDistance } from './googleControllers';

const router = express.Router();

router.route('/getDistance').get(getDistance)

export default router;