import { useState } from "react";
import { createEvent } from "../services/api";


export default function EventForm({ initialValues, onSubmit, submitText }) {
  const [title, setTitle] = useState(initialValues.title || "");
  const [date, setDate] = useState(initialValues.date || "");
  const [location, setLocation] = useState(initialValues.location || "");
  const [description, setDescription] = useState(initialValues.description || "");

  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    setError("");

    const formData = {
      title,
      date,
      location,
      description,
    };

    onSubmit(formData);

    createEvent(formData);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="alert alert-error">{error}</div>}

      <label className="form-control">
        <span className="label-text">Title</span>
        <input
          className="input input-bordered"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. React Workshop"
        />
      </label>

      <label className="form-control">
        <span className="label-text">Date</span>
        <input
          className="input input-bordered"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="e.g. 2026-02-10"
        />
      </label>

      <label className="form-control">
        <span className="label-text">Location</span>
        <input
          className="input input-bordered"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="e.g. Berlin"
        />
      </label>

      <label className="form-control">
        <span className="label-text">Description</span>
        <textarea
          className="textarea textarea-bordered"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write details..."
        />
      </label>

      <button className="btn btn-primary w-full" type="submit">
        {submitText}
      </button>
    </form>
  );
}
