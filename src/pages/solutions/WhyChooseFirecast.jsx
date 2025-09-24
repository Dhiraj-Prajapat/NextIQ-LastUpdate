import React from "react";
import { Link } from "react-router-dom";

const WhyChooseFirecast = () => {
  const features = [
    {
      description:
        "Al Empowered NLP To Highlight All Dynamic Narratives With Visualization.",
      position: "-top-10 left-70 xl:-top-10 xl:left-80",
    },
    {
      description:
        " Highlights All The Success And Workplace Harmony Of Organization To Motivate Employees",
      position: "top-8 left-90 xl:top-12 xl:left-105",
    },
    {
      description:
        "Critical And Dynamic Business Insights For All Decision Makers.",
      position: "top-32 left-95 xl:top-37 xl:left-115",
    },
    {
      description:
        "It Supports Unified Architecture For Seamless Integration Of Multiple Data Sources And Technologies.",
      position:" bottom-25 left-95 xl:bottom-32 xl:left-115",
    },
    {
      description:
        "It Supports On-Premise, Cloud And Hybrid Approach For Deploying Firecast.Ai",
      position: "bottom-8 left-90 xl:bottom-12 xl:left-105",
    },
    {
      description: "All Formats Of The Content",
      position: "-bottom-5 left-67 xl:-bottom-3 xl:left-77",
    },
  ];
  return (
    <div className="max-w-7xl px-4 lg:px-12 my-20 grid lg:grid-cols-4 lg:items-center mx-auto">
      <div className="lg:max-w-[20vw]" data-aos="fade-up">
        <h1 className="text-[38px]/[38px] lg:text-[42px]/[42px] text-black poppins-bold">
          Why <span className="gradient-text-2">Choose</span> Firecast?
        </h1>
        <p className="text-[16px] text-gray-600 poppins-regular mt-[26px] mb-[40px]">
          <span></span>
          💡 Smart, Engaging, and Hassle-Free Communication
        </p>
        <button className="primary-btn mx-auto hover:cursor-pointer hover:scale-102 transition-all duration-300">
        <Link to={"/contactus"}>Request Demo</Link>
        </button>
      </div>

      <div
        className="flex lg:col-span-3 relative mx-auto mt-10 lg:mt-0 lg:mx-0"
        data-aos="fade-up"
      >
        <div className="-z-1">
          <img
            src="/New-Images/chooseFirecast-img.png"
            className=" md:w-[370px] xl:w-[430px] "
          />
        </div>

        <div className="hidden lg:block">
          {features.map((item, index) => (
            <ul key={index}>
              <li className={`flex gap-10 absolute lg:w-90 xl:w-100 ${item.position}`}>
                <p
                  className="text-gray-500 text-[16px]"
                  data-aos="fade-up"
                >
                  {item.description}
                </p>
              </li>
            </ul>
          ))}
        </div>
      </div>

      {/* for mobile view */}
      <div className="lg:hidden block space-y-4 mt-10" data-aos="fade-up">
        {features.map((item, index) => (
          <ul key={index} className="flex gap-4">
            <span className="h-8 w-8 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10 20.0001C15.5137 20.0001 20 15.5142 20 10.0001C20 9.04834 19.8672 8.11043 19.6041 7.2122C19.4745 6.77053 19.0133 6.51678 18.5704 6.64636C18.1282 6.77553 17.8754 7.23845 18.0045 7.68011C18.2225 8.42636 18.3333 9.2072 18.3333 10.0001C18.3333 14.595 14.5949 18.3334 10 18.3334C5.40505 18.3334 1.66667 14.595 1.66667 10.0001C1.66667 5.40511 5.40505 1.66673 10 1.66673C11.6699 1.66673 13.2766 2.15501 14.6462 3.07845C15.0274 3.33584 15.5458 3.2347 15.8028 2.85345C16.06 2.47178 15.9597 1.95381 15.578 1.69668C13.9321 0.586728 12.0034 6.10352e-05 10 6.10352e-05C4.4863 6.10352e-05 0 4.48595 0 10.0001C0 15.5142 4.4863 20.0001 10 20.0001Z"
                  fill="#45108A"
                />
                <path
                  d="M18.577 1.91095L9.99954 10.488L7.25538 7.74429C6.92986 7.41892 6.40251 7.41892 6.07699 7.74429C5.75168 8.06981 5.75168 8.59715 6.07699 8.92267L9.41033 12.256C9.57335 12.4189 9.78616 12.5001 9.99954 12.5001C10.2129 12.5001 10.4258 12.4189 10.5888 12.256L19.7554 3.08929C20.0807 2.76377 20.0807 2.23648 19.7554 1.91095C19.4299 1.58559 18.9026 1.58559 18.577 1.91095Z"
                  fill="#45108A"
                />
              </svg>
            </span>
            <li className={`flex gap-10`}>
              <p className="text-gray-500 text-[16px]">{item.description}</p>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseFirecast;
