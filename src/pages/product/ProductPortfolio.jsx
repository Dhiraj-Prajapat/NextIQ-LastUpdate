import Slider from "react-slick";
import { motion } from "framer-motion";
import "../home/Ceosec.css";
import { useState } from "react";


const ProductPortfolio = () => {
  const [sliderEnabled, setSliderEnabled] = useState(true);

  const settings = {
    dots: true,
    autoplay: true,
    infinite: sliderEnabled, // Disable when hovering over images
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: () => (
      <div className="custom-dot z-10">
        <span className="dot-inner"></span>
      </div>
    ),
    dotsClass: "slick-dots custom-dots",
  };

  

  return (
    <motion.div
      className="m-auto max-w-full lg:h-[80vh] flex z-0 overflow-hidden relative bg-[#F7F5FF]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      {/* Grid Line Animated Boxes */}
      <div className="overlay_1 z-0">
        <div className="gridLine_1">
          <div className="grid-fade_1"></div>
          <div className="grid-lines_1"></div>
        </div>
      </div>

      <Slider {...settings} className="w-full h-full overflow-hidden"
       onMouseEnter={() => setSliderEnabled(false)} // Disable slider when hovered
       onMouseLeave={() => setSliderEnabled(true)} // Enable slider when mouse leaves
       >
        {/* Slide 1 */}
        <div className="h-[80vh] lg:h-[80vh] overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 pl-4 lg:pl-12">
            <div className=" pt-[120px] lg:pt-[155px] z-10">
              <div className="mb-20 w-full">
                {/* Heading container */}
                <div className="relative w-full overflow-hidden bg-transparent flex">
                  {/* Foreground text */}
                  <div className="relative z-10 text-center">
                    <motion.h1
                      className="res-heading poppins-semibold inline-block text-[34px] sm:text-[42px] lg:text-[48px] xl:text-[52px]"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 1.5 }}
                    >
                      <span className="text-black">Product </span>
                      <span className="inline-block">
                        <span className="gradient-text-2">Portfolio</span>
                      </span>
                    </motion.h1>
                  </div>
                </div>

                {/* Breadcrumb Navigation */}
                <motion.div
                  className="mt-2 res-desc text-[16px] xl:text-[18px] text-black flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 2.5 }}
                >
                  <span className="poppins-normal">Home</span>
                  <span className="mx-3 h-3 w-3 sm:h-4 sm:w-4">
                    <img src="/New-Images/breadcrumbs.png" />
                  </span>
                  <span className="poppins-medium underline">
                    Product Portfolio
                  </span>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="hidden lg:block h-full w-full pt-14 relative z-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3 }}
            >
              <img src="/New-Images/product-hero-circle.png" className="absolute h-35 w-35 top-45 -left-10 -z-1"/>

              <motion.div
                className="grid grid-cols-2 gap-5 w-full items-end absolute top-0 -right-75 -rotate-23"
                animate={
                  {
                    y: ["-20%", "0%", "-70%"], 
                  }
                }
                transition={
                  {
                    duration: 25,
                    ease: "linear",
                    repeat: Infinity,
                  }
                }
                //whileHover={{ y: 0 }}
                onWheel={(e) => e.stopPropagation()} // Prevents scroll in image section
              >
                {/* col 1 */}
                <div className="space-y-5">
                  
                  <div className="">
                    <img
                      src="/New-Images/Product-hero/img-1.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pl-6">
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pl-12">
                    <img
                      src="/New-Images/Product-hero/img-3.jpg"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="">
                    <img
                      src="/New-Images/Product-hero/img-1.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pl-6">
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pl-12">
                    <img
                      src="/New-Images/Product-hero/img-3.jpg"
                      className="rounded-xl"
                    />
                  </div>
                </div>

                {/* col 2 */}
                <div className="space-y-5 ">
                  <div className="pr-12">
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pr-6">
                    <img
                      src="/New-Images/Product-hero/img-1.png"
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pr-12">
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pr-6">
                    <img
                      src="/New-Images/Product-hero/img-1.png"
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                
                </div>
                {/* col 1 */}
                <div className="space-y-5">
                  <div className="">
                    <img
                      src="/New-Images/Product-hero/img-1.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pl-6">
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pl-12">
                    <img
                      src="/New-Images/Product-hero/img-3.jpg"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="">
                    <img
                      src="/New-Images/Product-hero/img-1.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pl-6">
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pl-12">
                    <img
                      src="/New-Images/Product-hero/img-3.jpg"
                      className="rounded-xl"
                    />
                  </div>
                </div>

                {/* col 2 */}
                <div className="space-y-5 ">
                  <div className="pr-12">
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pr-6">
                    <img
                      src="/New-Images/Product-hero/img-1.png"
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pr-12">
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pr-6">
                    <img
                      src="/New-Images/Product-hero/img-1.png"
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="h-[80vh] lg:h-[80vh] overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 pl-4 lg:pl-12">
            <div className=" pt-[120px] lg:pt-[155px] z-10">
              <div className="mb-20 w-full">
                {/* Heading container */}
                <div className="relative w-full overflow-hidden bg-transparent flex">
                  {/* Foreground text */}
                  <div className="relative z-10 text-center">
                    <motion.h1
                      className="res-heading poppins-semibold inline-block text-[34px] sm:text-[42px] lg:text-[48px] xl:text-[52px]"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 1.5 }}
                    >
                      <span className="text-black">Product </span>
                      <span className="inline-block">
                        <span className="gradient-text-2">Portfolio</span>
                      </span>
                    </motion.h1>
                  </div>
                </div>

                {/* Breadcrumb Navigation */}
                <motion.div
                  className="mt-2 res-desc text-[16px] xl:text-[18px] text-black flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 2.5 }}
                >
                  <span className="poppins-normal">Home</span>
                  <span className="mx-3 h-3 w-3 sm:h-4 sm:w-4">
                    <img src="/New-Images/breadcrumbs.png" />
                  </span>
                  <span className="poppins-medium underline">
                    Product Portfolio
                  </span>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="hidden lg:block h-full w-full pt-14 relative z-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3 }}
            >
              <img src="/New-Images/product-hero-circle.png" className="absolute h-35 w-35 top-45 -left-10 -z-1"/>

              <motion.div
                className="grid grid-cols-2 gap-5 w-full items-end absolute top-0 -right-75 -rotate-23"
                animate={
                  {
                    y: ["-20%", "0%", "-70%"], 
                  }
                }
                transition={
                  {
                    duration: 25,
                    ease: "linear",
                    repeat: Infinity,
                  }
                }
                //whileHover={{ y: 0 }}
                onWheel={(e) => e.stopPropagation()} // Prevents scroll in image section
              >
                {/* col 1 */}
                <div className="space-y-5">
                  
                  <div className="">
                    <img
                      src="/New-Images/Product-hero/img-1.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pl-6">
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pl-12">
                    <img
                      src="/New-Images/Product-hero/img-3.jpg"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="">
                    <img
                      src="/New-Images/Product-hero/img-1.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pl-6">
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pl-12">
                    <img
                      src="/New-Images/Product-hero/img-3.jpg"
                      className="rounded-xl"
                    />
                  </div>
                </div>

                {/* col 2 */}
                <div className="space-y-5 ">
                  <div className="pr-12">
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pr-6">
                    <img
                      src="/New-Images/Product-hero/img-1.png"
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pr-12">
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pr-6">
                    <img
                      src="/New-Images/Product-hero/img-1.png"
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                
                </div>
                {/* col 1 */}
                <div className="space-y-5">
                  <div className="">
                    <img
                      src="/New-Images/Product-hero/img-1.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pl-6">
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pl-12">
                    <img
                      src="/New-Images/Product-hero/img-3.jpg"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="">
                    <img
                      src="/New-Images/Product-hero/img-1.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pl-6">
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pl-12">
                    <img
                      src="/New-Images/Product-hero/img-3.jpg"
                      className="rounded-xl"
                    />
                  </div>
                </div>

                {/* col 2 */}
                <div className="space-y-5 ">
                  <div className="pr-12">
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pr-6">
                    <img
                      src="/New-Images/Product-hero/img-1.png"
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pr-12">
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pr-6">
                    <img
                      src="/New-Images/Product-hero/img-1.png"
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="h-[80vh] lg:h-[80vh] overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 pl-4 lg:pl-12">
            <div className=" pt-[120px] lg:pt-[155px] z-10">
              <div className="mb-20 w-full">
                {/* Heading container */}
                <div className="relative w-full overflow-hidden bg-transparent flex">
                  {/* Foreground text */}
                  <div className="relative z-10 text-center">
                    <motion.h1
                      className="res-heading poppins-semibold inline-block text-[34px] sm:text-[42px] lg:text-[48px] xl:text-[52px]"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 1.5 }}
                    >
                      <span className="text-black">Product </span>
                      <span className="inline-block">
                        <span className="gradient-text-2">Portfolio</span>
                      </span>
                    </motion.h1>
                  </div>
                </div>

                {/* Breadcrumb Navigation */}
                <motion.div
                  className="mt-2 res-desc text-[16px] xl:text-[18px] text-black flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 2.5 }}
                >
                  <span className="poppins-normal">Home</span>
                  <span className="mx-3 h-3 w-3 sm:h-4 sm:w-4">
                    <img src="/New-Images/breadcrumbs.png" />
                  </span>
                  <span className="poppins-medium underline">
                    Product Portfolio
                  </span>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="hidden lg:block h-full w-full pt-14 relative z-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3 }}
            >
              <img src="/New-Images/product-hero-circle.png" className="absolute h-35 w-35 top-45 -left-10 -z-1"/>

              <motion.div
                className="grid grid-cols-2 gap-5 w-full items-end absolute top-0 -right-75 -rotate-23"
                animate={
                  {
                    y: ["-20%", "0%", "-70%"], 
                  }
                }
                transition={
                  {
                    duration: 25,
                    ease: "linear",
                    repeat: Infinity,
                  }
                }
                //whileHover={{ y: 0 }}
                onWheel={(e) => e.stopPropagation()} // Prevents scroll in image section
              >
                {/* col 1 */}
                <div className="space-y-5">
                  
                  <div className="">
                    <img
                      src="/New-Images/Product-hero/img-1.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pl-6">
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pl-12">
                    <img
                      src="/New-Images/Product-hero/img-3.jpg"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="">
                    <img
                      src="/New-Images/Product-hero/img-1.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pl-6">
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pl-12">
                    <img
                      src="/New-Images/Product-hero/img-3.jpg"
                      className="rounded-xl"
                    />
                  </div>
                </div>

                {/* col 2 */}
                <div className="space-y-5 ">
                  <div className="pr-12">
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pr-6">
                    <img
                      src="/New-Images/Product-hero/img-1.png"
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pr-12">
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pr-6">
                    <img
                      src="/New-Images/Product-hero/img-1.png"
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                
                </div>
                {/* col 1 */}
                <div className="space-y-5">
                  <div className="">
                    <img
                      src="/New-Images/Product-hero/img-1.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pl-6">
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pl-12">
                    <img
                      src="/New-Images/Product-hero/img-3.jpg"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="">
                    <img
                      src="/New-Images/Product-hero/img-1.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pl-6">
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pl-12">
                    <img
                      src="/New-Images/Product-hero/img-3.jpg"
                      className="rounded-xl"
                    />
                  </div>
                </div>

                {/* col 2 */}
                <div className="space-y-5 ">
                  <div className="pr-12">
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pr-6">
                    <img
                      src="/New-Images/Product-hero/img-1.png"
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pr-12">
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pr-6">
                    <img
                      src="/New-Images/Product-hero/img-1.png"
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <img
                      src="/New-Images/Product-hero/img-2.png"
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Slider>
    </motion.div>
  );
};

export default ProductPortfolio;
