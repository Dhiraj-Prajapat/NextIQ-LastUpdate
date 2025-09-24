import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const VisualContent = () => {
  const features = [
    {
      headline: " Industry-Specific AI Training",
      description:
        "Tailored Al models trained on proprietary business data to generate highly relevant images.",
    },
    {
      headline: "Real—Time Image Generation",
      description: "Creates visuals instantly based on text prompts.",
    },
    {
      headline: "Intelligent Context Understanding",
      description:
        "Deep learning models interpret complex descriptions for precise image creation.",
    },
    {
      headline: "Scalable & High-Performance",
      description: "Optimized for enterprise usage with seamless scalability.",
    },
    {
      headline: "Multiple Image Output From A Single Prompt",
      description:
        "Enhances creativity and efficiency by generating multiple variations.",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12 py-12">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* text container */}
        <div className="space-y-6">
          <h2 className="text-black text-[22px]/[32px] sm:[28px]/[38px] lg:text-[32px]/[42px] poppins-bold">
            Transforming Enterprise Visual <br />
            Content Creation with AI
          </h2>
          <p className="text-[14px] lg:text-[15px] text-[#6F7C8E] poppins-regular text-justify">
            Our enterprise-exclusive Text-to-Image Al Solution is designed to
            revolutionize visual content creation with industry-specific,
            secure, and Al- driven image generation. Trained on your
            organization's proprietary data. With cutting-edge Al, deep
            learning, and enterprise-grade security, businesses can create
            precise, context-driven visuals on demand.
          </p>
          <div className="py-2">
            {features.map((feature, i) => (
              <ul className="text-black py-2" key={i}>
                <li className="flex gap-4">
                  <span className="mt-[2px]">
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

                  <span className="space-y-1">
                    <p className="poppins-medium text-[14px]">
                      {feature.headline}
                    </p>
                    <p className="text-[14px] text-[#6F7C8E] poppins-regular">
                      {feature.description}
                    </p>
                  </span>
                </li>
              </ul>
            ))}
          </div>
          <button className="primary-btn">
            <Link to={"/explore-more"}>Explore More</Link>
          </button>
        </div>

        {/* Floating avatar circles */}
        <div className="h-screen lg:h-auto relative hidden md:block">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-[201px] h-[310px] rounded-full overflow-hidden absolute top-5 left-10 z-1"
          >
            <img
              src="/Images/avatar_1.png"
              alt="Avatar 1"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-[247px] h-[379px] p-4 bg-white rounded-full overflow-hidden absolute top-45 left-46 z-2"
          >
            <img
              src="/Images/avatar_2.png"
              alt="Avatar 2"
              className="w-full h-full rounded-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-[201px] h-[310px] rounded-full overflow-hidden absolute top-90 left-95 z-1"
          >
            <img
              src="/Images/avatar_3.png"
              alt="Avatar 3"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Floating icons */}
          <motion.div className=" hidden sm:block absolute top-32 left-52 z-10">
            <div className="w-75 bg-transparent rounded-lg">
              <img src="/New-Images/prompt-box.png" />
            </div>
          </motion.div>

          {/* Floating icons */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
            className=" hidden sm:block absolute top-105 left-17 z-10"
          >
            <div className="w-12 sm:w-14 h-12 sm:h-14 bg-transparent rounded-lg">
              <img src="/FloatingIcons/image_icon.png" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VisualContent;
