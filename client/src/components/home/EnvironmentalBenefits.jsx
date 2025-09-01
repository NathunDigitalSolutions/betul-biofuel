// src/components/Ethanol/EnvironmentalBenefits.jsx

import React from "react";
import { environmentalBenefitsData } from "../../data/environmentalBenefitsData";

const EnvironmentalBenefits = () => {
  return (
    <section className="bg-white py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-10 md:mb-20">
        {environmentalBenefitsData.title}
      </h2>

      <div className="space-y-6">
        {environmentalBenefitsData.benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div
              key={index}
              className="relative pl-6 md:pl-8 py-4 bg-background border-l-4 border-primary hover:border-secondary transition duration-300 rounded-md shadow-sm hover:shadow-md"
            >
              <div className="absolute -left-4 top-5 w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center text-xl shadow-md">
                <Icon />
              </div>
              <h3 className="text-lg font-semibold text-dark mb-1">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EnvironmentalBenefits;
