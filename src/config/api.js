import { create } from 'apisauce';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = create({
  baseURL,
  timeout: 60000
});

export default api;