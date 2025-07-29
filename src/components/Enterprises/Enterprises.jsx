import React, { useEffect } from 'react';
import whyChooseIcon1 from '../../assets/Home/whyChooseIcon1.png';
import whyChooseIcon2 from '../../assets/Home/whyChooseIcon2.png';
import whyChooseIcon3 from '../../assets/Home/whyChooseIcon3.png';
import whyChooseIcon4 from '../../assets/Home/whyChooseIcon4.png';
import whyChooseIcon5 from '../../assets/Home/whyChooseIcon5.png';
import whyChooseIcon6 from '../../assets/Home/whyChooseIcon6.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
  {
    icon: whyChooseIcon1,
    title: 'Ready Stock Availability',
    desc: '500+ SKUs always in stock for quick dispatch from our Vapi warehouse',
  },
  {
    icon: whyChooseIcon2,
    title: 'Quality You Can Trust',
    desc: 'Products sourced from certified manufacturers and inspected to meet IS, DIN & ASTM standards',
  },
  {
    icon: whyChooseIcon3,
    title: 'Fast & Reliable Delivery',
    desc: 'Timely fulfillment across Gujarat and all over India',
  },
  {
    icon: whyChooseIcon4,
    title: 'Wide Product Range',
    desc: 'Nuts, bolts, screws, washers, studs, and custom fasteners — all under one roof',
  },
  {
    icon: whyChooseIcon5,
    title: 'B2B-Friendly Terms',
    desc: 'Flexible MOQs, bulk pricing, and customized packaging for resellers and industrial clients',
  },
  {
    icon: whyChooseIcon6,
    title: 'Personalized Support',
    desc: 'Get quick responses, technical guidance, and dedicated service for your requirements',
  },
];

const   Enterprises = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false,     // whether animation should happen only once
      delay:200,
    });
  }, []);
  return (
    <div className="w-full py-12 bg-white flex flex-col items-center">
      <h2 className="text-3xl md:text-[40px] font-bold text-center mb-2 font-serif" data-aos="fade-up" data-aos-duration="2000">Why Choose</h2>
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 font-serif" data-aos="fade-up" data-aos-duration="2500">Riddhi Siddhi Enterprise</h3>
      <p className="text-lg lg:text-2xl text-center text-[#555555] mb-10 font-serif " data-aos="fade-down" data-aos-duration="2700">
        At Riddhi Siddhi Enterprise, we don’t just supply fasteners — we deliver reliability, quality, and service that helps your business run smoothly.
      </p>
      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 px-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-xl shadow-md flex flex-col items-center p-8 transition hover:shadow-xl h-[22rem] overflow-hidden group" data-aos="fade-down-left" data-aos-duration="2500"
          >
            {/* Sliding red background */}
            <div className="absolute left-0 bottom-0 w-full h-0 bg-primary z-0 transition-all duration-500 group-hover:h-full"></div>
            <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-4 w-full">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-16 h-16 object-contain select-none transition-all duration-300 group-hover:invert group-hover:brightness-0 group-hover:contrast-200 m-0 p-0"
                draggable="false"
              />
              <h4 className="text-lg font-bold text-center font-serif transition-colors duration-300 group-hover:text-white m-0 p-0">{feature.title}</h4>
              <p className="text-base text-[#555555] text-center font-serif transition-colors duration-300 group-hover:text-white m-0 p-0">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enterprises;
