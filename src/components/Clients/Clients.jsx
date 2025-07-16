import React, { useEffect } from "react";
import clientImg from "../../assets/Home/clientImg.png";

import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    quote: `"Reliable service, competitive pricing, and top-notch quality — we've been sourcing fasteners from them for years and they never disappoint. Highly recommended!"`,
    name: "Nath Reynolds",
    role: "Owner",
    img: clientImg,
  },
  {
    quote: `"Reliable service, competitive pricing, and top-notch quality — we've been sourcing fasteners from them for years and they never disappoint. Highly recommended!"`,
    name: "Nath Reynolds",
    role: "Owner",
    img: clientImg,
  },
  {
    quote: `"Reliable service, competitive pricing, and top-notch quality — we've been sourcing fasteners from them for years and they never disappoint. Highly recommended!"`,
    name: "Nath Reynolds",
    role: "Owner",
    img: clientImg,
  },
];

const Clients = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false, // whether animation should happen only once
      delay: 200,
    });
  }, []);
  return (
    <div className="w-full container py-16 bg-white flex flex-col items-center">
      <h3
        className="text-[25px] font-bold text-center mb-2 font-serif uppercase tracking-widest"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Testimonials
      </h3>
      <h2
        className="text-4xl md:text-[40px] font-bold text-center mb-6 font-serif"
        data-aos="fade-up"
        data-aos-duration="2300"
      >
        WHAT CLIENTS SAY
      </h2>
      <p
        className="text-[25px] text-center text-[#555555] mb-12 font-serif "
        data-aos="fade-down"
        data-aos-duration="2500"
      >
        We place huge value on strong relationships and have seen the benefit
        they bring to our business . Customer feedback is vital in helping us to
        get it right.
      </p>
      <div className="w-full gap-9  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-20 lg:px-10">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-2xl shadow-md flex flex-col items-center p-8 transition hover:shadow-xl h-full text-center"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <img
              src={testimonial.img}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-white shadow"
              draggable="false"
              data-aos="zoom-in" data-aos-duration="1500"
            />
            <p
              className="text-2xl text-[#555555] font-serif mb-6"
              data-aos="fade-up"
            >
              {testimonial.quote}
            </p>
            <span
              className="text-2xl font-bold text-primary font-serif mb-1"
              data-aos="fade-right"
            >
              {testimonial.name}
            </span>
            <span
              className="text-2xl font-serif text-black"
              data-aos="fade-left"
            >
              {testimonial.role}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
