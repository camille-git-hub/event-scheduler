const API_URL = "http://localhost:3001";

function getToken() {
  return localStorage.getItem("token");
}

const getAllEvents = async () => {
    try {
        const response = await fetch(`${API_URL}/api/events`); 
        if (!response.ok) {
            throw new Error(`Error found: ${response.status})`);
        }
        const result = await response.json();
        return result;
    } catch (err) {
        console.error('Error:', err);
    }
};

const signUp = async (userData) => {
    try {
        const response = await fetch(`${API_URL}/auth/register`, {
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
    }
};

const login = async (credentials) => {
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
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
    }
};

export { getAllEvents, getToken, signUp, createEvent, getEventById, updateEvent, deleteEvent, login };  
