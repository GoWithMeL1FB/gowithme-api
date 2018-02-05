import Event from '../../config/schemas/event';
import EventInstance from '../../config/schemas/eventsInstance';

export const createEventHelper = ({
  title, description, location, category, atendees }) => (
  new Event({
    title,
    description,
    location,
    category,
    atendees,
  })
);

export const createEventInstanceHelper = ({
  title, description, location, category, attendees, date,
  start, end, duration, userId }, { _id }) => (
  new EventInstance({
    title,
    description,
    location,
    category,
    time: {
      date,
      start,
      end,
      duration,
      attendees,
    },
    _itineraryId: userId,
    _eventId: _id,
  })
);

export const getEventInfoHelper = ({ eventId }) => (

);
