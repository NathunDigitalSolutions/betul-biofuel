import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaSeedling, FaIndustry } from "react-icons/fa";
import bg from "../assets/Sustainability.jpeg";
import whychoose from "../assets/why.jpg"
import EcoFriendly from "../assets/EcoFriendly.jpg";
import economicGrowth from "../assets/economicGrowth.jpg";
import renewable from "../assets/renewable.jpg";

const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: { opacity: 0, y: direction === "up" ? 50 : -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay } },
  };
};

const sustainabilityData = [
  {
    title: "Eco-Friendly Energy",
    icon: <FaGlobe />,
    image: EcoFriendly,
    description: "Biofuels significantly reduce carbon emissions and promote a cleaner environment.",
    points: ["Reduces CO₂ emissions", "Lower pollution levels", "Promotes clean energy"],
  },
  {
    title: "Renewable Resource",
    icon: <FaSeedling />,
    image: renewable,
    description: "Produced from organic materials, biofuels are sustainable and environmentally friendly.",
    points: ["Made from natural crops", "Sustainable for long-term use", "Lowers fossil fuel reliance"],
  },
  {
    title: "Economic Growth",
    icon: <FaIndustry />,
    image: economicGrowth,
    description: "The biofuel industry supports agriculture, industry, and job creation.",
    points: ["Creates new job opportunities", "Supports local farmers", "Encourages sustainable investments"],
  },
];

const SustainabilityPage = () => {
  return (
    <div className="bg-gray-100 text-gray-900 py-20">
     {/* Hero Section */}
  <div className="relative w-full h-[450px]">
  <img 
    src={bg} 
    alt="Contact" 
    className="w-full h-full object-cover" 
  />
  <div className="absolute inset-0 bg-[#044F28] bg-opacity-60 flex flex-col items-center justify-center text-center p-4">
    <h1 className="text-5xl font-bold text-white drop-shadow-lg">
      Sustainability & Biofuels
    </h1>
    <p className="mt-4 text-lg max-w-2xl text-white mx-auto drop-shadow-md">
      Biofuels are shaping the future of clean energy. Discover how they contribute to a greener planet.
    </p>
  </div>
</div>

<motion.section 
  className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10"
  whileInView={{ opacity: 1, y: 0 }}
  initial={{ opacity: 0, y: 50 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
>
  <img 
    src={whychoose} 
    alt="Sustainability"
    className="rounded-lg shadow-lg w-full h-auto object-cover md:h-[300px] lg:h-[400px]"
  />
  <div>
    <h2 className="text-5xl font-bold text-[#033F20]">Why Choose Biofuels?</h2>
    <p className="text-gray-600 mt-4 text-xl">
      Sustainability ensures that we protect the environment while meeting modern energy demands.
    </p>
    <ul className="mt-4 space-y-4 text-gray-700">
      {["Minimizes carbon emissions", "Reduces air and water pollution", "Encourages renewable energy use", "Boosts green technology innovation"].map((point, i) => (
        <li key={i} className="flex items-center gap-3">
          <span className="text-yellow-500 text-3xl">•</span> <span className="text-xl">{point}</span>
        </li>
      ))}
    </ul>
  </div>
</motion.section>

      <section className="max-w-7xl mx-auto py-10 px-6">
        <h2 className="text-4xl font-bold  text-center  text-[#033F20]">Key Sustainability Benefits</h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sustainabilityData.map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-navy"
              whileHover={{ scale: 1.05 }} 
              transition={{ duration: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              viewport={{ once: true }}
            >
              <img src={item.image} alt={item.title} className="rounded-md mb-4 h-40 w-full object-cover" />
              <div className="text-navy text-4xl">{item.icon}</div>
              <h3 className="text-2xl font-semibold mt-2">{item.title}</h3>
              <p className="text-gray-700 mt-2 text-lg">{item.description}</p>
              <ul className="mt-3 text-gray-600">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-yellow-500 text-3xl">•</span> <span className="text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#033F20] via-[#044F28] to-[#D4A017] text-white py-16 text-center">
        <h2 className="text-4xl font-bold">Biofuels in Numbers</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="p-6 bg-navy rounded-lg shadow-lg">
            <h3 className="text-5xl font-bold">30%</h3>
            <p className="mt-2 text-lg">Less Carbon Emissions</p>
          </div>
          <div className="p-6 bg-navy rounded-lg shadow-lg">
            <h3 className="text-5xl font-bold">50M+</h3>
            <p className="mt-2 text-lg">Tons of CO₂ Saved Annually</p>
          </div>
          <div className="p-6 bg-navy rounded-lg shadow-lg">
            <h3 className="text-5xl font-bold">100+</h3>
            <p className="mt-2 text-lg">Countries Using Biofuels</p>
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold text-[#033F20] flex justify-center items-center gap-2">
          The Future of Biofuels 
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-2xl text-gray-700">
          Investing in biofuels today ensures a greener tomorrow. Let's build a more sustainable world together.
        </p>
      </section>
    </div>
  );
};

export default SustainabilityPage;