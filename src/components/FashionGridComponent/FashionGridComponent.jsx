import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "Outerwear", "Bottom", "Tops", "Loungewear", "Sneakers"];

const ProductCard = ({ product }) => {
  const handleBuyNow = () => {
    const message = `Hi, I'm interested in the ${product.title} priced at ${product.price}.`;
    const url = `https://wa.me/91706173862?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="rounded-2xl shadow-xl overflow-hidden p-4 text-center"
      style={{ backgroundColor: product.bgColor }}
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-72 object-cover rounded-xl mb-4"
      />
      <h2 className="font-semibold text-lg text-white">{product.title}</h2>
      <p className="text-sm text-white mt-1">
        <span className="line-through mr-1">{product.originalPrice}</span>
        <span className="font-bold">{product.price}</span>
      </p>
      <p className="text-yellow-300 text-sm mt-1">⭐ {product.rating}</p>
      <div className="flex justify-center gap-3 mt-4">
        <button
          onClick={handleBuyNow}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm"
        >
          Buy Now
        </button>
        <button
          className="border border-white text-white hover:bg-white hover:text-black px-4 py-2 rounded-lg text-sm"
        >
          Know More
        </button>
      </div>
    </motion.div>
  );
};

const FashionGridComponent = () => {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="bg-white p-8 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">Browse All You Needs.</h1>

      <div className="flex justify-center gap-4 flex-wrap mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
              activeCategory === cat
                ? "bg-black text-white"
                : "border-gray-300 text-black hover:bg-black hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FashionGridComponent;
