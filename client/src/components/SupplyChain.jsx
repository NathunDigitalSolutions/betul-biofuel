import React from 'react';
import map from '../assets/map.jpg';

const states = [
  "Madhya Pradesh",
  "Maharashtra",
  "Gujarat",
  "Rajasthan",
  "Uttar Pradesh",
  "Punjab",
  "Haryana",
  "Chhattisgarh",
  "Bihar",
  "Odisha"
];

const SupplyChain = () => {
  return (
    <div className="w-full bg-gray-100 py-12 px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Map Image */}
        <div className="w-full md:w-1/2">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={map}
              alt="Supply Chain Map"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* States List */}
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl font-bold text-[#033F20] mb-6">We Operate In</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {states.map((state, idx) => (
              <li
                key={idx}
                className="bg-white text-gray-700 px-4 py-2 rounded shadow hover:bg-[#033F20] hover:text-white transition duration-300 text-center font-medium"
              >
                {state}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SupplyChain;
