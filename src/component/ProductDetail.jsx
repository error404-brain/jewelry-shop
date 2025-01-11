// src/components/ProductDetail.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../Api';

const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    fetchProductById(id)
      .then((data) => {
        setProduct(data);
        setMainImage(data.images[0]?.image_url); // Set the first image as the main image
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching product details!');
        setLoading(false);
      });
  }, [id]);

  const handleImageClick = (imageUrl) => {
    setMainImage(imageUrl); // Update the main image when a thumbnail is clicked
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <img
            src={mainImage}
            alt={product.name}
            className="w-full h-100 object-cover"
          />
          <div className="flex mt-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image.image_url}
                alt={`Thumbnail ${index}`}
                className="w-24 h-24 object-cover cursor-pointer hover:border-2 border-blue-500 m-2"
                onClick={() => handleImageClick(image.image_url)} // Change main image when clicked
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-xl text-gray-600">{product.description}</p>
          <p className="text-lg font-semibold mt-2">Price: ${product.price}</p>
          <p className="text-lg mt-2">Category: {product.category.name}</p>
          <p className="text-lg mt-2">Stock: {product.stock}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
