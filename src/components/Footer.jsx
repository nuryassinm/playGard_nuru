import React from 'react';
import { Twitter, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-16">
      <div className="max-w-[95rem] bg-white  mx-auto py-20 rounded-2xl px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-pink-500 rounded-full"></div>
              <span className="text-xl font-bold">HostinGard</span>
            </div>
            <p className="text-gray-600 pr-4">
              We're always in search for talented News offers & exciting updates delivered right to your inbox!
            </p>
            {/* Social Media */}
            <div>
              <h3 className="text-sm font-semibold mb-4">Social Media</h3>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                  {/* <Mastodon size={20} /> */}
                </a>
                <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Solutions Section */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Shared Hosting</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">WordPress Hosting</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Agency Hosting</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Enterprise Hosting</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Multisite Hosting</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Secure Hosting</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing Plans</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Hostingard Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Add-Ons</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Cloudflare Integration</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Hostingard Support</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Free Migration</a></li>
            </ul>
          </div>

          {/* Legal Information Section */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Legal Information</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Partners</a></li>
            </ul>
          </div>
        </div>
      </div>
        {/* Footer Bottom */}
        <section className='flex  justify-center pb-3'>
        <div className="border-t pt-8 flex max-w-[95rem] w-full  flex-col lg:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm md:mb-2">© 2022 Hostingard. All rights reserved</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-sm text-gray-600">We Accept Payment Gateway</span>
            <div className="grid md:grid-cols-5 grid-cols-3 space-x-3">
              <img src="../assets/1.png" alt="PayPal" className="w-12 bg-white p-1 rounded-md" />
              <img src="../assets/2.png" alt="Mastercard" className="w-12 bg-white p-1 rounded-md" />
              <img src="../assets/3.png" alt="Visa" className="w-12 bg-white p-1 rounded-md" />
              <img src="../assets/4.png" alt="Apple Pay" className="w-12 bg-white p-1 rounded-md" />
              <img src="../assets/1.png" alt="Stripe" className="w-12 bg-white p-1 rounded-md" />
            </div>
          </div>
        </div>
        </section>
      
    </footer>
  );
};

export default Footer;