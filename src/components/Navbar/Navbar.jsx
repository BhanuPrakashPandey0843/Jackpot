import React, { useState } from 'react';
import { FiSearch, FiShoppingBag, FiHeart, FiUser, FiMenu, FiX } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle

  const navItems = ['Home', 'Shop', 'Products', 'About', 'Contact'];

  return (
    <nav className="w-full bg-white py-4 px-6 md:px-12 shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between w-full">
        
        {/* Left: Search bar */}
        <div className="flex items-center space-x-3 flex-1 max-w-xs">
          <FiSearch className="text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search Product"
            className="w-full px-3 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 transition text-sm"
          />
        </div>

        {/* Center: Nav items */}
        <div className="hidden lg:flex space-x-6 text-sm font-medium justify-center flex-1">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              onClick={() => setActiveLink(item)}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full transition ${
                  isActive || activeLink === item
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-800 hover:text-orange-500'
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>

        {/* Right: Icons */}
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

          {/* Hamburger (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 flex flex-col space-y-3">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              onClick={() => {
                setActiveLink(item);
                setIsOpen(false);
              }}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-full transition text-sm ${
                  isActive || activeLink === item
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-800 hover:text-orange-500'
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
