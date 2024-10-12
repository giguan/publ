import Link from 'next/link';
import { FaInstagram, FaFacebookSquare, FaTwitterSquare  } from "react-icons/fa";
import { PiDiscordLogo } from "react-icons/pi";

const Footer = () => {
    return (
        <footer className="relative py-10 bg-no-repeat bg-white bg-center bg-cover" style={{ backgroundImage: 'url(/images/footer-bg.png)' }}>
          <div className="z-20 max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* 로고와 About Us */}
              <div>
                <img src="/images/logo2.png" alt="Goat Logo" className="mb-4" />
                <h3 className="font-bold text-lg mb-2 text-gray-700">About Us</h3>
                <p className="text-sm text-gray-600">
                  Heaven fruitful doesn't over lesser days appear creeping seasons so behold bearing days open.
                </p>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-700">Contact Info</h3>
                <p className="text-sm text-gray-600">
                  Address: Your address goes here, demo address Bangladesh
                </p>
                <p className="text-sm text-gray-600">Phone: +09011112222</p>
                <p className="text-sm text-gray-600">Email: info@domain.com</p>
              </div>

              {/* Important Link 1 */}
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-700">Important Link</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-gray-800">WHMCS-Bridge</a></li>
                  <li><a href="#" className="hover:text-gray-800">Search Domain</a></li>
                  <li><a href="#" className="hover:text-gray-800">My Account</a></li>
                  <li><a href="#" className="hover:text-gray-800">Shopping Cart</a></li>
                  <li><a href="#" className="hover:text-gray-800">Our Shop</a></li>
                </ul>
              </div>

              {/* Important Link 2 */}
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-700">Important Link</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Heaven fruitful doesn't over lesser in days. Appear creeping season deve behold bearing days open.
                </p>
                <form className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-blue-500 text-white p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v16h16M4 4l16 16M4 20l16-16" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500">
                Copy right © 2024 All rights reserved | This template is made by Goat TV
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                {/* 소셜 미디어 아이콘 */}
                <Link href="#"><FaInstagram className="text-gray-600 w-8 h-8" /></Link>
                <Link href="#"><FaFacebookSquare className="text-gray-600 w-8 h-8" /></Link>
                <Link href="#"><FaTwitterSquare className="text-gray-600 w-8 h-8" /></Link>
                <Link href="#"><PiDiscordLogo className="text-gray-600 w-8 h-8" /></Link>
              </div>
            </div>
          </div>
        </footer>
    )
}

export default Footer;