import React from "react";
import { motion } from "framer-motion";
import about from "../../assets/img/img10.JPG";
import HeroSection from "../common/HeroSection";
import aboutData from "../../data/aboutData";
import VisionMission from "./VisionMission";
import Management from "./Management";

const AboutUs = () => {
  return (
    <div className="bg-background text-dark">
      <HeroSection />

      <section className="md:px-20 px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={about}
            alt={aboutData.imageAlt}
            className="rounded-2xl w-full shadow-xl border-4 border-accent"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-primary">
            {aboutData.title}
          </h2>
          <p className="text-lg leading-relaxed text-dark whitespace-pre-line">
            {aboutData.description}
          </p>
       
        </motion.div>
      </section>
      <VisionMission/>
      <Management/>
    </div>
  );
};

export default AboutUs;
