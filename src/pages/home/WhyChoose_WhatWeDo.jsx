const WhyChoose_WhatWeDo = () => {
  const whyChooseData = [
    {
      id: "01",
      title: "Seamless Digital Transformation ",
      description:
        "Automate processes, optimize workflows, and reduce manual intervention with AI-powered insights.",
    },
    {
      id: "02",
      title: "AI-Driven Approach",
      description:
        "We integrate AI, NLP, Computer Vision, and Generative AI to enhance operational efficiency and decision-making.",
    },
    {
      id: "03",
      title: "Unified Architecture",
      description:
        "NextIQ.ai is designed on unified architecture to seamless integrate with organization data sources and other technologies.",
    },
    {
      id: "04",
      title: "Scalable & Secure Solutions ",
      description:
        "Our enterprise-grade security ensures zero data leakage, with on-premise or cloud-based deployments.",
    },
    {
      id: "05",
      title: "Customized for Enterprises ",
      description:
        "We design AI-driven solutions that align with your unique business needs across industries.",
    },
    {
      id: "06",
      title: "Actionable Insights",
      description:
        "Gain quick alerts, notifications, and intelligent recommendations to stay ahead of challenges.",
    },
    {
      id: "07",
      title: "Intelligent Automation ",
      description:
        "It automates all business processes in a dynamic and intelligent way to minimize or avoid any manual intervention",
    },
    {
      id: "08",
      title: "End-to-end Approach",
      description:
        "From project lifecycle management to document processing and financial reconciliation, we cover all business aspects.",
    },
    {
      id: "09",
      title: "User-Friendly & Intuitive ",
      description:
        "End point agnostic, irrespective of Mobile, desktops, TV Displays and digital signage. Our solutions provide easy-to-use interfaces, ensuring smooth adoption across teams and organization",
    },
  ];

  const whatWeDoData = [
    {
      id: "01",
      title: "Generative AI",
      description:
        "Transform Ideas Into Stunning Visuals, Content, And Designs With AI Creativity.",
    },
    {
      id: "02",
      title: "Computer Vision",
      description:
        "Recognize Objects, Patterns, And People In Images And Videos For Smarter Decisions.",
    },
    {
      id: "03",
      title: "Intelligent Automation",
      description: "Optimize Workflows, Reduce Costs, And Boost Efficiency.",
    },
    {
      id: "04",
      title: "Conversational AI",
      description:
        "Deliver Seamless, Real-Time Customer Interactions With Advanced Chatbots And Virtual Assistants.",
    },
    {
      id: "05",
      title: "Document Management",
      description:
        "Automate Document Comparison And Analysis With Precision And Compliance.",
    },
    {
      id: "06",
      title: "AI-Based Wedding Portal",
      description:
        "Redefine Wedding Planning With Intelligent Matchmaking, Event Management, And Vendor Recommendations.",
    },
  ];

  return (
    <div className="max-w-full mx-auto py-12 text-black">
      <div className="max-w-7xl grid lg:grid-cols-2 px-4 pb-12 mx-auto">
        {/* page main image */}
        <div className="my-auto">
          <img src="/New-Images/new-chip.png" />
        </div>

        {/* Why Choose NEXTIQ.AI Column */}
        <div className="">
          <h2 className="text-[32px]/[42px] sm:text-[38px]/[48px] lg:text-[42px]/[52px] poppins-bold mb-[40px]">
            Why Choose <br className="hidden md:block" />
            <span className="poppins-bold gradient-text-2">NEXTIQ.AI?</span>
          </h2>
          <div className="space-y-4 mb-[40px]">
            {whyChooseData.map((item, index) => (
              <div key={index} className="flex gap-3">
                <div className="h-[32px] w-[32px] rounded-full text-center flex items-center justify-center text-[14px] text-white poppins-semibold bg-[#45108A] p-3 my-1">
                  {item.id}
                </div>
                <ul className="text:[14px] sm:text-[16px] xl:text-[18px] poppins-semibold border-b-[1px] border-[#E1E1E1] pb-6">
                  {item.title}
                  <li className="text-[13px] md:text-[14px] poppins-regular text-[#6F7C8E] mt-1">
                    {item.description}
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <button className="primary-btn hover:scale-105 transition-all duration-200 mx-auto">
            Request Demo
          </button>
        </div>
      </div>

      {/* What We Do Column */}
      <div className=" bg-gradient-to-b from-[#F6F4FF] to-[white]/50">
      <div className="max-w-7xl mx-auto flex flex-col px-4 lg:px-12 py-6 lg:py-12 ">
        <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] poppins-bold mb-10">
          What We
          <span className="poppins-bold gradient-text-2"> do</span>
        </h2>
        <div className="space-y-4 mb-8 grid grid-cols-1 md:grid-cols-2 gap-x-10">
          {whatWeDoData.map((item, index) => (
            <div key={index} className="flex gap-2">
              <div className="h-[32px] w-[32px] rounded-full text-center flex items-center justify-center text-[14px] text-white poppins-semibold bg-[#45108A] p-3 my-1">
                {item.id}
              </div>
              <ul className="text:[14px] sm:text-[16px] xl:text-[18px] poppins-semibold border-b-[1px] border-[#E1E1E1] pb-4">
                {item.title}
                <li className="text-[13px] sm:text-[14px] poppins-regular text-[#6F7C8E] mt-2">
                  {item.description}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
        <div className="mx-auto flex">
        <button
          className="primary-btn hover:scale-105 transition-all duration-200 mx-auto"
        >
          Request Demo
        </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose_WhatWeDo;
