import React, { useEffect, useState } from 'react';
import counterImg from '../../assets/Home/counterImg.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const counters = [
  { title: 'Title1', end: 1200 },
  { title: 'Title1', end: 1200 },
  { title: 'Title1', end: 1200 },
];

const CounterCircle = ({ title, end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    let frame;
    const animate = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        frame = requestAnimationFrame(animate);
      } else {
        setCount(end);
        cancelAnimationFrame(frame);
      }
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, [end]);

  return (
    <div className="flex flex-col items-center">
      <span className="text-lg font-bold mb-2">{title}</span>
      <div className="w-40 h-40 flex items-center justify-center rounded-full border-4 border-primary text-4xl font-bold text-gray-900 mt-2 mb-2">
        {count}
      </div>
    </div>
  );
};

const Counter = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false,     // whether animation should happen only once
      delay:200,
    });
  }, []);
  return (
    <div className="w-full container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center py-12 bg-white gap-y-40">
      {/* Left: Text and Counters */}
      <div className="flex-1 flex flex-col items-center lg:items-start px-4 lg:px-0 w-full" data-aos="fade-right" data-aos-duration="2000">
        <h2 className="text-2xl md:text-[34px] font-bold font-serif mb-2 text-center lg:text-left">
          Built on Strength, Proven by Numbers
        </h2>
        <p className="text-xl text-[#555555] mb-8 font-serif text-center lg:text-left max-w-md">
          Our products are engineered for durability, trusted by thousands across industries. Backed by data, we deliver consistent performance you can count on.
        </p>
        <div className="flex flex-wrap gap-6 justify-center lg:justify-start w-full">
          {counters.map((counter, idx) => (
            <CounterCircle key={idx} title={counter.title} end={counter.end} />
          ))}
        </div>
      </div>
      {/* Right: Image */}
      <div className="flex-1 flex justify-center items-center px-4 lg:px-0 w-full mb-8 lg:mb-0" data-aos="fade-left" data-aos-duration="2500">
        <div className="w-full max-w-xl aspect-video relative min-w-0">
          <img
            src={counterImg}
            alt="Counter Section"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          {/* White lines overlay */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
            <div className="border-t-2 border-white w-full" style={{ opacity: 0.7 }}></div>
            <div className="border-t-2 border-white w-full" style={{ opacity: 0.7 }}></div>
            <div className="border-t-2 border-white w-full" style={{ opacity: 0.7 }}></div>
            <div className="border-t-2 border-white w-full" style={{ opacity: 0.7 }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
