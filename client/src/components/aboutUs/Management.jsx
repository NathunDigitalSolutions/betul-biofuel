import React, { useState } from "react";
import { managementData } from "../../data/managementData";
import { motion } from "framer-motion";

const PersonCard = ({ name, designation, photo, message }) => {
  const [expanded, setExpanded] = useState(false);
  const MAX_LENGTH = 120; // visible characters before "Read More"

  const previewText =
    message && message.length > MAX_LENGTH
      ? message.substring(0, MAX_LENGTH) + "..."
      : message;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      className="group bg-white rounded-3xl shadow-lg p-6 text-center border border-border transition-all duration-300 flex flex-col"
    >
      {/* Photo */}
      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-[3px] border-accent">
        <img src={photo} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Name & Designation */}
      <h3 className="text-lg font-semibold text-dark group-hover:text-primary transition">
        {name}
      </h3>
      <p className="text-sm text-gray-500 mb-3">{designation}</p>

      {/* Message (Expandable) */}
      {message && (
        <div className="text-sm text-gray-600 leading-relaxed">
          <p className="whitespace-pre-line">
            {expanded ? message : previewText}
          </p>
          {message.length > MAX_LENGTH && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 text-primary font-medium hover:underline"
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
      )}
    </motion.div>
  );
};

const Management = () => {
  const { boardOfDirectors, CEO, AVP, MD } = managementData;

  return (
    <section className="relative bg-gradient-to-br from-[#f3f4f6] via-[#edf2f7] to-[#f9fafb] pt-24 pb-32 px-6 md:px-16 text-dark overflow-hidden">
      {/* Background effects */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-purple-300 opacity-20 rounded-full filter blur-3xl mix-blend-multiply z-0"
      ></motion.div>

      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        className="absolute -bottom-32 right-0 w-[500px] h-[500px] bg-pink-300 opacity-20 rounded-full filter blur-3xl mix-blend-multiply z-0"
      ></motion.div>

      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-blue-300 opacity-10 rounded-full blur-[150px] z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Our Leadership
        </h2>
        <p className="text-lg mb-16 text-dark">
          Meet the visionaries shaping our future and guiding the way.
        </p>

        {/* CEO, AVP & MD */}
        <div className="grid md:grid-cols-3 gap-12 mb-24">
          <PersonCard {...MD} />
          <PersonCard {...CEO} />
          <PersonCard {...AVP} />
          
        </div>

        {/* Board of Directors */}
        {/* <h3 className="text-3xl font-semibold text-primary mb-10">
          Board of Directors
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {boardOfDirectors.map((person, index) => (
            <PersonCard key={index} {...person} />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Management;
