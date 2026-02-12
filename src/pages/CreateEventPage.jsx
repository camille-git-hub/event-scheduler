import { useState } from "react";
import { createEvent } from "../services/api.js";
import { useNavigate } from "react-router-dom";
import EventForm from "../components/EventForm.jsx";

export default function CreateEventPage() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  async function handleCreate(formData) {
    try {
      setError("");
      const created = await createEvent(formData);

      navigate(`/api/events/${created.id}`);
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <div className="max-w-xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Create Event</h1>

      {error && <div className="alert alert-error">{error}</div>}

      <EventForm
        initialValues={{}}
        onSubmit={handleCreate}
        submitText="Create"
      />
    </div>
  );
}
