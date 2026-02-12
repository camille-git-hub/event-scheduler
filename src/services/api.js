const API_URL = "http://localhost:3001";

function getToken() {
  return localStorage.getItem("token");
}

const getIncomingEvents = async () => {
    try {
        const response = await fetch(`${API_URL}/api/events/incoming`); 
        if (!response.ok) {
            throw new Error(`Error found: ${response.status})`);
        }
        const data = await response.json();
        console.log('Raw data received:', data);
        console.log('Is array?', Array.isArray(data));
        console.log('Data length:', data?.length);
        
        return Array.isArray(data) ? data : [];
    } catch (err) {
        console.error('Error:', err);
        throw new Error('Failed to load events. Please try again.');

    }
};

const getAllEvents = async () => {
    try {
        const response = await fetch(`${API_URL}/api/events`); 
        if (!response.ok) {
            throw new Error(`Error found: ${response.status})`);
        }
        const data = await response.json();
        return data.results;
    } catch (err) {
        console.error('Error:', err);
        throw new Error('Failed to load events. Please try again.');

    }
};

const signUp = async (userData) => {
    try {
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        if (!response.ok) {
            throw new Error(`Error found: ${response.status})`);
        }
        const result = await response.json();
        return result;
    } catch (err) {
        console.error('Error:', err);
        throw new Error('Failed to register user. Please try again.');
    }
};

const login = async (credentials) => {
    try {
        const response = await fetch(`${API_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
        if (!response.ok) {
            throw new Error(`Error found: ${response.status})`);
        }
        const result = await response.json();
        return result;
    } catch (err) {
        console.error('Error:', err);
        throw new Error('Failed to login. Please check your credentials and try again.');
    }
};

const createEvent = async (eventData) => {
    try {
        const token = getToken();
        const response = await fetch(`${API_URL}/api/events`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(eventData),
        });
        if (!response.ok) {
            throw new Error(`Error found: ${response.status})`);
        }
        const result = await response.json();
        return result;
    } catch (err) {
        console.error('Error:', err);
        throw new Error('Failed to create event. Please try again.');
    }
};

const updateEvent = async (id, eventData) => {
    try {
        const token = getToken();
        const response = await fetch(`${API_URL}/api/events/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(eventData),
        });
        if (!response.ok) {
            throw new Error(`Error found: ${response.status})`);
        }
        const result = await response.json();
        return result;
    } catch (err) {
        console.error('Error:', err);
        throw new Error('Failed to update event. Please try again.');

    }
};

const getEventById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/api/events/${id}`);
        if (!response.ok) {
            throw new Error(`Error found: ${response.status})`);
        }
        const result = await response.json();
        return result;
    } catch (err) {
        console.error('Error:', err);
        throw new Error('Failed to fetch event details. Please try again.');
    }
};

const deleteEvent = async (id) => {
    try {
        const token = getToken();
        const response = await fetch(`${API_URL}/api/events/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        if (!response.ok) {
            throw new Error(`Error found: ${response.status})`);
        }
        const result = await response.json();
        return result;
    } catch (err) {
        console.error('Error:', err);
        throw new Error('Failed to delete event. Please try again.');
    }
};

export { getIncomingEvents, getAllEvents, getToken, signUp, createEvent, getEventById, updateEvent, deleteEvent, login };  
