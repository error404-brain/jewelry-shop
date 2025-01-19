import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Swarovski_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchItem from './searchItem';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

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
            <Link to="/products/category/6" className="text-black text-lg font-Times hover:opacity-50">Watches</Link>
            <a href="#" className="text-black text-lg font-Times hover:opacity-50">Accessories</a>
            <a href="#" className="text-black text-lg font-Times hover:opacity-50">Decoration</a>
            <a href="#" className="text-black text-lg font-Times hover:opacity-50">Gift</a>
            <a href="#" className="text-black text-lg font-Times hover:opacity-50">World of Swarovski</a>
            <button
              className="text-black text-lg hover:opacity-50"
              onClick={() => setShowSearch(true)}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </nav>
      </div>

      {/* Giao diện cho điện thoại */}
      <div className="block md:hidden">
        <div className="container mx-auto flex justify-between items-center p-4">
          <img src={logo} alt="Swarovski Logo" className="w-auto h-20" />
          <button
            className="text-black text-sm font-Times hover:opacity-50"
            onClick={() => setShowMenu(!showMenu)}
          >
            ☰
          </button>
        </div>
        {showMenu && (
          <nav className="bg-white border-gray-800 p-4">
            <ul className="flex flex-col space-y-2">
              <a href="#" className="text-black text-lg font-Times hover:opacity-50">New in</a>
              <Link to="/products" className="text-black text-lg font-Times hover:opacity-50">Jewelry</Link>
              <Link to="/products/category/6" className="text-black text-lg font-Times hover:opacity-50">Watches</Link>
              <a href="#" className="text-black text-lg font-Times hover:opacity-50">Accessories</a>
              <a href="#" className="text-black text-lg font-Times hover:opacity-50">Decoration</a>
              <a href="#" className="text-black text-lg font-Times hover:opacity-50">Gift</a>
              <a href="#" className="text-black text-lg font-Times hover:opacity-50">World of Swarovski</a>
            </ul>
          </nav>
        )}
      </div>

      {/* Hiển thị SearchItem */}
      {showSearch && <SearchItem onClose={() => setShowSearch(false)} />}
    </header>
  );
}

export default Header;
