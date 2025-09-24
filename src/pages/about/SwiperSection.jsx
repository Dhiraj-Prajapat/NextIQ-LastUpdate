import React, { useState } from "react";
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";

const SwiperSection = () => {
  const [hoveredSlide, setHoveredSlide] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { id: 1, image: "/aboutUs/Group 1000004738.png" },
    { id: 2, image: "/aboutUs/Mask group (6).png" },
    { id: 3, image: "/aboutUs/Mask group (5).png" },
    { id: 4, image: "/aboutUs/Mask group (7).png" },
  ];

  const handleMouseEnter = (slideId) => setHoveredSlide(slideId);
  const handleMouseLeave = () => setHoveredSlide(null);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : slides.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex < slides.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="flex flex-col md:flex-row items-center px-4 md:px-6 py-6 mt-12 md:mt-0 md:py-8 relative">
      {/* Left Section (Title and Buttons) */}
      <div className="flex flex-col items-start justify-between w-full md:max-w-lg min-h-[150px] md:min-h-[200px] pl-0 md:pl-8">
        <h2 className="poppins-bold text-[32px] md:text-[42px] text-[#151921] leading-[40px] md:leading-[52px]">
          What We <br /> <span className="bg-gradient-to-r to-[#150145] from-[#96016A] text-transparent bg-clip-text">do</span>
        </h2>
        <div className="flex gap-4 mt-4 md:mt-0">
          <button
            onClick={handlePrev}
            className="flex justify-center items-center cursor-pointer bg-[#6F7C8E] h-8 w-8 active:bg-[#6E50FF] rounded-full hover:bg-[#6E50FF] text-black shadow-md"
          >
            <LuChevronLeft size={24} className="text-white" />
          </button>
          <button
            onClick={handleNext}
            className="cursor-pointer flex justify-center bg-[#6F7C8E] items-center h-8 w-8 active:bg-[#6E50FF] hover:bg-[#6E50FF] text-black rounded-full shadow-md"
          >
            <LuChevronRight size={24} className="text-white " />
          </button>
        </div>
      </div>

      {/* Right Section (Slides) */}
      <div className="flex gap-3 md:gap-4 lg:gap-6 overflow-x-auto md:overflow-hidden mt-6 md:mt-0 w-full md:w-auto">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`relative h-[150px] md:h-[355px] transition-all duration-500 rounded-lg shadow-lg ${
              hoveredSlide === slide.id
                ? "w-[200px] md:w-[350px] lg:w-[470px]"
                : hoveredSlide
                ? "w-[80px] md:w-[100px] lg:w-[120px]"
                : index === activeIndex
                ? "w-[200px] md:w-[350px] lg:w-[470px]"
                : "w-[100px] md:w-[150px] lg:w-[200px]"
            }`}
            // onMouseEnter={() => handleMouseEnter(slide.id)}
            // onMouseLeave={handleMouseLeave}
          >
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-full  object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwiperSection;