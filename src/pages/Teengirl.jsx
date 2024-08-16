import React from "react";
import  ProductCard  from "../components/ProductCard";
import { Header } from "../components/Header";


const teengirlproduct = [

{  
        id:1,
        image:"/images/teenkurti.webp",
        title:"BLACK LAWN KURTI",
        description:"Sustainable fashion meets urban style",
        price: 2000
      },
      {
        id:2,
        image:"/images/rustkurti.webp",
        title:"RUST TEXTURED TEENS KURTI",
        price: 4000
      },
      {
        id:3,
        image:"/images/greenkurti.webp",
        title:"GREEN CAMBRIC KURTI",
        price: 3500
      },
      {
        id:4,
        image:"/images/pinkkurti.webp",
        title:"PINK LAWN KURTI ",
        price: 3382
      },
      {
        id:5,
        image:"/images/ferozikurti.webp",
        title:"FEROZI LAWN TEENS KURTI",
        price: 2767
      },
      {
        id:6,
        image:"/images/lightkurti.webp",
        title:"LIGHT BEIGE LAWN KURTI",
        price: 1578
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