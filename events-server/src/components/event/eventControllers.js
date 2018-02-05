import { createEventQuery } from './eventQueries';
// import Events from '../../config/schemas/event';
import { success, error } from '../../lib/logger';

export const createEventController = async (req, res) => {
  try {
    const result = await createEventQuery(req.body);
    success('Controller - created a query');
    return res.status(200).send(result);
  } catch (err) {
    error('event was not created', err);
    res.status(403).send(err.message);
  }
};
