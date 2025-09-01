import React from "react";
import { ethanolData } from "../../data/ethanolData";
import img from "../../assets/img/img14.JPG";
import { FaLeaf } from "react-icons/fa"; // You can replace this with another icon if preferred

const EthanolSection = () => {
  const { section1, section2 } = ethanolData;

  return (
    <div className="py-20">
      <div className="">
        {/* Section 1 */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-extrabold text-primary mb-4">
                {section1.title}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {section1.description}
              </p>
            </div>
            <div className="md:w-1/2 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300">
                <img
                  src={img}
                  alt="Ethanol"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {section2.title}
          </h2>
          <p className="text-gray-700 text-lg mb-6">{section2.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {section2.points.map((point, index) => (
              <div
                key={index}
                className="bg-background p-5 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-secondary text-white p-2 rounded-full">
                    <FaLeaf className="text-lg" />
                  </div>
                  <p className="text-gray-800 font-medium">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EthanolSection;
