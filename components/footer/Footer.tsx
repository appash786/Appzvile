import React from 'react';
import './Styles.css'
const Footer = () => {
  return (
    <footer className="FooterBg xl:rounded-xl xl:mt-30 mt-12 w-full  text-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo and Intro */}
        <div>
          <h2 className="text-2xl font-bold text-white">AppzVile</h2>
          <p className="mt-2 text-sm text-gray-400">
            We build websites, design visuals, and edit stories—crafted for impact, built for growth.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm text-gray-400">Email: hello@appzvile.com</p>
          <p className="text-sm text-gray-400">Phone: +91 98765 43210</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} AppzVile. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
