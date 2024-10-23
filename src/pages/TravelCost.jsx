import React from "react";
import rectangleImg01 from "../assets/img/home/Rectangle_01.png";

const TravelCost = () => {
  return (
    <div className="grid px-3 md:px-16 2xl:px-32 xl:px-28 pt-10 items-center grid-cols-1 md:grid-cols-2 gap-10">
      <div data-aos="fade-up-right">
        <img src={rectangleImg01} alt="" className="w-full" />
      </div>
      <div className="text-black" data-aos="fade-up-left">
        <div className="text-[34px] xl:text-4xl font-medium xl:font-bold font-Navigo">
          Optimize Your Travel Costs On Long Distance Trip Between Cities
        </div>
        <div className="text-base xl:text-xl font-medium pt-6 xl:pt-5 pb-5 font-Satoshi">
          Enjoy affordable fares without compromising on comfort and
          convernience. Share a ride with others heading in the same direction.
          Whether you're a passenger or a driver, enjoy the advantages of
          ridesharing with Movelz.
        </div>
      </div>
    </div>
  );
};

export default TravelCost;
