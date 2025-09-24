import React from "react";
import { FloatIcons } from "./FloatIcons";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { Button } from "../../pages/components/ui/Button"; // Adjust the path as necessary
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// Custom arrow components
const PrevArrow = ({ onClick }) => (
  <Button
    variant="outline"
    size="icon"
    onClick={onClick}
    className="hidden lg:block border-none absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-400/50 p-3 rounded-full cursor-pointer hover:scale-103 hover:bg-gray-500/50"
  >
    <FaArrowLeft className="h-6 w-6 text-[#ffffff]" />
  </Button>
);

const NextArrow = ({ onClick }) => (
  <Button
    variant="outline"
    size="icon"
    onClick={onClick}
    className="hidden lg:block border-none absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-400/50 p-3 rounded-full cursor-pointer hover:scale-103 hover:bg-gray-500/50"
  >
    <FaArrowRight className="h-6 w-6 text-[#ffffff]" />
  </Button>
);


const HeroSec = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoPlay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="SolutionHero w-full relative pt-38 sm:pb-12 overflow-hidden mx-auto">
      {/* background video */}
      <div className="w-full h-[80%] lg:h-[97%] absolute -top-[0vh] lg:-top-[16vh] left-0 -z-1 opacity-15" >
        <video
          src="/New-Images/bg-video.mp4"
          className="w-screen h-full object-cover"
          autoPlay
          muted
          loop
        ></video>
      </div>

      {/* left box image */}
      <div className="hidden md:block absolute bottom-0 sm:-bottom-6 left-0">
        <img src="/New-Images/solution-left-box.png" alt="left-box" className="w-20 sm:w-30 lg:w-36" />
      </div>

      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="">
          <motion.div
            className="max-w-7xl grid lg:grid-cols-2 gap-y-6 lg:gap-y-0 relative lg:pb-34 px-2 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {/* Left Box */}
            <div className="space-y-6 sm:space-y-10 lg:pl-12 lg:pr-0 flex flex-col justify-center">
              {/* Breadcrumb Navigation */}
              <motion.div
                className="mt-2 res-desc text-[16px] xl:text-[18px] text-black flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <span className="poppins-normal">Home</span>
                <span className="mx-3 h-3 w-3 sm:h-4 sm:w-4">
                  <img src="/New-Images/breadcrumbs.png" />
                </span>
                <span className="poppins-medium underline">Solutions</span>
              </motion.div>

              <div className="text-black space-y-6">
                <motion.h1
                  className="res-heading leading-[35px] poppins-bold text-[32px]/[42px] sm:text-[38px]/[48px] xl:text-[42px]/[52px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.7 }}
                >
                  Transform your{" "}
                  <span className="gradient-text-2 lg:block">
                    display displays with
                  </span>{" "}
                  dynamic automation
                </motion.h1>
                <motion.p
                  className="res-desc poppins-regular text-[18px] lg:max-w-[420px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 2.3 }}
                >
                  Revolutionize digital transformation of critical business insights
                  at right time to the right user powered by FireCast.ai
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 3 }}
                  className="flex relative pb-[55px]"
                >
                  <div className="gap-4 flex flex-wrap z-50">
                    <button className="primary-btn sm:w-auto hover:scale-105 transition-all duration-200 text-sm sm:text-base px-6 py-3">
                      <Link to={"/contactus"}>Request Demo</Link>
                    </button>
                    <button className="third-btn sm:w-auto hover:scale-105 transition-all duration-200 px-6 py-3">
                      <Link to={"/contactus"}>Get In Touch</Link>
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Box */}
            <motion.div
              className="lg:w-full relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.7 }}
            >
              <img
                src="/New-Images/led-tv.png"
                className="w-full lg:w-[480px] xl:w-[550px] 2xl:w-[620px] lg:absolute lg:top-55 xl:top-45 2xl:top-20"
              />

              <div className="h-[200px]  lg:w-[405px] xl:w-[470px] 2xl:w-[527px] absolute lg:top-74 xl:top-66 2xl:top-44 lg:left-10 xl:left-11 2xl:left-12.5 hidden lg:block">
                <video src="/New-Images/tv-video.mp4" muted autoPlay loop></video>
              </div>
              <FloatIcons />
            </motion.div>
          </motion.div>
        </div>

        {/* Slide 2 */}
        <div className="">
          <motion.div
            className="max-w-7xl grid lg:grid-cols-2 gap-y-6 lg:gap-y-0 relative lg:pb-34 px-2 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {/* Left Box */}
            <div className="space-y-6 sm:space-y-10 lg:pl-12 lg:pr-0 flex flex-col justify-center">
              {/* Breadcrumb Navigation */}
              <motion.div
                className="mt-2 res-desc text-[16px] xl:text-[18px] text-black flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <span className="poppins-normal">Home</span>
                <span className="mx-3 h-3 w-3 sm:h-4 sm:w-4">
                  <img src="/New-Images/breadcrumbs.png" />
                </span>
                <span className="poppins-medium underline">Solutions</span>
              </motion.div>

              <div className="text-black space-y-6">
                <motion.h1
                  className="res-heading leading-[35px] poppins-bold text-[32px]/[42px] sm:text-[38px]/[48px] xl:text-[42px]/[52px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.7 }}
                >
                  Transform your{" "}
                  <span className="gradient-text-2 lg:block">
                    display displays with
                  </span>{" "}
                  dynamic automation
                </motion.h1>
                <motion.p
                  className="res-desc poppins-regular text-[18px] lg:max-w-[420px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 2.3 }}
                >
                  Revolutionize digital transformation of critical business insights
                  at right time to the right user powered by FireCast.ai
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 3 }}
                  className="flex relative pb-[55px]"
                >
                  <div className="gap-4 flex flex-wrap z-50">
                    <button className="primary-btn sm:w-auto hover:scale-105 transition-all duration-200 text-sm sm:text-base px-6 py-3">
                      <Link to={"/contactus"}>Request Demo</Link>
                    </button>
                    <button className="third-btn sm:w-auto hover:scale-105 transition-all duration-200 px-6 py-3">
                      <Link to={"/contactus"}>Get In Touch</Link>
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Box */}
            <motion.div
              className="lg:w-full relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.7 }}
            >
              <img
                src="/New-Images/led-tv.png"
                className="w-full lg:w-[480px] xl:w-[550px] 2xl:w-[620px] lg:absolute lg:top-55 xl:top-45 2xl:top-20"
              />

              <div className="h-[200px]  lg:w-[405px] xl:w-[470px] 2xl:w-[527px] absolute lg:top-74 xl:top-66 2xl:top-44 lg:left-10 xl:left-11 2xl:left-12.5 hidden lg:block">
                <video src="/New-Images/tv-video.mp4" muted autoPlay loop></video>
              </div>
              <FloatIcons />
            </motion.div>
          </motion.div>
        </div>

      </Slider>
    </div>
  );
};

export default HeroSec;