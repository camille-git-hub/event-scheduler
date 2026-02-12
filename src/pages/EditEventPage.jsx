import { useEffect, useState } from "react";
import { getEventById, updateEvent } from "../services/api.js";
import { useNavigate, useParams } from "react-router-dom";
import EventForm from "../components/EventForm.jsx";

export default function EditEventPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        setError("");
        const data = await getEventById(id);
        setInitialValues(data);
      } catch (e) {
        setError(e.message);
      }
    }
    load();
  }, [id]);

  async function handleUpdate(formData) {
    try {
      setError("");
      await updateEvent(id, formData);
      navigate(`/events/${id}`);
    } catch (e) {
      setError(e.message);
    }
  }

  if (error) return <div className="alert alert-error">{error}</div>;
  if (!initialValues) return <p>Loading event for edit...</p>;

  return (
    <div className="max-w-xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Edit Event</h1>

      <EventForm
        initialValues={initialValues}
        onSubmit={handleUpdate}
        submitText="Save changes"
      />
    </div>
  );
}
