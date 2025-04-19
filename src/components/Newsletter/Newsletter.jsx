import React from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <div className="bg-[#f9f9f9] py-12 px-6 lg:px-20 flex items-start justify-between flex-col lg:flex-row gap-10">
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-[#8B4513]">
          Thread<span className="text-[#f26522]">ify</span>
        </h1>
      </motion.div>

      <motion.div
        className="flex-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <p className="text-lg text-gray-800 leading-relaxed mb-4">
          We are in the business of yielding successful spaces, satisfied clients, and inspired guests. Want to know how we do it? Subscribe below.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-2">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full sm:w-72 p-3 border border-[#d94c25] rounded-md outline-none placeholder:text-sm"
          />
          <button className="bg-[#d94c25] text-white px-5 py-3 rounded-md w-full sm:w-auto">
            Subscribe
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Newsletter;
