import React from "react";
import { ethanolFeaturesData } from "../../data/ethanolFeaturesData";
import {
  FaSeedling,
  FaBolt,
  FaCogs,
  FaChartLine,
  FaRecycle,
  FaLeaf,
  FaCubes,
} from "react-icons/fa";

const iconMap = {
  "Feedstock flexibility": <FaSeedling />,
  "Energy Optimization": <FaBolt />,
  "Automated Systems": <FaCogs />,
  "Scalable Solutions": <FaChartLine />,
  "Waste Management Integration": <FaRecycle />,
  "Low Emission Technology": <FaLeaf />,
  "Modular Setup": <FaCubes />,
};

const EthanolFeatures = () => {
  return (
    <section className="bg-background py-12">
      <div className="text-center mb-10 md:mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          {ethanolFeaturesData.title}
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Empowering innovation through sustainable and efficient technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ethanolFeaturesData.features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition"
          >
            <div className="text-secondary text-2xl mt-1">
              {iconMap[feature.title] || <FaLeaf />}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-dark">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-700 mt-1">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EthanolFeatures;
