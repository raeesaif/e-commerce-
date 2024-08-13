import React from "react";
import  ProductCard  from "../components/ProductCard";
import { Header } from "../components/Header";

const Teenboyproduct = [
    {
        id:1,
        image:"/images/boy.jpg",
        title:"Product 1",
        description:"description of product 1 ",
        price: 29.99
    },
    {
        id:2,
        image:"/images/men1.jpg",
        title:"product 2",
        description:"description of product 2",
        price:89.00
    },
    {
        id:3,
        image:"/images/men2.jpg",
        title:"product 3",
        description:"description of product 3",
        price:33.33
    }

];


 const Teenboy = () =>{
    return (
        <>
          <Header />
          <div className="w-full max-w-5xl mx-auto mt-8 p-4">
          <h2 className="text-3xl bg-gary text-blue-200 font-semibold text-center mb-6">Teen Boy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Teenboyproduct.map(product => (
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

export default Teenboy;
    