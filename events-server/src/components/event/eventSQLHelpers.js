import Event from '../../config/schemas/event';
import EventInstance from '../../config/schemas/eventsInstance';

export const createEventHelper = ({
  title, description, location, category, atendees, prefix, suffix }) => (
  new Event({
    title,
    description,
    location,
    category,
    atendees,
    photo: {
      prefix,
      suffix,
    },
  })
);

export const createEventInstanceHelper = ({
  title, description, location, category, attendees, prefix, suffix, date,
  start, end, duration, userId }, { _id }) => (
  new EventInstance({
    title,
    description,
    location,
    category,
    photo: {
      prefix,
      suffix,
    },
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

export const getAllEventsHelper = () => (
  Event.find()
)