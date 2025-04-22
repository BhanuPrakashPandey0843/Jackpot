import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="relative w-full">
      <div className="max-w-full mx-auto overflow-hidden shadow-xl">
        <Slider {...sliderSettings}>
          <div className="relative">
            <img
              src="/images/ContactImage3.png"
              alt="Jackpot Slide 1"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
              <div className="text-center transform transition-transform duration-500 hover:scale-105">
                <h1 className="text-5xl font-bold mb-4 text-shadow-xl">
                  Get in Touch
                </h1>
                <p className="text-lg mb-6">We’d love to hear from you!</p>
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all text-lg font-semibold transform hover:scale-110">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/ContactImage1.jpg"
              alt="Jackpot Slide 2"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
              <div className="text-center transform transition-transform duration-500 hover:scale-105">
                <h1 className="text-5xl font-bold mb-4 text-shadow-xl">
                  Get in Touch
                </h1>
                <p className="text-lg mb-6">We’d love to hear from you!</p>
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all text-lg font-semibold transform hover:scale-110">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/ContactImage2.jpg"
              alt="Jackpot Slide 3"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
              <div className="text-center transform transition-transform duration-500 hover:scale-105">
                <h1 className="text-5xl font-bold mb-4 text-shadow-xl">
                  Get in Touch
                </h1>
                <p className="text-lg mb-6">We’d love to hear from you!</p>
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all text-lg font-semibold transform hover:scale-110">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
