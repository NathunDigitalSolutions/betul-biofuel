import React from "react";
import img from "../../assets/industries.jpg"; // Ensure this path is correct
import EthanolSection from "../home/EthanolSection";
import EthanolFeatures from "../home/EthanolFeatures";
import EnvironmentalBenefits from "../home/EnvironmentalBenefits";

const EthanolPlant = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#edf4fa] via-white to-[#f0fbf4] py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-4">
            Welcome to Betul Biofuel Private Limited
          </h2>
          <p className="text-gray-700 mb-6">
            A forward-thinking ethanol manufacturing company dedicated to producing clean, renewable energy for a better tomorrow. Since our inception in 2021, we have been at the forefront of sustainable fuel solutions, delivering high-quality ethanol to meet the growing global demand for eco-friendly alternatives.
          </p>
          <p className="text-gray-700 mb-6">
            Our advanced manufacturing facility uses cutting-edge technology and environmentally responsible processes to convert agricultural feedstocks such as corn and rice into premium-grade ethanol. This not only helps reduce greenhouse gas emissions but also supports the agricultural economy and promotes energy independence.
          </p>
          <p className="text-gray-700 mb-6">
            At Betul Biofuel, sustainability isn’t just a goal—it’s our guiding principle. We are committed to innovation, quality, and ethical practices in everything we do. Whether you are a fuel distributor, industrial client, or partner in renewable energy, we offer reliable and responsible ethanol solutions tailored to your needs.
          </p>

          <ul className="space-y-3 mt-6">
            <li className="flex items-start gap-2">
              <strong className="text-primary">Mission:</strong> Power a sustainable future with clean energy solutions while empowering farmers and safeguarding our environment.
            </li>
            <li className="flex items-start gap-2">
              <strong className="text-primary">Vision:</strong> Lead the renewable energy revolution through innovative ethanol technologies that create a greener, cleaner world.
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="relative">
          <img
            src={img}
            alt="Ethanol Plant"
            className="w-full h-80 object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Additional Sections */}
      <EthanolSection />
      <EthanolFeatures />
      <EnvironmentalBenefits />
    </section>
  );
};

export default EthanolPlant;
