import axios from 'axios';

const BASE_URL = 'https://api.mocki.io/v1/';

export const api = axios.create({
  baseURL: BASE_URL,
});
