import React, { useEffect, useRef } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import gsap from "gsap";

const shops = [
  {
    id: 1,
    name: "Jackpot Fashion Hub",
    description: "Trendy and stylish clothing for men, women, and kids.",
    address: "123 Fashion Street, New York, NY",
    mapLink: "https://www.google.com/maps?q=123+Fashion+Street+New+York+NY",
  },
  {
    id: 2,
    name: "Jackpot Trends",
    description: "Exclusive premium fashion with a modern touch.",
    address: "456 Trend Avenue, Los Angeles, CA",
    mapLink: "https://www.google.com/maps?q=456+Trend+Avenue+Los+Angeles+CA",
  },
  {
    id: 3,
    name: "Jackpot Style House",
    description: "Luxury and ethnic wear for special occasions.",
    address: "789 Style Boulevard, Miami, FL",
    mapLink: "https://www.google.com/maps?q=789+Style+Boulevard+Miami+FL",
  },
];

const ShopCards = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    if (cardRefs.current.length > 0) {
      gsap.from(cardRefs.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFBEA] flex flex-col items-center justify-center py-12 px-6">
      <h2 className="text-4xl sm:text-5xl font-bold text-[#C89D23] mb-10 text-center">
        Jackpot Clothing Stores
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-4">
        {shops.map((shop, index) => (
          <div
            key={shop.id}
            ref={(el) => (cardRefs.current[index] = el)}
            className="bg-white p-6 rounded-2xl shadow-xl border border-[#C89D23] 
            hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer relative flex flex-col"
            onClick={() => window.open(shop.mapLink, "_blank")}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold text-[#9D7A16]">
                {shop.name}
              </h3>
              <FaMapMarkerAlt className="text-[#C89D23] text-2xl" />
            </div>
            <p className="text-gray-600 mt-3 flex-grow">{shop.description}</p>
            <p className="text-sm text-gray-500 mt-2">📍 {shop.address}</p>
            <div className="mt-4 flex justify-end">
              <button className="bg-[#C89D23] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#A0781E] transition-all">
                View Location
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCards;
