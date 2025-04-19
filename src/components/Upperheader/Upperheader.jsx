import React, { useState } from 'react';
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaGithub } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';

const Upperheader = () => {
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const [selectedCurrency, setSelectedCurrency] = useState('United States (USD $)');
  const [selectedLanguage, setSelectedLanguage] = useState({
    name: 'English (US)',
    flag: 'https://flagcdn.com/us.svg',
  });

  const currencies = [
    'United States (USD $)',
    'United Kingdom (GBP £)',
    'India (INR ₹)',
    'Euro (EUR €)',
    'Canada (CAD $)',
    'Japan (JPY ¥)',
  ];

  const languages = [
    { name: 'English (US)', flag: 'https://flagcdn.com/us.svg' },
    { name: 'English (UK)', flag: 'https://flagcdn.com/gb.svg' },
    { name: 'Spanish', flag: 'https://flagcdn.com/es.svg' },
    { name: 'French', flag: 'https://flagcdn.com/fr.svg' },
    { name: 'German', flag: 'https://flagcdn.com/de.svg' },
    { name: 'Hindi', flag: 'https://flagcdn.com/in.svg' },
  ];

  const handleCurrencyClick = () => {
    setCurrencyOpen(!currencyOpen);
    setLanguageOpen(false); // close language if open
  };

  const handleLanguageClick = () => {
    setLanguageOpen(!languageOpen);
    setCurrencyOpen(false); // close currency if open
  };

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
    setCurrencyOpen(false);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setLanguageOpen(false);
  };

  return (
    <nav className="w-full bg-gray-50 shadow-sm py-3 px-6 flex items-center justify-between z-[999] relative">
      {/* Left Section */}
      <div className="flex items-center space-x-4 text-sm text-gray-700 relative">
        {/* Currency Dropdown */}
        <div className="relative cursor-pointer hover:text-red-500 transition">
          <div onClick={handleCurrencyClick} className="flex items-center">
            {selectedCurrency}
            <IoMdArrowDropdown className="ml-1 text-xs" />
          </div>
          {currencyOpen && (
            <div className="absolute left-1/2 -translate-x-1 top-full mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-lg z-[999] py-2 animate-slide-down">
              {currencies.map((currency) => (
                <p
                  key={currency}
                  onClick={() => handleCurrencySelect(currency)}
                  className="px-4 py-2 text-sm hover:bg-red-50 hover:text-red-600 transition rounded-md cursor-pointer"
                >
                  {currency}
                </p>
              ))}
            </div>
          )}
        </div>

        <span>|</span>

        {/* Language Dropdown */}
        <div className="relative flex items-center space-x-1 cursor-pointer hover:text-red-500 transition">
          <div onClick={handleLanguageClick} className="flex items-center">
            <img src={selectedLanguage.flag} alt="Flag" className="w-4 h-4" />
            <span className="ml-1">{selectedLanguage.name}</span>
            <IoMdArrowDropdown className="ml-1 text-xs" />
          </div>
          {languageOpen && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-lg z-[999] py-2 animate-slide-down">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  onClick={() => handleLanguageSelect(lang)}
                  className="flex items-center space-x-2 px-4 py-2 text-sm hover:bg-red-50 hover:text-red-600 transition rounded-md cursor-pointer"
                >
                  <img src={lang.flag} alt={lang.name} className="w-4 h-4" />
                  <span>{lang.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Center Logo */}
      <div className="text-2xl font-semibold">
        <span className="text-gray-700">Jack</span>
        <span className="text-orange-600">pot</span>
      </div>

      {/* Right Social Icons */}
      <div className="flex space-x-4 text-gray-700">
        <a href="#" className="hover:text-red-500 transition transform hover:scale-125 duration-200" title="Twitter">
          <FaTwitter size={18} />
        </a>
        <a href="#" className="hover:text-red-700 transition transform hover:scale-125 duration-200" title="LinkedIn">
          <FaLinkedinIn size={18} />
        </a>
        <a href="#" className="hover:text-red-600 transition transform hover:scale-125 duration-200" title="Facebook">
          <FaFacebookF size={18} />
        </a>
        <a href="#" className="hover:text-red-500 transition transform hover:scale-125 duration-200" title="GitHub">
          <FaGithub size={18} />
        </a>
      </div>
    </nav>
  );
};

export default Upperheader;
