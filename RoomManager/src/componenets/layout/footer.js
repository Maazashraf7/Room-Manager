import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
	<footer class="bg-gray-800 text-white py-4 ">
		
    <div className="container mx-auto text-center">
      <div className="mb-4 ">
        <Link to="/about" className="text-gray-400 hover:text-white mx-2">About</Link>
        <Link to="/services" className="text-gray-400 hover:text-white mx-2">Services</Link>
        <Link to="/contact" className="text-gray-400 hover:text-white mx-2">Contact</Link>
      </div>
      <div className="text-gray-400">
        &copy; 2024 Company Name. All rights reserved.
      </div>
    </div>
    
</footer>
  );
};

export default Footer;
