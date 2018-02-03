import Event from '../../config/schemas/event';

export const createEventHelper = ({ title, description, location, category, atendees }) => (
  new Event({
    title,
    description,
    location,
    category,
    atendees,
  })
);
