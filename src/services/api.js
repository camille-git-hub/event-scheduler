const API_URL = "http://localhost:3001/api";

//`${API_URL}/events` 
//`${API_URL}/auth/login`  

const getToken = () => {
  return localStorage.getItem("token");
}

const getAllEvents = async () => {
  const token = getToken();
  const response = await fetch(`${API_URL}/events`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const data = await response.json();
  return data;
}   

