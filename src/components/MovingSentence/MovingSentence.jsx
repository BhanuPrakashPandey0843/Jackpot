import React from "react";
import "./MovingSentence.css";

const MovingSentence = () => {
  const row1 = [
    "✧ FLEXIBLE PRICE",
    "✧ WHAT CUSTOMERS LOVE",
    "✧ SHOP THE LATEST TRENDS CURATED JUST FOR YOU",
    "✧ EXCLUSIVE JACKPOT DEALS UPDATED WEEKLY",
    "✧ FREE SHIPPING ON ORDERS ABOVE $50",
  ];

  const row2 = [
    "✧ CUSTOMERS LOVE LIMITED EDITION STYLES",
    "✧ QUALITY MEETS AFFORDABILITY",
    "✧ FIND YOUR PERFECT FIT WITH OUR SIZE GUIDE",
    "✧ FLEXIBLE PRICING FOR ALL",
    "✧ NEW COLLECTION DROPS EVERY WEEK",
  ];

  const renderLoopContent = (items) =>
    [...items, ...items].map((text, index) => (
      <span className="marquee-item" key={index}>
        {text}
      </span>
    ));

  return (
    <div className="w-full bg-white text-black py-10 px-4">
    {/* Row 1: Left to Right */}
    <div className="marquee-container scroll-right">
      <div className="marquee-track">{renderLoopContent(row1)}</div>
    </div>

    <div className="h-[2px] w-full bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 shadow-sm" />

    {/* Row 2: Right to Left */}
    <div className="marquee-container scroll-left">
      <div className="marquee-track">{renderLoopContent(row2)}</div>
    </div>
  </div>
  );
};

export default MovingSentence;
