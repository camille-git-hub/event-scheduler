import { useEffect, useState } from 'react';
import { getAllEvents } from '../services/api.js';
import EventCard from '../components/EventCard.jsx';

export default function Home() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        setError("");
        const data = await getAllEvents();

        const sorted = [...data].sort((a, b) => {
          if (!a.date || !b.date) return 0;
          return new Date(a.date) - new Date(b.date);
        });

        setEvents(sorted);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) {
    return (
      <div className="text-center">
        <span className="loading loading-spinner loading-lg"></span>
        <p className="mt-2">Loading events...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-6xl font-bold text-center text-primary p-4">Welcome to the Event Scheduler!</h1>
      <p className="text-2xl text-gray-800 text-center max-w-1xl">Plan and manage your events with ease. Create, edit, and track all your events in one place. Stay organized and never miss an important date again!</p>
      <h2 className="text-4xl text-center font-bold">Upcoming Events</h2>
      {error && <div className="alert alert-error">{error}</div>}

      {events.length === 0 ? (
        <div className="alert">No events found.</div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}
