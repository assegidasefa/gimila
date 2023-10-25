import { Divider } from "antd";
import React from "react";
import "./AboutUs.css"

const Aboutus = () => {
  const renderAboutUs = (product) => {
    console.log(product)
    return (
      <div className="flex flex-col gap-4" key={product.title}>
        <h1 className="text-white text-xl font-bold">{product.title}</h1>
        <p className="text-gray-400 text-sm">{product.description}</p>
        <Divider className="bg-gray-500" />
      </div>
    );
  };

  const aboutUsRight = [
    {
      title: "Quality Guaranteed",
      description:
        "Our multi-tools are crafted to perfection, backed by rigorous quality checks, ensuring you receive nothing but the best.",
    },
    {
      title: "Expertise Matters",
      description:
        "Trust in a seller with years of experience in multi-tool sales. We understand your needs and provide the right solutions.",
    },
    {
      title: "Customer-Centric",
      description:
        "We pride ourselves on exceptional customer service, making your shopping experience easy and enjoyable. Your satisfaction is our priority.",
    },
  ];
  const aboutUsLeft = [
    {
      title: "Unbeatable Variety",
      description:
        "Explore a diverse selection of multi-tools for various tasks, all in one place. We've got the tools you need for any job.",
    },
    {
      title: "Affordable Excellence",
      description:
        "We believe quality shouldn't break the bank. Enjoy premium multi-tools at competitive prices, making them accessible to all.",
    },
    {
      title: "Hassle-Free Shopping",
      description:
        "With our intuitive website, secure payment options, and fast shipping, we ensure a seamless and worry-free shopping experience.",
    },
  ];
  return (
    <div className="w-full h-full bg-black flex flex-col justify-center items-center">
      <h1 className="linear-gradient  flex justify-center text-5xl pt-20 w-full pb-3">
        Why us
      </h1>
      <div className="flex justify-center items-center gap-3 ">
        <div className="flex flex-col w-1/2 p-10 gap-7">
        {aboutUsRight.map((product)=>{
            return (
                renderAboutUs(product)
            )
          })}
        </div>

        <div className="flex flex-col w-1/2 p-10 gap-7">
          {aboutUsLeft.map((product)=>{
            return (
                renderAboutUs(product)
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
