import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";

const quickLinks = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Products", to: "/products" },
  { name: "Contact Us", to: "/contact" },
];

// Map footer categories to in-page anchors on the Products page
const productCategories = [
  { name: "Nuts", id: "nuts" },
  { name: "Bolts", id: "bolts" },
  { name: "Screws", id: "screws" },
  { name: "Washers", id: "washers" },
];

const Footer = () => {
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const [showProductCategories, setShowProductCategories] = useState(false);

  return (
    <footer className="bg-black text-white w-full max-w-full pt-10 pb-4 px-2 font-serif overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-0">
        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-4 w-full gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold mb-4 font-serif">
              Company Information
            </h3>
            <div className="mb-2 font-semibold">Riddhi Siddhi Enterprise</div>
            <div className="mb-2 text-sm">
              From power tools to structural fasteners, we’ve got the hardware
              that holds everything together.
            </div>
            <div className="mb-2 text-sm">
              Shop No. 1, Plot No. A-2/20/1, Near Mamta Weigh Bridge, Beside
              Ritu Metal, G.I.D.C., Vapi - 396 195
            </div>
            <div className="mb-2 text-sm">Vikrant Patel : 9998761239</div>
            <div className="mb-2 text-sm">Office No : 9924155593</div>
            <div className="mb-2 text-sm">rsenterprice4275@gmail.com</div>
          </div>
          {/* Quick Links */}
          <div className="mx-auto">
            <h3 className="text-2xl font-bold mb-4 font-serif">Quick Links</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.name} className="mb-2">
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `hover:underline ${
                        isActive ? "text-red-500 font-semibold" : ""
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Product Categories */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-serif">
              Products Categories
            </h3>
            <ul>
              {productCategories.map((cat) => (
                <li key={cat.id} className="mb-2">
                  <Link to={`/products#${cat.id}`} className="hover:underline">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-serif">Social Media</h3>
            <div className="flex  gap-4 mt-2">
              <a href="#" className="hover:text-primary" aria-label="Facebook">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="hover:text-primary" aria-label="Instagram">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Mobile Layout */}
        <div className="lg:hidden w-full flex flex-col gap-3 justify-center">
          {/* Quick Links Dropdown */}
          <div className="border-b border-gray-700 pb-4">
            <button
              className="w-full flex justify-between items-center text-xl font-bold font-serif focus:outline-none"
              onClick={() => setShowQuickLinks((v) => !v)}
            >
              Quick Links
              <span>{showQuickLinks ? "▲" : "▼"}</span>
            </button>
            {showQuickLinks && (
              <ul className="mt-4 pl-2">
                {quickLinks.map((link) => (
                  <li key={link.name} className="mb-2">
                    <NavLink
                      to={link.to}
                      end={link.to === "/"}
                      className={({ isActive }) =>
                        `hover:underline ${
                          isActive ? "text-red-500 font-semibold" : ""
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Product Categories Dropdown */}
          <div className="border-b border-gray-700 pb-4">
            <button
              className="w-full flex justify-between items-center text-xl font-bold font-serif focus:outline-none"
              onClick={() => setShowProductCategories((v) => !v)}
            >
              Products Categories
              <span>{showProductCategories ? "▲" : "▼"}</span>
            </button>
            {showProductCategories && (
              <ul className="mt-4 pl-2">
                {productCategories.map((cat) => (
                  <li key={cat.id} className="mb-2">
                    <Link
                      to={`/products#${cat.id}`}
                      className="hover:underline"
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Social Media */}
          <div className="border-b border-gray-700 pb-4">
            <h3 className="text-xl font-bold font-serif mb-2">Social Media</h3>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary" aria-label="Facebook">
                {/* <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> */}
                <FiFacebook className="w-7 h-7" />
              </a>
              <a href="#" className="hover:text-primary" aria-label="Instagram">
                {/* <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> */}
                <BsInstagram className="w-7 h-7" />
              </a>
            </div>
          </div>
          {/* Company Info at bottom */}
          <div className="pt-4">
            <h3 className="text-2xl font-bold mb-4 font-serif">
              Company Information
            </h3>
            <div className="mb-2 font-semibold">Riddhi Siddhi Enterprise</div>
            <div className="mb-2 text-sm">
              From power tools to structural fasteners, we’ve got the hardware
              that holds everything together.
            </div>
            <div className="mb-2 text-sm">
              SHOP NO. 7, ZEEL IND. COMPOUND,
              <br />
              NEAR MAMTA WEIGH BRIDGE COMPOUND, 2ND PHASE
              <br />
              G.I.D.C., VAPI.
            </div>
            <div className="mb-2 text-sm">OFFICE NO : 9924155593</div>
            <div className="mb-2 text-sm">rsenterprice4275@gmail.com</div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center text-white text-md font-bold mt-8">
        © 2025 Vernoxy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
