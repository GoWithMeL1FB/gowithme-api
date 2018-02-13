import {
  likeQuery,
  statCheckerQuery,
} from './statsQueries';

import { error } from '../../lib/logger';

// like event listener / controller
export const likeController = async(req, res) => {
  try {
    const response = await likeQuery(req.body);
    res.status(200).send(response);
  } catch(err) {
    error('Controller - failed to like what ever the heck you like');
    res.status(500).send(err.message);
  }
}
