import Event from '../../config/schemas/event';
import EventInstance from '../../config/schemas/eventsInstance';
import Itinerary from '../../config/schemas/itinerary';

export const createEventHelper = ({
  name, description, location, category, atendees, prefix, suffix }) => (
  new Event({
    name,
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
  name, description, location, category, attendees, prefix, suffix, date,
  start, end, duration, itineraryId }) => (
  new EventInstance({
    name,
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
    _itineraryId: itineraryId,
  })
);

export const getAllEventsHelper = () => (
  Event.find()
)


export const getEventsByItinSQLHelper = (id) => (
  Itinerary.findById(id)
)

export const getEventByIdSQLHelper = (id) => (
  EventInstance.findById(id)
)

export const eventByIdHelper = (id) => (
  Event.findById(id)
)
