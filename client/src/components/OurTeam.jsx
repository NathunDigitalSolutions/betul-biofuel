import { motion } from "framer-motion";
import test from "../assets/testi.jpg";

// Dummy team data (Replace with real team details)
const teamMembers = [
  {
    name: "John Doe",
    position: "CEO & Founder",
    image: test,
  },
  {
    name: "Jane Smith",
    position: "Head of Research",
    image: test,
  },
  {
    name: "Michael Brown",
    position: "Operations Manager",
    image: test,
  },
  {
    name: "Emily White",
    position: "Marketing Director",
    image: test,
  },
];

const OurTeam = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-gray-100 to-blue-50">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-green-800">Meet Our Team</h2>
      </motion.div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-xl rounded-2xl p-6 transition-all flex flex-col items-center text-center border-2 border-green-100 hover:border-green-400 hover:shadow-2xl"
          >
            {/* Full Image */}
            <div className="relative w-full h-48 mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover rounded-2xl border-4 border-white shadow-lg transition-transform duration-300 ease-in-out"
              />
            </div>
            {/* Name and Position */}
            <h3 className="text-2xl font-semibold text-black mt-4">{member.name}</h3>
            <p className="text-gray-600 mt-2">{member.position}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
