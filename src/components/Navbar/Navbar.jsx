import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import "remixicon/fonts/remixicon.css";
import "./Marquee.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Smooth scrolling setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    // GSAP Animation for Nav Items
    gsap.from(".nav-item", {
      opacity: 0,
      y: -20,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold tracking-wide">The Jackpot</h1>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </button>

        {/* Search Bar (Hidden on small screens) */}
        <div className="hidden lg:flex relative w-1/3">
          <input
            type="text"
            placeholder="Search for items here..."
            className="border p-2 pl-10 rounded-full w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <i className="ri-search-line absolute left-3 top-2.5 text-gray-500"></i>
        </div>

        {/* Social Media Icons */}
        <div className="hidden lg:flex space-x-6 text-lg text-gray-700">
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            <i className="ri-whatsapp-line cursor-pointer text-green-600"></i>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <i className="ri-facebook-line cursor-pointer text-blue-600"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="ri-instagram-line cursor-pointer text-pink-500"></i>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <i className="ri-linkedin-line cursor-pointer text-blue-700"></i>
          </a>
        </div>
      </div>

      {/* Navigation Links */}
      <div
        className={`lg:flex justify-center bg-white transition-all duration-500 ease-in-out overflow-hidden ${
          menuOpen ? "h-auto opacity-100" : "h-0 opacity-0"
        } lg:h-auto lg:opacity-100`}
      >
        <ul className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6 text-sm font-medium text-black py-4">
          {[
            { to: "/new-in", label: "New In" },
            { to: "/sale", label: "Sale 🔥" },
            { to: "/women", label: "Women Clothing" },
            { to: "/kids", label: "Kids" },
            { to: "/curve", label: "Curve" },
            { to: "/men", label: "Men Clothing" },
            { to: "/underwear", label: "Underwear & Sleepwear" },
            { to: "/shoes", label: "Shoes" },
            { to: "/baby", label: "Baby & Maternity" },
            { to: "/sports", label: "Sports & Outdoors" },
          ].map((item, index) => (
            <li key={index} className="nav-item">
              <Link to={item.to} className="hover:text-yellow-600">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Promo Bar */}
      <div className="bg-yellow-200 py-3 text-sm font-medium text-gray-800 overflow-hidden">
        <div className="relative w-full flex overflow-hidden">
          <div className="marquee flex items-center space-x-16 whitespace-nowrap">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="flex items-center space-x-3">
                <i className="ri-gift-line text-xl"></i>
                <span>
                  GET US$3 OFF <span className="text-xs">YOUR FIRST ORDER</span>
                </span>
                <span className="text-lg font-bold">|</span>
                <i className="ri-truck-line text-xl"></i>
                <span>SHIPPING INFO</span>
                <span className="text-lg font-bold">|</span>
                <i className="ri-refresh-line text-xl"></i>
                <span>RETURN POLICY</span>
                <span className="text-lg font-bold">|</span>
                <i className="ri-share-forward-line text-xl"></i>
                <span>
                  SHARE & EARN <span className="text-xs">GET AN EXTRA 15% OFF</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
