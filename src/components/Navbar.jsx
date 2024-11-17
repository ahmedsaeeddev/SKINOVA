import { useState } from "react";
import { FaBars } from "react-icons/fa"; // Added icon for better UX

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative mainDiv">
      <div className="navBar">
        <nav className="flex items-center justify-center w-full mt-4">
          <div className="flex items-center justify-between w-full max-w-screen-xl p-2 px-8 border border-white rounded-full shadow-md bg-white/90 sm:w-auto">
            {/* Logo */}
            <div className="flex items-center mr-10">
              <img src="../../public/image.png" alt="Logo" className="w-10" />
              <h1 className="text-[#E5C04B] text-xl font-bold ml-2"><a href="../../index.html">SKINOVA</a></h1>
            </div>

            {/* Desktop Navigation Links */}
            <ul className="hidden sm:flex space-x-8 text-[#E5C04B] font-semibold text-lg">
              <li><a href="#" className="hover:text-black">Home</a></li>
              <li><a href="#" className="hover:text-black">About</a></li>
              <li><a href="#" className="hover:text-black">Products</a></li>
              <li><a href="#" className="hover:text-black">Contact</a></li>
              <li><a href="#" className="hover:text-black">Admin</a></li>
            </ul>

            {/* Mobile Dropdown Button */}
            <button
              className="sm:hidden text-[#E5C04B] focus:outline-none flex justify-end"
              onClick={toggleDropdown}
            >
              <FaBars size={24} />
            </button>
          </div>
        </nav>
      </div>
          <div className="container-main">
            <h1 className="p-3 mx-4 my-32 font-bold text-black">
              <button>Explore Now!</button>
            </h1>
          </div>

      {/* Mobile Dropdown Menu with Overlay */}
      {
        isDropdownOpen && (
          <div className="fixed inset-0 z-20 flex justify-end bg-black/50 sm:hidden">
            <div className="w-3/4 p-6 rounded-lg shadow-md bg-white/90">
              <ul className="flex flex-col space-y-4 text-[#E5C04B] font-semibold text-lg">
                <li><a href="#" className="hover:text-black">Home</a></li>
                <li><a href="#" className="hover:text-black">About</a></li>
                <li><a href="#" className="hover:text-black">Products</a></li>
                <li><a href="#" className="hover:text-black">Contact</a></li>
                <li><a href="#" className="hover:text-black">Admin</a></li>
              </ul>
              <button onClick={toggleDropdown} className="mt-4 text-sm text-gray-800">Close Menu</button>
            </div>
          </div>
        )
      }
    </div >
  );
};

export default Navbar;
