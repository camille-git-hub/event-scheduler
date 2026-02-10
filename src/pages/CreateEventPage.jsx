import EventForm from "../components/EventForm";

const CreateEventPage = () => {
  return (
    <div>
        <div>
            <h1>Create Event Page</h1>
            <EventForm />
        </div>
        <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Save</button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded mt-4 ml-2">Cancel</button>
        </div>
    </div>
  );
}       

export default CreateEventPage;
     