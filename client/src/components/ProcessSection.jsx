import React from "react";
import { FaFlask, FaLeaf, FaFire, FaTruck } from "react-icons/fa";

const BiofuelProcess = () => {
  return (
    <div className="bg-white py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Biofuel Production Process</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto bg-gradient-to-r from-[#033F20] via-[#044F28] to-[#D4A017] p-14 rounded-lg">
        {[ 
          { icon: <FaLeaf size={50} className="text-yellow-500" />, title: "Feedstock Collection", description: "Gathering organic materials like plants and waste." },
          { icon: <FaFlask size={50} className="text-yellow-500" />, title: "Conversion Process", description: "Processing feedstock into biofuel using chemical processes." },
          { icon: <FaFire size={50} className="text-yellow-500" />, title: "Energy Generation", description: "Using biofuel for heating, electricity, and powering vehicles." },
          { icon: <FaTruck size={50} className="text-yellow-500" />, title: "Distribution", description: "Transporting biofuel to consumers and industries." },
        ].map((step, index) => (
          <div key={index} className="bg-white text-black p-8 rounded-2xl shadow-xl flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BiofuelProcess;
