import React from "react";
import  ProductCard  from "../components/ProductCard";
import { Header } from "../components/Header";

const Teenboyproduct = [
    {
        id:1,
        image:"/images/trouser.webp",
        title:"WHITE COTTON TROUSER",
        price: 1380
    },
    {
        id:2,
        image:"/images/navybluekurta.webp",
        title:"NAVY BLUE BLENDED KURTA ",
        price: 2767
    },
    {
        id:3,
        image:"/images/brownkurta.webp",
        title:"BROWN BLENDED KURTA",
        price: 2767
    },
    {
        id:4,
        image:"/images/bluekurta.webp",
        title:"BLUE COTTON KURTA ",
        price: 3150
    },
    {
        id:5,
        image:"/images/blackkurta.webp",
        title:"BLACK BLENDED KURTA",
        price: 3075
    },
    {
        id:6,
        image:"/images/greenkurta.webp",
        title:"LIGHT GREEN COTTON KURTA ",
        price: 3075
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
    