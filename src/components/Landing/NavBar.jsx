import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const renderMenus = () => {
    return (
      <>
        <div className="font-bold">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            HOME
          </Link>
        </div>
        <div className="font-bold">
          <Link
            activeClass="active"
            to="why_us"
            spy={true}
            smooth={true}
            duration={500}
          >
            WHY US
          </Link>
        </div>
        <div className="font-bold">
          <Link
            activeClass="active"
            to="testimonies"
            spy={true}
            smooth={true}
            duration={500}
          >
            TESTIMONIES
          </Link>
        </div>
        <div className="font-bold">
          <Link
            activeClass="active"
            to="contact_us"
            spy={true}
            smooth={true}
            duration={500}
          >
            CONTACT US
          </Link>
        </div>
      </>
    );
  };

  const singInButton = (
    <button
      onClick={() => navigate("./login")}
      className=" bg-[#000] px-5 py-2 text-white rounded-md font-bold shadow-md"
    >
      Sign In
    </button>
  );
  return (
    <div className=" px-10 md:px-20 py-10 bg-white md:bg-transparent">
      <div className="flex justify-between items-center ">
        <h1 className="text-2xl font-bold md:text-black">Jimila</h1>
        <div className="md:flex items-center gap-14 hidden">
          {renderMenus()}
          {singInButton}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {!open ? <BiMenu size={30} /> : <MdCancel size={30} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden  p-3 flex flex-col space-y-3 mt-10  ">
          {renderMenus()}
          {singInButton}
        </div>
      )}
    </div>
  );
};

export default NavBar;
