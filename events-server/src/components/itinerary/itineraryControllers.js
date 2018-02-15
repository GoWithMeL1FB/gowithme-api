import {
  getEventInfo,
  addEventToItin,
  allItineraryQuery,
  getItinerariesByUsernameQuery,
} from './itineraryQueries';
import Itinerary from '../../config/schemas/itinerary';
import { success, error } from '../../lib/logger';

// creates itinerary and returns itin id
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

// add event to itinerary / takes itin id and event id
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

// gets all itineraries
export const allItineraries = async (req, res) => {
  try {
    const allItin = await allItineraryQuery();
    console.log('controller - itin:', allItin);
    return res.status(200).send(allItin);
  } catch(err) {
    error('Controller - failed to query all itineraries');
    throw new Error(err.message);
  }
};

// gets all itineraries by username
export const getItinerariesByUsernameController = async (req, res) => {
  console.log("req params", req.params.username);
  try {
    const itinerariesByUsername = await getItinerariesByUsernameQuery(req.params.username);

    return res.status(200).send(itinerariesByUsername);

  } catch(err) {
    error('Controller - Failed to fetch events by username')
    throw new Error(err.message);
  }
}
