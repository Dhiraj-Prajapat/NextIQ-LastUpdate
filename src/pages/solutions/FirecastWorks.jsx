import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const icons = [
  { IconPath: "/New-Images/f-icon-1.png", position: " lg:top-70 lg:left-20" },
  { IconPath: "/New-Images/f-icon-2.png", position: " lg:top-10 lg:left-100" },
  { IconPath: "/New-Images/f-icon-3.png", position: " lg:top-10 lg:right-70" },
  { IconPath: "/New-Images/f-icon-4.png", position: " lg:top-70 lg:right-15" },
];

const FirecastWorks = () => {
  const data = [
    {
      id: "01",
      src: "/New-Images/firecast-img-01.png",
      description: "Publish your content",
    },
    {
      id: "02",
      src: "/New-Images/firecast-img-02.png",
      description: "Generate unique link",
    },
    {
      id: "03",
      src: "/New-Images/firecast-img-03.png",
      description: "Upload your content .E.g video, image, etc.",
    },
  ];
  return (
    <div className="max-w-7xl px-4 lg:px-12 pt-[60px] lg:pt-[100px] pb-[30px] lg:pb-[80px] space-y-14 relative mx-auto">
      <div className="grid lg:grid-cols-3 items-center gap-6" data-aos="fade-up">
        <div className=" text-black">
          <h1 className="text-[32px]/[42px] sm:text-[38px]/[48px] lg:text-[42px]/[52px] poppins-bold">
            How <br /> <span className="gradient-text-2 inline-block">Firecast </span> <br /> Works?
          </h1>
        </div>
        <div className="col-span-2 lg:pl-25">
          <p className="text-[15px] lg:text-[15px] poppins-regular text-black text-justify">
          FireCast.ai simplifies content distribution by allowing users to upload content, generate a unique URL, and share it instantly across multiple screens. Whether it's internal updates, customer engagement, or dashboards, FireCast ensures seamless, AI-powered content management across Smart TVs, desktops, tablets, and mobile devices—all with just a few clicks.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-[30px] " data-aos="fade-up">
        {data.map((item, index) => (
          <div 
          key={index} 
          className={`flex items-end mt-10 sm:mt-0 ${index === data.length - 1 ? "sm:col-span-3 md:col-span-1 sm:w-1/2 md:w-auto mx-auto" : ""}`}
        >
            <img src={item.src} alt={item.id} />
          </div>
        ))}
      </div>

      <div className="flex mx-auto" data-aos="fade-up">
        <button className="primary-btn mx-auto hover:scale-102 transition-all duration-300">
        <Link to={"/contactus"}>Request Demo</Link>
        </button>
      </div>

      {/* floating icons */}
      {icons.map(({ IconPath, position }, index) => (
        <motion.div
          key={index}
          className={`lg:max-w-fit absolute ${position} rounded-full hidden lg:block -mx-[7%]`}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: index * 0.5,
          }}
        >
          <img
            src={IconPath}
            alt="Icons"
            className="w-10 h-10 sm:w-21 sm:h-21 "
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FirecastWorks;
