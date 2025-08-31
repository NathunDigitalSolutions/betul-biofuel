import { motion } from "framer-motion";
import { FaBolt, FaGlobe, FaRecycle, FaShieldAlt, FaUsers } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    { icon: <FaBolt className="text-4xl text-yellow-500" />, title: "High Efficiency", desc: "Our biofuels provide maximum energy output while reducing carbon emissions." },
    { icon: <FaGlobe className="text-4xl text-yellow-500" />, title: "Global Impact", desc: "We drive sustainability worldwide with innovative biofuel solutions." },
    { icon: <FaRecycle className="text-4xl text-yellow-500" />, title: "100% Renewable", desc: "Our biofuels are derived from sustainable and renewable resources." },
    { icon: <FaShieldAlt className="text-4xl text-yellow-500" />, title: "Safe & Reliable", desc: "We prioritize safety and adhere to strict energy regulations." },
    { icon: <FaUsers className="text-4xl text-yellow-500" />, title: "Trusted by Industries", desc: "Leading businesses rely on us for their sustainable energy needs." },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-green-900">
          Why Choose Us?
        </h2>
      </motion.div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
          >
            <div className="p-4 bg-yellow-50 rounded-full shadow-lg mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-center">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
