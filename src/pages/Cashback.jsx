import React, { useEffect } from "react";
import iphoneImg from "../assets/img/home/iphone.png";
import appleImg from "../assets/img/icons/apple.png";
import googlePayImg from "../assets/img/icons/google_pay.png";
import mobileImg from "../assets/img/home/mobile.png";

const CashbackCompo = () => {
  return (
    <div className="py-5 xl:py-0">
      <div
        className="grid home1 h-[320px] xl:h-[490px] items-center justify-center xl:justify-start w-full py-10"
        data-aos="fade-up"
      >
        <div className="mx-4 sm:mx-10 md:mx-16 xl:mx-20">
          <div className="text-white text-[32px] md:text-4xl font-Navigo">
            Receive A<span className="text-[#00FF7F] pl-2">5% Cashback</span>
            <span className="pl-2">
              When You
              <br /> Refer Movelz To Your Friends!
            </span>
          </div>
          <div className="bg-[#00FF7F] rounded-3xl px-8 py-2 w-fit mt-8 font-semibold xl:mx-0 font-Sans">
            Learn More
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 items-center justify-start w-full">
        <div className="hidden md:block" data-aos="fade-down">
          <img src={iphoneImg} alt="" className="h-full" />
        </div>
        <div
          className="cashback-mobile-vertical bg-black block md:hidden"
          data-aos="fade-down"
        >
          <img src={mobileImg} alt="" className="h-full" />
        </div>
        <div
          className="text-black grid justify-center xl:justify-start pt-10 md:pt-0"
          data-aos="fade-down"
        >
          <div className="text-4xl font-medium px-3 xl:px-8 font-Navigo">
            Find Us In The
            <br /> App Store
          </div>
          <div className="w-full md:w-[550px] py-5 px-3 xl:px-8 font-medium text-sm font-Satoshi hidden md:block">
            Download now to access all the features, stay updated with the
            latest releases, and enjoy a seamless, intuitive interface designed
            to make your experience smoother and more enjoyable. Search for us
            on the App Store and join our growing community!
          </div>
          <div className="w-[350px] py-5 px-3 xl:px-8 font-medium text-sm font-Satoshi block md:hidden">
            Download now to access all the features, stay updated with the
            latest releases, and enjoy a seamless, intuitive interface designed
            to make your experience smoother and more enjoyable. Search for us
            on the App Store and join our growing community!
          </div>
          <div className="text-xl font-medium px-3 xl:px-8 font-Navigo">
            Available On
          </div>
          <div className="flex justify-center gap-2 xl:justify-start mt-5">
            <img src={appleImg} alt="" width={120} height={40} />
            <img src={googlePayImg} alt="" width={120} height={40} />
          </div>
          <img src={iphoneImg} alt="" className="h-full block md:hidden" />
        </div>
      </div>
    </div>
  );
};

export default CashbackCompo;
