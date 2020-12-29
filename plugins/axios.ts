import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://backend.maxim-makarov.work/api/collections/get',
  timeout: 10000,
  headers: {
    'Cockpit-Token': '46a4dafdbbfead720b8aefcddd1e8e'
  }
});
