import { motion } from "framer-motion";
import AnimatedSVG from "./AnimatedSVG";

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

const fadeInVariants = {
  hidden: { opacity: 0, y: 150 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Timeline = () => {
  return (
    <section className="max-w-7xl h-auto mx-auto px-1 lg:px-12">
      <div className="hidden lg:grid grid-cols-12 relative">
        <div className="w-auto col-span-5 text-right mt-30">
          {timelineData
            .filter((_, index) => index % 2 === 1)
            .map((item) => (
              <motion.div
                key={item.id}
                className="pb-[128px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                
              >
                <h3 className="poppins-semibold text-[22px] text-[#181A1E]">
                  {item.title}
                </h3>
                <p className="poppins-regular text-[16px] text-[#6F7C8E]">
                  {item.description}
                </p>
              </motion.div>
            ))}
        </div>

        {/* Center Timeline */}
        <div className="col-span-2 flex flex-col items-center gap-[62px] relative z-1">
          <div className="h-[100%] absolute top-10 z-[-1]">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="1024"
              viewBox="0 0 33 1024"
              fill="none"
            >
              <path
                d="M21.5 0.5V42.5074L2 72.9627V131.773L21.5 152.252V275.123L2 300.328V401.67L31 432.126V474.133"
                stroke="#350C6B"
                strokeWidth="3"
              />
              <path
                d="M31 472.558L2 515.39V573.764L21.5 594.091V716.052L2 741.07V841.662L31 871.892V913.588L9.5 936"
                stroke="#350C6B"
                strokeWidth="3"
              />
            </svg> */}

            {/* Wrapping div to detect scrolling */}
              <AnimatedSVG />
          </div>

          {timelineData.map((item, index) => (
            <motion.span
              key={item.id}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#45108A] poppins-bold text-[18px] shadow-lg"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1}}
              variants={{
                hidden: { opacity: 0, y: 180 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {"0" + item.id}
            </motion.span>
          ))}
        </div>

        {/* Right Content */}
        <div className="col-span-5 flex flex-col justify-center">
          {timelineData
            .filter((_, index) => index % 2 === 0)
            .map((item, index, arr) => (
              <motion.div
                key={item.id}
                className={
                  index === arr.length - 1 ? "pb-[40px]" : "pb-[124px]"
                }
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                // transition={{ duration: 0.5, delay: index * 2 }}
              >
                <h3 className="poppins-semibold text-[22px] text-[#181A1E] text-left">
                  {item.title}
                </h3>
                <p className="poppins-regular text-[16px] text-[#6F7C8E] text-left">
                  {item.description}
                </p>
              </motion.div>
            ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden flex flex-col items-center space-y-6 px-4 mb-10">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex gap-3 items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            <motion.span
              className="w-8 h-8 mt-6 flex items-center justify-center rounded-full bg-purple-800 text-white poppins-bold text-[16px]"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, }}
            >
              {index + 1}
            </motion.span>

            <div className="text-left max-w-[80%]">
              <h3 className="font-semibold text-[16px]/[26px] sm:text-[18px] text-gray-900 capitalize pt-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-[14px] sm:text-[16px] max-w-md pt-2">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;









// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import AnimatedSVG from "./AnimatedSVG"

// gsap.registerPlugin(ScrollTrigger);

// const Timeline = () => {
//   const svgRef = useRef(null);
//   const itemsRef = useRef([]);
//   const numbersRef = useRef([]);

//   useEffect(() => {
//     if (!svgRef.current) return;

//     const paths = svgRef.current.querySelectorAll("path");

//     paths.forEach((path, index) => {
//       const length = path.getTotalLength();
//       gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

//       gsap.to(path, {
//         strokeDashoffset: 0,
//         duration: 2,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: itemsRef.current[index],
//           start: "top 85%",
//           end: "top 50%",
//           scrub: 1.5,
//         },
//       });
//     });

//     itemsRef.current.forEach((item, index) => {
//       gsap.fromTo(
//         [item, numbersRef.current[index]],
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1.5,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: item,
//             start: "top 75%",
//             end: "top 50%",
//             scrub: 1.5,
//           },
//         }
//       );
//     });
//   }, []);

//   const timelineData = [
//     {
//       id: 1,
//       title: "Seamless Digital Transformation",
//       description:
//         "Automate Processes, Optimize Workflows, And Reduce Manual Intervention With Al-Powered Insights.",
//     },
//     {
//       id: 2,
//       title: "Al-Driven Approach",
//       description:
//         "We Integrate Al, NLP, Computer Vision, And Generative Al To Enhance Operational Efficiency And Decision-Making.",
//     },
//     {
//       id: 3,
//       title: "Unified Architecture",
//       description:
//         " NextlQ.Ai Is Designed On Unified Architecture To Seamless Integrate With Organization Data Sources And Other Technologies.",
//     },
//     {
//       id: 4,
//       title: "Scalable & Secure Solutions",
//       description:
//         "Our Enterprise-Grade Security Ensures Zero Data bLeakage, With On-Premise Or Cloud-Based Deployments.",
//     },
//     {
//       id: 5,
//       title: "Customized For Enterprises ",
//       description:
//         "We Design Al-Driven Solutions That Align With Your Unique Business Needs Across Industries",
//     },
//     {
//       id: 6,
//       title: "Actionable Insights",
//       description:
//         "Gain Quick Alerts, Notifications, And Intelligent Recommendations To Stay Ahead Of Challenges.",
//     },
//     {
//       id: 7,
//       title: "Intelligent Automation",
//       description:
//         "It Automates All Business Processes In A Dynamic And Intelligent Way To Minimize Or Avoid Any Manual Intervention",
//     },
//     {
//       id: 8,
//       title: "End-To-End Approach",
//       description:
//         "From Project Lifecycle Management To Document Processing And Financial Reconciliation, We Cover All Business Aspects.",
//     },
//     {
//       id: 9,
//       title: "User-Friendly & Intuitive",
//       description:
//         "End point agnostic, irrespective of Mobile, desktops, TV Displays and digital signage. Our solutions provide easy-to-use interfaces, ensuring smooth adoption across teams and organization.",
//     },
//   ];

//   return (
//     <div className="relative min-h-screen py-20 flex flex-col items-center">
//       <div className="relative w-full max-w-5xl flex ">
//         {/* Left & Right Sides (Alternating Text Blocks) */}
//         <div className="w-1/2 flex flex-col mt-28 md:gap-72   gap-42 pr-10">
//           {timelineData.map(
//             (item, index) =>
//               index % 2 !== 0 && (
//                 <div
//                   key={index}
//                   ref={(el) => (itemsRef.current[index] = el)}
//                   className="flex items-center justify-end"
//                 >
//                   <div className="w-4/5">
//                     <h3 className="poppins-semibold text-[22px] text-[#181A1E] text-left">
//                       {item.title}
//                     </h3>
//                     <p className="poppins-regular text-[16px] text-[#6F7C8E] text-left">
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>
//               )
//           )}
//         </div>

//         {/* Center (SVG Timeline) */}
//         <div className="relative w-16 flex flex-col items-center justify-between">
//           <div className="hidden md:flex justify-center items-center">
//             {/* <svg
//               className="md:h-[850px] lg:h-[750px] "
//               ref={svgRef}
//               width="50"
//               viewBox="0 0 33 525"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M21.5 0.5V40.5L2 69.5V125.5L21.5 145V262L2 286V382.5L31 411.5V451.5L9.5 473L9.5 520"
//                 stroke="#350C6B"
//                 strokeWidth="3"
//               />
//             </svg> */}
//             <AnimatedSVG />
//           </div>
//           <div className=" md:hidden">
//             <svg
//               ref={svgRef}
//               width="50"
//               height="850"
//               viewBox="0 0 33 525"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M21.5 0.5V40.5L2 69.5V125.5L21.5 145V262L2 286V382.5L31 411.5V451.5L9.5 473L9.5 520"
//                 stroke="#350C6B"
//                 strokeWidth="3"
//               />
//             </svg>
//           </div>

//           {/* Numbers on the SVG Line */}
//           <div className="absolute top-0 h-full z-10 flex flex-col justify-between">
//             {timelineData.map((item, index) => (
//               <span
//                 key={index}
//                 ref={(el) => (numbersRef.current[index] = el)}
//                 className="bg-purple-700 text-white text-lg font-semibold h-12 w-12 flex justify-center items-center rounded-full mx-auto relative "
//               >
//                 {item.id}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Right Side (Text) */}
//         <div className="w-1/2 flex flex-col gap-30 md:gap-48 pl-10">
//           {timelineData.map(
//             (item, index) =>
//               index % 2 === 0 && (
//                 <div
//                   key={index}
//                   ref={(el) => (itemsRef.current[index] = el)}
//                   className="flex items-center"
//                 >
//                   <div className="w-4/5">
//                     <h3 className="poppins-semibold text-[22px] text-[#181A1E] text-left">
//                       {item.title}
//                     </h3>
//                     <p className="poppins-regular text-[16px] text-[#6F7C8E] text-left">
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>
//               )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Timeline;
