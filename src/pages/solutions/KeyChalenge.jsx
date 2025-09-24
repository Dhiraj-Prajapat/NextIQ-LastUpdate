import React from "react";
import { Link } from "react-router-dom";

const KeyChalenge = () => {
  const KeyChalenges = [
    {
      id: "01",
      newId: "01",
      headline: "Advanced authentication & security",
      desc: "CSRF and JWT-based authentication to safeguard access.",
    },
    {
      id: "03",
      newId: "02",
      headline: " Dynamic content URL generation",
      desc: "Al-powered, temporary URLs with adjustable expiration settings for controlled content access.",
    },
    {
      id: "05",
      newId: "03",
      headline: "Intelligent license validation",
      desc: "Automated license checks ensure continuous compliance before generating content links.",
    },
  ];
  const KeyChalenges1 = [
    {
      id: "02",
      headline: "Comprehensive content management",
      desc: "User-friendly dashboard for seamless organization of images, videos, documents, and links.",
    },
    {
      id: "04",
      headline: "Fragmented Communication",
      desc: "Important updates get lost in emails and chat apps.",
    },
    {
      id: "06",
      headline: "Delayed Information Flow",
      desc: "Slow updates lead to inefficiencies and missed opportunities.",
    },
  ];

  return (
    <div className="max-w-7xl min-h-screen my-16 px-4 lg:px-12 z-10 mx-auto">
      <div className="text-center text-black" data-aos="fade-up">
        <h1 className="res-heading text-[32px] sm:text-[38px] lg:text-[42px] poppins-bold">
          Key <span className="gradient-text-2"> Challenges</span>
        </h1>
      </div>

      <div className="grid md:grid-cols-3 mt-14 gap-x-[21px]" data-aos="fade-up">
        <div className="space-y-8 lg:pr-10">
          {KeyChalenges.map((item, index) => (
            <div key={index} className="flex gap-3 text-black">
              <div className="h-[26px] w-[26px] sm:h-[30px] sm:w-[30px] text-center flex items-center relative justify-center text-[12px] sm:text-[13px] text-white poppins-semibold p-3 my-1">
                <span className="z-10">{item.id}</span>
                <img
                  src="/New-Images/fire-list-icon.png"
                  alt="icon"
                  className="absolute bottom-1 z-0"
                />
              </div>
              <ul className="text:[16px] md:text-[18px] font-semibold poppins-semibold ">
                {item.headline}
                <li className="text-[13px] md:text-[16px] poppins-regular text-[#444E67] mt-1 text-justify">
                  {item.desc}
                </li>
              </ul>
            </div>
          ))}
        </div>

        <div className="my-6 md:mt-[35%] z-20">
          <img
            src="/New-Images/key-challeng-led.png"
            alt=""
            className="object-contain"
          />
        </div>
        
        <div className="space-y-8 lg:pr-10">
          {KeyChalenges1.map((item, index) => (
            <div key={index} className="flex gap-3 text-black">
              <div className="h-[30px] w-[30px] text-center flex items-center relative justify-center text-[13px] text-white poppins-semibold p-3 my-1">
                <span className="z-10">{item.id}</span>
                <img
                  src="/New-Images/fire-list-icon.png"
                  alt="icon"
                  className="absolute bottom-1 z-0"
                />
              </div>
              <ul className="text:[16px] md:text-[18px] poppins-semibold ">
                {item.headline}
                <li className="text-[14px] md:text-[16px] poppins-regular text-[#444E67] mt-1">
                  {item.desc}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex mx-auto mt-[50px]" data-aos="fade-up">
        <button className="primary-btn mx-auto hover:scale-102 transition-all duration-300">
        <Link to={"/contactus"}>Request Demo</Link>
        </button>
      </div>
    </div>
  );
};

export default KeyChalenge;
