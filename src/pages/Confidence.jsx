import React from "react";
import verifiedIcon from "../assets/img/icons/verified.png";
import stripeIcon from "../assets/img/icons/stripe.png";
import starIcon from "../assets/img/icons/icon_01.png";

const ConfidenceCompo = () => {
  return (
    <div className="px-3 md:px-16 2xl:px-32 xl:px-28 text-black">
      <div className="hidden md:block" data-aos="fade-down">
        <div className="text-[34px] font-medium text-start xl:text-center font-Navigo">
          Travel With Confidence, <br /> Feeling Safe Wherever You Go
        </div>
        <div className="text-base font-medium py-5 text-start xl:text-center font-Satoshi">
          Our top priority is your security, ensuring peace of mind on every
          journey. At Movelz, we ensure every <br /> driver undergoes a thorough
          2-step background check and verification before posting a trip.
        </div>
      </div>
      <div className="block md:hidden">
        <div
          className="text-[34px] font-medium text-start xl:text-center font-Navigo block md:hidden"
          data-aos="fade-down"
        >
          Travel With Confidence, <br /> Feeling Safe <br /> Wherever You Go
        </div>
        <div className="text-base font-medium py-5 text-start xl:text-center font-Satoshi block md:hidden">
          Our top priority is your security, ensuring peace of mind on every
          journey. At Movelz, we ensure every driver undergoes a thorough 2-step
          background check and verification before posting a trip.
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 xl:gap-16 py-5 xl:py-20">
        <div
          className="rounded-2xl bg-[#EEF4ED] p-8 flex flex-col items-start"
          data-aos="zoom-in"
        >
          <img src={verifiedIcon} alt="" />
          <div className="text-[32px] font-bold pt-5 xl:pt-10 font-Satoshi">
            Drivers' 2-step
            <br /> Background Checks
          </div>
        </div>
        <div
          className=" rounded-2xl bg-[#EEF4ED] p-8 flex flex-col items-start"
          data-aos="flip-down"
        >
          <div className="grid grid-cols-4 gap-2 xl:m-auto ">
            <div className="flex confidence w-[55px] h-[50px] items-center justify-center text-[60px] font-medium">
              <img src={starIcon} alt="" />
            </div>
            <div className="flex confidence w-[55px] h-[50px] items-center justify-center text-[60px] font-medium">
              <img src={starIcon} alt="" />
            </div>
            <div className="flex confidence w-[55px] h-[50px] items-center justify-center text-[60px] font-medium">
              <img src={starIcon} alt="" />
            </div>
            <div className="flex confidence w-[55px] h-[50px] items-center justify-center text-[60px] font-medium">
              <img src={starIcon} alt="" />
            </div>
          </div>
          <div className="text-[32px] font-bold pt-5 xl:pt-10 font-Satoshi">
            Confirmation Code
            <br />
            Verification Upon
            <br />
            Pick Up
          </div>
        </div>
        <div
          className="rounded-2xl bg-[#EEF4ED] p-8 flex flex-col items-start"
          data-aos="zoom-out"
        >
          <img src={stripeIcon} alt="" />
          <div className="text-[32px] font-bold pt-5 xl:pt-10 font-Satoshi">
            Secure Payments with Stripe
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfidenceCompo;
