import React, { useEffect, useState } from "react";
import contactUsImg from "../../assets/Contact/contactHeaderImg.jpg";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

import AOS from "aos";
import "aos/dist/aos.css";
import { useMetaTags } from "../../hooks/useMetaTags";

const ContactUs = () => {
  useMetaTags({
    title: "Contact Riddhi Siddhi Enterprise | Fastener Supplier India",
    description:
      "Contact Riddhi Siddhi Enterprise for bulk industrial fasteners. Based in Vapi, Gujarat, we deliver fastener solutions across India.",
    keywords:
      "contact fastener supplier, fastener dealer Vapi, industrial fasteners contact India",
    url: "https://www.rseent.com/contact",
    type: "website",
  });
  // FormData
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // Error
  const [errors, setErrors] = useState("");
  // Success
  const [success, setSuccess] = useState("");

  // Handle Change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    // If no errors, return true
    return Object.keys(newErrors).length === 0;
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully", formData);

      // Reset form
      setFormData({ name: "", email: "", message: "" });
      setErrors({});

      // Set success message
      setSuccess("Your message has been sent successfully!");

      // Optionally, clear success message after 3 seconds
      setTimeout(() => setSuccess(""), 3000);
    }
  };

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);
  return (
    <div className="w-full max-w-full min-h-screen items-center justify-center bg-white overflow-x-hidden">
      <img
        src={contactUsImg}
        alt="contactUsImg"
        className="w-full max-w-full h-full object-cover"
        data-aos="fade-up"
      />
      <div className="w-full max-w-full h-full flex items-center justify-center py-8 px-2">
        <div
          className="w-full max-w-7xl bg-gray-100 rounded-xl shadow-lg p-8 md:p-14 xl:p-16 flex flex-col lg:flex-row gap-10"
          data-aos="zoom-in"
        >
          {/* Left: Info */}
          <div className="flex-1 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-black pb-8 md:pb-0 md:pr-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-6 font-serif">
              Contact Us
            </h2>
            <hr className="border-black mb-6" />
            <div className="text-2xl md:text-3xl font-bold mb-6 font-serif text-center md:text-left">
              From power tools to structural fasteners, we’ve got the hardware
              that holds everything together.
            </div>
            <div className="md:flex gap-4">
              <div className="flex items-center mb-4 text-lg">
                <span className="mr-2">
                  <IoCall className="w-6 h-6" />
                </span>
                +91 99987 61239
              </div>
              <div className="flex items-center mb-4 text-lg">
                <span className="mr-2">
                  <IoCall className="w-6 h-6" />
                </span>
                +91 99241 55593
              </div>
            </div>
            <div className="flex items-center mb-4 text-lg">
              <span className="mr-3">
                <IoMdMail className="w-6 h-6" />
              </span>
              rsenterprice4275@gmail.com
            </div>
            <div className="flex items-center mb-4 text-lg">
              <span className="mr-3">
                <FaLocationDot className="w-6 h-6" />
              </span>
              <span className="text-base md:text-lg">
                Shop No. 1, Plot No. A-2/20/1, Near Mamta Weigh Bridge, Beside
                Ritu Metal, G.I.D.C., Vapi - 396 195
              </span>
            </div>
          </div>
          {/* Right: Form */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col gap-6 justify-center"
          >
            {success && (
              <div className="fixed top-5 right-5 bg-gray-100 text-green-500 px-6 py-4 rounded-lg shadow-lg z-50 animate-fade-in border border-gray-600">
                Your message has been sent successfully!
              </div>
            )}
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
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-lg"
              />
              {errors.name && (
                <p className="text-red-500 mt-1">{errors.name}</p>
              )}
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
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-lg"
              />
              {errors.email && (
                <p className="text-red-500 mt-1">{errors.email}</p>
              )}
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
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-lg"
              />
              {errors.message && (
                <p className="text-red-500 mt-1">{errors.message}</p>
              )}
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

      <div
        className="w-full container h-[500px] my-[30px] flex items-center justify-center py-8 px-2 "
        data-aos="zoom-in"
      >
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
