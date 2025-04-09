import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-10 md:py-18 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-10 relative z-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          {/* Logo and Description */}
          <div className="md:w-1/3 text-center md:text-left">
            <h1 className="text-3xl lg:text-4xl font-bold">The Jackpot</h1>
            <p className="mt-4 text-gray-400 text-lg leading-relaxed">
              Explore the world's hidden treasures, waiting to be discovered
              with us.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-14 text-center md:text-left">
            <div>
              <h3 className="font-bold text-lg mb-3">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                {["Home", "Packages", "Contact Us", "About Us", "Plan Your Trip"].map(link => (
                  <li key={link} className="hover:text-white transition duration-300">{link}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Destinations</h3>
              <ul className="space-y-2 text-gray-400">
                {["Exotic Beaches", "Cultural Capitals", "Adventure Escapes", "Family Vacations", "Luxury Travel"].map(link => (
                  <li key={link} className="hover:text-white transition duration-300">{link}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Support</h3>
              <ul className="space-y-2 text-gray-400">
                {["Help Center", "Anti-discrimination", "Disability Support", "Cancellation Options", "Report Neighborhood Concern"].map(link => (
                  <li key={link} className="hover:text-white transition duration-300">{link}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-gray-400 text-sm">
            © 2025 The Jackpot. All Rights Reserved
          </p>
          <ul className="flex space-x-8 text-gray-400 text-sm">
            {["Privacy Policy", "Terms of Service", "Manage Cookies"].map(link => (
              <li key={link} className="hover:text-white transition duration-300">{link}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-10 md:h-50"></div>

      {/* Large Background Text */}
      <div className="absolute w-full bottom-0 flex justify-center items-center pointer-events-none">
        <p
          className="text-white text-[30px] sm:text-[40px] md:text-[60px] lg:text-[100px] xl:text-[150px] font-extrabold uppercase tracking-widest opacity-10 sm:opacity-15 lg:opacity-20"
          style={{
            wordSpacing: "0.1em", // Adds spacing between words for better readability
          }}
        >
         The Jackpot
        </p>
      </div>
    </footer>
  );
};

export default Footer;