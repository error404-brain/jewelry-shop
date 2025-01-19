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

export const fetchProductById = async (productId) => {
  try {
    const response = await api.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  } 
};

export const fetchProductByCategoryId = async (categoryId) => {
  try {
    const response = await api.get(`/products/category/${categoryId}`);
    return response.data;  // Trả về danh sách sản phẩm
  } catch (error) {
    throw error;
  }
};

export const searchProductByName = async (productName) => {
  try {
    const response = await api.get(`/find/search?query=${productName}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
