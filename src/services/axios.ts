import axios from 'axios';
import { parseCookies } from 'nookies';

export function getAPIClient(ctx?: any) {
  // const { 'nextauth.token': token } = parseCookies(ctx)
  const cookies = parseCookies(ctx);
  const token = cookies['nextauth.token'];

  const api = axios.create({
    baseURL: 'http://localhost:3333',
  });

  // Function called whenever a request is made to the server
  api.interceptors.request.use((config) => {
    console.log(config);

    return config;
  });

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  return api;
}
