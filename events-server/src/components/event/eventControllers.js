import { createEventQuery } from './eventQueries';
import { success, error } from '../../lib/logger';

export const createEventController = async (req, res) => {
  try {
    const result = await createEventQuery(req.body);
    success('create event controller was hit');
    return res.status(200).send(result);
  } catch (err) {
    error('event was not created', err);
  }
};
