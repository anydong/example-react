import axios from 'axios';

const option = {
  baseURL: 'https://www.v2ex.com',
  withCredentials: true,
};
const client = axios.create(option);

export default client;
