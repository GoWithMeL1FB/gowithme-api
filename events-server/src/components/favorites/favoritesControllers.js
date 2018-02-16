import {
  getFavesByUsernameQuery,
  faveSomethingQuery,
  deleteFaveItemQuery,
  getItinDetailsQuery,
} from './favoritesQueries';

import Favorites from '../../config/schemas/favories';
import { error } from '../../lib/logger';


// fetches data from users Favorites schema
export const getFavesController = async(req, res) => {
  try {
    const allFaves = await getFavesByUsernameQuery(req.params.username);
    // const itinEvents = await getItinDetailsQuery(allFaves);
    res.status(200).send(allFaves);
  } catch(err) {
    error('Controller - failed to fetch user faves');
    res.status(500).send(err.message);
  }
}

// dynamically fav something
// pass in username, type (itinerary or event), id
export const faveSomethingController = async(req, res) => {
  try {
    const response = await faveSomethingQuery(req.body);

    res.status(200).send(response);
  } catch(err) {
    error('Controller - failed to favorite whatever the hell you wanted to fav');
    res.status(500).send(err.message);
  }
}

// creates a fav table for the user
// pass in username
export const newFavoritesController = async(req, res) => {
  try {
    const { owner } = req.body;
    const newFaves = new Favorites({
      owner,
    });

    newFaves.save();
    return res.status(200).send(newFaves);
  } catch(err) {
    error('Controller - failed to create favorites schema', err);
    res.status(500).send(err.message);
  }
}

// delete a favorite list item
// how can i add a fail safe????
export const deleteFaveItemController = async(req, res) => {
  try {
    const deleteStatus = await deleteFaveItemQuery(req.body);
    res.status(200).send(deleteStatus);
  } catch(err) {
    error('Controller - failed to delete item');
    res.status(500).send(err.message);
  }
}