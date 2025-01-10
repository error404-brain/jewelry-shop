// src/components/Products.js

import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../Api';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching products!');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-lg font-semibold">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-lg text-red-500">{error}</div>;
  }

  return (
    <div className="relative">
      <video
        className="w-full h-48 sm:h-64 md:h-[30rem] lg:h-[35rem] object-cover"
        autoPlay
        muted
        loop
      >
        <source
          src="https://asset.swarovski.com/videos/f_auto,q_auto,w_1920,h_1080,c_fill/so_7,eo_13/swa-cms/videos/SWA_TEASER01_16-9/TT.mp4"
          type="video/mp4"
        />
      </video>
      <div className="w-full bg-orange-100 py-10 px-4">
        <p className="text-black text-2xl md:text-3xl text-center font-serif">Masters of Light Since 1895</p>
        <p className="text-black text-base md:text-lg text-center font-serif mt-4 leading-relaxed">
          Since 1895, founder Daniel Swarovski’s passion for innovation and design, and mastery of crystal cutting has defined Swarovski as
          <br className="hidden md:inline" />
          the leading jewelry and accessories brand.
        </p>
      </div>

      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-64 object-cover transform transition-all duration-500 ease-in-out hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{product.description}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
