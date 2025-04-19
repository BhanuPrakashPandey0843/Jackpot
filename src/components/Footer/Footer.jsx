import { motion } from 'framer-motion';
import { RiYoutubeFill, RiFacebookFill, RiTwitterFill, RiInstagramFill, RiLinkedinFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#FAF9F5] text-black px-6 md:px-20 py-10 font-sans">
      <motion.div
        className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div>
          <h3 className="font-semibold mb-2">Help & Information</h3>
          <ul className="text-sm space-y-1">
            <li><Link to="/pagination">Pagination</Link></li>
            <li><Link to="/terms">Terms & Condition</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/accessories">Accessories</Link></li>
            <li><Link to="/terms-of-use">Term of Use</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">About Us</h3>
          <ul className="text-sm space-y-1">
            <li><Link to="/help-center">Help Center</Link></li>
            <li><Link to="/address-store">Address Store</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/receivers">Receivers & Amplifiers</Link></li>
            <li><Link to="/craftsandore">Craftsandore</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">The great concept of Threadify</h3>
          <ul className="text-sm space-y-1">
            <li><Link to="/orders">My Orders</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/returns">My return of order</Link></li>
            <li><Link to="/sales-conditions">Sales conditions</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/legal-mentions">Legal mentions</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Social Media</h3>
          <p className="text-sm mb-2">Join Us</p>
          <div className="flex space-x-3 text-xl text-[#f26522]">
            <RiYoutubeFill aria-label="YouTube" />
            <RiFacebookFill aria-label="Facebook" />
            <RiTwitterFill aria-label="Twitter" />
            <RiInstagramFill aria-label="Instagram" />
            <RiLinkedinFill aria-label="LinkedIn" />
          </div>
        </div>
      </motion.div>

      <div className="mt-10 border-t pt-4 text-sm flex flex-col md:flex-row justify-between items-center text-gray-500">
        <p>Threadify © 2025. All rights reserved.</p>
        <div className="flex space-x-6 mt-2 md:mt-0">
          <Link to="/home">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/products">Products</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;