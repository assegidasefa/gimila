import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTelegram,
  BsTwitter,
} from "react-icons/bs";
import "./AboutUs.css"


const Footer = () => {
  const socialMedia = [
    {
      link: "https://www.instagram.com/",
      icon: (
        <BsInstagram
          size={24}
          className="text-white hover:scale-110 hover:text-gray-500 hover:cursor-pointer"
        />
      ),
    },
    {
      link: "https://www.twitter.com/",
      icon: (
        <BsTwitter
          size={24}
          className="text-white hover:scale-110 hover:text-gray-500 hover:cursor-pointer"
        />
      ),
    },
    {
      link: "https://www.telegram.com/",
      icon: (
        <BsTelegram
          size={24}
          className="text-white hover:scale-110 hover:text-gray-500 hover:cursor-pointer"
        />
      ),
    },
    {
      link: "https://www.linkedin.com/",
      icon: (
        <BsLinkedin
          size={24}
          className="text-white hover:scale-110 hover:text-gray-500 hover:cursor-pointer"
        />
      ),
    },
    {
      link: "https://www.facebook.com/",
      icon: (
        <BsFacebook
          size={24}
          className="text-white hover:scale-110 hover:text-gray-500 hover:cursor-pointer"
        />
      ),
    },
  ];
  const renderSocialMedia = (socialMediaList) => {
    return (
      <ul class="list-none ">
        <li className="text-white">
          <a
            href={socialMediaList.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {socialMediaList.icon}
          </a>
        </li>
      </ul>
    );
  };
  return (
    <div className="w-full h-1/3 bg-black  flex flex-col md:flex-row justify-between p-10 gap-6 md:gap-2">
      <div className="flex flex-col text-center justify-center items-center gap-5 w-full sm:w-1/3">
        <h1 className="linear-gradient-footer text-white text-5xl ">Jimila</h1>
        <div className="flex gap-4">
          {socialMedia.map((socialMediaList) => {
            return renderSocialMedia(socialMediaList);
          })}
        </div>
      </div>

      <div className="flex flex-col justify-center gap-2 items-center w-full sm:w-1/3">
        <h1 className="text-white text-3xl linear-gradient-footer">Our Location</h1>
        <h1 className="text-gray-500 text-center">Chlallo building 360/G60 Kirkos Sub-city Woreda 02 </h1>
        <h1 className="text-gray-500">tilahun@tiltektechnology.com</h1>
        <h1 className="text-gray-500">+251912632002</h1>
      </div>

      <div className="flex flex-col gap-2 w-full sm:w-1/3 justify-center items-center">
        <h1 className="text-gray-500">© 2023 tiltek. All Rights Reserved.</h1>
        {/* <h1 className="text-white">address </h1>
        <h1 className="text-white">Contant</h1> */}
      </div>
    </div>
  );
};

export default Footer;
