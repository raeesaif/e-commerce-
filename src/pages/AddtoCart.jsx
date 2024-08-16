import React from 'react';
import { useRecoilValue } from 'recoil';
import { cartstate } from '../atomrecoil/atom';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const AddtoCart = () => {
  const cart = useRecoilValue(cartstate);

  return (
    <div className='flex flex-col min-h-screen'>
    <Header/>
    <div className="flex-1 w-full max-w-5xl mx-auto mt-8 p-4  ">
      <h2 className="text-3xl font-semibold text-center mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cart.map(product => (
            <div key={product.id} className="bg-gray-800 p-4 rounded-lg shadow-lg border-dotted border-2 border-sky-200">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-64 object-cover mb-4 rounded-t-lg" 
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">{product.title}</h3>
                <p className="text-gray-400 mb-2">{product.description}</p>
                <p className="text-gray-100">PKR{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <Link to="/" className="mt-8 block text-center text-blue-500">Continue Shopping</Link>
    </div>
    <Footer />  

    </div>
);
  
};

export default AddtoCart;
