import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./feature.css";

// import required modules
import { Navigation } from "swiper/modules";


export default function Features() {
  return (
    
      <Swiper
      slidesPerView={3}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      >
        
        <div style={{padding:"200px"}}>

        <SwiperSlide >
          <div className="flex flex-col justify-center items-center mt-3 relative">
            {/* <Avatar size={64} icon={<UserOutlined />} /> */}
            <h1 className="font-bold">Mark</h1>
            <p className="text-gray-500 text-sm">chef officer</p>
            <p className="text-center text-gray-700">
              I've been using the XYZ Smartwatch for a few months now, and I
              can't say enough about how it has improved my daily life. As
              someone who leads an active lifestyle, this smartwatch has become
              an indispensable companion.
            </p>
            <p className="fixed bottom-0 text-gray-500 right-2">12/2/23</p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="flex flex-col justify-center items-center mt-3 relative">
            {/* <Avatar size={64} icon={<UserOutlined />} /> */}
            <h1 className="font-bold">Mark</h1>
            <p className="text-gray-500 text-sm">chef officer</p>
            <p className="text-center text-gray-700">
              I've been using the XYZ Smartwatch for a few months now, and I
              can't say enough about how it has improved my daily life. As
              someone who leads an active lifestyle, this smartwatch has become
              an indispensable companion.
            </p>
            <p className="fixed bottom-0 text-gray-500 right-2">12/2/23</p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="flex flex-col justify-center items-center mt-3 relative">
            {/* <Avatar size={64} icon={<UserOutlined />} /> */}
            <h1 className="font-bold">Mark</h1>
            <p className="text-gray-500 text-sm">chef officer</p>
            <p className="text-center text-gray-700">
              I've been using the XYZ Smartwatch for a few months now, and I
              can't say enough about how it has improved my daily life. As
              someone who leads an active lifestyle, this smartwatch has become
              an indispensable companion.
            </p>
            <p className="fixed bottom-0 text-gray-500 right-2">12/2/23</p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="flex flex-col justify-center items-center mt-3 relative">
            {/* <Avatar size={64} icon={<UserOutlined />} /> */}
            <h1 className="font-bold">Mark</h1>
            <p className="text-gray-500 text-sm">chef officer</p>
            <p className="text-center text-gray-700">
              I've been using the XYZ Smartwatch for a few months now, and I
              can't say enough about how it has improved my daily life. As
              someone who leads an active lifestyle, this smartwatch has become
              an indispensable companion.
            </p>
            <p className="fixed bottom-0 text-gray-500 right-2">12/2/23</p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="flex flex-col justify-center items-center mt-3 relative">
            {/* <Avatar size={64} icon={<UserOutlined />} /> */}
            <h1 className="font-bold">Mark</h1>
            <p className="text-gray-500 text-sm">chef officer</p>
            <p className="text-center text-gray-700">
              I've been using the XYZ Smartwatch for a few months now, and I
              can't say enough about how it has improved my daily life. As
              someone who leads an active lifestyle, this smartwatch has become
              an indispensable companion.
            </p>
            <p className="fixed bottom-0 text-gray-500 right-2">12/2/23</p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="flex flex-col justify-center items-center mt-3 relative">
            {/* <Avatar size={64} icon={<UserOutlined />} /> */}
            <h1 className="font-bold">Mark</h1>
            <p className="text-gray-500 text-sm">chef officer</p>
            <p className="text-center text-gray-700">
              I've been using the XYZ Smartwatch for a few months now, and I
              can't say enough about how it has improved my daily life. As
              someone who leads an active lifestyle, this smartwatch has become
              an indispensable companion.
            </p>
            <p className="fixed bottom-0 text-gray-500 right-2">12/2/23</p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="flex flex-col justify-center items-center mt-3 relative">
            {/* <Avatar size={64} icon={<UserOutlined />} /> */}
            <h1 className="font-bold">Mark</h1>
            <p className="text-gray-500 text-sm">chef officer</p>
            <p className="text-center text-gray-700">
              I've been using the XYZ Smartwatch for a few months now, and I
              can't say enough about how it has improved my daily life. As
              someone who leads an active lifestyle, this smartwatch has become
              an indispensable companion.
            </p>
            <p className="fixed bottom-0 text-gray-500 right-2">12/2/23</p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="flex flex-col justify-center items-center mt-3 relative">
            {/* <Avatar size={64} icon={<UserOutlined />} /> */}
            <h1 className="font-bold">Mark</h1>
            <p className="text-gray-500 text-sm">chef officer</p>
            <p className="text-center text-gray-700">
              I've been using the XYZ Smartwatch for a few months now, and I
              can't say enough about how it has improved my daily life. As
              someone who leads an active lifestyle, this smartwatch has become
              an indispensable companion.
            </p>
            <p className="fixed bottom-0 text-gray-500 right-2">12/2/23</p>
          </div>
        </SwiperSlide>
        </div>
      </Swiper>
    
  );
}
