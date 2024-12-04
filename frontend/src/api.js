import axios from 'axios';
import { API_BASE_URL } from './config';

export const getTotalSales = async (startDate, endDate) => {
  const response = await axios.get(`${API_BASE_URL}/total_sales`, {
    params: { startDate, endDate },
  });
  return response.data;
};

export const getProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data;
};

// Add more functions for other API endpoints as needed
