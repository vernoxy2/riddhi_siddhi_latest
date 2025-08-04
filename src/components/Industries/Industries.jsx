import React, { useEffect } from "react";
import engineeringIcon from "../../assets/Home/engineeringIcon.png";
import furnitureHardwareIcon from "../../assets/Home/furnitureHardwareIcon.png";
import oemManufacturingIcon from "../../assets/Home/oemManufacturingIcon.png";
import infrastructureIcon from "../../assets/Home/infrastructureIcon.png";
import fabricationUnitIcon from "../../assets/Home/fabricationUnitIcon.png";
import automotiveIcon from "../../assets/Home/automotiveIcon.png";
import chemical from "../../assets/Home/chemical.png";
import fire from "../../assets/Home/fire.png";
import Pharmacy from "../../assets/Home/Pharmacy.png";

import AOS from "aos";
import "aos/dist/aos.css";

const industries = [
  {
    icon: engineeringIcon,
    title: "Engineering",
    desc: "Bolts & nuts for industrial machines",
  },
  {
    icon: automotiveIcon,
    title: "Automotive",
    desc: "Precision parts for assembly lines",
  },
  {
    icon: furnitureHardwareIcon,
    title: "Furniture Hardware",
    desc: "Fasteners for modular & metal fittings",
  },
  {
    icon: oemManufacturingIcon,
    title: "OEM Manufacturing",
    desc: "Custom fasteners for production units",
  },
  {
    icon: infrastructureIcon,
    title: "Infrastructure Projects",
    desc: "Large-volume fasteners for civil works",
  },
  {
    icon: fabricationUnitIcon,
    title: "Fabrication Units",
    desc: "Complete range for metal fabrication",
  },
  {
    icon: chemical,
    title: "Chemical",
    desc: "Corrosion-resistant fasteners for harsh environments",
  },
  {
    icon: fire,
    title: "Fire Consult",
    desc: "Hardware solutions for safety systems",
  },
  {
    icon: Pharmacy,
    title: "Pharmacy",
    desc: "Precision fasteners for pharma equipment",
  },
];

// Duplicate industries for seamless scroll
const scrollingIndustries = [...industries, ...industries, ...industries];

const Industries = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      delay: 200,
    });
  }, []);

  return (
    <div className="w-full py-12 bg-white">
      <h2
        className="text-4xl md:text-[40px] font-bold text-center mb-8 font-serif"
        data-aos="fade"
      >
        Industries We Serve
      </h2>
      <div className="border-t-2 border-b-2 border-primary py-4 sm:py-8">
        <div className="relative w-full overflow-hidden">
          <div
            className="flex animate-scroll-industries hover:[animation-play-state:paused]"
            style={{ minWidth: "200%" }}
          >
            {scrollingIndustries.map((industry, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center min-w-[120px] max-w-[200px] sm:mx-4 flex-shrink-0 transition-all duration-300"
              >
                <img
                  src={industry.icon}
                  alt={industry.title}
                  className="w-10 h-10 sm:w-20 sm:h-20 mb-4 object-contain select-none bg-transparent"
                  draggable="false"
                />
                <h3 className="sm:text-xl font-bold text-center text-primary font-serif mb-1">
                  {industry.title}
                </h3>
                <p className="text-sm sm:text-base text-center text-[#555555] font-serif break-words whitespace-normal">
                  {industry.desc || "High-performance fasteners for your industry"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
