import React from 'react';
import {
  FaCloud,
  FaRecycle,
  FaTools,
  FaIndustry,
  FaUtensils,
  FaSeedling,
} from 'react-icons/fa';
import co2Img from '../../assets/img/img10.jpg'; // Make sure to add your CO2 plant image here

const CO2Plant = () => {
  return (
    <section className="relative bg-[#f3f7fd] py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            CO₂ Division
          </h2>
          <p className="text-gray-700 mb-4">
            At Betul Biofuel Pvt. Ltd., we believe in turning every by-product
            into an opportunity for sustainability. Along with Ethanol and DDGS,
            our integrated facility also captures and purifies Carbon Dioxide
            (CO₂) generated during the fermentation process.
          </p>
          <p className="text-gray-700 mb-4">
            Our CO₂ division, based in Betul, Madhya Pradesh, is equipped with
            advanced recovery and purification systems that ensure food-grade
            quality CO₂, meeting stringent industry standards. This eco-friendly
            process not only reduces greenhouse gas emissions but also creates
            valuable resources for multiple sectors.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
            Applications of Our CO₂
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <FaUtensils className="text-cyan-600" /> Beverage Industry – For
              aerated drinks and bottling
            </li>
            <li className="flex items-center gap-2">
              <FaSeedling className="text-green-600" /> Agriculture – For plant
              growth enhancement in greenhouses
            </li>
            <li className="flex items-center gap-2">
              <FaIndustry className="text-indigo-600" /> Industrial Uses –
              Welding, dry ice production, chemical processes
            </li>
            <li className="flex items-center gap-2">
              <FaUtensils className="text-orange-600" /> Food Processing –
              Preservation, chilling, and packaging
            </li>
          </ul>

          <p className="text-gray-700 mt-6">
            By integrating CO₂ recovery into our operations, we minimize
            environmental impact and maximize resource utilization, aligning
            with our commitment to sustainability and innovation. At Betul
            Biofuel, we see CO₂ not as waste, but as a valuable product that
            contributes to industries and protects the environment.
          </p>
          <p className="text-gray-700 font-semibold mt-4">
            Cleaner processes. Smarter utilization. A sustainable future.
          </p>
        </div>

        {/* Image */}
        <div className="relative">
          <img
            src={co2Img}
            alt="CO₂ Plant"
            className="w-full h-80 md:h-[28rem] object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CO2Plant;
