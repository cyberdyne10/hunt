import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Shirt } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-brand-600 p-2 rounded-lg">
                <Shirt className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-2xl text-gray-900 tracking-tight">Fresh<span className="text-brand-600">Press</span></span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-brand-600 px-3 py-2 rounded-md font-medium transition-colors">Home</Link>
            <Link to="/services" className="text-gray-600 hover:text-brand-600 px-3 py-2 rounded-md font-medium transition-colors">Services</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-brand-600 px-3 py-2 rounded-md font-medium transition-colors">Pricing</Link>
            <Link to="/contact" className="text-gray-600 hover:text-brand-600 px-3 py-2 rounded-md font-medium transition-colors">Contact</Link>
            <button className="bg-brand-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-brand-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Schedule Pickup
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block text-gray-600 hover:text-brand-600 hover:bg-brand-50 px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/services" className="block text-gray-600 hover:text-brand-600 hover:bg-brand-50 px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/pricing" className="block text-gray-600 hover:text-brand-600 hover:bg-brand-50 px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link to="/contact" className="block text-gray-600 hover:text-brand-600 hover:bg-brand-50 px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
            <div className="px-3 py-2">
                <button className="w-full bg-brand-600 text-white px-5 py-2 rounded-full font-medium hover:bg-brand-700 transition-colors shadow-sm">
                Schedule Pickup
                </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
