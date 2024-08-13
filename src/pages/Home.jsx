import React from 'react';
import Slider from 'react-slick';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slideImages = [
  {
    id: 1,
    url: "/images/women1.jpg",
    title: "Discover our new collection",
    description: "Latest trends and styles"
  },
  {
    id: 2,
    url: "./images/women2.jpg",
    title: "Best deals of the season",
    description: "Unbeatable prices"
  },
  {
    id: 3,
    url: "/images/women3.jpg",
    title: "Find your perfect outfit",
    description: "Shop now"
  }
];

 const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Header />
      <div className="w-full max-w-5xl mx-auto mt-8">
        <Slider {...settings}>
          {slideImages.map((slide) => (
            <div key={slide.id} className="relative text-center">
              <img
                src={slide.url}
                alt={slide.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-4 rounded">
                <h2 className="text-2xl font-semibold">{slide.title}</h2>
                <p className="mt-2">{slide.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-full max-w-5xl mx-auto mt-8 p-4 mid-screen ">
        <h2 className="text-3xl font-semibold text-center mb-6 bg-gary text-blue-200 ">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Add product cards here */}
          <div className="bg-gary rounded-lg shadow-lg ">
            <img src="/images/women1.jpg" alt="Product 1" className="w-full h-full object-cover mb-4 rounded-lg  
            transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ..." />
          </div>
          <div className="bg-gary rounded-lg shadow-lg  ">
            <img src="/images/women2.jpg" alt="Product 2" className="w-full h-full object-cover mb-4 rounded-lg 
            transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ..." />
          </div>
          <div className="bg-gary  rounded-lg shadow-lg ">
            <img src="/images/women3.jpg" alt="Product 3" className="w-full h-full object-cover rounded-lg 
            transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ..." />
          </div>
        </div>
        <div className="flex justify-center items-center h-50 bg-gray text-blue-500 text-4xl py-4 ">
        <h1>Boys & Girls</h1>
        </div>
        <div className='flex flex-row  '>
        <div className=' py-6 w-80  object-cover rounded-lg mx-4
        transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ...' >
            <Link to="/women">
            <img src="/images/girl3.jpg" alt="product" />
            </Link>
        </div>
        <div className=' py-6 w-80  object-cover rounded-lg mx-4 
        transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ...' >
           <Link to="/teengirl" >
            <img src="/images/women1.jpg" alt="product" />
            </Link>
        </div>
        <div className=' py-6 w-80  object-cover rounded-lg mx-4 
        transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ...' >
            <Link to="/teenboy" >
            <img src="/images/boy.jpg" alt="product" />
            </Link>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;