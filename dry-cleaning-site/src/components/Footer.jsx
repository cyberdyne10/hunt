import React from 'react';
import { Link } from 'react-router-dom';
import { Shirt, Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-500 p-1.5 rounded-lg">
                <Shirt className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">FreshPress</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium dry cleaning and laundry services delivered to your doorstep. We treat your clothes with the care they deserve.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-brand-600 transition-all"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-brand-600 transition-all"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-brand-600 transition-all"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-brand-400 transition-colors flex items-center gap-2"><span className="h-1 w-1 bg-brand-500 rounded-full"></span>Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-brand-400 transition-colors flex items-center gap-2"><span className="h-1 w-1 bg-brand-500 rounded-full"></span>Services</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-brand-400 transition-colors flex items-center gap-2"><span className="h-1 w-1 bg-brand-500 rounded-full"></span>Pricing</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-brand-400 transition-colors flex items-center gap-2"><span className="h-1 w-1 bg-brand-500 rounded-full"></span>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-400 hover:text-brand-400 transition-colors">Dry Cleaning</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-brand-400 transition-colors">Wash & Fold</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-brand-400 transition-colors">Alterations & Repairs</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-brand-400 transition-colors">Wedding Gown Preservation</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-brand-400 transition-colors">Leather & Suede</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 group">
                <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-brand-600 transition-colors">
                    <MapPin className="h-5 w-5 text-brand-400 group-hover:text-white" />
                </div>
                <span className="mt-1">123 Clean Street, Suite 100<br />Fresh City, FC 90210</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 group">
                <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-brand-600 transition-colors">
                    <Phone className="h-5 w-5 text-brand-400 group-hover:text-white" />
                </div>
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 group">
                <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-brand-600 transition-colors">
                    <Mail className="h-5 w-5 text-brand-400 group-hover:text-white" />
                </div>
                <span>hello@freshpress.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} FreshPress Dry Cleaning. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
