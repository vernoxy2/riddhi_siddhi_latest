import React, { useEffect } from "react";
import partnership from "../../assets/About/partnerrship.png";
import labeling from "../../assets/About/labeling.png";
import inspection from "../../assets/About/inspection.png";
import material from "../../assets/About/material.png";

import AOS from "aos";
import "aos/dist/aos.css";

const assuranceData = [
  {
    title: "Trusted Manufacturer Partnerships",
    description:
      "We collaborate exclusively with certified and reputed manufacturers who meet rigorous industry standards. These long-standing associations ensure consistent product quality and reliability.",
    img: partnership,
  },
  {
    title: "Standardized Packaging & Labeling",
    description:
      "Each order is carefully packaged to prevent damage during transit, with clear labeling that includes product specifications, batch numbers, and handling instructions.",
    img: labeling,
  },
  {
    title: (
      <>
        Material <br /> Traceability
      </>
    ),
    description:
      "We maintain full traceability of materials—from Mild Steel (MS), Stainless Steel (SS 304/316), Brass to Galvanized Iron (GI). This transparency helps us guarantee authenticity and provide detailed documentation if required.",
    img: material,
  },
  {
    title: "Strict Inspection Procedures",
    description:
      "Each fastener batch undergoes thorough quality checks verifying size, material, strength, and finish to ensure it meets customer requirements and industry standards before warehouse storage.",
    img: inspection,
  },
];

const Assurance = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false, // whether animation should happen only once
      delay: 200,
    });
  }, []);

  return (
    <div className=" py-4 md:py-12 ">
      <div className=" space-y-4 md:space-y-12">
        <div className="text-left">
          <h2
            className="text-2xl md:text-4xl font-bold"
            data-aos="fade-right"
          >
            <span className="bg-primary text-white px-3 py-1 shadow-md">
              Sourcing &amp; Quality{" "}
              <span className="text-white font-light">Assurance</span>
            </span>
          </h2>
        </div>
        <div data-aos="fade-up">
          <p className="text-center text-[#000000] text-base md:text-lg max-w-6xl mx-auto container">
            At Riddhi Siddhi Enterprise, quality is the cornerstone of
            everything we do. We understand that the strength and reliability of
            your projects depend on the fasteners you use, which is why we are
            deeply committed to sourcing and delivering only the best.
          </p>
        </div>
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8 sm:gap-y-14">
          {assuranceData.map((item, idx) => (
            <div
              key={idx}
              className={
                "group rounded-xl shadow-md flex flex-col h-full bg-white transition-all duration-300 hover:scale-105 mb-6 border-2"
              }
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
            >
              <div className="flex items-center justify-between p-4 ">
                <div>
                  <h3 className="font-semibold text-lg md:text-xl text-gray-900  transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                <div
                  className={`w-20 h-20 p-4 rounded-full flex items-center justify-center shadow-md -mt-8 bg-[#F0F0F0] group-hover:bg-primary transition-colors duration-300`}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-10 h-10 object-contain group-hover:filter group-hover:invert transition-all duration-300"
                  />
                </div>
              </div>
              <div className="p-4 pt-2 flex-1 text-[#555555] group-hover:text-white group-hover:bg-primary bg-[#F0F0F0] transition-colors duration-300">
                <p className="text-sm md:text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Assurance;
