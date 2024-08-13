import React from 'react';
import { useRecoilState } from 'recoil';
import { cartstate } from '../atomrecoil/atom';
import { useNavigate } from 'react-router-dom';

 const ProductCard = ({ image, title, description, price }) => {
  const [cart, setCart] = useRecoilState(cartstate);
  const navigate = useNavigate(); // Hook for navigation

  const handleAddToCart = () => {
    setCart((prevCart) => [
      ...prevCart,
      { image, title, description, price },
    ]);
    navigate('/addtocart'); // Navigate to cart page
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col">
      <div className="flex-grow">
        <img src={image} alt={title} className="w-full h-68 object-cover mb-4" />
      </div>
      <div className="p-4 flex flex-col">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-gray-400 flex-grow">{description}</p>
        <p className="text-gray-100 mt-2">${price}</p>
        <button
          onClick={handleAddToCart}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default ProductCard;