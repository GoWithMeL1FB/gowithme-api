import { createEventHelper, createEventInstanceHelper, getEventInfoHelper } from './eventSQLHelpers';
import { success, error } from '../../lib/logger';

export const createEventQuery = async (body) => {
  try {
    // save generic event to db
    const sharedEvent = createEventHelper(body);
    const data = await sharedEvent.save();
    console.log('data: ', data);

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

export const getEventInfo = async (body) => {
  try {
    const eventInfo = await getEventInfoHelper(body);
    success('Queries - queried event info');
    return eventInfo;
  } catch (err) {
    error('Queries - could not query db for info \n', err);
    return err.message;
  }
};
