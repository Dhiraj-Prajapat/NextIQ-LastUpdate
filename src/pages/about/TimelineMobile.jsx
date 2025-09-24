import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./timelinemobile.css"

gsap.registerPlugin(ScrollTrigger);

const TimelineMobile = () => {
  const svgRef = useRef(null);
  const itemsRef = useRef([]);
  const numbersRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!svgRef.current) return;

      const path = svgRef.current.querySelector("path");
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top 80%",
          end: "bottom 10%",
          scrub: 1.5,
        },
      });

      itemsRef.current.forEach((item, index) => {
        gsap.fromTo(
          [item, numbersRef.current[index]],
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              end: "top 60%",
              scrub: 1.5,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

 const timelineData = [
  {
    id: 1,
    title: "Seamless Digital Transformation",
    description:
      "Automate Processes, Optimize Workflows, And Reduce Manual Intervention With Al-Powered Insights.",
  },
  {
    id: 2,
    title: "Al-Driven Approach",
    description:
      "We Integrate Al, NLP, Computer Vision, And Generative Al To Enhance Operational Efficiency And Decision-Making.",
  },
  {
    id: 3,
    title: "Unified Architecture",
    description:
      " NextlQ.Ai Is Designed On Unified Architecture To Seamless Integrate With Organization Data Sources And Other Technologies.",
  },
  {
    id: 4,
    title: "Scalable & Secure Solutions",
    description:
      "Our Enterprise-Grade Security Ensures Zero Data bLeakage, With On-Premise Or Cloud-Based Deployments.",
  },
  {
    id: 5,
    title: "Customized For Enterprises ",
    description:
      "We Design Al-Driven Solutions That Align With Your Unique Business Needs Across Industries",
  },
  {
    id: 6,
    title: "Actionable Insights",
    description:
      "Gain Quick Alerts, Notifications, And Intelligent Recommendations To Stay Ahead Of Challenges.",
  },
  {
    id: 7,
    title: "Intelligent Automation",
    description:
      "It Automates All Business Processes In A Dynamic And Intelligent Way To Minimize Or Avoid Any Manual Intervention",
  },
  {
    id: 8,
    title: "End-To-End Approach",
    description:
      "From Project Lifecycle Management To Document Processing And Financial Reconciliation, We Cover All Business Aspects.",
  },
  {
    id: 9,
    title: "User-Friendly & Intuitive",
    description:
      "End point agnostic, irrespective of Mobile, desktops, TV Displays and digital signage. Our solutions provide easy-to-use interfaces, ensuring smooth adoption across teams and organization.",
  },
];
  return (
    <div className="relative min-h-screen py-20 flex flex-col items-center">
      <div className="relative w-full max-w-4xl flex flex-col md:flex-row md:items-start">
        
        {/* Mobile Layout: SVG & Numbers on Left, Content on Right */}
        <div className="flex flex-row items-start md:hidden w-full px-4">
          
          {/* Left Side: SVG & Numbers */}
          <div className="relative flex flex-col items-center">
            {/* SVG Line */}
            <svg  ref={svgRef} width="43" height="644" viewBox="0 0 43 644" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.5 0.5V40.5L12 69.5V125.5L31.5 145V262L12 286V382.5L41 411.5V451.5L19.5 473M21.5 469.5V509.5L2 538.5V594.5L21.5 614V731L2 755V851.5L31 880.5V920.5L9.5 942" stroke="#350C6B" stroke-width="3"/>
</svg>


            {/* Numbers on SVG Line */}
            <div className="absolute top-0 h-full z-10 flex flex-col justify-between">
              {timelineData.map((item, index) => (
                <span
                  key={index}
                  ref={(el) => (numbersRef.current[index] = el)}
                  className="bg-purple-700 text-white text-sm font-semibold h-8 w-8 flex justify-center items-center rounded-full mx-auto relative opacity-0"
                >
                  {item.id}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex content_gap flex-col gap-8 pl-4 w-full">
            {timelineData.map((item, index) => (
              <div
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className="flex flex-col space-y-1 opacity-0"
              >
                <h3 className="font-semibold text-lg text-left text-[#181A1E]">{item.title}</h3>
                <p className="text-[#6F7C8E] text-sm text-left">{item.description}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Large Screen Layout: Already Existing Code */}
        <div className="hidden md:flex w-full max-w-5xl">{/* Existing Layout Here */}</div>

      </div>
    </div>
  );
};

export default TimelineMobile;

