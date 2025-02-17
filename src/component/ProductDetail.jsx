import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductById } from '../Api';

const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from URL
  const navigate = useNavigate(); // Hook để chuyển hướng
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [mainImage, setMainImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [quantityError, setQuantityError] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    fetchProductById(id)
      .then((data) => {
        setProduct(data);
        setMainImage(data.images[0]?.image_url); 
        setLoading(false);
      })
      .catch(() => {
        setError('Error fetching product details!');
        setLoading(false);
      });
  }, [id]);

  const handleImageClick = (imageUrl) => {
    setMainImage(imageUrl); 
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);

    if (value < 1) {
      setQuantityError('Quantity must be at least 1.');
      setQuantity(1);
    } else if (value > product.stock) {
      setQuantityError(`Quantity exceeds stock (${product.stock}).`);
      setQuantity(product.stock);
    } else {
      setQuantityError('');
      setQuantity(value);
    }
  };

  // Xử lý khi bấm nút "Mua Hàng"
  const handleBuyNow = () => {
    const token = localStorage.getItem('authToken');

    if (!token) {
      navigate('/login');
    } else {
      addToCart();
    }
  };

  const addToCart = () => {
    const cartItem = {
      productId: product.id,
      quantity,
    };

    fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
      body: JSON.stringify(cartItem),
    })
      .then((response) => {
        if (response.ok) {
          alert('Sản phẩm đã được thêm vào giỏ hàng!');
          setButtonClicked(true);
        } else {
          throw new Error('Failed to add to cart');
        }
      })
      .catch((error) => {
        console.error('Error adding to cart:', error);
        alert('Có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng.');
      });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (buttonClicked) return <div>Button clicked</div>;

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Hình ảnh sản phẩm */}
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
                onClick={() => handleImageClick(image.image_url)}
              />
            ))}
          </div>
        </div>

        {/* Thông tin sản phẩm */}
        <div>
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-xl text-gray-600">{product.description}</p>
          <p className="text-lg font-semibold mt-2">Price: ${product.price}</p>
          <p className="text-lg mt-2">Category: {product.category.name}</p>
          <p className="text-lg mt-2">Stock: {product.stock}</p>

          {/* Input số lượng */}
          <div className="mt-4">
            <label htmlFor="quantity" className="block text-lg font-medium">
              Quantity:
            </label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              className="border border-gray-300 p-2 rounded w-24"
              min="1"
            />
            {quantityError && (
              <p className="text-red-500 text-sm mt-1">{quantityError}</p>
            )}
          </div>

          {/* Nút Mua Hàng */}
          <button
            className={`bg-black text-white px-4 py-2 mt-4 hover:bg-neutral-500 ${
              quantityError ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!!quantityError}
            onClick={handleBuyNow}
          >
            Mua Hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
