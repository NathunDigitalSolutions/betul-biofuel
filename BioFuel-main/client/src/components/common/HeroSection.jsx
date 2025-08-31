import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroSlidesData from "../../data/heroSlidesData";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {heroSlidesData.map((slide, index) => (
          <div key={index}>
            <div
              className="relative h-[250px] sm:h-[300px] md:h-[600px]  bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-l from-dark/60 to-transparent z-10"></div>
           <div className="absolute inset-0 flex items-center justify-start z-20 px-6 md:px-16">
  <div className="relative max-w-lg">
    {/* Gradient behind the text */}
    <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/60 to-transparent rounded-md"></div>
    <div className="relative text-left text-white space-y-4 p-4">
      <h2 className="text-2xl md:text-4xl font-bold text-secondary">
        {slide.heading}
      </h2>
      {slide.subheading && (
        <p className="text-base md:text-lg text-background">
          {slide.subheading}
        </p>
      )}
      {slide.buttonText && slide.buttonLink && (
        <a
          href={slide.buttonLink}
          className="inline-block mt-2 bg-primary text-white font-semibold px-5 py-2 rounded hover:bg-secondary hover:text-dark transition"
        >
          {slide.buttonText}
        </a>
      )}
    </div>
  </div>
</div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
