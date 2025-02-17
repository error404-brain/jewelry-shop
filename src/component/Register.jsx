import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser, faHome } from '@fortawesome/free-solid-svg-icons';
import { createCustomer } from '../Api';

const Register = () => {
  // Khai báo state ngoài hàm handleRegister
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Xử lý đăng ký
  const handleRegister = async (e) => {
    e.preventDefault();

    // Kiểm tra mật khẩu khớp nhau
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    // Kiểm tra các trường không được để trống
    if (!username || !password || !address) {
      setError('Please fill in all fields!');
      return;
    }

    // Gọi API đăng ký
    try {
      const response = await createCustomer({
        user_name: username,
        user_password: password,
        user_address: address
      });
      if (response) {
        alert('Account created successfully!');
        navigate('/login');
      }
    } catch (error) {
      if (error.response && error.response.data.errors) {
        setError(error.response.data.errors[0].msg);
      } else {
        setError('Failed to create account!');
      }
    }

    // Xóa dữ liệu sau khi đăng ký (dù thành công hay thất bại)
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setAddress('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white-500 to-indigo-600 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Account</h2>

        {/* Hiển thị thông báo lỗi */}
        {error && (
          <div className="mb-4 text-red-500 text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister}>
          {/* Username */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              <FontAwesomeIcon icon={faUser} className="mr-2" /> Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              <FontAwesomeIcon icon={faHome} className="mr-2" /> Address
            </label>
            <input
              type="text"
              placeholder="Enter your address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              <FontAwesomeIcon icon={faLock} className="mr-2" /> Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              <FontAwesomeIcon icon={faLock} className="mr-2" /> Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 mt-4 rounded-lg hover:bg-green-600 transition-all duration-300 shadow-md"
          >
            Create Account
          </button>

          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="text-blue-500 hover:underline">
                Login here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
