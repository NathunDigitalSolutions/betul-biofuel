import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import image from "../assets/testimonial.jpg"

const fadeIn = (direction = 'up', delay = 0) => {
  return {
    hidden: { opacity: 0, y: direction === 'up' ? 20 : -20 },
    show: { opacity: 1, y: 0, transition: { delay, duration: 0.5 } },
  };
};

const TestimonialSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slidesToShow = 3;

  const data = [
    {
      image: image,
      name: 'John Doe',
      rank: 'CEO, BioFuel Corp',
      desc: 'This platform has transformed our business efficiency. Highly recommended!',
    },
    {
      image: image,
      name: 'Jane Smith',
      rank: 'CTO, Green Energy Ltd',
      desc: 'A seamless experience with excellent support from the team.',
    },
    {
      image: image,
      name: 'Mike Johnson',
      rank: 'Engineer, EcoFriendly Tech',
      desc: 'Innovative solutions that truly make a difference in the energy sector.',
    },
    {
      image: image,
      name: 'Emily Davis',
      rank: 'Project Manager, Solar Solutions',
      desc: 'Reliable and efficient — the best we have worked with so far.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease',
    beforeChange: (current, next) => setActiveSlide(next),
    appendDots: (dots) => (
      <div style={{ padding: '10px', bottom: '-25px' }}>
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const isMiddleSlide = (index) => {
    const middleSlideIndex =
      (activeSlide + Math.floor(slidesToShow / 2)) % data.length;
    const adjustedIndex = (index + data.length) % data.length;
    return adjustedIndex === middleSlideIndex;
  };

  return (
    <div className="m-5 md:m-20">
      <motion.h2
        className="text-4xl font-bold text-green-800 text-center"
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        animate="show"
      >
        What They Say
      </motion.h2>
      <Slider {...settings} className="testimony-slider">
        {data.map((item, index) => (
          <motion.div
            className={`px-3 md:px-4 mb-10 ${
              isMiddleSlide(index) ? 'scale-105' : 'scale-100'
            } transition-transform duration-300`}
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div
              className={`h-[325px] mt-10 md:mt-20 rounded-2xl shadow-lg ${
                isMiddleSlide(index)
                  ? 'bg-gradient-to-r from-[#033F20] via-[#044F28] to-[#D4A017] text-white'
                  : 'bg-gray-100'
              } p-5 md:p-7 gap-5 lg:gap-10 transition-all duration-300 relative`}
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full object-cover mb-2"
                />
                <div className="font-bold text-xl md:text-lg lg:text-xl mb-1">
                  {item.name}
                </div>
                <div className="mb-4 text-sm md:text-xs lg:text-sm">
                  {item.rank}
                </div>
                <div className="mt-1 text-base md:text-sm lg:text-base truncated-text">
                  {item.desc}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSection;
