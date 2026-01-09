import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Clock, Sparkles, Star, ArrowRight, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-brand-50 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-brand-200 bg-white text-brand-700 font-semibold text-sm mb-6 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-brand-600 mr-2"></span>
                #1 Rated Dry Cleaner in Fresh City
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">Premium Care for</span>{' '}
                <span className="block text-brand-600 xl:inline">Your Wardrobe</span>
              </h1>
              <p className="mt-6 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Experience the convenience of door-to-door dry cleaning. We pick up, clean, and deliver your clothes looking brand new.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-brand-600 hover:bg-brand-700 md:py-4 md:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
                  >
                    Schedule Pickup
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    to="/pricing"
                    className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg shadow-sm hover:shadow-md transition-all"
                  >
                    View Pricing
                  </Link>
                </div>
                <p className="mt-3 text-sm text-gray-500">
                  No credit card required for booking. Free pickup & delivery.
                </p>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-2xl shadow-xl lg:max-w-md overflow-hidden transform rotate-2 hover:rotate-0 transition-all duration-500">
                  <div className="bg-brand-200 h-96 w-full flex items-center justify-center">
                    {/* Placeholder for Hero Image */}
                    <img
                        src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        alt="Clothes hanging"
                        className="object-cover h-full w-full"
                    />
                  </div>
              </div>

              {/* Floating Cards */}
              <div className="hidden lg:block absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 animate-bounce-slow">
                  <div className="flex items-center gap-3">
                      <div className="bg-green-100 p-2 rounded-full">
                          <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                          <p className="font-bold text-gray-900">Eco-Friendly</p>
                          <p className="text-xs text-gray-500">Non-toxic cleaning</p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">How It Works</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Fresh clothes in 3 simple steps
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              We've streamlined the process to give you more time for what matters.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              <div className="relative flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-brand-100 text-brand-600 mb-6 transform transition-transform hover:scale-110">
                  <Clock className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">1. Schedule</h3>
                <p className="text-gray-500">
                  Book a pickup time that works for you online or through our app. It takes less than 2 minutes.
                </p>
              </div>

              <div className="relative flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-brand-100 text-brand-600 mb-6 transform transition-transform hover:scale-110">
                  <Truck className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">2. Pickup & Clean</h3>
                <p className="text-gray-500">
                  Our driver picks up your bag. We inspect, treat stains, and clean your items with expert care.
                </p>
              </div>

              <div className="relative flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-brand-100 text-brand-600 mb-6 transform transition-transform hover:scale-110">
                  <Sparkles className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">3. Deliver</h3>
                <p className="text-gray-500">
                  We deliver your fresh, crisp clothes back to your door. Ready to wear and enjoy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-gray-900">What our customers say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex text-yellow-400 mb-4">
                            <Star className="h-5 w-5 fill-current" />
                            <Star className="h-5 w-5 fill-current" />
                            <Star className="h-5 w-5 fill-current" />
                            <Star className="h-5 w-5 fill-current" />
                            <Star className="h-5 w-5 fill-current" />
                        </div>
                        <p className="text-gray-600 mb-6 italic">
                            "The best dry cleaning service I've used. They got a wine stain out of my silk dress that I thought was ruined forever!"
                        </p>
                        <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">
                                {String.fromCharCode(64 + i)}
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">Customer Name</p>
                                <p className="text-sm text-gray-500">Verified Customer</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-brand-200">Get 20% off your first order.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-brand-600 bg-white hover:bg-brand-50"
              >
                Schedule Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
