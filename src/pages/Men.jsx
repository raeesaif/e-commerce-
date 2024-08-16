import React from 'react';
import { Header } from "../components/Header";
import ProductCard from "../components/ProductCard";
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    image: "/images/men1.jpg",
    title: "T-Shirt",
    description: "Luxurious organic cotton T-shirt, perfect for everyday wear",
    price: "3500"
  },
  {
    id: 2,
    image: "/images/men2.jpg",
    title: "T-Shirt",
    description: "Luxurious organic cotton T-shirt, perfect for everyday wear",
    price: "3000"
  },
  {
    id: 3,
    image: "/images/boy.jpg",
    title: "T-Shirt",
    description: "Luxurious organic cotton T-shirt, perfect for everyday wear",
    price: "2000"
  },
  {
    id: 4,
    image: "/images/men3.jpg",
    title: "T-Shirt",
    description: "Luxurious organic cotton T-shirt, perfect for everyday wear",
    price: "5000"
  },
  {
    id: 5,
    image: "/images/men4.jpg",
    title: "T-Shirt",
    description: "Luxurious organic cotton T-shirt, perfect for everyday wear",
    price: "4000"
  },
  {
    id: 6,
    image: "/images/boy1.jpg",
    title: "T-Shirt",
    description: "Grab attention with our eye-catching slogan tees",
    price: "2000"
  },
  
];

 const Men = () => {
  return (
    <>
      <Header />
      <div className="w-full max-w-5xl mx-auto mt-8 p-4">
        <Link to="/teenboy" >
        <h2 className="text-3xl text-blue-200 font-semibold text-center mb-6">Teen Boy</h2>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard
              key={product.id} 
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Men;