import ContactUs from "../ContactUs";
import IndustryDemo from "../home/industryDemo";
import HeroSec from "./HeroSec";
import KeyChalenge from "./KeyChalenge";
import FirecastWorks from "./FirecastWorks";
import ProductsFeature from "./ProductsFeature";
import WhyChooseFirecast from "./WhyChooseFirecast";
import HorizontalLine from "../home/HorizontalLine";

const SolutionsAI = () => {
  return (
    <>
      <main className="overflow-hidden w-full mx-auto">
        <section>
          <HeroSec />
        </section>

        <section className="relative">
        <div className="hidden md:block absolute -top-20 z-0"><img src="/New-Images/key-bg-vector.png" /></div>
          <KeyChalenge />
        </section>

        <section className="bg-[#F6F4FF]">
          <FirecastWorks />
        </section>

        <section>
          <ProductsFeature />
        </section>

        <section className="w-full">
          {/* page top Line */}
          <div className="w-full">
            <HorizontalLine />
          </div>
          <WhyChooseFirecast />
        </section>

        <section className="bg-[#F6F4FF] pt-4">
          <div className="max-w-7xl mx-auto text-black px-4 mt-16 pb-4" data-aos="fade-up">
            <div className="md:w-[50%] space-y-6 mx-auto text-center">
              <h2 className="poppins-bold text-[42px]/[52px]">
                Industries we<span className="gradient-text-2"> serve</span>
              </h2>
              <p className="poppins-regular text-[16px] text-[#6F7C8E]">
                We serve diverse industries with tailored solutions that enhance
                efficiency, innovation, and growth. From finance to healthcare,
                retail to manufacturing, we help businesses optimize performance
                and Stay competitive.
              </p>
            </div>
          </div>
          <IndustryDemo />
        </section>
        
        <section>
          <ContactUs />
        </section>
      </main>
    </>
  );
};

export default SolutionsAI;
