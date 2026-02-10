
const EventCard = ({ event }) => {
  return (
    <div>
      <h1>Event Card</h1>
      <ul>
        <li>{event.title}</li>
        <li>Date: {new Date(event.date).toLocaleDateString('en-GB', { timeZone: 'Europe/Berlin' })}</li>
        <li>Location: {event.location}</li>
      </ul>
    </div>
  );
}

export default EventCard;