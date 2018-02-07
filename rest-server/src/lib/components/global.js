import db from '../../config/database';
import { success, error } from '../../lib/logger';

export const globalQueryHelper = async (payload, queryName, name) => {
  try {
    const queryString = queryName(payload);
    const data = await db.query(queryString);
    success(`${name} - successfully retrieved data ${JSON.stringify(data)}`);
    return data;
  } catch (err) {
    error(`${name} - error: ', err`);
    throw new Error(err);
  }
};