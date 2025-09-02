import React, { useState } from "react";
import { motion } from "framer-motion";
import img from "../../assets/career.webp";

const CareerPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Job Application");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    );
    window.location.href = `mailto:hr.navaahar@betulbiofuel.com?subject=${subject}&body=${body}`;
  };

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

      {/* Application Form Section */}
      <div className="max-w-3xl mx-auto mt-[-50px] md:mt-[-80px] relative z-10 p-6 bg-white rounded-2xl shadow-2xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-primary mb-6"
        >
          Apply Now
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-secondary text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition"
          >
            Submit Application
          </button>
        </form>
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
