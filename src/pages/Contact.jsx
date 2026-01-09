import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-xl text-gray-500">
            Have questions or ready to schedule a pickup? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="bg-brand-100 rounded-lg p-3">
                    <Phone className="h-6 w-6 text-brand-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <p className="mt-1 text-gray-500">Mon-Fri from 8am to 6pm.</p>
                  <p className="mt-1 text-lg font-semibold text-brand-600">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="bg-brand-100 rounded-lg p-3">
                    <Mail className="h-6 w-6 text-brand-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-500">Our friendly team is here to help.</p>
                  <p className="mt-1 text-lg font-semibold text-brand-600">hello@freshpress.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="bg-brand-100 rounded-lg p-3">
                    <MapPin className="h-6 w-6 text-brand-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Office</h3>
                  <p className="mt-1 text-gray-500">Come say hello at our office HQ.</p>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    123 Clean Street, Suite 100<br />
                    Fresh City, FC 90210
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 bg-gray-200 rounded-xl h-64 w-full flex items-center justify-center text-gray-500">
                <span className="flex items-center gap-2"><MapPin className="h-5 w-5"/> Map Integration Placeholder</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    id="first-name"
                    className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-brand-500 focus:border-brand-500"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    id="last-name"
                    className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-brand-500 focus:border-brand-500"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-brand-500 focus:border-brand-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-brand-500 focus:border-brand-500"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-brand-500 focus:border-brand-500"
                  placeholder="How can we help you today?"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
