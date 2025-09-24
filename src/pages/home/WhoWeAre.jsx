// import { FloatingIcons } from "../FloatingIcons";
import Globe from "../demo/Globe"
const WhoWeAre = () => {
  return (
    <div className="max-w-7xl mb-[100px] mx-auto px-4 lg:px-[50px] mt-[80px]">
      <div className=" flex flex-col flex-wrap lg:grid grid-cols-2 items-center gap-12">
        {/* left side */}
        <div className="space-y-6 my-auto" data-aos="fade-up">
          <h1 className="res-heading text-[32px] md:text-[38px]/[48px] lg:text-[42px]/[52px] poppins-bold text-black">
            Who <br className="hidden lg:block" />{" "}
            <span className="gradient-text-2">we are</span>
          </h1>
          <p className="res-desc text-[14px] md:text-[16px] text-[#6F7C8E] text-justify poppins-regular">
            At NEXTIQ.AI, we are shaping the future with next-generation Al
            solutions that revolutionize Digital Transformation and enhance
            collaboration between advanced technologies and human expertise. Our
            mission is to equip businesses with Assisted, Autonomous, and
            Augmented Intelligence, enabling them to unlock new opportunities,
            boost efficiency, and drive meaningful innovation.
          </p>
        </div>

      {/* right side */}
        <div
          className="relative"
          data-aos="fade-up"
        >
          <div className="w-[80%] xs:w-[60%] sm:w-[60%] lg:w-[80%] lg:h-[450px] lg:flex mx-auto relative items-center z-0 rounded-full overflow-hidden">
            {/* <div className="md:w-[350px] md:h-[520px] flex items-center justify-center mx-auto">
              <img src="/New-Images/nextIQ-logo.png" alt="" className="w-full h-full object-contain mt-12"/>
            </div> */}

            <Globe />
            
            <div className="overlay_1 overflow-hidden -z-1">
              <div className="gridLine_1">
                <div className="grid-fade_1"></div>
                <div className="grid-lines_1"></div>
              </div>
            </div>
          </div>
          {/* <FloatingIcons /> */}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
