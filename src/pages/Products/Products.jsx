import React, { useEffect } from "react";
import productsImg from "../../assets/Products/productsImg.webp";
import Nuts from "../../components/Product/Nuts";
import Bolts from "../../components/Product/Bolts";
import Screws from "../../components/Product/Screws";
import Washers from "../../components/Product/Washers";
import AnchorBolts from "../../components/Product/AnchorBolts";
import AOS from "aos";
import "aos/dist/aos.css";
import { useMetaTags } from "../../hooks/useMetaTags";

const Products = () => {
  useMetaTags({
    title:'Industrial Nuts, Bolts, Screws & Washers | Our Products',
    description:'Explore our wide range of industrial nuts, bolts, screws, washers, and threaded rods in GI, MS, SS & high tensile materials meeting IS, DIN & ASTM standards.',
    keywords:'industrial nuts bolts, screws supplier, washer supplier, threaded rods, GI fasteners, MS fasteners, SS fasteners, DIN fasteners, ASTM fasteners',
    url:'https://www.rseent.com/products',
    type:'website'
  })
  useEffect(() => {
    AOS.init({
      once: false, // whether animation should happen only once
    });
  }, []);

  return (
    <div className="w-full max-w-full min-h-screen items-center justify-center overflow-x-hidden ">
      <img
        src={productsImg}
        alt="productsImg"
        className="w-full max-w-full h-[200px] md:h-[400px] xl:h-[80vh] object-cover"
        data-aos="fade-up"
      />
      <Nuts />
      <Bolts />
      <Screws />
      <Washers />
      <AnchorBolts />
      <div className="lg:space-y-16 space-y-8 lg:py-12 font-serif container py-16">
        <div className="items-center justify-centern space-y-4">
          <h1
            className="text-center text-2xl md:text-3xl font-bold"
            data-aos="fade-right"
          >
            THREADED RODS & STUDS
          </h1>
          <p
            className="text-center md:text-xl md:mx-5 leading-snug"
            data-aos="fade-left"
          >
            We supply high-quality threaded rods and studs designed for reliable
            performance in structural, mechanical, and industrial applications.
            Available in a range of lengths, diameters, and materials such as
            stainless steel, carbon steel, and galvanized finishes, these
            fasteners are ideal for tensioning and anchoring tasks. Our threaded
            rods offer excellent strength and versatility, making them a go-to
            solution for construction, plumbing, and electrical projects.
            Whether you need full-length rods or custom-cut studs, we deliver
            precision and durability you can trust.
          </p>
        </div>
        <div className="items-center justify-center space-y-4">
          <h1
            className="text-center text-2xl md:text-3xl font-bold"
            data-aos="fade-left"
          >
            CUSTOM FASTENERS
          </h1>
          <p
            className="text-center  md:text-xl md:mx-5 leading-snug"
            data-aos="fade-right"
          >
            When standard solutions don’t fit, we offer custom fasteners
            tailored to your specific requirements. From unique sizes and
            threads to specialized materials and coatings, our custom
            manufacturing capabilities ensure you get the exact fastener for
            your application. We work closely with clients across industries
            such as automotive, aerospace, construction, and heavy machinery to
            deliver precision-engineered parts that meet strict standards.
            Whether it’s a prototype or high-volume production, count on us for
            quality, consistency, and fast turnaround times.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
