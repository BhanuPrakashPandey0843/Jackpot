import React, { useState, useEffect } from 'react';
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const images = [
  '/images/clothsmall.webp',
  '/images/ShoppingGirl.jpg',
  '/images/ParentsShopping.jpg',
  '/images/ConvencingMan.webp',
  '/images/ClothCollection.webp',
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-150 bg-[#f9f6f3] flex items-center justify-center px-6 py-12 relative">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

        {/* Left Text Section */}
        <div className="md:col-span-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Welcome to <br />
            <span className="text-orange-500 italic font-medium">JackPot</span> <br />
            Your Style Hub
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            Discover unbeatable fashion deals and top-notch trends only at JackPot.
            From casual to classy, we bring you the ultimate online shopping experience.
            Your wardrobe upgrade is just a click away!
          </p>
          <button className="mt-4 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-medium transition">
            Explore Collection <FiArrowUpRight size={16} />
          </button>
        </div>

        {/* Center Image */}
        <div className="md:col-span-1">
          <div className="rounded-[24px] overflow-hidden transition duration-500">
            <img
              src={images[currentIndex]}
              alt={`JackPot Product ${currentIndex + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Image (Next Preview) */}
        <div className="md:col-span-1">
          <div className="rounded-[24px] overflow-hidden opacity-80">
            <img
              src={images[(currentIndex + 1) % images.length]}
              alt={`Next Preview`}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-12 right-12 flex gap-3">
        <button
          onClick={prevImage}
          className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-100 transition"
        >
          <FiChevronLeft size={18} />
        </button>
        <button
          onClick={nextImage}
          className="p-3 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition"
        >
          <FiChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
