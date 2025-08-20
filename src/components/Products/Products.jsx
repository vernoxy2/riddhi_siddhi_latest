import React, { useEffect } from "react";
import nutImg from "../../assets/Home/Nutbolt.webp";
import uboltImg from "../../assets/Home/UBolt.webp";
import AnchorFastner from "../../assets/Home/AnchorFastner.webp";
import screws from "../../assets/Home/screws.webp";
import threadedRodsImg from "../../assets/Home/threadedRodsImg.webp";
import customFastenersImg1 from "../../assets/Home/customFastenersImg1.webp";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const products = [
  {
    id: "nuts",
    title: "NUT & BOLTS",
    img: nutImg,
    description:
      "We are stockists of MS, G.I., and SS nut bolts in a full range of inch and metric (mm) sizes. All grades and material qualities are available. Full-thread and half-thread bolts in all sizes are in stock.",
  },
  {
    id: "bolts",
    title: "U-BOLTS",
    img: uboltImg,
    description:
      "All sizes of zinc-plated U-bolts are available, manufactured with standard quality and specifications.",
  },
  {
    id: "bolts",
    title: "Anchor Fastner",
    img: AnchorFastner,
    description:
      "We are stockists of Anchor Fasteners, specializing in Pin-Type Anchor Fasteners.The sizes of Anchor Fasteners that are readily available in our stock 24/7 include:",
  },
  {
    id: "screws",
    title: "screws",
    img: screws,
    description:
      "Choose from machine screws, self-tapping screws, and other types, in various sizes and finishes.",
  },
  {
    id: "screws",
    title: "THREADED RODS & STUDS",
    img: threadedRodsImg,
    description:
      "Threaded rods and studs are available in different lengths, diameters, and materials.",
  },
  {
    id: "screws",
    title: "Custom Fasteners – As per drawing / specification",
    img: customFastenersImg1,
    description:
      "We manufacture and supply custom fasteners as per your drawing or specification.",
  },
];

const Products = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false, // whether animation should happen only once
      delay: 200,
    });
  }, []);
  return (
    <div className="w-full flex flex-col items-center py-12 container bg-white">
      <h2
        className="text-4xl lg:text-6xl font-bold text-primary mb-2 font-serif text-center"
        data-aos="fade-up"
      >
        Our Product Range
      </h2>
      <p
        className="text-lg md:text-xl lg:text-2xl text-[#555555] mb-10 text-center font-serif"
        data-aos="fade-down"
      >
        We offer a comprehensive selection of industrial fasteners, available in
        multiple sizes, grades, and coatings
      </p>
      <div className="max-w-7xl w-full grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-y-14 md:gap-x-14">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="bg-white rounded shadow-lg flex flex-col items-center overflow-hidden hover:shadow-2xl transition group"
          >
            <div className="relative w-full h-76 flex items-center justify-center bg-transparent">
              <img
                src={product.img}
                alt={product.title}
                className="object-cover w-full h-full group-hover:scale-100 transition duration-300"
                data-aos="flip-left"
              />
              {/* Overlay for hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-80 transition-opacity duration-300 px-4">
                <span className="text-white md:text-2xl font-bold font-serif mb-2 md:mb-4 text-center drop-shadow-lg">
                  {product.title}
                </span>
                <p className="text-white text-[10px] md:text-base font-serif text-center capitalize">
                  {product.description}
                </p>
              </div>
              {/* Title for non-hover */}
              <span className="absolute top-2 md:top-6 left-0 w-full text-center text-white md:text-2xl font-bold font-serif drop-shadow-lg group-hover:opacity-0 transition-opacity duration-300">
                {product.title}
              </span>
            </div>
            <div className="w-full py-3 md:py-6 flex justify-center bg-white">
              <Link to={`/products#${product.id}`}>
                <button className="md:text-xl font-bold text-black hover:text-primary transition">
                  View More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
