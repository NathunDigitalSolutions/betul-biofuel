import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/career.webp";

const CareerPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <img src={img} alt="Career" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary bg-opacity-50 flex flex-col items-center justify-center p-4">
          <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-2 md:mb-4 text-center">
            Join Our Green Mission
          </h1>
          <p className="text-lg md:text-2xl text-secondary text-center">
            Fueling the future with sustainable energy
          </p>
        </div>
      </div>

      {/* Career Opportunities */}
      <div className="max-w-7xl mx-auto mt-[-50px] md:mt-[-80px] relative z-10 p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {[
          "Biofuel Engineer",
          "Project Manager",
          "Sustainability Analyst",
          "Research Scientist",
          "Marketing Specialist",
        ].map((role, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-2 md:mb-4">
              {role}
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              Contribute to innovative projects aimed at revolutionizing sustainable energy.
            </p>
            <button className="mt-4 bg-secondary text-black px-4 md:px-6 py-2 rounded-lg">
              Apply Now
            </button>
          </motion.div>
        ))}
      </div>

      {/* Why Work With Us Section */}
      <div className="relative bg-gradient-to-br from-[#f0f9f8] to-[#e0f2f1] mt-20 pt-20 pb-32 overflow-hidden">
        <div className=" mx-10 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4 md:mb-6">
              Why Work With Us
            </h2>
            <p className="text-gray-800 text-base md:text-lg leading-relaxed">
              At Biofuel Inc., we are not just a workplace; we are a mission-driven family
              committed to creating a greener planet. We value innovation, teamwork, and a
              shared vision for a sustainable future.
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-4xl font-bold text-primary">
              Perks & Benefits
            </h3>
            <ul className="mt-4 md:mt-6 text-gray-700 text-base md:text-lg space-y-2 md:space-y-4">
              {[
                "Competitive salary and health benefits",
                "Flexible work hours and remote options",
                "Opportunities for professional growth",
                "Work with a passionate and innovative team",
              ].map((perk, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-3 md:w-4 h-3 md:h-4 bg-secondary rounded-full"></span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
