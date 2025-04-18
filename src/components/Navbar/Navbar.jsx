import React, { useState } from 'react';
import { FiSearch, FiShoppingBag, FiHeart, FiUser } from 'react-icons/fi';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home'); // Set Home as default active

  const navItems = ['Home', 'Shop', 'Products', 'Blogs', 'About'];

  return (
    <nav className="w-full bg-white py-4 px-6 md:px-12 shadow-sm">
      <div className="flex items-center justify-between w-full space-x-6">
        
        {/* Left: Search Bar */}
        <div className="flex-1 max-w-xs">
          <div className="relative w-full">
            <FiSearch className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search Product"
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 transition text-sm"
            />
          </div>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setActiveLink(item)}
              className={`px-4 py-2 rounded-full transition ${
                activeLink === item
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-800 hover:text-orange-500'
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right: Icon Buttons */}
        <div className="flex items-center space-x-3">
          <button className="p-3 rounded-full border border-gray-200 bg-white hover:bg-orange-100 transition duration-200">
            <FiShoppingBag className="text-gray-700" size={20} />
          </button>
          <button className="p-3 rounded-full border border-gray-200 bg-white hover:bg-orange-100 transition duration-200">
            <FiHeart className="text-gray-700" size={20} />
          </button>
          <button className="p-3 rounded-full border border-gray-200 bg-white hover:bg-orange-100 transition duration-200">
            <FiUser className="text-gray-700" size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
