import React from 'react';
import engineeringIcon from '../../assets/Home/engineeringIcon.png';
import electricPanelIcon from '../../assets/Home/electricPanelIcon.png';
import furnitureHardwareIcon from '../../assets/Home/furnitureHardwareIcon.png';
import oemManufacturingIcon from '../../assets/Home/oemManufacturingIcon.png';
import hardwareTradersIcon from '../../assets/Home/hardwareTradersIcon.png';
import infrastructureIcon from '../../assets/Home/infrastructureIcon.png';
import fabricationUnitIcon from '../../assets/Home/fabricationUnitIcon.png';
import automotiveIcon from '../../assets/Home/automotiveIcon.png';
import constructionIcon from '../../assets/Home/constructionIcon.png';

const industries = [
  {
    icon: engineeringIcon,
    title: 'Engineering',
    desc: 'Bolts & nuts for industrial machines',
  },
  {
    icon: automotiveIcon,
    title: 'Automotive',
    desc: 'Precision parts for assembly lines',
  },
  {
    icon: constructionIcon,
    title: 'Construction',
    desc: 'Fasteners for structures & scaffolding',
  },
  {
    icon: electricPanelIcon,
    title: 'Electrical Panels',
    desc: 'Screws & studs for switchboards',
  },
  {
    icon: furnitureHardwareIcon,
    title: 'Furniture Hardware',
    desc: 'Fasteners for modular & metal fittings',
  },
  {
    icon: oemManufacturingIcon,
    title: 'OEM Manufacturing',
    desc: 'Custom fasteners for production units',
  },
  {
    icon: hardwareTradersIcon,
    title: 'Hardware Traders',
    desc: 'Bulk supply for resellers & stores',
  },
  {
    icon: infrastructureIcon,
    title: 'Infrastructure Projects',
    desc: 'Large-volume fasteners for civil works',
  },
  {
    icon: fabricationUnitIcon,
    title: 'Fabrication Units',
    desc: 'Complete range for metal fabrication',
  },
];

// Duplicate industries for seamless scroll
const scrollingIndustries = [...industries, ...industries];

const Industries = () => {
  return (
    <div className="w-full py-12 bg-white">
      <h2 className="text-4xl md:text-[40px] font-bold text-center mb-8 font-serif">Industries We Serve</h2>
      <div className="border-t-2 border-b-2 border-primary py-8">
        <div className="relative w-full overflow-hidden">
          <div
            className="flex animate-scroll-industries hover:[animation-play-state:paused]"
            style={{ minWidth: '200%' }}
          >
            {scrollingIndustries.map((industry, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center min-w-[180px] max-w-[200px] mx-4 flex-shrink-0"
              >
                <img
                  src={industry.icon}
                  alt={industry.title}
                  className="w-20 h-20 mb-4 object-contain select-none bg-transparent"
                  draggable="false"
                />
                <h3 className="text-xl font-bold text-center text-primary font-serif mb-1">{industry.title}</h3>
                <p className="text-base text-center text-gray-700 font-serif">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
