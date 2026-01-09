import React from 'react';
import { Shirt, Scissors, Droplets, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Dry Cleaning',
      description: 'Expert care for your delicate fabrics. We use eco-friendly solvents that are tough on stains but gentle on your clothes and the environment.',
      icon: <Shirt className="h-8 w-8 text-white" />,
      features: ['Suits & Dresses', 'Silk & Wool', 'Stain Removal', 'Hand Finishing'],
      color: 'bg-blue-500'
    },
    {
      title: 'Wash & Fold',
      description: 'Reclaim your weekend. We wash, dry, and neatly fold your everyday laundry. Socks matched, whites brightened.',
      icon: <Droplets className="h-8 w-8 text-white" />,
      features: ['Everyday Clothes', 'Towels & Linens', 'Hypoallergenic Options', 'Same Day Service'],
      color: 'bg-indigo-500'
    },
    {
      title: 'Alterations & Repairs',
      description: 'Expert tailoring to make your clothes fit perfectly. From hem repairs to zipper replacements and custom fittings.',
      icon: <Scissors className="h-8 w-8 text-white" />,
      features: ['Hemming', 'Zipper Repair', 'Resizing', 'Patching'],
      color: 'bg-purple-500'
    },
    {
      title: 'Household Items',
      description: 'Deep cleaning for your home textiles. We handle large items like comforters, curtains, and rugs with specialized equipment.',
      icon: <ShoppingBag className="h-8 w-8 text-white" />, // Changed icon to generic bag as placeholder for household
      features: ['Comforters & Duvets', 'Curtains & Drapes', 'Tablecloths', 'Rugs'],
      color: 'bg-teal-500'
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Services
          </h1>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Comprehensive care for your wardrobe and home.
          </p>
        </div>
      </div>

      {/* Service List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={service.title} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <div className={`inline-flex items-center justify-center p-4 rounded-xl shadow-lg mb-6 ${service.color}`}>
                  {service.icon}
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <div className="h-2 w-2 rounded-full bg-brand-500 mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/pricing" className="text-brand-600 font-semibold hover:text-brand-700 hover:underline inline-flex items-center">
                  View Pricing
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </Link>
              </div>
              <div className="flex-1 w-full">
                 {/* Placeholder for service image */}
                <div className="bg-gray-100 rounded-2xl h-80 w-full overflow-hidden shadow-md relative group">
                    <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/0 transition-colors"></div>
                     <img
                        src={`https://source.unsplash.com/random/800x600?${service.title.replace(' ', ',').toLowerCase()},laundry`}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {e.target.src = 'https://images.unsplash.com/photo-1545173168-9f1947eebb8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'}} // Fallback
                     />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-brand-50 py-16 text-center">
          <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Don't see what you're looking for?</h2>
              <p className="text-lg text-gray-600 mb-8">We offer custom cleaning solutions for unique items. Contact us to get a quote.</p>
              <Link to="/contact" className="inline-block bg-white text-brand-600 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-50 transition-colors border border-gray-200">
                  Contact Us
              </Link>
          </div>
      </div>
    </div>
  );
};

export default Services;
