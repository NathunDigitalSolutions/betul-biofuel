// src/components/QualityPolicy.jsx

import React from "react";
import qualityPolicyData from "../../data/qualityPolicyData";

const QualityPolicy = () => {
  return (
    <section className="bg-background text-dark py-10 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-10 text-center">
          {qualityPolicyData.title}
        </h2>
        <div className="space-y-8">
          {qualityPolicyData.sections.map((section, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md border border-border hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-secondary mb-3">
                {section.heading}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-[1rem] text-dark/90">
                {section.points.map((point, i) => (
                  <li key={i} className="leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityPolicy;
