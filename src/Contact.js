// Contact.js
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react'; // Icons for contact info

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="bg-gray-800 bg-opacity-60 p-8 rounded-2xl shadow-xl backdrop-blur-md border border-gray-700 max-w-4xl mx-auto">
        <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 text-center flex items-center justify-center">
          Get in Touch
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6 text-gray-300 text-lg">
            <p className="mb-4">
              Have a question or want to work together? Feel free to reach out!
            </p>
            <div className="flex items-center space-x-3">
              <Mail size={24} className="text-blue-400" />
              <span>your.email@example.com</span> {/* Replace with your email */}
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={24} className="text-purple-400" />
              <span>+123 456 7890</span> {/* Replace with your phone number */}
            </div>
            <div className="flex items-center space-x-3">
              <MapPin size={24} className="text-green-400" />
              <span>Your City, Your Country</span> {/* Replace with your location */}
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
