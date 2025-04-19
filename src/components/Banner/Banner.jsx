import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const testimonials = [
  {
    name: "Vishal Yadav",
    location: "India",
    text: "Jackpot has completely changed my shopping game! The quality of clothes is top-notch and the delivery is super quick. Highly recommended!",
    img: "/images/VishalPhoto.jpg",
  },
  {
    name: "Bhanu Pandey",
    location: "New York",
    text: "The best fashion website I’ve come across. Stylish collections, fair prices, and amazing customer service. Jackpot never disappoints!",
    img: "/images/BhanuPhoto.jpg",
  },
  {
    name: "Vikas Yadav",
    location: "San Francisco",
    text: "Love the variety they offer! I found everything from casual tees to premium jackets. Shopping on Jackpot feels premium but affordable.",
    img: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    name: "Vishal Boss",
    location: "Boston",
    text: "This is my go-to store now. Trendy, affordable, and high quality — I’ve even recommended Jackpot to all my friends.",
    img: "/images/VishalPhoto.jpg",
  },
  {
    name: "Aayush Mishra",
    location: "Russia",
    text: "I was skeptical about shopping online, but Jackpot nailed it. The size was perfect, fabric feels amazing, and returns are super easy.",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Bhanu Pandey",
    location: "New York",
    text: "Their summer collection is 🔥! I got so many compliments. Definitely bookmarking Jackpot for my seasonal wardrobe refresh.",
    img: "/images/BhanuPhoto.jpg",
  },
  {
    name: "Anshika Singh",
    location: "America",
    text: "I’ve shopped from many platforms, but Jackpot stands out — they really understand fashion. Their product quality is just *chef’s kiss*!",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Banner = () => {
  const controlsRow1 = useAnimation();
  const controlsRow2 = useAnimation();

  const startAnimation = (controls, direction = "left") => {
    controls.start({
      x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    });
  };

  useEffect(() => {
    startAnimation(controlsRow1, "left");
    startAnimation(controlsRow2, "right");
  }, []);

  return (
    <div className="bg-white py-16 px-6 md:px-12 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black-600 mb-4">What Our Shoppers Are Saying</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Real reviews from real customers who love shopping on Jackpot — where fashion meets quality and convenience.
        </p>
      </div>

      {/* Row 1 */}
      <div
        className="overflow-hidden mb-8"
        onMouseEnter={() => controlsRow1.stop()}
        onMouseLeave={() => startAnimation(controlsRow1, "left")}
      >
        <motion.div className="flex space-x-6 w-max" animate={controlsRow1}>
          {testimonials.concat(testimonials).map((t, index) => (
            <div
              key={`row1-${index}`}
              className="bg-orange-100 rounded-xl p-6 w-80 shadow-lg flex-shrink-0"
            >
              <p className="text-gray-800 mb-4">"{t.text}"</p>
              <div className="flex items-center mt-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-orange-400"
                />
                <div>
                  <p className="font-semibold text-orange-700">{t.name}</p>
                  <p className="text-sm text-gray-500">Location: {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 */}
      <div
        className="overflow-hidden"
        onMouseEnter={() => controlsRow2.stop()}
        onMouseLeave={() => startAnimation(controlsRow2, "right")}
      >
        <motion.div className="flex space-x-6 w-max" animate={controlsRow2}>
          {testimonials
            .slice()
            .reverse()
            .concat(testimonials.slice().reverse())
            .map((t, index) => (
              <div
                key={`row2-${index}`}
                className="bg-orange-100 rounded-xl p-6 w-80 shadow-lg flex-shrink-0"
              >
                <p className="text-gray-800 mb-4">"{t.text}"</p>
                <div className="flex items-center mt-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-orange-400"
                  />
                  <div>
                    <p className="font-semibold text-orange-700">{t.name}</p>
                    <p className="text-sm text-gray-500">Location: {t.location}</p>
                  </div>
                </div>
              </div>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
