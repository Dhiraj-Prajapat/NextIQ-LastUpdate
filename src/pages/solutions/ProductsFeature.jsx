import React from "react";
import { Link } from "react-router-dom";

const ProductsFeature = () => {
  const features = [
    {
      src: "/New-Images/featuresImg/Group.png",
      title: "AI-Powered NLP",
      description: "Enables Automated, Narrative-Based Content Creation.",
    },
    {
      src: "/New-Images/featuresImg/Group-3.png",
      title: "Engaging Content",
      description: "Displays Videos, Images, GIFs, Dashboards, And More.",
    },
    {
      src: "/New-Images/featuresImg/Frame.png",
      title: "Actionable Insights",
      description: "Showcases Data Visualization For Smarter Decision-Making.",
    },
    {
      src: "/New-Images/featuresImg/Group-8.png",
      title: "Custom Scheduling",
      description: "Allows User, Location, And Business-Based Scheduling.",
    },
    {
      src: "/New-Images/featuresImg/Group-1.png",
      title: "Centralized Control",
      description: "Manage All Content From A Single Dashboard.",
    },
    {
      src: "/New-Images/featuresImg/Group-4.png",
      title: "End-Point Agnostic",
      description:
        "Works Across Smart TVs, Desktops, Mobile Devices, And Signage.",
    },
    {
      src: "/New-Images/featuresImg/Group-6.png",
      title: "Scalable & Secure",
      description:
        "Fully Compliant With Enterprise Security Standards, Available On-Premise Or Cloud.",
    },
    {
      src: "/New-Images/featuresImg/Group-9.png",
      title: "Multi-Device Support",
      description: "Compatibility With Smart TVs, Tablets, And Mobile Devices.",
    },
    {
      src: "/New-Images/featuresImg/Group-2.png",
      title: "Quick Updates",
      description:
        "Ensures Content Changes Are Reflected Instantly Across All Screens.",
    },
    {
      src: "/New-Images/featuresImg/Group-5.png",
      title: "Cloud-Based Control",
      description: "Manage Displays Remotely From Anywhere.",
    },
    {
      src: "/New-Images/featuresImg/Group-7.png",
      title: "Support For Various Formats",
      description: "MP4, JPEG, PNG, GIF, PDFs, PPTs, And Text.",
    },
    {
      src: "/New-Images/featuresImg/Group-10.png",
      title: "Live Streaming Capabilities",
      description: "Broadcast Events And Updates Instantly.",
    },
  ];

  return (
    <div className="max-w-7xl px-4 lg:px-12 py-20 mx-auto">

      <div className="text-center text-black" data-aos="fade-up">
        <h1 className="text-[32px] sm:text-[38px] lg:text-[42px] poppins-bold">
          Products Key <span className="gradient-text-2"> Features</span>
        </h1>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-14" data-aos="fade-up" >
        {features.map((item, index) => (
          <div key={index} className="text-black space-y-3 group relative">
            {/* Hidden Image - Show on Hover */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white rounded-xl scale-103 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <img src={item.src} className="h-24 w-24 object-contain" />
            </div>

            {/* Icon */}
            <div className="h-9 w-10">
              <img src={item.src} className="h-full w-full object-contain" />
            </div>

            {/* Title */}
            <h4 className="poppins-semibold text-[17px] xl:text-[19px]">
              {item.title}
            </h4>

            {/* Description */}
            <p className="poppins-regular text-[14px] xl:text-[15px] text-[#6F7C8E]">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex mx-auto" data-aos="fade-up">
        <button className="primary-btn mx-auto hover:cursor-pointer hover:scale-102 transition-all duration-300">
        <Link to={"/contactus"}>Request Demo</Link>
        </button>
      </div>
    </div>
  );
};

export default ProductsFeature;
