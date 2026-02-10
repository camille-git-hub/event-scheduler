import { useEffect, useState } from 'react';
import { getAllEvents } from '../services/api';
import {useNavigate} from 'react-router-dom';

const Home = () => {

    const [events, setEvents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllEvents().then(events => {
        setEvents(events);
        });
    }, []);

  return (
    <div>
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-5xl font-bold text-center text-primary p-4 mt-10">Welcome to the Event Scheduler!</h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl">Plan and manage your events with ease. Create, edit, and track all your events in one place. Stay organized and never miss an important date again!</p>
    </div>
    <div className="flex justify-center">
        <button onClick={() => navigate('/api/new-event')} className="btn font-bold py-2 px-4 mt-6 rounded self-center hover:bg-black-200">+  Create New Event</button>
    </div>
    <h2 className="text-3xl font-bold text-center text-primary p-4 mt-6">Incoming Events</h2>
        <div>
        {events.length > 0 ? (
          <ul className="list bg-base-100 rounded-box shadow-md ml-4 mr-4 p-4">
            {events.map(event => (
              <li onClick={() => navigate(`/events/${event.id}`)} className="list-row text-secondary text-lg" key={event.id}>{event.title} - {new Date(event.date).toLocaleDateString('en-GB', { timeZone: 'Europe/Berlin' })}</li>
            ))}
          </ul>
        ) : (
          <p>No upcoming events.</p>
        )}
      </div>
    </div>
  )
}

export default Home;