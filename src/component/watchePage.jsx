// src/component/watchePage.jsx
import React, { useState, useEffect } from 'react';
import { fetchProductByCategoryId } from '../Api'; // Hàm lấy sản phẩm theo categoryId
import { Link } from 'react-router-dom'; // Import Link

const Productswatches = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch sản phẩm đồng hồ (categoryId = 6)
    const fetchWatches = async () => {
      try {
        const data = await fetchProductByCategoryId(6); // Lấy sản phẩm thuộc danh mục đồng hồ
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching watches!');
        setLoading(false);
      }
    };

    fetchWatches();
  }, []); // Chỉ fetch sản phẩm một lần khi component mount

  if (loading) {
    return <div className="text-center text-lg font-semibold">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-lg text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.images[0]?.image_url}
                alt={product.name}
                className="w-full h-64 object-cover transform transition-all duration-500 ease-in-out hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{product.description}</p>
                <p className="text-gray-700 text-sm mt-2">
                  <strong>Category:</strong> {product.category.name}
                </p>
                <p className="text-gray-900 text-lg font-semibold mt-4">${product.price}</p>
                <p className="text-gray-600 text-sm mt-2">Stock: {product.stock}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productswatches;
