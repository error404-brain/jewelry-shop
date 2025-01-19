import React, { useState, useEffect } from 'react';
import { searchProductByName } from '../Api'; // Import API

function SearchItem({ onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Debounce function
  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  // Fetch products based on search query
// Fetch products based on search query
const fetchProducts = async (query) => {
    if (query.trim()) {
      setLoading(true);
      try {
        const products = await searchProductByName(query); 
        const limitedProducts = products.slice(0, 3) ; 
        setSearchResults(limitedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
        setSearchResults([]);
      } finally {
        setLoading(false);
      }
    } else {
      setSearchResults([]);
    }
  };
  

  // Debounced search function
  const debouncedSearch = debounce((query) => fetchProducts(query), 500);

  useEffect(() => {
    if (searchQuery) {
      debouncedSearch(searchQuery);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg text-center w-full md:w-4/5 lg:w-3/4 shadow-xl border-2 border-gray-300 space-y-6">
        <h2 className="text-4xl font-serif font-semibold text-gray-800 mb-6">Search for Luxury Items</h2>

        {/* Search Bar */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter product name..."
          className="border border-gray-400 p-3 w-full rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />

        {loading && <p className="text-gray-500">Loading...</p>}

        {/* Advertising Section */}
        <div className="w-full bg-gray-100 p-4 rounded-md shadow-md mb-6">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Featured Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-md shadow-md hover:scale-105 transition-all">
              <img src="/default-ad-image.jpg" alt="Featured Product" className="w-full h-40 object-cover rounded-md mb-4" />
              <h4 className="text-lg font-semibold text-gray-800">Luxury Watch</h4>
              <p className="text-sm text-gray-500">Price: $499.99</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-md hover:scale-105 transition-all">
              <img src="/default-ad-image.jpg" alt="Featured Product" className="w-full h-40 object-cover rounded-md mb-4" />
              <h4 className="text-lg font-semibold text-gray-800">Designer Bag</h4>
              <p className="text-sm text-gray-500">Price: $799.99</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-md hover:scale-105 transition-all">
              <img src="/default-ad-image.jpg" alt="Featured Product" className="w-full h-40 object-cover rounded-md mb-4" />
              <h4 className="text-lg font-semibold text-gray-800">Stylish Sunglasses</h4>
              <p className="text-sm text-gray-500">Price: $149.99</p>
            </div>
          </div>
        </div>

        {/* Search Results Section */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {searchResults.length > 0 ? (
            searchResults.map((product) => (
              <li key={product.id} className="bg-white p-4 rounded-md shadow-md hover:scale-105 transition-all">
                <img
                  src={product.images[0]?.image_url || '/default-image.png'}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-500 mt-1">${product.price}</p>
              </li>
            ))
          ) : (
            <li className="text-gray-500">No products found</li>
          )}
        </ul>

        {/* Close Button */}
        <button
          className="bg-gradient-to-r from-red-500 to-red-700 text-white py-2 px-6 rounded-lg hover:bg-gradient-to-l transform hover:scale-105 transition-all"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default SearchItem;
