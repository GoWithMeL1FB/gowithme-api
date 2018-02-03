import { createEventHelper } from './eventSQLHelpers';
import { success, error } from '../../lib/logger';

export const createEventQuery = async (body) => {
  try {
    const newEvent = createEventHelper(body);
    const data = await newEvent.save();
    success('add event sql query created');
    return data;
  } catch (err) {
    error('was not able to send query to database;', err);
  }
};
