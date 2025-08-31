import React from "react";
import { motion } from "framer-motion";
import { FaTruck, FaPlane, FaIndustry, FaTractor } from "react-icons/fa";
import bg from "../../assets/industries.jpg";
import transportation from "../../assets/transportation.webp";
import aviation from "../../assets/aviation.jpg";
import manufacturing from "../../assets/manufacturing.jpg";
import agriculture from "../../assets/agriculture.webp";

// Industry Data
const industries = [
  {
    name: "Transportation",
    icon: <FaTruck />,
    image: transportation,
    description: "Biofuels reduce greenhouse gas emissions and dependence on fossil fuels.",
    points: ["Reduces carbon emissions by 30-50%", "Compatible with diesel engines", "Improves fuel efficiency"],
  },
  {
    name: "Aviation",
    icon: <FaPlane />,
    image: aviation,
    description: "Sustainable Aviation Fuel (SAF) from renewable sources is being adopted.",
    points: ["Cuts CO₂ emissions by 80%", "Meets environmental regulations", "Enhances performance"],
  },
  {
    name: "Manufacturing",
    icon: <FaIndustry />,
    image: manufacturing,
    description: "Factories use biofuels to reduce industrial pollution.",
    points: ["Lowers carbon footprint", "Reduces fossil fuel dependency", "Supports sustainability"],
  },
  {
    name: "Agriculture",
    icon: <FaTractor />,
    image: agriculture,
    description: "Biofuels power farming equipment, making agriculture more sustainable.",
    points: ["Reduces fuel costs", "Improves soil quality", "Minimizes non-renewable reliance"],
  },
];

const IndustriesPage = () => {
  return (
    <div className="bg-gray-100 text-white min-h-screen">
      {/* Hero Section */}
      <motion.section 
         className="relative w-full h-[500px]"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7 }}
      >
        <img 
          src={bg} 
          alt="Industries Background" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-primary bg-opacity-70 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold flex justify-center items-center gap-3">
            Industries Using Biofuel
          </h1>
          <p className="mt-3 text-base md:text-lg">Leading sectors embracing biofuels for a greener future.</p>
        </div>
      </motion.section>

      {/* Industries List */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primaryflex justify-center items-center gap-2">
            Where Biofuel is Used
          </h2>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((industry, index) => (
            <motion.div 
              key={index} 
              className="relative bg-white text-gray-900 shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ y: -10, scale: 1.05 }} 
              transition={{ duration: 0.3 }}
            >
              <img 
                src={industry.image} 
                alt={industry.name} 
                className="w-full h-40 object-cover rounded-2xl shadow-md" 
              />
              <div className="absolute top-5 left-5 bg-secondary text-primary p-3 rounded-full shadow-lg">
                {industry.icon}
              </div>
              <h3 className="text-2xl font-semibold mt-6">{industry.name}</h3>
              <p className="text-gray-700 mt-2">{industry.description}</p>
              <ul className="mt-4 space-y-2 text-left">
                {industry.points.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-secondary rounded-full"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
