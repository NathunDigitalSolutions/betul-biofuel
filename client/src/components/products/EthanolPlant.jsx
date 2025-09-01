import React from "react";
import { Target, Eye } from "lucide-react"; // Icons
import img from "../../assets/img/img11.jpg";
import EthanolSection from "../home/EthanolSection";
import EthanolFeatures from "../home/EthanolFeatures";
import EnvironmentalBenefits from "../home/EnvironmentalBenefits";

const EthanolPlant = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#edf4fa] via-white to-[#f0fbf4] py-20 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image Left */}
        <div className="relative group order-1 md:order-none">
          <img
            src={img}
            alt="Ethanol Plant"
            className="w-full h-full object-cover rounded-2xl shadow-xl transform group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 rounded-2xl bg-black/10 group-hover:bg-black/20 transition" />
        </div>

        {/* Text Content Right */}
        <div className="space-y-6 order-2 md:order-none">
          <h2 className="text-4xl font-extrabold text-primary leading-snug">
            Welcome to Betul Biofuel Private Limited
          </h2>

          <p className="text-gray-700 leading-relaxed">
            A forward-thinking ethanol manufacturing company dedicated to producing clean, renewable energy for a better tomorrow. Since our inception in 2021, we have been at the forefront of sustainable fuel solutions, delivering high-quality ethanol to meet the growing global demand for eco-friendly alternatives.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our advanced manufacturing facility uses cutting-edge technology and environmentally responsible processes to convert agricultural feedstocks such as corn and rice into premium-grade ethanol. This not only helps reduce greenhouse gas emissions but also supports the agricultural economy and promotes energy independence.
          </p>

          <p className="text-gray-700 leading-relaxed">
            At Betul Biofuel, sustainability isn’t just a goal—it’s our guiding principle. We are committed to innovation, quality, and ethical practices in everything we do. Whether you are a fuel distributor, industrial client, or partner in renewable energy, we offer reliable and responsible ethanol solutions tailored to your needs.
          </p>

          {/* Mission & Vision */}
          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <Target className="text-primary w-8 h-8 shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-primary">Mission</h3>
                <p className="text-gray-700 text-sm">
                  Power a sustainable future with clean energy solutions while empowering farmers and safeguarding our environment.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <Eye className="text-primary w-8 h-8 shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-primary">Vision</h3>
                <p className="text-gray-700 text-sm">
                  Lead the renewable energy revolution through innovative ethanol technologies that create a greener, cleaner world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="mt-20 space-y-20">
        <EthanolSection />
        <EthanolFeatures />
        <EnvironmentalBenefits />
      </div>
    </section>
  );
};

export default EthanolPlant;
