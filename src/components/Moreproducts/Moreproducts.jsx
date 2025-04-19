import React from 'react';
import { motion } from 'framer-motion';

const Moreproducts = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-6 md:p-16 font-playfair">
      {/* Left Side */}
      <div className="max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-4xl font-medium leading-snug md:leading-snug mb-6"
        >
          Master fashion writing with expert tips <br />
          for captivating, trend-focused content.
        </motion.h1>

        <div className="flex items-center space-x-4">
          <h2 className="text-2xl md:text-3xl font-bold">Products</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-orange-400 text-orange-500 text-sm rounded-full px-4 py-1"
          >
            Browse all products
          </motion.button>
        </div>
      </div>

      {/* Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col items-center mt-10 md:mt-0"
      >
        <div className="flex space-x-[-10px] mb-2">
          <img src="https://media.licdn.com/dms/image/v2/D5603AQGi9y1WqoAj3g/profile-displayphoto-shrink_200_200/B56ZXMmiPoHoAc-/0/1742894410581?e=1750291200&v=beta&t=9IhE-iFBp7CkICaLOSESvY0r_7C_7T4Iy1jcdh_6nRw" alt="user1" className="w-8 h-8 rounded-full border-2 border-white" />
          <img src="https://thumbs.dreamstime.com/b/excited-young-male-customer-doing-online-shopping-credit-card-over-e-commerce-social-media-apps-happy-man-buying-275528792.jpg" alt="user2" className="w-8 h-8 rounded-full border-2 border-white" />
          <img src="https://thumbs.dreamstime.com/b/bearded-man-shopping-bags-shopping-bags-hand-handsome-smiled-guy-glasses-colored-paper-bags-hand-man-orange-115521253.jpg" alt="user3" className="w-8 h-8 rounded-full border-2 border-white" />
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold">100K</p>
          <p className="text-sm text-gray-600">famous article writer</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Moreproducts;
