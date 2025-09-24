import React from "react";

const OurOfferings = () => {
  const features = [
    {
      src: "/New-Images/Offerings/Group-1.png",
      description:
        "24/7 Al Powered Intelligent Automation with Digital Transformation",
    },
    {
      src: "/New-Images/Offerings/Group-2.png",
      description: "NLP-Powered Business Insights with relevant visuals and narratives",
    },
    {
      src: "/New-Images/Offerings/Group-3.png",

      description: "Dynamic Displays across all endpoints with Actionable Insights",
    },
    {
      src: "/New-Images/Offerings/Group-4.png",

      description: "Al-Driven project lifecycle from Inception to end, with all Workflows and track deviations.",
    },
    {
      src: "/New-Images/Offerings/Group-5.png",
      description: "Guest Hospitality during meetings, to provide immersive experience using Personal Assistant",
    },
    {
      src: "/New-Images/Offerings/Group-6.png",
      description:
        "Close to real-time alerts and notifications with actionable decision support across organizational functions.",
    },
    {
      src: "/New-Images/Offerings/Group-7.png",
      description:
        "Al-Powered automation with workflows, for all RFP, contracts, tenders and proposals.",
    },
    {
      src: "/New-Images/Offerings/Group-8.png",
      description: "Employee Portal with workflows for communication, collaboration and business Policies.",
    },
    {
      src: "/New-Images/Offerings/Group-9.png",
      description:
        "Computer Vision-based monitoring, security, productivity, facial & object recognition",
    },
  ];

  return (
    <div className="max-w-7xl px-4 lg:px-12 py-12 lg:py-20 mx-auto">
      <div className="text-black" data-aos="fade-up">
        <h1 className="res-heading text-[32px] sm:text-[38px] lg:text-[42px] poppins-bold">
          Our summarized <span className="gradient-text-2"> offerings</span>
        </h1>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 pt-14" data-aos="fade-up">
        {features.map((item, index) => (
          <div
            key={index}
            className="text-black space-y-3 p-4 hover:shadow-lg hover:scale-102 hover:bg-white transition-all duration-300"
          >
            <div className="h-9 w-10">
              <img src={item.src} className="h-full w-full object-contain" />
            </div>
            <p className="res-desc poppins-regular text-[16px] xl:text-[15px] text-black">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurOfferings;
