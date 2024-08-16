import React from "react";
import  ProductCard  from "../components/ProductCard";
import { Header } from "../components/Header";

const Teenboyproduct = [
    {
        id:1,
        image:"/images/boy.jpg",
        title:"T-Shirt",
        description:"Luxurious organic cotton T-shirt, perfect for everyday wear",
        price: 2500
    },
    {
        id:2,
        image:"/images/men1.jpg",
        title:"T-Shirt",
        description:"Luxurious organic cotton T-shirt, perfect for everyday wear",
        price: 1500
    },
    {
        id:3,
        image:"/images/men2.jpg",
        title:"T-Shirt",
        description:"Luxurious organic cotton T-shirt, perfect for everyday wear",
        price: 2000
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
    