import React, { useEffect } from "react";
import inquiry from "../../assets/About/inquiry.png";
import confirmation from "../../assets/About/confirmation.png";
import logistics from "../../assets/About/logistics.png";
import delivery from "../../assets/About/delivery.png";
import support from "../../assets/About/support.png";
import WeWork from "../../assets/About/WeWork.png";

import AOS from "aos";
import "aos/dist/aos.css";

const workSteps = [
  {
    img: inquiry,
    title: "Client Inquiry",
    desc: "We begin by understanding your exact requirements—whether it’s for standard fasteners or custom specifications.",
    number: "01",
  },
  {
    img: confirmation,
    title: "Product Confirmation",
    desc: "We confirm availability from our inventory, assist with size/material selection, and finalize order details.",
    number: "02",
  },
  {
    img: logistics,
    title: "Dispatch & Logistics",
    desc: "Orders are securely packed and dispatched from our Vapi facility with reliable transport coordination.",
    number: "03",
  },
  {
    img: delivery,
    title: "On-Time Delivery",
    desc: "We ensure prompt delivery with our streamlined supply chain and stock handling process.",
    number: "04",
  },
  {
    img: support,
    title: "After Sales Support",
    desc: "Our support continues post-delivery with documentation help, reorder planning, and technical assistance.",
    number: "05",
  },
];

const Work = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <section className="bg-[#f8f8f8] py-12">
      <div className="container mx-auto px-4 space-y-8 md:space-y-16">
        <h2
          className="text-3xl md:text-4xl font-bold text-center font-serif text-gray-800"
          data-aos="fade-up"
        >
          How We Work
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {workSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#fafafa] w-[250px] h-[320px] rounded-xl shadow-md flex flex-col items-center justify-between p-5 relative z-[1] overflow-hidden transition-all duration-300 hover:shadow-xl"
              data-aos="flip-left"
            >
              <div className="flex flex-col items-center gap-3">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-xl font-bold text-center text-primary font-serif">
                  {step.title}
                </h3>
                <p className="text-center text-sm text-gray-700">
                  {step.desc}
                </p>
              </div>

              <div className="absolute left-0 bottom-2 flex items-center gap-x-2">
                <img src={WeWork} alt="Step Icon" className="h-14 -translate-x-4" />
                <p className="text-4xl text-primary font-extrabold">
                  {step.number}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
