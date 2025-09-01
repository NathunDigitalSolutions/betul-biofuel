import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../common/HeroSection";
import ProductsBoxes from "./ProductsBoxes";
import AboutHighlights from "./AboutHighlights";
import EthanolSection from "./EthanolSection";
import EthanolFeatures from "./EthanolFeatures";
import EnvironmentalBenefits from "./EnvironmentalBenefits";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProductsBoxes />
      <AboutHighlights />

      <div className="relative bg-white py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Have questions or need assistance?
          </h2>
          {/* <div className="w-20 h-1 bg-secondary mx-auto mb-6 rounded"></div> */}
          <p className="text-lg text-gray-600 mb-8">
            Reach out to us anytime. We’re here to support and guide you.
          </p>
          <Link
            to="/contact-us"
            className="inline-block px-8 py-3 bg-secondary text-white text-lg font-medium rounded-lg shadow-md hover:bg-secondary/90 transition duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Decorative Element */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-secondary opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-400 opacity-10 rounded-full blur-3xl animate-pulse"></div>
      </div>
    </>
  );
};

export default Home;
