import axios from 'axios';

// Will need to be updated with an if based on the environment
const API_BASE_URL = 'http://localhost:3000/api';

export const axiosInstanceClient = axios.create({
  baseURL: API_BASE_URL,
});