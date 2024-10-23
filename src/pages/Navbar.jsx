import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/navbar/logo.png";
import EnglishIcon from "../assets/img/icons/english.png";
import Hamburger from "../assets/hamburgerMenu.svg";
import Close from "../assets/close.svg";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="w-full">
      <div className="w-full h-[85] lmd:h-[124px] shadow-sm flex items-center justify-between px-3 xl:pl-24 lmd:pr-24 relative">
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            className="cursor-pointer w-[129px] lmd:w-[215px] h-[36px] lmd:h-[60px] md:ml-0"
          />
        </Link>
        <div className="flex items-center">
          <div className="flex h-[50px] text-white items-center">
            <ul className="hidden lmd:flex gap-12 items-center font-bold font-sans text-base">
              <div className="bg-black rounded-3xl w-fit px-8 md:px-10 xl:px-8 py-3 font-Sans">
                Download App
              </div>
              <div className="flex items-center">
                <img src={EnglishIcon} alt="" />
                <div className="text-black pl-2 font-Sans">Eng</div>
              </div>
              <div 
                className="text-black font-Sans"
                onClick={handleToggle}
              >
                <Link to="/help">Help</Link>{" "}
              </div>
              <div className="text-black flex items-center gap-1 font-Sans cursor-pointer">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6667 12.6667L16 16M1 7.66667C1 9.43478 1.70238 11.1305 2.95262 12.3807C4.20286 13.631 5.89856 14.3333 7.66667 14.3333C9.43478 14.3333 11.1305 13.631 12.3807 12.3807C13.631 11.1305 14.3333 9.43478 14.3333 7.66667C14.3333 5.89856 13.631 4.20286 12.3807 2.95262C11.1305 1.70238 9.43478 1 7.66667 1C5.89856 1 4.20286 1.70238 2.95262 2.95262C1.70238 4.20286 1 5.89856 1 7.66667Z"
                    stroke="#000200"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Search
              </div>
            </ul>
          </div>
          <motion.div
            whileTap={{ scale: 0.6 }}
            className="lmd:hidden cursor-pointer"
            onClick={handleToggle}
          >
            <img src={toggle ? Close : Hamburger} alt="hamburger" />
          </motion.div>
        </div>
        {toggle && (
          <div className="absolute z-10 bg-white bg-opacity-90 p-5 lmd:hidden right-0 top-[50px] w-full">
            <ul className="flex flex-col lmd:hidden px-[15px]">
              {/* <div className="pb-3 text-black">download App</div> */}
              <div
                className="bg-black rounded-3xl w-full
             h-[28px] font-bold text-[12px] m-auto flex justify-center text-white font-sans items-center"
              >
                Download App
              </div>
              <div className="flex items-center pt-3 justify-center">
                <div className="flex pr-[14px]">
                  <div className=" flex items-center">
                    <img
                      src={EnglishIcon}
                      alt=""
                      className="w-[14px] h-[14px]"
                    />
                  </div>
                  <div className="flex items-center text-black pl-1 text-[12px] leading-[17px] font-bold">
                    ENG
                  </div>
                </div>
              </div>
              <Link
                className="pt-[8px] font-bold text-[12px] m-auto flex justify-center text-black font-sans items-center"
                to="/help"
                onClick={handleToggle}
              >
                Help
              </Link>
              <div
                className=" h-[18px] relative mt-3 mx-auto w-full
            "
              >
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full h-full absolute bg-transparent left-0 top-0 border-none placeholder-[#7E7E7E] font-Satoshi outline-none"
                />
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" absolute right-1 top-1/2 -translate-y-1/2"
                >
                  <path
                    d="M12.6667 12.6667L16 16M1 7.66667C1 9.43478 1.70238 11.1305 2.95262 12.3807C4.20286 13.631 5.89856 14.3333 7.66667 14.3333C9.43478 14.3333 11.1305 13.631 12.3807 12.3807C13.631 11.1305 14.3333 9.43478 14.3333 7.66667C14.3333 5.89856 13.631 4.20286 12.3807 2.95262C11.1305 1.70238 9.43478 1 7.66667 1C5.89856 1 4.20286 1.70238 2.95262 2.95262C1.70238 4.20286 1 5.89856 1 7.66667Z"
                    stroke="#000200"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="w-full h-[1px] bg-[#0A0B0A] absolute left-0 -bottom-1" />
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
