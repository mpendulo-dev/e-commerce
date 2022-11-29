import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagramSquare,
  FaPinterestP,
} from "react-icons/fa";

const FooterLinks = () => {
  return (
    <div className="flex items-center h-40 border-t-2 border-slate-100 m-6 text-xs">
      <div className="w-2/5 pl-4">
        <p className="py-1">Shop Online</p>
        <p className="py-1">Wishlist</p>
        <p className="text-orange-300 py-1">Blogs</p>
        <p className="py-1">Hornsby Store</p>
        <p>About Us</p>
      </div>
      <div className="w-2/5">
        <p className="py-1">FAQs</p>
        <p className="py-1">EFT and Layby Payment Details</p>
        <p className="py-1">Working With Us</p>
        <p className="py-1">Contact Us</p>
      </div>
      <div className="w-2/5">
        <p className="py-1">Shipping and Deliveries</p>
        <p className="py-1">Returns and Refunds</p>
        <p className="py-1">Terms and Conditions</p>
        <p className="py-1">Privacy Policy</p>
      </div>
      <div className="w-2/5">
        <p className="py-1 text-lg text-blue-600/75">
          We'd love to see you <br />
          in our Facebook Group!
        </p>
        <button className="text-white bg-blue-500 py-3 px-10 rounded-md">
          JOIN NOW
        </button>
        <div className="flex gap-8 my-4">
          <FaTwitter />
          <FaFacebookF />
          <FaInstagramSquare />
          <FaPinterestP />
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
