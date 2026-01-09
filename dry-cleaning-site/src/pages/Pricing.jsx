import React from 'react';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const commonItems = [
    { name: 'Shirt (Laundered)', price: '$3.50' },
    { name: 'Pants / Trousers', price: '$8.00' },
    { name: 'Blouse', price: '$9.00' },
    { name: 'Suit (2 Piece)', price: '$18.00' },
    { name: 'Dress', price: '$15.00' },
    { name: 'Skirt', price: '$9.00' },
    { name: 'Sweater', price: '$10.00' },
    { name: 'Coat / Jacket', price: '$16.00' },
  ];

  const householdItems = [
    { name: 'Comforter (Queen/King)', price: '$35.00' },
    { name: 'Blanket', price: '$25.00' },
    { name: 'Tablecloth', price: '$20.00' },
    { name: 'Pillow Cases', price: '$5.00' },
  ];

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-brand-600 tracking-wide uppercase">Pricing</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Simple, Transparent Pricing
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            No hidden fees. Free pickup and delivery on orders over $30.
          </p>
        </div>

        {/* Pricing Lists */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Garments */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-8 bg-brand-50 border-b border-brand-100">
                    <h3 className="text-2xl font-bold text-gray-900">Garments</h3>
                    <p className="text-gray-500 mt-2">Everyday wear to formal attire.</p>
                </div>
                <div className="p-8">
                    <ul className="space-y-4">
                        {commonItems.map((item) => (
                            <li key={item.name} className="flex justify-between items-center border-b border-gray-100 pb-2 last:border-0">
                                <span className="text-gray-700 font-medium">{item.name}</span>
                                <span className="text-brand-600 font-bold">{item.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Household */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-8 bg-green-50 border-b border-green-100">
                    <h3 className="text-2xl font-bold text-gray-900">Household</h3>
                    <p className="text-gray-500 mt-2">Bedding, linens, and more.</p>
                </div>
                <div className="p-8">
                    <ul className="space-y-4">
                        {householdItems.map((item) => (
                            <li key={item.name} className="flex justify-between items-center border-b border-gray-100 pb-2 last:border-0">
                                <span className="text-gray-700 font-medium">{item.name}</span>
                                <span className="text-brand-600 font-bold">{item.price}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600 text-center">
                            *Prices are subject to change based on material (e.g., silk, leather, beads). Final price confirmed upon inspection.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Subscription Plan (Optional Idea) */}
        <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Monthly Memberships</h3>
            <div className="flex flex-col md:flex-row justify-center gap-8">
                 <div className="w-full md:w-1/3 bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                     <h4 className="text-xl font-bold text-gray-900">Pay As You Go</h4>
                     <p className="text-4xl font-extrabold text-gray-900 mt-4">$0<span className="text-base font-normal text-gray-500">/mo</span></p>
                     <p className="text-gray-500 mt-4">Perfect for occasional cleaning.</p>
                     <ul className="mt-6 space-y-4">
                         <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 shrink-0"/> Standard Turnaround (48h)</li>
                         <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 shrink-0"/> Free Pickup & Delivery</li>
                         <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 shrink-0"/> Pay per item prices</li>
                     </ul>
                     <Link to="/contact" className="mt-8 block w-full py-3 px-4 bg-gray-100 text-gray-700 font-bold text-center rounded-lg hover:bg-gray-200 transition-colors">
                         Get Started
                     </Link>
                 </div>

                 <div className="w-full md:w-1/3 bg-white border-2 border-brand-500 rounded-2xl p-8 shadow-xl relative">
                     <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
                     <h4 className="text-xl font-bold text-gray-900">Wash & Fold Plan</h4>
                     <p className="text-4xl font-extrabold text-gray-900 mt-4">$59<span className="text-base font-normal text-gray-500">/mo</span></p>
                     <p className="text-gray-500 mt-4">Ideal for busy professionals.</p>
                     <ul className="mt-6 space-y-4">
                         <li className="flex items-start"><Check className="h-5 w-5 text-brand-500 mr-2 shrink-0"/> 4 Bags of Wash & Fold (approx 60lbs)</li>
                         <li className="flex items-start"><Check className="h-5 w-5 text-brand-500 mr-2 shrink-0"/> Next Day Delivery</li>
                         <li className="flex items-start"><Check className="h-5 w-5 text-brand-500 mr-2 shrink-0"/> 10% off Dry Cleaning</li>
                     </ul>
                     <Link to="/contact" className="mt-8 block w-full py-3 px-4 bg-brand-600 text-white font-bold text-center rounded-lg hover:bg-brand-700 transition-colors">
                         Subscribe
                     </Link>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
