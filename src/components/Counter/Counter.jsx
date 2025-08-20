import React, { useEffect, useState, useRef } from "react";
import counterImg from "../../assets/Home/counterImg.png";
import AOS from "aos";
import "aos/dist/aos.css";

const counters = [
  { title: "Experience", end: 7, unit: "years" },
  { title: "Dispatches", end: 5, unit: "Tons/Day" },
  { title: "Happy Clients", end: 1200, unit: "" },
];

const CounterCircle = ({ title, end, unit }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const frameRef = useRef(null); // for canceling animation

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const animate = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
        cancelAnimationFrame(frameRef.current);
      }
    };

    animate();

    return () => cancelAnimationFrame(frameRef.current);
  }, [inView, end]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <span className="md:text-xl lg:text-2xl font-bold mb-2 text-center text-primary">
        {title}
      </span>
      <div className="w-20 h-20 md:w-36 md:h-36 flex flex-col items-center justify-center rounded-full border-2 md:border-4 border-primary text-2xl md:text-4xl font-bold text-gray-900 mt-1 ">
        {count}
        {unit && <span className="text-sm ml-1 md:text-2xl">{unit}</span>}
      </div>
    </div>
  );
};

const Counter = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      delay: 200,
    });
  }, []);

  return (
    <div className="container flex flex-col-reverse lg:flex-row items-center justify-center py-8 md:py-16 space-y-4 md:space-y-10 bg-white gap-y-12 gap-x-5 2xl:gap-x-2">
      {/* Left Section */}
      <div
        className="flex-1 flex flex-col items-center lg:items-start px-4 lg:px-0 w-full"
        data-aos="fade-right"
      >
        <h2 className="text-2xl md:text-[34px] font-bold font-serif mb-2 text-center lg:text-left">
          Built on Strength, Proven by Numbers
        </h2>
        <p className="md:text-xl text-[#555555] mb-8 font-serif text-center lg:text-left max-w-md leading-snug">
          Our products are engineered for durability, trusted by thousands
          across industries. Backed by data, we deliver consistent performance
          you can count on.
        </p>
        <div className="flex flex-wrap gap-5 justify-center xl:justify-start w-full">
          {counters.map((counter, idx) => (
            <CounterCircle
              key={idx}
              title={counter.title}
              end={counter.end}
              unit={counter.unit}
            />
          ))}
        </div>
      </div>

      {/* Right Section: Image */}
      <div
        className="flex-1 flex justify-center items-center px-4 2xl:px-0 w-full mb-8 lg:mb-0"
        data-aos="fade-left"
      >
        <div className="w-full max-w-xl aspect-video relative min-w-0">
          <img
            src={counterImg}
            alt="Counter Section"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Counter;
