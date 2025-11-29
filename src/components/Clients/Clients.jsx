import React, { useEffect } from "react";
import clientImg from "../../assets/Home/clientImg.png";

import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    
    quote: `"They offer prompt, friendly and dependable support throughout the entire ordering and delivery process"`,
    name: "Niral Shah",
    role: "Owner",
    compny: "Shah Enterprise",
    img: clientImg,
  },
  {
    
    quote: `"Their fasteners are manufactured according to industry standards, ensuring strength, accuracy and consistent quality"`,
    name: "Viral Bulsara",
    role: "Owner",
    compny: "Viral V-care",
    img: clientImg,
  },
 
  {
    quote: `"From standard bolts and nuts to specialized and custom-engineered fasteners, they offer a comprehensive product line that meets the needs of various industries — construction, automotive, manufacturing, marine, and more"`,
    name: "Pramit Parmar",
    role: "Owner",
    compny: "Krutagna Feb-Tech",
    img: clientImg,
  },
  {
    quote: `"Exceptional service from start to finish: clear communication, meticulous order handling and reliable, punctual delivery every single time"`,
    name: "Satish Gajara",
    role: "Owner",
    company: "Shreyash Enterprise",
    img: clientImg,
  },
  {
    quote: `"Affordable prices and unwavering support that’s what sets them apart. They monitor market rates smartly and handle all our orders with speed and precision"`,
    name: "Harsh Patel",
    role: "Owner",
    company: "Bhagawati Enterprise",
    img: clientImg,
  },
];

const Clients = () => {
  
  useEffect(() => {
    AOS.init({
      once: false, // whether animation should happen only once
    });
  }, []);
  return (
    <div className="w-full container py-16 bg-white flex flex-col items-center">
      <h3
        className="text-xl  md:text-[25px] font-bold text-center pb-12 font-serif uppercase tracking-widest"
        data-aos="fade-up"
      >
        Testimonials
      </h3>
      <h2
        className="text-3xl md:text-[40px] font-bold text-center mb-6 font-serif"

         >
        WHAT CLIENTS SAY
      </h2>
      <p
        className="text-lg md:text-[25px] text-center text-[#555555] mb-12 font-serif "
        data-aos="fade-down"
      >
        We place huge value on strong relationships and have seen the benefit
        they bring to our business. Customer feedback is vital in helping us get
        it right.
      </p>
      <div className="w-full gap-9  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-12 lg:px-10">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-2xl shadow-md flex flex-col items-center p-6 transition hover:shadow-xl h-full text-center"
            data-aos="zoom-in-up"
          >
            <img
              src={testimonial.img}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-white shadow"
              draggable="false"
              data-aos="zoom-in"
            />
            <p
              className="md:text-2xl text-[#555555] font-serif mb-6"
              data-aos="fade-up"
            >
              {testimonial.quote}
            </p>
            <span
              className="text-xl md:text-2xl font-bold text-primary font-serif mb-1"
              data-aos="fade-right"
            >
              {testimonial.name}
            </span>
            <span
              className="text-lg md:text-2xl font-serif text-black"
              data-aos="fade-left"
            >
              {testimonial.role}
            </span>
            <span
              className="md:text-lg font-serif text-black"
              data-aos="fade-left"
            >
              -{testimonial.compny}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
