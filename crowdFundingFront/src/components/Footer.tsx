function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <div className="flex-grow">
        {/* Replace this with your actual content */}
        <h1 className="text-center p-10">Main Content Goes Here</h1>
      </div>
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
}

import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <div id="Footer" className="bg-[#1F2937] text-white p-10 md:p-16 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold mb-4">About Us</h1>
          <p className="text-sm md:text-lg">
            We are dedicated to helping people bring their dreams to life through crowdfunding. Join our platform and make an impact!
          </p>
        </div>
        <div>
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Support</h1>
          <ul className="text-sm md:text-lg space-y-2">
            <li>
              <a href="/faq" className="hover:underline">FAQ</a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">Contact Support</a>
            </li>
            <li>
              <a href="/terms" className="hover:underline">Terms of Service</a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <ul className="text-sm md:text-lg space-y-2">
            <li className="flex items-center">
              <FaEnvelope className="mr-2" />
              <a href="mailto:contact@crowdfund.com">contact@crowdfund.com</a>
            </li>
            <li className="flex items-center">
              <FaLinkedin className="mr-2" />
              <a href="https://linkedin.com/company/crowdfund" target="_blank" rel="noopener noreferrer">
                linkedin.com/company/crowdfund
              </a>
            </li>
            <li className="flex items-center">
              <FaGithub className="mr-2" />
              <a href="https://github.com/crowdfund" target="_blank" rel="noopener noreferrer">
                github.com/crowdfund
              </a>
            </li>
          </ul>
          <div className="flex mt-4 space-x-4">
            <a href="https://facebook.com/crowdfund" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-xl hover:text-gray-400" />
            </a>
            <a href="https://twitter.com/crowdfund" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl hover:text-gray-400" />
            </a>
            <a href="https://instagram.com/crowdfund" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl hover:text-gray-400" />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-gray-600 my-8" />

      <div className="text-center text-sm md:text-lg">
        © {new Date().getFullYear()} Crowdfund Platform. All rights reserved.
      </div>
    </div>
  );
}

export default App;
