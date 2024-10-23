import React from "react";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 bg-black px-3 md:px-16 2xl:px-32 xl:px-28 py-5 xl:py-10 font-bold items-center">
      <div className="grid py-3 xl:py-0 gap-0">
        <div className="text-white text-xl xl:text-2xl grid font-Satoshi">
          Save Up to
        </div>
        <div className="flex">
          <div className="text-[#00FF7F] text-[36px] md:text-4xl font-bold font-Navigo pr-1 hidden md:block mt-4">
            $
          </div>
          <div className="text-[#00FF7F] text-[52px] font-bold font-Navigo hidden md:block">
            {" "}
            <CountUp end={9000} duration={1.5} />
          </div>

          <div className="text-[#00FF7F] text-2xl md:text-4xl font-bold font-Navigo pt-10 md:pt-0 pr-1 block md:hidden">
            $
          </div>
          <div className="text-[#00FF7F] text-[64px] font-bold font-Navigo block md:hidden ">
            {" "}
            <CountUp end={9000} duration={1.5} />
          </div>
          <div className="text-white text-sm md:text-[18px] pl-2 grid pt-12 md:pt-8 xl:pt-3 font-Navigo my-0 xl:my-auto">
            per Year
          </div>
        </div>
      </div>
      <div className="grid justify-start xl:justify-center py-3 xl:py-0 gap-0">
        <div className="text-white text-xl md:text-2xl font-Satoshi">
          Reduces CO<sup>2</sup> Emissions By
        </div>
        <div>
          <span className="text-[#00FF7F] text-[64px] xl:text-[52px] font-bold grid font-Navigo">
            <CountUp end={65} suffix="%" duration={1.5} />
          </span>
        </div>
      </div>
      <div className="grid justify-start xl:justify-end py-3 xl:py-0 gap-0">
        <div className="text-white text-xl md:text-2xl font-Satoshi">
          Integrated Platform With
        </div>
        <div className="flex items-center">
          <div className="text-[#00FF7F] text-[64px] xl:text-[52px] font-bold font-Navigo">
            2 in 1
          </div>
          <div className="text-white text-sm md:text-[18px] pl-2 font-Navigo">
            Passenger & <br /> Driver Interface
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
