import axios from "axios";

const accessToken = localStorage.getItem('token');

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
    Accept: 'application/json',
    'X-Header-FrontLocalOrigin': `http://${window.location.host}/api`,
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('session_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  console.error('[api] request error', error);
  return Promise.reject(error);
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.warn('[api] response error', error.response?.status, error.response?.data);
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('session_token');

      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);


export default api;