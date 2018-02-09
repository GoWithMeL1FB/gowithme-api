import { createEventHelper, createEventInstanceHelper, getAllEventsHelper } from './eventSQLHelpers';
import { success, error } from '../../lib/logger';

export const createEventQuery = async (body) => {
  try {
    // save generic event to db
    const sharedEvent = createEventHelper(body);
    const data = await sharedEvent.save();

    // use data._id to save event id to users' event
    const userEvent = createEventInstanceHelper(body, data);
    const uEvent = await userEvent.save();

    // return users' event that was saved
    success('Queries - event added');
    return uEvent;
  } catch (err) {
    error('Queries - did not query DB\n', err);
    return err.message;
  }
};

export const getAllEventsQuery = async (body) => {
  try {
    // calls db for all events
    const data = await getAllEventsHelper();
    console.log(data);
    return data;
  } catch(err) {
    error('Queries - failed to grab all events')
    throw new Error(err);
  }
}
