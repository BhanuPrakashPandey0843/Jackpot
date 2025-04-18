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

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
    setCurrencyOpen(false);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setLanguageOpen(false);
  };

  return (
    <nav className="w-full bg-gray-50 shadow-sm py-3 px-6 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center space-x-4 text-sm text-gray-700 relative">
        {/* Currency Dropdown */}
        <div
          onClick={() => setCurrencyOpen(!currencyOpen)}
          className="relative cursor-pointer hover:text-red-500 transition"
        >
          {selectedCurrency}
          <IoMdArrowDropdown className="inline-block ml-1 text-xs" />
          {currencyOpen && (
            <div className="absolute left-0 mt-2 w-56 bg-white border rounded-lg shadow-xl z-20 p-2 space-y-1">
              {currencies.map((currency) => (
                <p
                  key={currency}
                  onClick={() => handleCurrencySelect(currency)}
                  className="hover:bg-gray-100 px-3 py-2 rounded cursor-pointer"
                >
                  {currency}
                </p>
              ))}
            </div>
          )}
        </div>

        <span>|</span>

        {/* Language Dropdown */}
        <div
          onClick={() => setLanguageOpen(!languageOpen)}
          className="relative flex items-center space-x-1 cursor-pointer hover:text-red-500 transition"
        >
          <img src={selectedLanguage.flag} alt="Flag" className="w-4 h-4" />
          <span>{selectedLanguage.name}</span>
          <IoMdArrowDropdown className="text-xs" />
          {languageOpen && (
            <div className="absolute left-36 mt-2 w-56 bg-white border rounded-lg shadow-xl z-20 p-2 space-y-1">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  onClick={() => handleLanguageSelect(lang)}
                  className="flex items-center space-x-2 hover:bg-gray-100 px-3 py-2 rounded cursor-pointer"
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
