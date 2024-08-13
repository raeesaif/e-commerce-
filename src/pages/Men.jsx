import React from 'react';
import { Header } from "../components/Header";
import ProductCard from "../components/ProductCard";
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    image: "/images/men1.jpg",
    title: "Product 1",
    description: "Description of Product 1",
    price: "29.99"
  },
  {
    id: 2,
    image: "/images/men2.jpg",
    title: "Product 2",
    description: "Description of Product 2",
    price: "39.99"
  },
  {
    id: 3,
    image: "/images/boy.jpg",
    title: "Product 3",
    description: "Description of Product 3",
    price: "49.99"
  },
  {
    id: 4,
    image: "/images/women3.jpg",
    title: "Product 3",
    description: "Description of Product 3",
    price: "49.99"
  },
  {
    id: 5,
    image: "/images/women3.jpg",
    title: "Product 3",
    description: "Description of Product 3",
    price: "49.99"
  },
  {
    id: 6,
    image: "/images/women3.jpg",
    title: "Product 3",
    description: "Description of Product 3",
    price: "49.99"
  }
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