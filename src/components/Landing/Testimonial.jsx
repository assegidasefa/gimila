import React from "react";
import PropTypes from "prop-types";
import { EffectCoverflow, FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import kid from "../../assets/img/kid.png";

const Testimonial = (props) => {
  const products = [
    {
      pName: "Shoes",
      price: "20br",
    },
    {
      pName: "Shirt",
      price: "15br",
    },
    {
      pName: "Hat",
      price: "10br",
    },
    {
      pName: "Socks",
      price: "5br",
    },
    {
      pName: "pjama",
      price: "5br",
    },
    {
      pName: "bag",
      price: "5br",
    },
    {
      pName: "ring",
      price: "5br",
    },
  ];
  return (
    <div>
      <h1 className="flex justify-center text-2xl font-bold">Testimony</h1>
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {products.map((pro) => (
            <SwiperSlide key={pro.pName} className="w-48 h-56">
              <div className="flex flex-col justify-center items-center mt-3 relative">
                <Avatar size={64} icon={<UserOutlined />} />
                <h1 className="font-bold">Mark</h1>
                <p className="text-gray-500 text-sm">chef officer</p>
                <p className="text-center text-gray-700">
                  I've been using the XYZ Smartwatch for a few months now, and I
                  can't say enough about how it has improved my daily life. As
                  someone who leads an active lifestyle, this smartwatch has
                  become an indispensable companion.
                </p>
                <p className="fixed bottom-0 text-gray-500 right-2">12/2/23</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

Testimonial.propTypes = {};

export default Testimonial;

{
  /* <SwiperSlide className="rounded-lg   shadow-2xl">
<div className="flex flex-col justify-center items-center mt-3 relative">
  <Avatar size={64} icon={<UserOutlined />} />
  <h1 className="font-bold">Mark</h1>
  <p className="text-gray-500 text-sm">chef officer</p>
  <p className="text-center text-gray-700">
    I've been using the XYZ Smartwatch for a few months now, and I
    can't say enough about how it has improved my daily life. As
    someone who leads an active lifestyle, this smartwatch has
    become an indispensable companion.
  </p>
  <p className="fixed bottom-0 text-gray-500 right-2">12/2/23</p>
</div>
</SwiperSlide> */
}
