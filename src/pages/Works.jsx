import React from "react";

const Works = () => {
  return (
    <div className="px-3 md:px-16 2xl:px-32 xl:px-28 pb-10">
      <div
        className="text-black text-[34px] font-medium flex justify-center py-10 xl:py-20 font-Navigo"
        data-aos="fade-up"
      >
        How It Works
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 bg-white gap-10 xl:gap-20">
        <div
          className="bg-[#EEF4ED] rounded-xl p-6 sm:p-8 md:p-8 2xl:p-20 xl:p-12"
          data-aos="fade-right"
        >
          <div className="text-xl xl:text-[32px] text-[#006633] font-medium pb-4 xl:pb-10 font-Navigo text-center xl:text-start">
            I'm A Passenger
          </div>
          <div className="flex text-black font-bold font-Satoshi">
            <div>
              <span className="pr-4 text-[32px]">1.</span>
            </div>
            <div className="flex items-center">
              <span className="text-base md:text-xl font-bold font-Satoshi">
                Find A Trip
              </span>
            </div>
          </div>
          <div className="border-l-2 border-dotted text-black text-sm md:text-md border-l-black pb-5 pl-[26px] ml-2 font-medium font-Satoshi h-none xl:h-12">
            Enter your orgin, destination, date & time, and # of seats to search
            for a trip
          </div>
          <div className="flex text-black font-bold font-Satoshi">
            <div>
              <span className="pr-4 text-[32px]">2.</span>
            </div>
            <div className="flex items-center">
              <span className="text-base md:text-xl font-bold font-Satoshi">
                Bid/ Buy your seat for a Trip
              </span>
            </div>
          </div>
          <div className="border-l-2 border-dotted text-black text-sm md:text-md border-l-black pb-5 pl-[26px] ml-2 font-medium font-Satoshi h-none xl:h-12">
            Choose from a list of available trips. You can provide your Bidding
            Price or buy your seat at the Buy Now Price set by the Driver.
          </div>
          <div className="flex text-black font-bold font-Satoshi">
            <div>
              <span className="pr-4 text-[32px]">3.</span>
            </div>
            <div className="flex items-center">
              <span className="text-base md:text-xl font-bold font-Satoshi">
                Secure a Seat
              </span>
            </div>
          </div>
          <div className="border-l-2 border-dotted text-black text-sm md:text-md border-l-black pb-5 pl-[26px] ml-2 font-medium font-Satoshi h-none xl:h-12">
            Once you decided, provide a form of payment to secure your seat.
            (Don’t worry, your payment will only be processed when your bid is
            won.)
          </div>
          <div className="flex text-black font-bold font-Satoshi">
            <div>
              <span className="pr-4 text-[32px]">4.</span>
            </div>
            <div className="flex items-center">
              <span className="text-base md:text-xl font-bold font-Satoshi">
                Enjoy Your Ride!
              </span>
            </div>
          </div>
        </div>
        <div
          className="bg-[#EEF4ED] rounded-xl p-6 sm:p-8 md:p-8 2xl:p-20 xl:p-12"
          data-aos="fade-left"
        >
          <div className="text-xl xl:text-[32px] text-[#006633] font-medium pb-4 xl:pb-10 font-Navigo text-center xl:text-start">
            I’m a Driver
          </div>
          <div className="flex text-black font-bold font-Satoshi">
            <div>
              <span className="pr-4 text-[32px]">1.</span>
            </div>
            <div className="flex items-center">
              <span className="text-base md:text-xl font-bold font-Satoshi">
                Set Up A Trip
              </span>
            </div>
          </div>
          <div className="border-l-2 border-dotted text-black text-sm md:text-md border-l-black pb-5 pl-[26px] ml-2 font-medium font-Satoshi h-none xl:h-12">
            Enter your orgin, destination, date & time, and # of seats to search
            for a trip
          </div>
          <div className="flex text-black font-bold font-Satoshi">
            <div>
              <span className="pr-4 text-[32px]">2.</span>
            </div>
            <div className="flex items-center">
              <span className="text-base md:text-xl font-bold font-Satoshi">
                Confirm and Post A Trip
              </span>
            </div>
          </div>
          <div className="border-l-2 border-dotted text-black text-sm md:text-md border-l-black pb-5 pl-[26px] ml-2 font-medium font-Satoshi h-none xl:h-12">
            Make sure your trip informations are correct and post a trip for
            passengers to bid/ buy.
          </div>
          <div className="flex text-black font-bold font-Satoshi">
            <div>
              <span className="pr-4 text-[32px]">3.</span>
            </div>
            <div className="flex items-center">
              <span className="text-base md:text-xl font-bold font-Satoshi">
                Get Paid for Seats
              </span>
            </div>
          </div>
          <div className="border-l-2 border-dotted text-black text-sm md:text-md border-l-black pb-5 pl-[26px] ml-2 font-medium font-Satoshi h-none xl:h-12">
            Pick up your passengers and get paid!
          </div>
          <div className="flex text-black font-bold font-Satoshi">
            <div>
              <span className="pr-4 text-[32px]">4.</span>
            </div>
            <div className="flex items-center">
              <span className="text-base md:text-xl font-bold font-Satoshi">
                Have a Safe Trip!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
