import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchProducts = async () => {
  try {
    const response = await api.get('/products/products');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchProductById = async (productId) => {
  try {
    const response = await api.get(`/products/products/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  } 
};

export const fetchProductByCategoryId = async (categoryId) => {
  try {
    const response = await api.get(`/products/products/category/${categoryId}`);
    return response.data;  
  } catch (error) {
    throw error;
  }
};

export const searchProductByName = async (productName) => {
  try {
    const response = await api.get(`/products/find/search?query=${productName}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const createCustomer = async (customerData) => {
  try {
    const response = await api.post('/customers/customer', customerData);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const loginCustomer = async (username, password) => {
  try {
    const response = await api.post('/customers/login', {
      user_name: username,
      user_password: password
    });
    return response;
  } catch (error) {
    throw error;
  }
}
