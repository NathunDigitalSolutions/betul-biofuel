import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import product from "../assets/mainProduct.jpeg";

const features = [
  { id: 1, title: "Premium Quality", description: "Our products meet the highest quality standards." },
  { id: 2, title: "Eco-Friendly", description: "We use sustainable and environmentally friendly materials." },
  { id: 3, title: "Affordable Pricing", description: "We offer competitive prices without compromising quality." },
  { id: 4, title: "Expert Support", description: "Our team is available to assist you with any inquiries." },
];

const FeatureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="py-16 px-6 lg:px-12  bg-green-50">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* ✅ Left Side Image with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <img src={product} alt="Features" className="w-full rounded-2xl shadow-lg" />
        </motion.div>

        {/* ✅ Right Side Features */}
        <div className="lg:w-1/2">
          {/* ✅ Animated Heading with Underline */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold text-green-700 mb-6 text-center lg:text-left relative"
          >
            Our Features
            <span className="block w-28 h-1 bg-gradient-to-r from-green-700 to-yellow-500 mx-auto lg:mx-0 mt-2"></span>
          </motion.h2>

          {/* ✅ Feature List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex items-start space-x-4"
              >
                {/* ✅ Animated Number Badge */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-green-600 text-white flex items-center justify-center rounded-full text-lg font-bold shadow-md transition-transform duration-300"
                >
                  {feature.id}
                </motion.div>

                {/* ✅ Feature Title & Description */}
                <div>
                  <h3 className="text-xl font-semibold text-green-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeatureSection;
