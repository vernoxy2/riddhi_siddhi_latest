import React from "react";
import contactUsImg from "../../assets/Contact/contactHeaderImg.jpg";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div className="w-full max-w-full min-h-screen items-center justify-center bg-white overflow-x-hidden">
      <img
        src={contactUsImg}
        alt="contactUsImg"
        className="w-full max-w-full h-full object-cover"
      />
      <div className="w-full max-w-full h-full flex items-center justify-center py-8 px-2">
        <div className="w-full max-w-7xl bg-gray-100 rounded-xl shadow-lg p-8 md:p-16 flex flex-col md:flex-row gap-10">
          {/* Left: Info */}
          <div className="flex-1 flex flex-col justify-center border-b md:border-b-0 md:border-r border-black pb-8 md:pb-0 md:pr-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-6 font-serif">
              Contact Us
            </h2>
            <hr className="border-black mb-6" />
            <div className="text-2xl md:text-3xl font-bold mb-6 font-serif text-center md:text-left">
              From power tools to structural fasteners, we’ve got the hardware
              that holds everything together.
            </div>
            <div className="flex items-center mb-4 text-lg">
              <span className="mr-3">
                {/* Phone icon */}
                {/* <svg
                  className="w-6 h-6 inline"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z" />
                </svg> */}
                <IoCall className="w-6 h-6"/>
              </span>
              9924155593
            </div>
            <div className="flex items-center mb-4 text-lg">
              <span className="mr-3">
                {/* Email icon */}
                {/* <svg
                  className="w-6 h-6 inline"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16v16H4z" stroke="none" />
                  <polyline points="22,6 12,13 2,6" />
                </svg> */}
                <IoMdMail className="w-6 h-6"/>
              </span>
              rsenterprice4275@gmail.com
            </div>
            <div className="flex items-center mb-4 text-lg">
              <span className="mr-3">
                {/* Location icon */}
                {/* <svg
                  className="w-6 h-6 inline"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21c-4.418 0-8-5.373-8-10A8 8 0 0 1 20 11c0 4.627-3.582 10-8 10z" />
                  <circle cx="12" cy="11" r="3" />
                </svg> */}
                <FaLocationDot className="w-6 h-6"/>
              </span>
              <span className="text-base md:text-lg">
                SHOP NO. 7, ZEEL IND. COMPUND, NEAR MAMTA WEIGH BRIDGE COMPUND,
                2ND PHASE G.I.D.C., VAPI.
              </span>
            </div>
          </div>
          {/* Right: Form */}
          <form className="flex-1 flex flex-col gap-6 justify-center">
            <div>
              <label
                className="block text-xl font-bold mb-2 font-serif"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="What's Your Name"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-lg"
              />
            </div>
            <div>
              <label
                className="block text-xl font-bold mb-2 font-serif"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-lg"
              />
            </div>
            <div>
              <label
                className="block text-xl font-bold mb-2 font-serif"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Enter your message"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white text-xl font-semibold py-3 rounded-md hover:bg-gray-900 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="w-full container h-[500px] my-[30px] flex items-center justify-center py-8 px-2 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29921.353307015434!2d72.90834896955947!3d20.37591392182745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cf13a80e65d3%3A0xe85f7ecf6591cdfe!2sRiddhi%20Siddhi%20Enterprise!5e0!3m2!1sen!2sin!4v1747803024956!5m2!1sen!2sin"
          className="w-full max-w-full h-full"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
