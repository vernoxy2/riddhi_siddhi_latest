import React, { useEffect, useState } from "react";
import clientImg from "../../assets/Home/clientImg.png";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    
    quote: `"They offer prompt, friendly and dependable support throughout the entire ordering and delivery process"`,
    name: "Niral Shah",
    role: "Owner",
    company: "Shah Enterprise",
    img: clientImg,
  },
  {
    
    quote: `"Their fasteners are manufactured according to industry standards, ensuring strength, accuracy and consistent quality"`,
    name: "Viral Bulsara",
    role: "Owner",
    company: "Viral V-care",
    img: clientImg,
  },
 
  {
    quote: `"From standard bolts and nuts to specialized and custom-engineered fasteners, they offer a comprehensive product line that meets the needs of various industries — construction, automotive, manufacturing, marine, and more"`,
    name: "Pramit Parmar",
    role: "Owner",
    company: "Krutagna Feb-Tech",
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
  const [index, setIndex] = useState(0);

  useEffect(() => {
    AOS.init({ once: false });
  
    // autoplay every 3s
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container py-16 bg-white flex flex-col items-center">
      <h3
        className="text-xl md:text-[25px] font-bold text-center pb-12 font-serif uppercase tracking-widest"
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
        className="text-lg md:text-[25px] text-center text-[#555555] mb-12 font-serif"
        data-aos="fade-down"
      >
        We place huge value on strong relationships and have seen the benefit
        they bring to our business. Customer feedback is vital in helping us get
        it right.
      </p>

      {/* Slider Section */}
      <div className="relative w-full max-w-4xl h-[420px] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0.5, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: -0.5, x: -200 }}
            transition={{ duration: 0.6 }}
            className="absolute w-full"
          >
            <div className="bg-gray-50 rounded-2xl shadow-md flex flex-col items-center p-8 text-center">
              <img
                src={testimonials[index].img}
                alt={`Photo of ${testimonials[index].name}`}
                className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-white shadow"
                draggable="false"
              />
              <p className="md:text-2xl text-[#555555] font-serif mb-6">
                {testimonials[index].quote}
              </p>
              <span className="text-xl md:text-2xl font-bold text-primary font-serif mb-1">
                {testimonials[index].name}
              </span>
              <span className="text-lg md:text-2xl font-serif text-black">
                {testimonials[index].role}
              </span>
              <span className="md:text-lg font-serif text-black">
                - {testimonials[index].company}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex gap-3 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition ${
              i === index ? "bg-primary scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;
