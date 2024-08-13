import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-500 ">About Us</h1>
        <div className="text-lg text-blue-200" >
        <p >
          J. was established in 2002 with a unique philosophy to revive the country's cultural heritage and make Shalwar Kameez—the popular wear. It soon became one of the most famous and recognizable clothing brands in South East Asia. J. expanded its store network to 100+ outlets nationwide and further globally by opening 20 outlets in the UK, Australia, Canada, New Zealand, UAE, Qatar, and other countries.
        </p>
        <p className="text-lg text-blue-200 mt-4">
          We pride ourselves on being a complete apparel brand that deals in eastern wear, perfumes, footwear, and accessories for women and men of all ages. Our clothing line reflects current fashion trends with modest detailing, drawing inspiration from Renaissance, Aztec, Fusion, Arabian, and other aesthetics.
        </p>
        <p className="text-lg text-blue-200 mt-4">
          From its humble beginnings, a brand that believed in being Soully East has moved forward with more decorative touches to its portfolio, creating a loyal base of customers all over the world.
        </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
