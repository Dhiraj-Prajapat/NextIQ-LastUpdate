import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../pages/components/ui/Button";
import ContactUs from "../ContactUs";
import WhyChooseNext from "./WhyChooseNext";
import OurOfferings from "./OurOfferings";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import "../home/Ceosec.css"

// Custom arrow components
const PrevArrow = ({ onClick }) => (
  <Button
    variant="outline"
    size="icon"
    onClick={onClick}
    className="hidden lg:block border-none absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200/20 text-white p-3 rounded-full cursor-pointer hover:scale-103 hover:bg-white/50"
  >
    <FaArrowLeft className="h-6 w-6 text-[#ffffff]" />
  </Button>
);

const NextArrow = ({ onClick }) => (
  <Button
    variant="outline"
    size="icon"
    onClick={onClick}
    className="hidden lg:block border-none absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200/20 text-white p-3 rounded-full cursor-pointer hover:scale-103 hover:bg-white/50"
  >
    <FaArrowRight className="h-6 w-6 text-[#ffffff]" />
  </Button>
);


const About = () => {
  const icons = [
    { IconPath: "/FloatingIcons/FileIcon.png", size:"h-25 w-25", position: "top-20 left-40" },
    { IconPath: "/FloatingIcons/Icon2.png", size:"h-18 w-18", position: "top-20 right-100" },
    { IconPath: "/FloatingIcons/Icon4.png", size:"h-30 w-30", position: "top-50 left-75" },
    { IconPath: "/FloatingIcons/Icon3.png", size:"h-21 w-21", position: "top-50 right-60" },
    { IconPath: "/FloatingIcons/Icon6.png", size:"h-21 w-21", position: "top-85 left-50" },
    { IconPath: "/FloatingIcons/Icon5.png", size:"h-22 w-22", position: "top-88 right-85" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    customPaging: () => (
      <div className="custom-dot-1 z-10">
        <span className="dot-inner-1"></span>
      </div>
    ),
    dotsClass: "slick-dots-1 custom-dots-1",
  };
  return (
    <>
      <div className="mt-0 overflow-hidden mx-auto">
      <div
        className="slider-container flex items-center justify-center h-[400px] md:h-[540px] xl:h-[600px] max-w-full bg-cover bg-center bg-no-repeat px-4 lg:px-12"
        style={{ backgroundImage: "url('/aboutUs/herosection.png')" }}
      >
        {/* Decorative Image */}
        <img
          src="/aboutUs/Group (3).png"
          className="hidden md:block h-[150px] md:h-[220px] absolute right-0 top-[80%] lg:top-[75%]"
          alt="decorative"
        />

        <Slider {...settings} className="w-full lg:max-w-7xl h-auto flex mx-auto">
          {/* slide 1 */}
          <div className="w-full max-w-7xl h-[450px] md:h-[500px] relative pt-10 ">
            {icons.map(({ IconPath, size, position }, index) => (
              <motion.div
                key={index}
                className={`lg:max-w-fit absolute ${position} rounded-full hidden lg:block -mx-[7%]`}
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  y: [0, -20, 0],
                }}
                transition={{
                  opacity: { duration: 1, delay: index * 0.3 }, // Delay for fade-up effect
                  y: { duration: 4, repeat: Infinity, delay: index * 0.5 },
                }}
                whileHover={{ scale: 1.2 }}
              >
                {/* <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" /> */}
                <img
                  src={IconPath}
                  alt="Icons"
                  className={size}
                />
              </motion.div>
            ))}

            {/* Main Content */}
            <div className="h-full w-full flex flex-col justify-center items-center text-white max-w-7xl relative">
              <motion.h1
                className="res-heading text-[42px] sm:text-[48px] lg:text-[52px] font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7546E5] to-[#E151BD]">
                  Us
                </span>
              </motion.h1>
              <motion.div
                className="res-desc flex justify-center items-center gap-2 text-lg sm:text-xl mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
              >
                <p className="font-light">Home</p>
                <img
                  src="/aboutUs/Group.png"
                  className="h-4 w-4"
                  alt="separator"
                />
                <p className="font-medium underline">About Us</p>
              </motion.div>
            </div>
          </div>

          {/* slide 2 */}
          <div className="max-w-7xl h-[450px] md:h-[500px] relative pt-10">
            {icons.map(({ IconPath, size, position }, index) => (
              <motion.div
                key={index}
                className={`lg:max-w-fit absolute ${position} rounded-full hidden lg:block -mx-[7%]`}
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
                whileHover={{ scale: 1.2 }}
              >
                {/* <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" /> */}
                <img
                  src={IconPath}
                  alt="Icons"
                  className={size}
                />
              </motion.div>
            ))}

            {/* Main Content */}
            <div className="h-full w-full flex flex-col justify-center items-center text-white max-w-7xl relative">
              <motion.h1
                className="res-heading text-[42px] sm:text-[48px] lg:text-[52px] font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7546E5] to-[#E151BD]">
                  Us
                </span>
              </motion.h1>
              <motion.div
                className="res-desc flex justify-center items-center gap-2 text-lg sm:text-xl mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
              >
                <p className="font-light">Home</p>
                <img
                  src="/aboutUs/Group.png"
                  className="h-4 w-4"
                  alt="separator"
                />
                <p className="font-medium underline">About Us</p>
              </motion.div>
            </div>
          </div>
        </Slider>
      </div>


        {/* Mission Vision Section */}
        <div className=" mt-[50px] sm:mt-[80px] mb-[60px] sm:mb-[100px] max-w-[936px] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-14 mb-10">
            <div className="text-left" data-aos="fade-up">
              <p className="res-heading leading-[35px] poppins-bold text-[40px] sm:text-[48px]/[58px] md:text-[58px]/[68px] lg:text-[62px]/[72px] text-black sm:leading-[48px] md:leading-[72px]">
                Our <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#96016A] to-[#150145]">
                  Mission
                </span>
              </p>
              <p className="res-desc poppins-regular text-[16px] text-[#6F7C8E] w-full md:w-[377px] mt-2 md:mt-1">
                To deliver innovative, scalable AI solutions that transform
                industries, empower businesses, and enhance lives.
              </p>
            </div>
            <div
              className="flex justify-center"
              data-aos="fade-up"
            >
              <img
                src="/New-Images/our-mission-new.png"
                className="w-[250px] md:w-[389px] h-auto"
                alt="Mission"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-x-20">
            <div
              className="relative flex justify-center"
              data-aos="fade-up"
            >
              <img
                src="/New-Images/our-vision-new.png"
                loading="lazy"
                className="w-full h-[292px] object-contain"
                alt="Vision"
              />
            </div>
            <div className="text-left mt-10 sm:mt-0" data-aos="fade-up">
              <p className="res-heading leading-[35px] poppins-bold text-[40px] md:text-[62px] text-black sm:leading-[48px] md:leading-[72px]">
                Our <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#96016A] to-[#150145]">
                  Vision
                </span>
              </p>
              <p className="res-desc poppins-regular text-[16px] text-[#6F7C8E] w-full md:w-[377px] mt-2 md:mt-1">
                To be a global leader in next-generation AI technology, driving
                a smarter, more sustainable, and digitally connected future.
              </p>
            </div>
          </div>
        </div>

        {/* why choice nextiq */}
        <section className="mt-14">
          <WhyChooseNext />
        </section>

        <section className="relative">
          <div className="absolute top-0 -z-1">
            <img src="/New-Images/offering-bg-gradient.png" />
          </div>
          <OurOfferings />
        </section>

        <section className="w-full mx-auto border-t border-gray-200">
          <ContactUs />
        </section>
      </div>
    </>
  );
};

export default About;
