import React from "react";
import "./Ceosec.css";

const CEOCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto space-x-12 gap-6 z-20">
      {/* Profile Image */}
      <div className="w-52 h-82 rounded-full mx-auto overflow-hidden bg-[#DED7FE]">
        <img
          src="/New-Images/apurva-sir.png"
          alt="Apurva Boradia"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="flex-1 sm:px-4 md:px-2">
        <div className="mb-4">
          <img src="/New-Images/coats-open.png" className="h-10 w-12" />
        </div>
        <p className="poppins-regular text-[#6F7C8E] text-[14px] sm:text-[16px] xl:text-[18px] leading-relaxed text-justify">
          At NextlQ.ai, we believe that artificial intelligence is not just a
          tool—it's the catalyst for a smarter, more efficient future. Our
          mission is to harness the power of Al to transform industries, drive
          intelligent automation, and unlock data-driven insights that propel
          businesses forward. From predictive analytics to generative Al, our
          solutions are designed to empower decision-makers with precision,
          efficiency, and innovation. The future belongs to those who embrace
          intelligence, and at NextlQ.ai, we are shaping that future today.
          <span>
            <img
              src="/New-Images/closing-coats.png"
              className="w-6 h-5 inline mx-2"
            />
          </span>
        </p>
        <p className="text-[#45108A] poppins-semibold text-[18px] sm:text-[20px] xl:text-[24px] mt-4">
          Apurva Boradia
        </p>
        <p className="text-black poppins-regular text-[14px] sm:text-[16px] xl:text-[18px]">
          CEO, NextIQ.ai
        </p>
      </div>
    </div>
  );
};

const CeoSec = () => {
  return (
    <div className="ceo_bg_gradient relative w-full h-full md:h-[85vh] bg-gradient-to-b from-gray-100 to-gray-50 overflow-hidden">
      {/*bottom Grid Line Animated Boxes */}
      <div className="overlay_1 z-0">
        <div className="gridLine_1">
          <div className="grid-fade_1"></div>
          <div className="grid-lines_1"></div>
        </div>
      </div>
      {/*top Grid Line Animated Boxes */}
      <div className="overlay_2 overflow-hidden z-0">
        <div className="gridLine_2">
          <div className="grid-fade_2"></div>
          <div className="grid-lines_2"></div>
        </div>
      </div>

      {/* main container */}
      <div className="w-full h-full flex justify-center items-center bg-gray-100 p-4 py-[55px] sm:py-[80px] lg:py-0">
        <CEOCard />
      </div>
    </div>
  );
};

export default CeoSec;
