import { motion } from "framer-motion";

const milestones = [
  {
    year: "2018",
    title: "Company Founded",
    description: "Started our journey with a small team and big dreams in renewable energy.",
  },
  {
    year: "2020",
    title: "First Plant Operational",
    description: "Launched our first biofuel plant, producing clean energy efficiently.",
  },
  {
    year: "2022",
    title: "National Recognition",
    description: "Received awards for innovation and contribution to sustainable development.",
  },
  {
    year: "2024",
    title: "Expansion Phase",
    description: "Expanded operations across multiple states with increased production capacity.",
  },
];

const Milestone = () => {
  return (
    <section className="bg-gradient-to-r from-[#033F20] via-[#044F28] to-[#D4A017] py-16 px-6 md:px-12 lg:px-20 text-white relative overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-14"
      >
        Our Milestones
      </motion.h2>

      <div className="relative border-l-4 border-yellow-400 pl-8 space-y-16">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Dot */}
            <div className="absolute -left-5 top-2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-white shadow-md" />

            <h3 className="text-xl font-semibold text-yellow-300">{milestone.year} - {milestone.title}</h3>
            <p className="mt-2 text-white text-justify">{milestone.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Milestone;
