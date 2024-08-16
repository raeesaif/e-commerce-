import React from "react";
import  ProductCard  from "../components/ProductCard";
import { Header } from "../components/Header";


const teengirlproduct = [

    {
        id:1,
        image:"/images/women1.jpg",
        title:"Dress",
        description:"Sustainable fashion meets urban style",
        price: 2000
    },
    {
        id:2,
        image:"/images/girl4.jpg",
        title:"Dress",
        description:"Sustainable fashion meets urban style",
        price: 4000
    },
    {
        id:3,
        image:"/images/women3.jpg",
        title:"Dress",
        description:"Express yourself with our unique designs",
        price: 3500
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