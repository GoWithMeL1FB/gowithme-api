import {
  createEventQuery,
  getAllEventsQuery,
  getEventsByItinQuery,
  getEventsByIdQuery,
} from './eventQueries';
import { success, error } from '../../lib/logger';

export const createEventController = async(req, res) => {
  try {
    const result = await createEventQuery(req.body);
    // success('Controller - created a query');
    return res.status(200).send(result);
  } catch (err) {
    error('Controller - Event was not created', err);
    res.status(403).send(err.message);
  }
};

export const getAllEventsController = async(req, res) => {
  try {
    const allEvents = await getAllEventsQuery();
    return res.status(200).send(allEvents);
  } catch(err) {
    error('Controller - Failed to query all events');
    throw new Error(err.message);
  }
};

export const getEventsByItinController = async(req, res) => {
  try {
    const itinEvents = await getEventsByItinQuery(req.params.id);

    const eventInfo = [];
    for (let i = 0; i < itinEvents.events.length; i++) {
      const event = await getEventsByIdQuery(itinEvents.events[i]);
      eventInfo.push(event);
    }
    res.status(200).send(eventInfo);
  } catch(err) {
    error('Controller - Failed to query event by itinerary id');
    throw new Error(err.message);
  }
}