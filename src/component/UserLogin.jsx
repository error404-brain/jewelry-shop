import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { loginCustomer } from '../Api';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Xử lý đăng nhập
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!username || !password) {
      setError('Username and password are required!');
      return;
    }
  
    try {
      // Gọi API đăng nhập
      const response = await loginCustomer(username, password);
  
      // Kiểm tra dữ liệu trả về
      if (!response || !response.data || !response.data.token) {
        setError('Failed to login. Invalid response from server.');
        return;
      }
  
      // Lưu token vào localStorage
      const { token, user } = response.data;
      localStorage.setItem('authToken', token);
      localStorage.setItem('userName', user.user_name);
  
      // Thông báo và chuyển hướng
      alert('Login successful!');
      navigate('/products');
  
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Failed to login. Please try again.';
      setError(errorMsg);
    }
  };
  

  // Xử lý chuyển hướng đến trang đăng ký
  const handleCreateAccount = () => {
    navigate('/register');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white-500 to-indigo-600 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">User Login</h2>

        {/* Hiển thị thông báo lỗi nếu có */}
        {error && (
          <div className="mb-4 text-red-500 text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
              <FontAwesomeIcon icon={faUser} className="mr-2" /> Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              <FontAwesomeIcon icon={faLock} className="mr-2" /> Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 mt-4 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md"
          >
            Login
          </button>
        </form>

        {/* Extra actions */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-3">Don't have an account?</p>
          <button
            onClick={handleCreateAccount}
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-all duration-300 shadow-md"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
