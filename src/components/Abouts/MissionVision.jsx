import React from "react";
import vision from "../../assets/About/MissionVisionImg/Vision.webp";
import mission from "../../assets/About/MissionVisionImg/Mission.webp";
import core from "../../assets/About/MissionVisionImg/Core.webp";
import Icon1 from "../../assets/About/MissionVisionImg/icon1.svg";
import Icon2 from "../../assets/About/MissionVisionImg/icon2.svg";
import Icon3 from "../../assets/About/MissionVisionImg/icon3.svg";
import HIcon1 from "../../assets/About/MissionVisionImg/Hicon1.svg";
import HIcon2 from "../../assets/About/MissionVisionImg/Hicon2.svg";
import HIcon3 from "../../assets/About/MissionVisionImg/Hicon3.svg";

const missionVisionValues = [
  {
    title: "Vision",
    img: vision,
    icon: Icon1,
    Hicon: HIcon1,
    content:
      "To become India’s most trusted stockist and wholesaler of industrial fasteners by delivering a wide product range, consistent quality, and exceptional service rooted in integrity and customer satisfaction.",
  },
  {
    title: "Mission",
    img: mission,
    icon: Icon2,
    Hicon: HIcon2,
    content:
      "Riddhi Siddhi Enterprise is dedicated to providing reliable, high-quality, and affordable fasteners to various industries. We focus on maintaining strong inventory, prompt delivery, and expert support to foster lasting, trust-based client relationships.",
  },
  {
    title: "Values",
    img: core,
    icon: Icon3,
    Hicon: HIcon3,
    content:
      "At Riddhi Siddhi Enterprise, we uphold quality, integrity, and reliability—fostering trust through honest communication, dependable service, and a strong understanding of client needs to build long-term, meaningful business relationships.",
  },
];
const MissionVision = () => {
  return (
    <div className="container mx-auto py-8 md:py-16 space-y-4 md:space-y-12">
      <h2
        className="text-3xl md:text-4xl font-bold text-center font-serif"
        data-aos="fade-up"
      >
        Company Mission, Vision and Values
      </h2>

      <p className="text-center text-lg" data-aos="fade-down">
        Defining our mission, vision, and values for purposeful growth.
      </p>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {missionVisionValues.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg flex flex-col items-center group hover:shadow-xl transition-all duration-300"
            style={{ width: "320px" }}
            data-aos="flip-right"
          >
            <img
              src={item.img}
              alt={item.title}
              className="object-contain w-full max-h-60"
            />
            <div className="flex flex-col items-center pb-7 px-2 -mt-12 flex-1">
              <div className="bg-white/70 shadow-xl rounded-full p-3 mb-7">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-20 w-20 group-hover:hidden duration-300 transition-colors"
                />
                <img
                  src={item.Hicon}
                  alt=""
                  className="h-20 w-20 hidden group-hover:block duration-300 transition-colors"
                />
              </div>
              <h3 className="text-xl font-bold font-serif mb-2 text-center text-primary">
                {item.title}
              </h3>
              <p className="text-base text-center text-gray-700">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionVision;
