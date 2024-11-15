import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center w-full bg-[#1a1a1a] text-gray-100 px-4 py-8">
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-200">About SKINOVA</h3>
          <p className="text-gray-400 text-sm">
            SKINOVA is dedicated to creating unique, high-quality laptop skins that let you express your style while protecting your devices.
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><a href="#home" className="hover:text-gray-100">Home</a></li>
            <li><a href="#about" className="hover:text-gray-100">About Us</a></li>
            <li><a href="#faq" className="hover:text-gray-100">FAQs</a></li>
            <li><a href="#contact" className="hover:text-gray-100">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-200">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-gray-400 hover:text-gray-100" size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-gray-400 hover:text-gray-100" size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-gray-400 hover:text-gray-100" size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-400 hover:text-gray-100" size={24} />
            </a>
          </div>
        </div>
        
        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-200">Contact Us</h3>
          <p className="text-gray-400 text-sm">Email: support@skinova.com</p>
          <p className="text-gray-400 text-sm">Phone: +123-456-7890</p>
          <p className="text-gray-400 text-sm">Location: 1234 Design St., Tech City</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 w-full text-center text-gray-500 text-sm">
        © 2024 SKINOVA. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
