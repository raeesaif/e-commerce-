import React from "react";
import  ProductCard  from "../components/ProductCard";
import { Header } from "../components/Header";


const teengirlproduct = [

    {
        id:1,
        image:"/images/women1.jpg",
        title:"Product 1",
        description:"description of product 1",
        price:22.00
    },
    {
        id:2,
        image:"/images/women2.jpg",
        title:"Product 2",
        description:"description of product 2",
        price:11.34
    },
    {
        id:3,
        image:"/images/women3.jpg",
        title:"product 3",
        description:"description of product 3",
        price:55.55
    }

];

 const Teengirl = ()=>{

    return (
        <>
          <Header />
          <div className="w-full max-w-5xl mx-auto mt-8 p-4">
            <h2 className="text-3xl bg-gary text-blue-200 font-semibold text-center mb-6">Teen Girls</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teengirlproduct.map(product => (
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
export default Teengirl;