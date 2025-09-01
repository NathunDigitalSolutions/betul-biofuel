import React from 'react';
import { FaSeedling, FaBoxOpen } from 'react-icons/fa';
import { GiCow } from 'react-icons/gi';
import ddgsImg from '../../assets/img/img15.jpg'; 

const DDGSPlant = () => {
  return (
    <section className="bg-gradient-to-b from-[#fffdf3] to-[#f0f4f8] py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Text Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              DDGS Division
            </h2>
            <p className="text-gray-700 mb-4">
              At Betul Biofuel Pvt. Ltd., we believe in maximizing value from
              every stage of ethanol production. One of the most significant
              co-products of our distillery is DDGS (Dried Distillers Grains
              with Solubles)—a highly nutritious, protein-rich ingredient widely
              used in animal feed.
            </p>
            <p className="text-gray-700 mb-4">
              Our DDGS division, located in Betul, Madhya Pradesh, is equipped
              with modern processing facilities that ensure consistent quality,
              hygienic handling, and nutrient preservation. Produced as a
              by-product of ethanol manufacturing, DDGS is an eco-friendly
              solution that minimizes waste and supports the agricultural and
              livestock industry.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
              Why DDGS?
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <GiCow className="text-amber-600" /> High Nutritional Value –
                Rich in protein, fiber, and energy
              </li>
              <li className="flex items-center gap-2">
                <FaSeedling className="text-green-600" /> Multi-Sector Usage –
                Ideal for cattle, poultry, and aquaculture feed
              </li>
              <li className="flex items-center gap-2">
                <FaBoxOpen className="text-blue-600" /> Sustainable &
                Cost-Effective – Eco-friendly by-product promoting resource
                efficiency
              </li>
              <li className="flex items-center gap-2">
                <GiCow className="text-amber-600" /> Consistent Quality –
                Advanced technology ensures uniformity and reliability
              </li>
            </ul>

            <p className="text-gray-700 mt-6">
              By integrating ethanol production with DDGS utilization, we
              contribute to a circular economy, creating benefits for farmers,
              feed manufacturers, and the environment alike.
            </p>
            <p className="text-gray-700 font-semibold mt-4">
              Energy for progress. Nutrition for growth. Sustainability for the
              future.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={ddgsImg}
              alt="DDGS Plant"
              className="w-full h-80 md:h-[28rem] object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white rounded-xl shadow hover:scale-105 transition">
            <GiCow className="mx-auto text-4xl text-amber-600 mb-4" />
            <h4 className="font-bold">Livestock Health</h4>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:scale-105 transition">
            <FaSeedling className="mx-auto text-4xl text-green-600 mb-4" />
            <h4 className="font-bold">Sustainable Ingredients</h4>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:scale-105 transition">
            <FaBoxOpen className="mx-auto text-4xl text-blue-600 mb-4" />
            <h4 className="font-bold">Packaged for Performance</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DDGSPlant;
