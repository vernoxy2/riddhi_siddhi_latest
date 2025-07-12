import React from 'react';
import clientImg from '../../assets/Home/clientImg.png';

const testimonials = [
  {
    quote: `"Reliable service, competitive pricing, and top-notch quality — we've been sourcing fasteners from them for years and they never disappoint. Highly recommended!"`,
    name: 'Nath Reynolds',
    role: 'Owner',
    img: clientImg,
  },
  {
    quote: `"Reliable service, competitive pricing, and top-notch quality — we've been sourcing fasteners from them for years and they never disappoint. Highly recommended!"`,
    name: 'Nath Reynolds',
    role: 'Owner',
    img: clientImg,
  },
  {
    quote: `"Reliable service, competitive pricing, and top-notch quality — we've been sourcing fasteners from them for years and they never disappoint. Highly recommended!"`,
    name: 'Nath Reynolds',
    role: 'Owner',
    img: clientImg,
  },
];

const Clients = () => {
  return (
    <div className="w-full py-16 bg-white flex flex-col items-center">
      <h3 className="text-xl font-bold text-center mb-2 font-serif uppercase tracking-widest">Testimonials</h3>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 font-serif">WHAT CLIENTS SAY</h2>
      <p className="text-lg text-center text-gray-700 mb-12 font-serif max-w-4xl">
        We place huge value on strong relationships and have seen the benefit they bring to our business . Customer feedback is vital in helping us to get it right.
      </p>
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-2xl shadow-md flex flex-col items-center p-8 transition hover:shadow-xl h-full text-center"
          >
            <img
              src={testimonial.img}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-white shadow"
              draggable="false"
            />
            <p className="text-xl text-gray-800 font-serif mb-6">{testimonial.quote}</p>
            <span className="text-xl font-bold text-primary font-serif mb-1">{testimonial.name}</span>
            <span className="text-lg font-serif text-black">{testimonial.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
