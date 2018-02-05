import { createEventQuery } from './eventQueries';
import Itinerary from '../../config/schemas/itinerary';
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

export const createItinerary = async (req, res) => {
  try {
    const { title, owner } = req.body;

    // new instance of Itinearry with props from req.body
    const newItinerary = new Itinerary({
      title,
      owner,
    });

    // saves itinerary instance to db
    newItinerary.save();
    success('Controller - new itinerary');
    return res.status(200).send(newItinerary);
  } catch (err) {
    error('itinerary was not crated', err);
    res.status(403).send(err.message);
  }
};
