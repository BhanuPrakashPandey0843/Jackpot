import React, { useState } from 'react';
import { motion } from 'framer-motion';
import productData from './productData.json';

const Moreproducts = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [showMore, setShowMore] = useState(false);

  const handleLoadMore = () => {
    setShowMore(!showMore);
    setVisibleCount(!showMore ? productData.length : 8);
  };

  const handleBuyNow = (productId) => {
    const phoneNumber = '761738562';
    const message = encodeURIComponent(`I'm interested in buying product with ID: ${productId}`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 via-white to-gray-100 px-4 py-14 md:px-20 font-playfair">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-14">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-semibold leading-tight mb-6"
          >
            Master fashion writing with expert tips <br />
            for captivating, trend-focused content.
          </motion.h1>

          <div className="flex items-center space-x-4">
            <h2 className="text-2xl md:text-3xl font-bold">Products</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-orange-400 text-orange-500 text-sm rounded-full px-4 py-1 hover:bg-orange-50"
            >
              Browse all products
            </motion.button>
          </div>
        </div>

        {/* Avatar and Stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center mt-10 md:mt-0"
        >
          <div className="flex -space-x-3 mb-3">
            {[
              "https://media.licdn.com/dms/image/v2/D5603AQGi9y1WqoAj3g/profile-displayphoto-shrink_200_200/B56ZXMmiPoHoAc-/0/1742894410581?e=1750291200&v=beta&t=9IhE-iFBp7CkICaLOSESvY0r_7C_7T4Iy1jcdh_6nRw",
              "https://thumbs.dreamstime.com/b/excited-young-male-customer-doing-online-shopping-credit-card-over-e-commerce-social-media-apps-happy-man-buying-275528792.jpg",
              "https://thumbs.dreamstime.com/b/bearded-man-shopping-bags-shopping-bags-hand-handsome-smiled-guy-glasses-colored-paper-bags-hand-man-orange-115521253.jpg"
            ].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`user${idx}`}
                className="w-9 h-9 rounded-full border-2 border-white shadow-sm object-cover"
                loading="lazy"
              />
            ))}
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold">100K+</p>
            <p className="text-sm text-gray-600">Famous article writers</p>
          </div>
        </motion.div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productData.slice(0, visibleCount).map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-52 object-cover rounded-t-2xl"
              loading="lazy"
            />
            <div className="p-5 flex flex-col items-center text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-1">{product.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{product.description}</p>
              <div className="flex space-x-3">
                <button
                  onClick={() => handleBuyNow(product.id)}
                  className="bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition"
                >
                  Buy Now
                </button>
                <button
                  className="border border-gray-800 text-gray-800 px-5 py-2 rounded-full text-sm hover:bg-black hover:text-white transition"
                >
                  View
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-14">
        <button
          onClick={handleLoadMore}
          className="bg-orange-500 text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-orange-600 transition duration-300"
        >
          {showMore ? 'Show Less' : 'Load More'}
        </button>
      </div>
    </div>
  );
};

export default Moreproducts;
