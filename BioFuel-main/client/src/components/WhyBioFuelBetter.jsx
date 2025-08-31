import React from "react";
import { motion } from "framer-motion";
import { GiCorn } from 'react-icons/gi';

const reasons = [
  {
    title: "Eco-Friendly",
    description: "Biofuel significantly reduces carbon emissions and environmental pollution.",
    iconColor: "text-yellow-400",
  },
  {
    title: "Renewable Source",
    description: "Unlike fossil fuels, biofuels are derived from organic materials and can be replenished.",
    iconColor: "text-yellow-500",
  },
  {
    title: "Energy Efficient",
    description: "Improves energy security by reducing dependence on imported petroleum.",
    iconColor: "text-yellow-500",
  },
  {
    title: "Less Pollution",
    description: "Biofuels produce fewer greenhouse gases compared to fossil fuels.",
    iconColor: "text-yellow-500",
  }
];

const fadeIn = (direction = "up", delay = 0) => ({
  hidden: { opacity: 0, y: direction === "up" ? 30 : -30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
});

const bounceAnimation = {
  hidden: { scale: 0.8, opacity: 0.7 },
  visible: {
    scale: [1, 1.2, 1],
    opacity: 1,
    transition: {
      duration: 1.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const WhyBioFuelBetter = () => {
  return (
    <section className="bg-gray-100 text-gray-900 py-16 px-6">
      <motion.div
        className="max-w-6xl mx-auto text-center mb-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="text-4xl font-bold text-green-800" variants={fadeIn("up", 0.2)}>
          Why Biofuel is Better?
        </motion.h2>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {reasons.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center p-6 rounded-xl shadow-md gap-6 bg-white"
            variants={fadeIn("up", 0.2 + index * 0.1)}
          >
            <motion.div
              className="w-24 h-20 flex justify-center items-center rounded-full bg-green-700 shadow-md"
              variants={bounceAnimation}
              initial="hidden"
              animate="visible"
            >
              <GiCorn className={`${item.iconColor} text-4xl`} />
            </motion.div>

            <div className="text-left">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-2 text-md">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyBioFuelBetter;