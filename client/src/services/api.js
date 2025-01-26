// PLACEHOLDER FOR API CALLS

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchEvents = async () => {
  const response = await api.get('/events');
  return response.data;
};

export const login = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

export default api;