import React from "react";
import { motion } from "framer-motion";
import visionMissionData from "../../data/visionMissionData";

const SectionBox = ({ title, description, bgColor, delay }) => (
  <motion.div
    className={`relative p-10 rounded-2xl shadow-xl overflow-hidden ${bgColor}`}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
  >
    <div className="absolute -top-5 -right-5 w-32 h-32 bg-white/10 rotate-45 rounded-xl"></div>
    <h3 className="text-2xl font-bold mb-4 z-10 relative">{title}</h3>
    <p className="leading-relaxed text-base z-10 relative">{description}</p>
  </motion.div>
);

const VisionMission = () => {
  const { vision, mission } = visionMissionData;

  return (
    <section className="py-20 px-6 md:px-20 bg-background text-dark">
      <div className="mx-auto grid md:grid-cols-2 gap-10 max-w-6xl">
        <SectionBox
          title={vision.title}
          description={vision.description}
          bgColor="bg-[#D9BF77] text-dark" // vision card
          delay={0.1}
        />
        <SectionBox
          title={mission.title}
          description={mission.description}
          bgColor="bg-[#6CA0A3] text-dark" // mission card
          delay={0.3}
        />
      </div>
    </section>
  );
};

export default VisionMission;
