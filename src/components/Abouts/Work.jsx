import React from 'react'
import inquiry from "../../assets/About/inquiry.png"
import confirmation from "../../assets/About/confirmation.png"
import logistics from "../../assets/About/logistics.png"
import delivery from "../../assets/About/delivery.png"
import support from "../../assets/About/support.png"
import WeWork from "../../assets/About/WeWork.png"

const workSteps = [
  {
    img: inquiry,
    title: "Client Inquiry",
    desc: "We begin by understanding your exact requirements—whether it’s for standard fasteners or custom specifications.",
    number: "01"
  },
  {
    img: confirmation,
    title: "Product Confirmation",
    desc: "We confirm availability from our inventory, assist with size/material selection, and finalize order details.",
    number: "02"
  },
  {
    img: logistics,
    title: "Dispatch & Logistics",
    desc: "Orders are securely packed and dispatched from our Vapi facility with reliable transport coordination.",
    number: "03"
  },
  {
    img: delivery,
    title: "On-Time Delivery",
    desc: "We ensure prompt delivery with our streamlined supply chain and stock handling process.",
    number: "04"
  },
  {
    img: support,
    title: "After Sales Support",
    desc: "Our support continues post-delivery with documentation help, reorder planning, and technical assistance.",
    number: "05"
  }
];

const Work = () => {
  return (
    <div className="w-full py-12 bg-[#f8f8f8]">
      <h2 className="text-3xl md:text-4xl font-bold text-center font-serif mb-12 text-gray-800">
        How We Work
      </h2>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {workSteps.map((step, idx) => (
          <div
            key={idx}
            className="bg-[#fafafa] w-full sm:w-[300px] md:w-[280px] lg:w-[260px] h-[370px] rounded-lg shadow-md flex flex-col items-center justify-center p-5 pt-0 gap-[10px] relative z-[1] overflow-hidden transition-colors duration-300 hover:shadow-xl container"
          >
            <img src={step.img} alt={step.title} className="w-16 h-16 object-contain" />
            <h3 className="text-xl font-bold text-center text-primary font-serif">{step.title}</h3>
            <p className="text-center text-lg text-gray-700 px-1">{step.desc}</p>
            <div className="absolute left-0 bottom-1 flex items-center gap-x-2">
             <img src={WeWork} alt="" className='h-14 -translate-x-4'/>
             <p className=' text-4xl text-primary font-extrabold'>{step.number}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Work
