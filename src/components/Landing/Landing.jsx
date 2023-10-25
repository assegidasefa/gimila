import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Landing.css";
import { EffectCoverflow,FreeMode, Pagination } from "swiper/modules";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Testimonial from "./Testimonial";
import Features from "./Features";
import Aboutus from "./Aboutus";
import Footer from "./Footer";
import Testimony from "./Testimony";

const Landing = () => {
 
  return (
    <>
      <NavBar/>
      <Hero/>
      <h1 className="flex justify-center text-2xl font-bold">
        Our New Product
      </h1>
      {/* <Features/> */}
      <Aboutus/>

      <div>
        
      </div>
      <Testimonial/>
      <Testimony/>
      <Footer/>
    </>
  );
};

export default Landing;
