import IndustriesSection from "./IndustriesSection";
import WhoWeAre from "./WhoWeAre";
import NewProductSec from "../product/NewProductSec";
import CeoSec from "./CeoSec";
import ContactUs from "../ContactUs";
import ScrollButton from "../ScrollButton";
import WhyChooseNext from "../about/WhyChooseNext";
import OurOfferings from "../about/OurOfferings";
import { HomeHero } from "./HomeHero";
import { motion } from "framer-motion";
import HorizontalLine from "./HorizontalLine";

const Home = () => {
  return (
    <>
      <main className="z-10 mx-auto relative">
        <ScrollButton />
        <section className="">
          <motion.div
            className=" relative"
            initial={{ opacity: 0, y: 50 }} // Start hidden and below
            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
            viewport={{ once: true }} // Animate only once
          >
            <HomeHero />
          </motion.div>
        </section>

        {/* Who We Are Section */}
        <section className="WhoWeAre main_container relative">
          <div>
            <WhoWeAre />
          </div>
          {/* bg gradient image */}
          <div className="absolute top-[35%] left-0 -z-1">
            <img
              src="/Images/whoweare-gradient.png"
              alt=""
              className="h-[100%] w-[80%]"
            />
          </div>
        </section>

        {/* Explore Our products section */}
        <section>
          <div
            className="w-full h-auto mx-auto text-center bg-gradient-to-b from-[#D5CCFF] to-[white] pt-[60px]"
            data-aos="fade-up"
          >
            <h1 className="res-heading poppins-bold text-[32px] sm:text-[42px] xl:text-[42px] text-black">
              Learn what <span className="gradient-text-2">Nextiq.ai</span>{" "}
              products can do for you
            </h1>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 4 }}
          >
            <NewProductSec />
          </motion.div>
        </section>

        {/* Why Choose NextIQ */}
        <section>
          <WhyChooseNext />
        </section>

        <section>
          <OurOfferings />
        </section>

        {/* industries we serve */}
        <section className="industry_sec main_container w-full">
          {/* page top Line */}
          <div className="w-full mx-auto">
            {/* <svg
              width="100%"
              height="100%"
              viewBox="0 0 1440 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-40 64L69.6988 63L117.004 5H722.59L762.963 54.5H1359.99L1400.36 5H1528"
                stroke="#45108A"
                strokeWidth="10"
              />
            </svg> */}

            <HorizontalLine />
          </div>
          <IndustriesSection />
        </section>

        {/* Introduction with CEO Section */}
        <section
          // ref={ceoSec}
          className="main_container"
          data-aos="fade-up"
        >
          <CeoSec />
        </section>

        <section className="contactUs w-full mx-auto overflow-hidden border-t border-gray-200">
          <ContactUs />
        </section>
      </main>
    </>
  );
};

export default Home;
