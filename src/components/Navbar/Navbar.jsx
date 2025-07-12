import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary w-full font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-white text-3xl font-bold font-serif">Riddhi Siddhi</span>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-12">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-white text-xl font-semibold px-4 py-2 rounded transition ${isActive ? 'bg-red-600' : ''}`
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-white text-xl font-semibold px-4 py-2 rounded transition ${isActive ? 'bg-red-600' : ''}`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `text-white text-xl font-semibold px-4 py-2 rounded transition ${isActive ? 'bg-red-600' : ''}`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-white text-xl font-semibold px-4 py-2 rounded transition ${isActive ? 'bg-red-600' : ''}`
              }
            >
              Contact Us
            </NavLink>
            <a
              href="#" // Replace with actual brochure link
              className="ml-8 px-8 py-3 border-2 border-white text-white text-xl font-semibold rounded-lg transition hover:bg-white hover:text-red-700"
            >
              Download Brochure
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-red-700 px-2 pt-2 pb-3 space-y-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block text-white text-lg font-semibold px-4 py-2 rounded transition ${isActive ? 'bg-red-600' : ''}`
            }
            end
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block text-white text-lg font-semibold px-4 py-2 rounded transition ${isActive ? 'bg-red-600' : ''}`
            }
            onClick={() => setIsOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `block text-white text-lg font-semibold px-4 py-2 rounded transition ${isActive ? 'bg-red-600' : ''}`
            }
            onClick={() => setIsOpen(false)}
          >
            Products
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block text-white text-lg font-semibold px-4 py-2 rounded transition ${isActive ? 'bg-red-600' : ''}`
            }
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </NavLink>
          <a
            href="#" // Replace with actual brochure link
            className="block mt-2 px-8 py-3 border-2 border-white text-white text-lg font-semibold rounded-lg transition hover:bg-white hover:text-red-700 text-center"
          >
            Download Brochure
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
