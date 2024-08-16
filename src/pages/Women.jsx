import React from "react"
import { Header } from "../components/Header"
import  ProductCard  from "../components/ProductCard"
import { Link } from "react-router-dom";


const WomenProducts = [

    {
        id: 1,
        image:"/images/women1.jpg",
        title: "Women's Dress",
        description:"Sustainable fashion meets urban style",
        price: 2500
    },
    {
        id: 2,
        image:"/images/women2.jpg",
        title: "Women's Dress",
        description:"Sustainable fashion meets urban style",
        price: 3000
    },
    {
        id: 3,
        image:"/images/women3.jpg",
        title: "Women's Skirt",
        description:"Sustainable fashion meets urban style",
        price: 2000
    },
    {
      id:4,
      image:"/images/kurti.webp",
      title:"GREEN LAWN KURTI",
      price: 3500
    },
    {
      id:5,
      image:"/images/kurtilawn.webp",
      title:"GREEN LAWN KURTI",
      price: 2658
    },
    {
      id:6,
      image:"/images/kurtibrown.webp",
      title: "LIGHT BROWN COTTON KURTI",
      price:2500
    },
    {
      id:7,
      image:"/images/kurtiaqua.webp",
      title: "AQUA COTTON KURTI",
      price:6006
    },
    {
      id:8,
      image:"/images/kurtiblue.webp",
      title: "PINK-BLUE LAWN KURTI ",
      price:6006
    },
    {
      id:9,
      image:"/images/kurtisky.webp",
      title: "BLUE LAWN KURTI ",
      price: 2970
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