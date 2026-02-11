const API_BASE_URL = "http://localhost:3001";

function getToken() {
  return localStorage.getItem("token");
}

async function request(path, options = {}) {
  const url = `${API_BASE_URL}${path}`;

  const token = getToken();

  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, {
    ...options,
    headers,
  });

  let data = null;
  try {
    data = await res.json();
  } catch {
  }

  if (!res.ok) {
    const message =
      (data && (data.message || data.error)) ||
      `Request failed with status ${res.status}`;
    throw new Error(message);
  }

  return data;
}

/* ---------------------------
   EVENTS
---------------------------- */

// Get all events
export function getEvents() {
  // GET /api/events
  return request("/api/events");
}

export function getEventById(id) {
  // GET /api/events/:id
  return request(`/api/events/${id}`);
}

export function createEvent(eventBody) {
  // POST /api/events
  return request("/api/events", {
    method: "POST",
    body: JSON.stringify(eventBody),
  });
}

export function updateEvent(id, eventBody) {
  // PUT /api/events/:id
  return request(`/api/events/${id}`, {
    method: "PUT",
    body: JSON.stringify(eventBody),
  });
}

export function deleteEvent(id) {
  // DELETE /api/events/:id
  return request(`/api/events/${id}`, {
    method: "DELETE",
  });
}

/* ---------------------------
   AUTH
---------------------------- */

export function signUp(userBody) {
  // POST /api/users
  return request("/api/users", {
    method: "POST",
    body: JSON.stringify(userBody),
  });
}

export function login(credentials) {
  // POST /api/auth/login
  return request("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
}
