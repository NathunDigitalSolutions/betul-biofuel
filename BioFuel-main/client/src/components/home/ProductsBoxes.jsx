import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import productFeaturesData from "../../data/productFeaturesData";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const ProductsBoxes = () => {
  return (
    <div className="text-dark">
      {/* 🌿 Products Section */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Key Products
          </h2>
          <p className="text-lg md:text-xl text-dark/70 max-w-2xl mx-auto">
            Clean, innovative energy solutions for a greener and more sustainable tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {productFeaturesData.map((item, index) => {
            const isExternal = item.title === "Navaahar"; // Redirect Navaahar externally
            return (
              <motion.div
                key={index}
                className="group relative p-6 rounded-2xl bg-background border border-border shadow-md hover:shadow-2xl transition duration-300 overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
                variants={cardVariants}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-dark leading-relaxed mb-4">{item.desc}</p>

                  {isExternal ? (
                    <a
                      href="https://navaahar.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm font-medium text-white bg-secondary px-5 py-2 rounded-md hover:bg-primary transition"
                    >
                      Read More →
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className="inline-block text-sm font-medium text-white bg-secondary px-5 py-2 rounded-md hover:bg-primary transition"
                    >
                      Read More →
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ProductsBoxes;
