import React from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import img from "../../assets/contact.jpg";

const ContactSection = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[500px]">
        <img src={img} alt="Contact" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary bg-opacity-60 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Get in Touch</h1>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-6 mt-[-60px] relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          {
            icon: <FaPhone size={40} className="text-secondary" />,
            title: "Phone",
            info: "+91 78801-38500",
          },
          {
            icon: <FaEnvelope size={40} className="text-secondary" />,
            title: "Email",
            info: "reception@betulbiofuel.com",
          },
          {
            icon: <FaMapMarkerAlt size={40} className="text-secondary" />,
            title: "Location",
            info: "Betul Biofuel Pvt. Ltd., 2nd Floor Old LIC Building, Gurudwaraganj, Betul (M.P.)",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white text-black p-6 rounded-xl flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-3">{item.icon}</div>
            <h3 className="font-bold text-xl mb-1 text-primary">{item.title}</h3>
            <p className="text-gray-600">{item.info}</p>
          </motion.div>
        ))}
      </div>

      {/* Form and Office Info */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 bg-primary p-10 md:p-14 rounded-lg">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Contact Us
          </h2>
          <form className="space-y-5">
            <div>
              <label className="text-white block mb-2">Full Name</label>
              <input
                type="text"
                className="w-full p-3 border border-white bg-transparent text-white rounded-lg focus:ring-2 focus:ring-secondary"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="text-white block mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-white bg-transparent text-white rounded-lg focus:ring-2 focus:ring-secondary"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="text-white block mb-2">Message</label>
              <textarea
                className="w-full p-3 border border-white bg-transparent text-white rounded-lg focus:ring-2 focus:ring-secondary"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button className="bg-secondary text-black px-6 py-3 rounded-lg hover:bg-opacity-90 transition">
              Submit
            </button>
          </form>
        </motion.div>

        {/* Office Info & Socials */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold">Our Office</h3>
          <p className="mt-4 text-lg leading-relaxed">
            Our office is always open for your needs. Whether you have a query
            or need consultation, our team is here to help.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            We ensure prompt responses and dedicated services to support your
            journey.
          </p>
          {/* Social Media */}
          <div className="mt-6 flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61575558375451"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white text-primary rounded-full shadow-lg cursor-pointer hover:bg-primary hover:text-white transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/betul_biofuel/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white text-primary rounded-full shadow-lg cursor-pointer hover:bg-primary hover:text-white transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/betul-biofuel-pvt-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white text-primary rounded-full shadow-lg cursor-pointer hover:bg-primary hover:text-white transition"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Map */}
      <div className="mt-12">
        <iframe
          className="w-full h-72 md:h-96 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.2498481340463!2d77.69061457403659!3d21.886452657771002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd611003183f7f9%3A0xf469f72ad451fd40!2sBetul%20Biofuel%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1756544969772!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Betul Biofuel Location"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactSection;
