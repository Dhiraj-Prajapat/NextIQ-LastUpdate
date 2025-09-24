import { motion } from "framer-motion";
import Timeline from "./Timeline";
import "../home/Ceosec.css";
import { Link } from "react-router-dom";

const WhyChooseNext = () => {
  return (
    <div className="text-center relative bg-[#F6F4FF] overflow-hidden pt-[80px] pb-[60px] lg:pb-[85px]">
      {/*top Grid Line Animated Boxes */}
      <div className="overlay_WCN -z-1">
        <div className="gridLine_WCN">
          <div className="grid-fade_WCN"></div>
          <div className="grid-lines_WCN"></div>
        </div>
      </div>
      <div className="pb-[40px]" data-aos="fade-up" >
        <h2 className="res-heading poppins-bold text-[32px]/[42px] sm:text-[38px]/[48px] lg:text-[42px] text-black">
          Why choose{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#96016A] to-[#150145]">
            Nextiq.ai
          </span>
        </h2>
      </div>

      {/* center line and content section */}    
       <Timeline />

      {/*bottom Grid Line Animated Boxes */}
      <div className="overlay_WCN2 overflow-hidden z-0">
        <div className="gridLine_WCN2">
          <div className="grid-fade_WCN2"></div>
          <div className="grid-lines_WCN2"></div>
        </div>
      </div>

      
        {/* infinite moving robot image */}
      <div className="z-50">
        <motion.div
          className="hidden absolute -top-250 left-0  md:bottom-8 md:left-25 lg:flex flex-col justify-center items-center"
          animate={{ y: [0, -20, 0] }} // Moves up and down
          transition={{
            duration: 2, // 2 seconds per cycle
            repeat: Infinity, // Loops forever
            ease: "easeInOut",
          }}
        >
          <img
            src="/aboutUs/Group 1000004726.png"
            className="w-[42px] h-[56px]"
            alt="Base"
          />

          <img
            src="/aboutUs/floating-robot 1.png"
            className="drop-shadow-xl duration-500 w-[142px] h-[142px]"
            alt="Floating Robot"
          />
          <div className="absolute max-w-full left-22">
            <div className="relative top flex justify-center items-center  w-48">
              <div className="relative cursor-pointer poppins-medium bg-[#6c4bff] text-white drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] px-3 py-[7px] rounded-lg shadow-lg flex items-center">
                Why Nextiq.Ai
                <div className="absolute left-0 top-1/2 -ml-2 w-0 h-0 border-y-8 border-y-transparent border-r-9 border-r-[#6c4bff]"></div>
              </div>
            </div>
          </div>
        </motion.div>

        <button className="primary-btn hover:scale-105 transition-all duration-300 z-100">
          <Link to={"/contactus"}>Request A Demo</Link>
        </button>
      </div>

    </div>
  );
};

export default WhyChooseNext;
