import {
  createEventQuery,
  getAllEventsQuery,
} from './eventQueries';
import { success, error } from '../../lib/logger';

export const createEventController = async (req, res) => {
  try {
    const result = await createEventQuery(req.body);
    // success('Controller - created a query');
    return res.status(200).send(result);
  } catch (err) {
    error('Controller - Event was not created', err);
    res.status(403).send(err.message);
  }
};

export const getAllEventsController = async (req, res) => {
  try {
    const allEvents = await getAllEventsQuery();
    return res.status(200).send(allEvents);
  } catch(err) {
    error('Controller - Failed to query all events');
    throw new Error(err.message);
  }
};