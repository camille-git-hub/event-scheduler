import { createEvent } from "../services/api";
import { useEffect } from "react";

const EventForm = () => {

  return (
    <div>
      <h1>Add New Event</h1>
        <form>
            <label> Title:</label>
            <input type="text" name="title" />
            <label> Description:</label>
            <textarea name="description"></textarea>
            <label> Date:</label>
            <input type="datetime-local" name="date" />
            <button type="submit">Create Event</button>
        </form>
    </div>
  );
};

export default EventForm;