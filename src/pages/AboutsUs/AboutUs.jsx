import React, { useEffect, useState } from "react";
import aboutUsImage from "../../assets/About/aboutHeaderImg.png";
import img1 from "../../assets/About/img1.png";
import img2 from "../../assets/About/img2.png";
import img3 from "../../assets/About/img3.png";
import vision from "../../assets/About/vision.png";
import mission from "../../assets/About/mission.png";
import core from "../../assets/About/core.png";
import Work from "../../components/Abouts/Work";
import Assurance from "../../components/Abouts/Assurance";

import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const aboutCards = [
  {
    title: "Who We Are",
    img: img1,
    content: (
      <p>
        Riddhi Siddhi Enterprise, based in Vapi, Gujarat, is a trusted stockist
        and wholesaler of high-quality industrial fasteners. Since our inception
        in 2018, we’ve become known for providing reliable, cost-effective
        solutions to industries including construction, automotive, electrical,
        engineering, fabrication, and OEMs.
      </p>
    ),
  },
  {
    title: "What We Offer",
    img: img2,
    content: (
      <ul className="list-disc pl-5">
        <li>Nuts & Bolts – Hex, Dome, Lock.</li>
        <li>Screws – Self-tapping, Machine.</li>
        <li>Washers</li>
        <li>Threaded Rods & Studs</li>
        <li>Custom Fasteners – MS, SS 304/316, Brass, GI</li>
      </ul>
    ),
  },
  {
    title: "Our Strengths",
    img: img3,
    content: (
      <ul className="list-disc pl-5">
        <li>Sourcing from certified manufacturers.</li>
        <li>Rigorous quality control.</li>
        <li>Timely delivery across India</li>
        <li>Customer-centric service</li>
        <li>Technical product assistance</li>
      </ul>
    ),
  },
];

const missionVisionValues = [
  {
    title: "Vision",
    img: vision,
    content:
      "To become India’s most trusted stockist and wholesaler of industrial fasteners by delivering a wide product range, consistent quality, and exceptional service rooted in integrity and customer satisfaction.",
  },
  {
    title: "Mission",
    img: mission,
    content:
      "Riddhi Siddhi Enterprise is dedicated to providing reliable, high-quality, and affordable fasteners to various industries. We focus on maintaining strong inventory, prompt delivery, and expert support to foster lasting, trust-based client relationships.",
  },
  {
    title: "Values",
    img: core,
    content:
      "At Riddhi Siddhi Enterprise, we uphold quality, integrity, and reliability—fostering trust through honest communication, dependable service, and a strong understanding of client needs to build long-term, meaningful business relationships.",
  },
];

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      once: false, // whether animation should happen only once
    });
  }, []);

  const navigate = useNavigate();

  const [hoveredIdx, setHoveredIdx] = useState(null);
  return (
    <div className="w-full max-w-full min-h-screen items-center justify-center bg-white overflow-x-hidden">
      <img
        src={aboutUsImage}
        alt="aboutUsImage"
        className="w-full max-w-full h-full object-cover"
        data-aos="fade-up"
      />
      <div className="container mx-auto px-2 py-8 flex flex-col items-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-center font-serif mb-4"
          data-aos="fade-up"
        >
          About Us
        </h2>
        <p
          className="container text-base md:text-lg lg:text-xl text-center mb-10 font-serif"
          data-aos="fade-down"
        >
          Riddhi Siddhi Enterprise, based in Vapi, Gujarat, is a trusted
          stockist and wholesaler of high-quality industrial fasteners. We
          supply a wide range of nuts, bolts, screws, and custom fasteners to
          industries like construction, engineering, and OEMs across India —
          with ready stock, reliable quality, and timely delivery.
        </p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-28 py-12">
          {aboutCards.map((card, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={idx}
                className={`relative rounded-xl shadow-lg flex flex-col items-center p-8 transition
                  ${isHovered ? "bg-primary" : "bg-white"}
                  ${idx === 0 ? "md:mt-8" : ""}
                `}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-[125px] h-[125px] bg-white rounded-full flex items-center justify-center shadow-lg">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-[100px] h-[100px] object-contain"
                    data-aos="zoom-in"
                  />
                </div>
                <div
                  className="mt-16 flex flex-col items-center"
                  data-aos="fade-left"
                >
                  <h3
                    className={`text-2xl font-bold font-serif mb-4 text-center transition-colors duration-200 ${
                      isHovered ? "text-white" : "text-primary"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <div
                    className={`text-base md:text-lg font-serif text-left transition-colors duration-200 ${
                      isHovered ? "text-white" : "text-black"
                    }`}
                  >
                    {card.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full py-12 ">
        <h2
          className="text-3xl md:text-4xl font-bold text-center font-serif mb-2"
          data-aos="fade-up"
        >
          Company Mission, Vision and Values
        </h2>
        <p
          className="text-center text-lg mb-10"
          data-aos="fade-down"
        >
          Defining our mission, vision, and values for purposeful growth.
        </p>
        {/* <div className="flex flex-col md:flex-row justify-center items-center gap-8"> */}
        <div className="flex flex-wrap justify-center gap-6 px-4">
          {missionVisionValues.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg flex flex-col items-center overflow-hidden transition p-6"
              data-aos="flip-right"
              style={{ width: "350px", minHeight: "500px" }} // You can adjust these values as needed
            >
              <img
                src={item.img}
                alt={item.title}
                className="object-contain max-w-full"
                style={{ maxHeight: "300px" }} // Optional: control image height
              />
              <div className="flex flex-col items-center px-2 mt-4">
                <h3 className="text-xl font-bold font-serif mb-2 text-center">
                  {item.title}
                </h3>
                <p className="text-base text-center">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Work />
      <Assurance />

      <section
        className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl px-6 py-12 mx-4 sm:mx-8 md:mx-16 my-12"
        data-aos="zoom-in"
      >
        <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-center text-black mb-6 leading-snug">
          Your Vision, Our Expertise – Free Quotes at Your Fingertips!
        </h2>
        <button
          onClick={() => navigate("/contact")}
          className="text-primary border border-primary hover:bg-primary hover:text-white transition-colors duration-300 font-semibold px-6 py-2 rounded-full text-sm sm:text-2xl"
        >
          GET A QUOTE
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
