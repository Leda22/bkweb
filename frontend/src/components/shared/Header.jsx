import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 flex items-center justify-between border-b border-1 border-gray-one7 bg-dark-one7 py-3 px-6 lg:px-24">
      <img src={logo} className="w-14 mr-2" alt="Logo" />
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-white"
        >
          <svg
            className={`fill-current h-6 w-6 text-white ${
              isOpen ? "hidden" : "block"
            }`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-6 w-6 text-white ${
              isOpen ? "block" : "hidden"
            }`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>

      <div
        className={`absolute top-full flex-grow border-gray-one7 left-0 w-full bg-dark-one7 lg:static lg:w-auto lg:flex lg:items-center lg:bg-transparent ${
          isOpen ? "block border-1 pb-4 border-b" : "hidden border-0 pb-0"
        }`}
      >
        <div className="text-md flex flex-col lg:flex-row justify-end items-center lg:flex-grow">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:bg-gray-one7 py-2 px-4 rounded-md"
          >
            Home
          </Link>
          {/* <Link
            
            className="block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:bg-gray-one7 py-2 px-4 rounded-md"
          >
            Events
          </Link>
          <Link
            
            className="block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:bg-gray-one7 py-2 px-4 rounded-md"
          >
            About Us
          </Link>
          <Link
            
            className="block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:bg-gray-one7 py-2 px-4 rounded-md"
          >
            History
          </Link> */}
          <Link
            to="inscription"
            className="block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:bg-gray-one7 py-2 px-4 rounded-md"
          >
            Inscription
          </Link>
          {/* <Link
            
            className="block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:bg-gray-one7 py-2 px-4 rounded-md"
          >
            Contact
          </Link> */}
        </div>
      </div>
    </nav>
  );
}
