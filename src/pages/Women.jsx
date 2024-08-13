import React from "react"
import { Header } from "../components/Header"
import  ProductCard  from "../components/ProductCard"
import { Link } from "react-router-dom";


const WomenProducts = [

    {
        id: 1,
        image:"/images/women1.jpg",
        title: "Women's T-Shirt",
        description:"description of product 1",
        price:29.99
    },
    {
        id: 2,
        image:"/images/women2.jpg",
        title: "Women's Dress",
        description:"description of product 2",
        price:49.99
    },
    {
        id: 3,
        image:"/images/women3.jpg",
        title: "Women's Skirt",
        description:"description of product 3",
        price:39.99
    }

];


 const Women = () =>{
    return (
        <>
          <Header />
            <div className="w-full max-w-5xl mx-auto mt-8 p-4">
            <Link to="/teengirl" >
            <h2 className="text-3xl text-blue-200 font-semibold text-center mb-6">Teen Girls</h2>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {WomenProducts.map(womenproduct => (
                <ProductCard
                    key={womenproduct.id}
                    image={womenproduct.image}
                    title={womenproduct.title}
                    description={womenproduct.description}
                    price={womenproduct.price}
                />
              ))}
            </div>
          </div>
        </>
      );
    };
export default Women;