import {
  createEventHelper,
  createEventInstanceHelper,
  getAllEventsHelper,
  getEventsByItinSQLHelper,
  getEventByIdSQLHelper,
  eventByIdHelper,
} from './eventSQLHelpers';
import { success, error } from '../../lib/logger';

export const createEventQuery = async(body) => {
  try {
    // save generic event to db
    const sharedEvent = createEventHelper(body);
    const data = await sharedEvent.save();

    // use data._id to save event id to users' event
    const userEvent = createEventInstanceHelper(body);
    const uEvent = await userEvent.save();

    // return users' event that was saved
    success('Queries - event added');
    return uEvent;
  } catch (err) {
    error('Queries - did not query DB\n', err);
    return err.message;
  }
};

export const getAllEventsQuery = async(body) => {
  try {
    // calls db for all events
    const data = await getAllEventsHelper();
    return data;
  } catch(err) {
    error('Queries - failed to grab all events')
    throw new Error(err.message);
  }
};

export const getEventsByItinQuery = async(id) => {
  try {
    const itin = await getEventsByItinSQLHelper(id);
    return itin;
  } catch(err) {
    error('Queries - failed to get event with itin id');
    throw new Error(err.message);
  }
}

export const getEventsByIdQuery = async(event) => {
  try {
    const events = await getEventByIdSQLHelper(event);
    return events;
  } catch(err) {
    error('Queries - failed to get event by id');
    throw new Error(err.message);
  }
}

export const eventByIdQuery = async(id) => {
  try {
    const details = await eventByIdHelper(id);
    console.log('query - event info:', details);
    return details;
  } catch(err) {
    error('Queries - failed to query event details');
    throw new Error(err.message);
  }
}
