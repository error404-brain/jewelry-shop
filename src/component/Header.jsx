// src/component/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Swarovski_logo.png';

function Header() {
  return (
    <header>
      {/* Giao diện cho máy tính */}
      <div className="hidden md:block">
        <div className="container mx-auto flex justify-center items-center hover:opacity-50 hover:bg-grey-800">
          <Link to="/" className="text-black text-lg font-Times hover:opacity-50">
            <img src={logo} alt="Swarovski Logo" className="w-auto h-32" />
          </Link>
        </div>
        <nav className="bg-white border-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <a href="#" className="text-black text-lg font-Times hover:opacity-50">New in</a>
            <Link to="/products" className="text-black text-lg font-Times hover:opacity-50">Jewelry</Link>
            <Link to="/products/category/6" className="text-black text-lg font-Times hover:opacity-50">Watches</Link> {/* Link đến trang đồng hồ */}
            <a href="#" className="text-black text-lg font-Times hover:opacity-50">Accessories</a>
            <a href="#" className="text-black text-lg font-Times hover:opacity-50">Decoration</a>
            <a href="#" className="text-black text-lg font-Times hover:opacity-50">Gift</a>
            <a href="#" className="text-black text-lg font-Times hover:opacity-50">World of Swarovski</a>
          </div>
        </nav>
      </div>

      {/* Giao diện cho điện thoại */}
      <div className="block md:hidden">
        <div className="container mx-auto flex justify-center items-center hover:opacity-50 hover:bg-grey-800">
          <img src={logo} alt="Swarovski Logo" className="w-auto h-20" />
        </div>
        <nav className="bg-white border-gray-800 p-4">
          <div className="container mx-auto flex flex-wrap justify-between items-center">
            <a href="#" className="text-black text-sm font-Times hover:opacity-50">Menu</a>
            <button className="text-black text-sm font-Times hover:opacity-50">☰</button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
