// const CreateEventPage = () => {
//   return (
//     <div>
//       <h1>Create Event Page</h1>
//       {/* Create event form goes here */}
//     </div>
//   );
// }       

// export default CreateEventPage;

import React, { useState } from "react";
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

      navigate(`/events/${created.id}`);
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
