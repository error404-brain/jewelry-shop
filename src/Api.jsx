// src/utils/api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Địa chỉ API của bạn
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    throw error;
  }
};
