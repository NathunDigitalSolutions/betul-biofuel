import { motion } from "framer-motion";
import Slider from "react-slick";
import logo1 from "../assets/logo.png";  // Replace with your client's logo
import logo2 from "../assets/logo.png";  // Replace with your client's logo
import logo3 from "../assets/logo.png";  // Replace with your client's logo
import logo4 from "../assets/logo.png";  // Replace with your client's logo
import logo5 from "../assets/logo.png";
const Clientele = () => {
  const clientLogos = [
    { id: 1, logo: logo1 },
    { id: 2, logo: logo2 },
    { id: 3, logo: logo3 },
    { id: 4, logo: logo4 },
    { id: 5, logo: logo5 },
  ];

  // Slick slider settings
  const settings = {
    arrows: false,  // Disable navigation arrows
    dots: false,    // Disable dots for pagination
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,  // Enable auto slide
    autoplaySpeed: 3000,  // Set the speed of auto slide (in milliseconds)
    pauseOnHover: true,  // Pause the slider when hovered
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-[#033F20] via-[#044F28] to-[#D4A017]">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-white">Our Esteemed Clients</h2>
        <p className="text-lg text-yellow-200 mt-4 max-w-2xl mx-auto">
          We have had the privilege of working with leading brands and businesses across various industries.
        </p>
      </motion.div>

      {/* Client Logos Slick Slider */}
      <Slider {...settings} className="client-logos-slider">
        {clientLogos.map((client) => (
          <motion.div
            key={client.id}
            whileHover={{ scale: 1.1 }}
            className="flex justify-center items-center bg-white p-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl"
          >
            <img
              src={client.logo}
              alt={`Client ${client.id}`}
              className="w-32 h-32 object-contain"
            />
          </motion.div>
        ))}
      </Slider>
    </section>
  );
};

export default Clientele;
