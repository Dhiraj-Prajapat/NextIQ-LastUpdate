import React from "react";
import IndustryDemo from "./industryDemo";

const IndustriesSection = () => {
  return (
    <div className="pb-12 mt-[60px] lg:mt-[100px]">
      <div className="max-w-7xl mx-auto text-black px-6 pb-10 sm:px-10 lg:px-12 flex flex-col md:flex-row gap-10 sm:justify-center lg:justify-between relative" data-aos="fade-up">
        <div className="sm:w-[40%]">
          <img
            src="/New-Images/industry-we-serve-img.png"
            alt="hand image"
            className=""
          />
        </div>
        <div className="sm:w-[65%] lg:w-[55%] space-y-5 lg:pr-30">
          <h2 className="res-heading poppins-bold text-[32px]/[42px] sm:text-[38px]/[48px] lg:text-[42px]/[52px] lg:w-1/2">
            Industries we<span className="gradient-text-2"> serve</span>
          </h2>
          <p className="res-desc poppins-regular text-[14px] lg:text-[16px] text-[#6F7C8E] text-justify">
            We serve diverse industries with tailored solutions that enhance
            efficiency, innovation, and growth. From finance to healthcare,
            retail to manufacturing, we help businesses optimize performance and
            Stay competitive.
          </p>
        </div>
      </div>

      <div data-aos="fade-up">
        <IndustryDemo />
      </div>
    </div>
  );
};

export default IndustriesSection;
