import React from "react";
import AnimeEcommerce from "../../assets/lottie/animation_ecommerce.json";
import { AiFillStar } from "react-icons/ai";
import Lottie from "lottie-react";
import { Button } from "antd";
import {MdPreview} from "react-icons/md"
import CountUp from "react-countup";


const Hero = () => {
    const renderStat = ({icon, name, counter}) => {
        return (
          <div className="flex items-center">
            <div className="h-10 md:h-16 w-10 md:w-14">{icon}</div>
            <div className="mt-2 text-lg md:text-4xl font-bold">{counter}+</div>
            <div className="text-xs whitespace-nowrap sm:text-sm md:text-xl text-center">
              {name}
            </div>
          </div>
        );
      };
  const duration = 2;


  return (
    <div className="w-full flex  justify-center items-center p-3">
      <div className="w-1/2">
        <h1 className="flex justify-center text-6xl font-helvetica font-hel self-center ">
          Everything You Need <br /> One Cart Away
        </h1>
        <h1 className="flex justify-center text-sm text-gray-500 items-center ml-16 mt-4">
          Explore boundless convenience with our one-stop shop. Discover a
          diverse range of products and essentials, all just a click away in
          your virtual cart. Shop, save, and indulge in a seamless online
          shopping experience like never before.
        </h1>
        <Button type="text" className="bg-black text-white mt-8 ml-20">
          CTA Button
        </Button>
        <div className="flex mt-8 ml-20">
          <div className="flex items-center">
            <AiFillStar className="yellow-icon" size={20} />
            <AiFillStar className="yellow-icon" size={20} />
            <AiFillStar className="yellow-icon" size={20} />
            <AiFillStar className="yellow-icon" size={20} />
            <AiFillStar className="yellow-icon" size={20} />
          </div>
          {/* <div className="flex ml-2 text-3xl">8000 + Reviews</div> */}
          {renderStat({icon:MdPreview,name:"Review",counter:<CountUp start={-200} end={10000} duration={duration} />})}
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <Lottie animationData={AnimeEcommerce} width={200} height={200} />
      </div>
    </div>
  );
};

export default Hero;
