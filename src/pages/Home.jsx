import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Counter from "./Counter";
import Works from "./Works";
import TravelCost from "./TravelCost";
import Passenger from "./Passenger";
import Confidence from "./Confidence";
import videoImg from "../assets/img/home/video.png";
import Cashback from "./Cashback";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* <div className="grid home px-3 md:px-16 2xl:px-32 xl:px-28 h-[493px] xl:h-[645px] items-center bg-gradient-to-r from-black via-black/80 to-transparent"> */}
      <div className="relative grid home px-3 md:px-16 2xl:px-32 xl:px-28 h-[493px] xl:h-[645px] items-center bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/100 to-transparent"></div>
        <div data-aos="fade-up">
          <div className="text-white text-[32px] sm:text-4xl md:text-6xl font-bold font-Navigo">
            Start your new
            <p className="text-white underline-green">inter-urban</p>
            adventures here.
          </div>
          <div className="text-white text-sm md:text-md xl:text-xl py-4 font-Satoshi hidden sm:block">
            Whether you're looking for a quick getaway or an extended <br />
            exploration. Movelz offers dynamic pricing, comfort and <br />{" "}
            convenience for all your inter-urban ridesharing needs.
          </div>
          <div className="text-white text-sm md:text-md xl:text-xl pt-4 font-Satoshi block sm:hidden">
            Whether you're looking for a quick getaway or an extended
            exploration. Movelz offers dynamic pricing, comfort and convenience
            for all your inter-urban ridesharing needs.
          </div>
          <div className="bg-[#00FF7F] flex rounded-3xl px-6 py-2 w-fit my-6 font-boldxl:mx-0 font-sans text-base font-bold">
            {/* {"Get started  >"} */}
            <div>Get Started</div>
            <div className="pl-[10px] flex items-center">
              <img
                src="/src/assets/img/icons/Arrow 2.png"
                className="w-[9px] h-[16px]"
              ></img>
            </div>
          </div>
        </div>

        {/* </div> */}
      </div>
      <Counter />
      <Works />
      <div className="px-3 md:px-16 2xl:px-32 xl:px-28 py-5 xl:py-20">
        <img src={videoImg} alt="" className="w-full h-full" />
      </div>
      <TravelCost />
      <Passenger />
      <Confidence />
      <Cashback />
      <Footer />
    </div>
  );
};

export default Home;
