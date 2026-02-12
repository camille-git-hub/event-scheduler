import EventCard from "../components/EventCard.jsx"
import { getAllEvents } from "../services/api.js";
import { useEffect, useState } from "react";

export default function EventsPage() {

    const [events, setEvents] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            try {
                setError("");
                const events = await getAllEvents();
                console.log("Data from getAllEvents:", events);
                console.log("Data type:", typeof events);
                console.log("Data length:", events?.length);

                const sorted = [...events].sort((a, b) => {
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

    if (error) {
        return <div className="alert alert-error">{error}</div>;
    }

  return <div>
    <div className="max-w-7xl mx-auto p-4 mt-6">
      <h1 className="text-3xl font-bold mb-4">All Events</h1>
      <div>{events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
      </div>
    </div>

  </div>
}
