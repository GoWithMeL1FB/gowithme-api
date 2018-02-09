import { getEventInfo, addEventToItin, allItineraryQuery } from './itineraryQueries';
import Itinerary from '../../config/schemas/itinerary';
// import Events from '../../config/schemas/event';
import { success, error } from '../../lib/logger';

export const createItinerary = async (req, res) => {
  try {
    const { title, owner, image } = req.body;
    // new instance of Itinearry with props from req.body
    const newItinerary = new Itinerary({
      title,
      owner,
      image,
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

export const addEvent = async (req, res) => {
  try {
    // get event info with profided eventInstances' id
    const eventInfo = await getEventInfo(req.body);

    // find user's itinerary and update events
    const addEventTo = await addEventToItin(req.body, eventInfo);

    // success('Controller - event added to itinerary');
    return res.status(200).send(addEventTo);
  } catch (err) {
    error('failed to add event to itinerary');
    res.status(403).send(err.message);
  }
};

export const allItineraries = async (req, res) => {
  try {
    const allItin = await allItineraryQuery();
    console.log('controller - itin:', allItin);
    return res.status(200).send(allItin);
  } catch(err) {
    error('Controller - failed to query all itineraries');
    throw new Error(err.message);
  }
}
