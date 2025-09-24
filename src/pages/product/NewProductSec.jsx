import { Link } from "react-router-dom";

const NewProductSec = () => {
  const productsData = [
    {
      title: "FireCast.ai",
      route: "/solutions/firecast.ai",
      heading: "Transform Your Digital Displays with Dynamic Automation",
      description:
        "It is a smart digital display product that delivers dynamic content across multiple screens, multiple locations with desired schedule ensuring timely nd digital transformation of business dashboards, Videos, Images, GIF's, Organizational highlights, Celebrations, achievements, Real-time streaming, Embedded links, as per business user's requirements. FireCast.ai ensures that the right content reaches the right audience at the right time ith immersive experience.",
      features: [
        {
          heading: "Empowering AI-Based NLP",
          description: "Narrative based content creation using Ai.",
        },
        {
          heading: "Engaging Content",
          description: "Display dynamic content as user's requirement.",
        },
        {
          heading: "Actionable Insights",
          description: "Display actionable insights with decision support.",
        },
        {
          heading: "Customized Scheduling",
          description: "User, Location, Business based scheduling.",
        },
        {
          heading: "Centralized Control",
          description:
            "Overall content management centrally with the click of a button.",
        },
        {
          heading: "End- Point Agnostic",
          description:
            "Smart TV displays, Desktops, Signage, Mobile from anywhere anytime.",
        },
        {
          heading: "Highly Scalable And Secured",
          description:
            "Fully complied with no data leakage, On-premise/ Cloud with full security & scalability as per organization.",
        },
      ],
      img: "/New-Images/products/fircast.png",
      logo: "/New-Images/fircast-logo.png",
      borderColor: "border-[#CCCCCC] bg-white",
    },
    {
      title: "bizPulse",
      route: "/solutions/bizpulse",
      heading: "Stay Informed! Stay Ahead! Stay Alert!",
      description:
        "Bizpulse is an AI-powered solution that continuously monitors key business KPIs, ensuring timely insights. While business users remain focused on their core tasks, Bizpulse delivers 24/7 critical alerts, notifications, and exceptions related to customer experiences, escalations, revenue, costs, operations, quality, productivity, compliance, and production, among other essential functions. These alerts can be compiled into weekly or monthly PDF summaries, providing a detailed record of incidents and its resolution, to avoid such future incidents. ",
      features: [
        {
          heading: "Ai-powered NLP",
          description:
            "Covers all visuals, trending with meaningful narratives.",
        },
        {
          heading: "Alerts And Notifications",
          description:
            "All critical and impactful business alerts and notification on 24*7",
        },
        {
          heading: "No Manual Intervention",
          description:
            "Complete Digital transformation with immersive experience.",
        },
        {
          heading: "Unified Architecture",
          description:
            "Seamless integration with all data sources and enterprise technologies.",
        },
        {
          heading: "CXO Empowerment",
          description:
            "Single touch end point agnostic on 24* 7 for entire top management, Including CXO, MD, Chairman & Board members.",
        },
        {
          heading: "Highly Scalable And Secured",
          description:
            "Fully complied with no data leakage, On-premise/ Cloud with full security & scalability as per organization.",
        },
      ],
      img: "/New-Images/products/bizpulse.png",
      logo: "/New-Images/BizPulse-logo.png",
      borderColor: "border-[#BCAEFF] bg-[#F6F4FF]",
    },
    {
      title: "TaskWrap.ai",
      route: "/solutions/taskwrap.ai",
      heading: "Optimization of Corporate Task Performance.",
      description:
        "Powered by AI, it comprehensively integrates all projects and tasks planned or executed by the organization, department, or business, along with their associated workflows. It provides transparent insights into key performance metrics, evaluating task performance and identifying underperformance by comparing Plan vs. Budget vs. Actual vs. Forecast, along with variance and deviations. This analysis helps justify delays and their impact on business objectives, ensuring informed decision-making for the organization and its valued customers.",
      features: [
        {
          heading: "Lifecycle Management",
          description:
            "Highlights complete workflow from inception of the project/task till the completion.",
        },
        {
          heading: "Complexity",
          description:
            "It covers all high, medium and low complexities of the project/task at the minute level, and also assigns priority indexing with serial and parallel tasks.",
        },
        {
          heading: "Dynamic Frontend",
          description:
            "Frontend for authorised users to update their task from time to time. ",
        },
        {
          heading: "Workflow Assignment",
          description:
            "It assigns workflows for every internal user within organisation and also applicable for 3rd party vendors, suppliers and implementors. ",
        },
        {
          heading: "Gantt Chart",
          description:
            "Automated Gantt chart measuring complete milestone and progress of the project/task.",
        },
        {
          heading: "Seamless Integration",
          description:
            "Easy integration with any planning and management tool like MSP, JIRA, ZOHO and others.",
        },
        {
          heading: "Automated Email And Notifications",
          description: "For pending, ongoing, and overdue tasks.",
        },
        {
          heading: "Highly Scalable And Secured",
          description:
            "Fully complied with no data leakage, On-premise/ Cloud with full security & scalability as per organization.",
        },
      ],
      img: "/New-Images/products/taskwrap.png",
      logo: "/New-Images/taskwrap-logo.png",
      borderColor: "border-[#CCCCCC] bg-white",
    },
    {
      title: "DocIQ",
      route: "/solutions/dociq",
      heading: "AI-powered document management & collaboration",
      description:
        "It is an AI-powered document management solution that streamlines handling proposals, tenders, contracts, audits, compliance, and legal documents. It enables structured workflows, allowing authorized participants to edit, modify, and review content based on assigned roles. The system ensures secure access, facilitating document comparison, analysis, and collaboration. Owners can highlight and incorporate shared inputs before finalizing documents per organizational standards while enhancing efficiency and collaboration.",
      features: [
        {
          heading: "Seamless Document Comparison",
          description: "Effortlessly compare Word, PDF, and Excel files.",
        },
        {
          heading: "AI-Powered Summarization",
          description: "Extract key insights from lengthy documents.",
        },
        {
          heading: "Participant Based Bifurcation",
          description:
            "All participant’s inputs are highlighted distinctly across the entire document irrespective of the count of the pages.",
        },
        {
          heading: "Smart Search & Keyword Detection",
          description: "Identify important phrases across directories.",
        },
        {
          heading: "Intuitive User Interface",
          description: "Ease of Navigation for a smooth user experience.",
        },
        {
          heading: "Automated Workflows",
          description:
            "Set automated workflow for multi-user approval notifying start and end date/time.",
        },
        {
          heading: "Highly Scalable And Secured",
          description:
            "Fully complied with no data leakage, On-premise/ Cloud with full security & scalability as per organization. ",
        },
      ],
      img: "/New-Images/products/dociq.png",
      logo: "/New-Images/dociq-logo.png",
      borderColor: "border-[#BCAEFF] bg-[#F6F4FF]",
    },
    {
      title: "AiSphere",
      route: "/solutions/aisphere",
      heading: "Enhancing workplace intelligence with AI",
      description:
        "It is an advanced AI-powered intranet product that revolutionizes workplace communication, boosts employee engagement, and drives operational excellence. Designed for modern enterprises, it seamlessly integrates HR services, collaboration tools, AI-driven Chatbot, and robust security, empowering organizations to streamline workflows, enhance productivity, and foster a connected, high-performing workforce. It covers entire corporate Policies, regulations, organization videos, special achievements, best awardees, attendance and all other",
      features: [
        {
          heading: "Organization Epicentre",
          description:
            "AI Sphere acts as a single interface for employees to connect with other applications like ERP, Conference, CRM, Portals and other applications.",
        },
        {
          heading: "AI, Security & Integrations",
          description:
            "Use an AI chatbot for instant assistance, ensure data security with access controls, and integrate with Teams, OneDrive, SharePoint, HRMS, and enterprise tools.",
        },
        {
          heading: "Learning & Development",
          description:
            "Explore the eLearning hub with training videos, assessments, certifications, corporate training, and AI-powered knowledge search.",
        },
        {
          heading: "Key Highlights",
          description:
            "Get top highlights, leadership messages, announcements, and discussion forums. Engage through live polling, surveys, Q&A, and team chat.",
        },
        {
          heading: "HR & Employee Services",
          description:
            "Access HR policies, onboarding support, job postings, employee directories, payslips, benefits, leave management, and HRMS integration.",
        },
        {
          heading: "Recognition, Well-Being & Community",
          description:
            "Celebrate achievements, birthdays, and Hall of Fame / Badge/Star Awards. Stay healthy with wellness tips, diet plans, work-life balance initiatives, Women Empowerment and community engagement.",
        },
        {
          heading: "Emergency, Compliance & Support Services",
          description:
            "Get quick access to emergency contacts, safety alerts, compliance manuals, IT helpdesk, policy documents, and feedback channels.",
        },
        {
          heading: "Highly Scalable And Secured",
          description:
            "Fully complied with no data leakage, On-premise/ Cloud with full security & scalability as per organization.",
        },
      ],
      img: "/New-Images/products/aisphere.png",
      logo: "/New-Images/aisphere-logo.png",
      borderColor: "border-[#CCCCCC] bg-white",
    },
    {
      title: "Adulate.ai",
      route: "/solutions/adulate.ai",
      heading: "AI powered smart workplace automation",
      description:
        "It enhances workplace hospitality by streamlining services for external visitors and guests in corporate meeting spaces, to efficiently manage pantry requests, stationery supplies, first-aid assistance, calendar scheduling, boardroom coordination, and audio/video support. Additionally, it offers concierge services such as cab bookings, sightseeing arrangements, and local attraction recommendations—ensuring a seamless experience while adhering to the organization’s policies and governance standards. It directly integrates with Inventory management software to highlight all available and non-available resources.",
      features: [
        {
          heading: "AI Empowerment",
          description:
            "To ensure smart schedule assistance, inventory management and service performance to maintain highest efficiency and effectiveness.",
        },
        {
          heading: "QR Based Instant Request Handling",
          description:
            "Authorised employees can scan a QR code and place service requests instantly across organization.",
        },
        {
          heading: "Hub And Spoke",
          description:
            "An employee from any meeting room can connect with any service centre within an organization based on his role based authorization.",
        },
        {
          heading: "Smart Inventory Management",
          description: "Real time inventory management to avoid shortages.",
        },
        {
          heading: "Performance Management",
          description:
            "Performance of every service member digitally captured and analysed in an interactive dashboard.",
        },
        {
          heading: "Personal Assistance",
          description:
            "It acts like a BOT with intelligent automation for meeting room organiser, wherein user instead of selecting multiple menu’s can just highlight what they need to a ChatBOT, wherein inbuilt AI will understand the request and place the order.",
        },
        {
          heading: "Highly Scalable & Secured ",
          description: "Adulate.AI is highly scalable and fully secured",
        },
      ],
      img: "/New-Images/products/adulate.png",
      logo: "/New-Images/adulate-logo.png",
      borderColor: "border-[#BCAEFF] bg-[#F6F4FF]",
    },
    {
      title: "BizVista.ai",
      route: "/solutions/bizvista.ai",
      heading: "Transforming complete Business into Actionable insights",
      description:
        "Harness the power of AI-driven Natural Language Processing (NLP) to convert complex data into easily understandable, engaging, and meaningful narratives. This product acts like a cockpit report with actionable narratives and visualization across all functions and departments like Finance, Operations, Supply chain, Compliance, HR, Sales & Marketing, End consumer etc.",
      features: [
        {
          heading: "NLP Based Business Summary",
          description:
            "Generates complete health of the business in single page for CXO/MD/ Chairman and Board of directors.",
        },
        {
          heading: "AI-Powered Narrative Generation",
          description:
            "Automatically generate detailed and context-aware narratives with supporting visualizations which can be emailed or published to users.",
        },
        {
          heading: "Customized Templates",
          description:
            "Overall NLP is provided as per user based customized templated at given frequency and schedule.",
        },
        {
          heading: "Low Code No Code",
          description:
            "It is based on low code no code framework of design and architecture. ",
        },
        {
          heading: "Intelligent Summarization",
          description:
            "Condenses complex data into meaningful summarized value.",
        },
        {
          heading: "Scheduled Based PDF Report",
          description: "Automate final PDF to authorized end user over email.",
        },
        {
          heading: "Highly Scalable And Secured",
          description:
            "Fully complied with no data leakage, On-premise/ Cloud with full security & scalability as per organization.",
        },
      ],
      img: "/New-Images/products/bizvista.png",
      logo: "/New-Images/biz-vista.png",
      borderColor: "border-[#CCCCCC] bg-white",
    },
    {
      title: "AutoGenix.ai",
      route: "/solutions/autogenix.ai",
      heading: "AI-Driven Enterprise Process Automation",
      description:
        "AutoGenix.ai revolutionizes business operations by automating repetitive tasks, improving efficiency, and reducing manual effort. It streamlines document extraction, data processing, and workflow integration, ensuring seamless enterprise automation across multiple functions.",
      features: [
        {
          heading: "Automated Data Entry ",
          description:
            "Captures, validates, and inputs data from various sources into enterprise systems, reducing manual errors.",
        },
        {
          heading: "Excel Automation",
          description:
            "Automates complex spreadsheet tasks, data validation, and report generation with AI-driven insights.",
        },
        {
          heading: "Email Automation",
          description:
            "Auto-processes emails, extracts attachments, and integrates data into enterprise systems for streamlined workflows.",
        },
        {
          heading: "ERP Integration",
          description:
            "Seamlessly automates document and data entry processes into ERP systems, reducing manual workload.",
        },
        {
          heading: "Intelligent Workflow Automation",
          description:
            "Dynamically adapts and optimizes processes based on business rules and real-time data. ",
        },
        {
          heading: "Highly Scalable & Secure ",
          description:
            "Designed for on-premise or cloud deployment with enterprise-grade security and scalability.",
        },
      ],
      img: "/New-Images/products/auto.png",
      logo: "/New-Images/autogenix.ai-logo.png",
      borderColor: "border-[#CCCCCC] bg-[#F6F4FF]",
    },
    {
      title: "CREXA.AI",
      route: "/solutions/crexa.ai",
      heading: "Transforming Enterprise Visual Content Creation with AI",
      description:
        "Our enterprise-exclusive Text-to-Image AI Solution is designed to revolutionize visual content creation with industry-specific, secure, and AI-driven image generation. Trained on your organization’s proprietary data. With cutting-edge AI, deep learning, and enterprise-grade security, businesses can create precise, context-driven visuals on demand.",
      features: [
        {
          heading: "Industry-Specific AI Training ",
          description:
            "Tailored AI models trained on proprietary business data to generate highly relevant images.",
        },
        {
          heading: "Intelligent Context Understanding ",
          description:
            "Deep learning models, including DALL·E and Stable Diffusion, interpret complex descriptions for precise and realistic image creation.",
        },
        {
          heading: "Real-Time Image Generation",
          description: "Creates visuals instantly based on text prompts.",
        },
        {
          heading: "Intelligent Context Understanding",
          description:
            "Deep learning models interpret complex descriptions for precise image creation.",
        },
        {
          heading: "Scalable & High-Performance ",
          description:
            "Optimized for enterprise usage with seamless scalability.",
        },
        {
          heading: "Multiple Image Output from a Single Prompt ",
          description:
            "Enhances creativity and efficiency by generating multiple variations.",
        },
      ],
      img: "/New-Images/visual-prod.png",
      logo: "/New-Images/Crexa.ai.png",
      borderColor: "border-[#CCCCCC] bg-white",
    },
  ];
  return (
    <div className="w-full mx-auto bg-white">
      {productsData.map((product, index) => (
        <div
          key={index}
          className={`w-full py-[60px] mx-auto ${
            index % 2 === 0 ? " " : "bg-[#F6F4FF]"
          }`}
        >
          {/* top logo heading */}
          <div
            className="max-w-6xl mx-auto relative h-15 z-0 overflow-hidden"
            data-aos="fade-up"
          >
            <div
              className={`h-[2px] w-full border-b ${product.borderColor} absolute top-[50%] z-[-1]`}
            ></div>
            <div
              className={`h-[60px] w-[190px] border ${product.borderColor} rounded-md mx-auto px-8 flex items-center justify-center z-20`}
            >
              <img src={product.logo} alt={product.title} className="m-auto" />
            </div>
          </div>

          {/*  left and right part for product details and images  */}
          <div
            className={`max-w-7xl px-4 lg:px-12 mt-[60px] mx-auto grid lg:grid-cols-2 gap-y-10 sm:gap-y-0 gap-x-[30px] lg:gap-x-6`}
            data-aos="fade-up"
          >
            <div>
              <h2 className="prod-heading poppins-bold text-[22px]/[32px] sm:text-[28px]/[38px] xl:text-[32px]/[42px] text-black mb-[25px] lg:mb-[40px]">
                {product.heading}
              </h2>
              <p className="res-desc text-[15px] text-[#6F7C8E] poppins-regular text-justify mb-[40px]">
                {product.description}
              </p>
              {product.features.map((feature, i) => (
                <ul className="text-black" key={i}>
                  <li className="flex gap-4 mt-3">
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

                    <span className="space-y-2">
                      <p className="poppins-medium text-[14px]">
                        {feature.heading}
                      </p>
                      <p className="text-[14px] text-[#6F7C8E] poppins-regular">
                        {feature.description}
                      </p>
                    </span>
                  </li>
                </ul>
              ))}
              {/* <button className="primary-btn mt-[40px]">
                <Link to={product.route}>Explore More</Link>
              </button> */}
            </div>

            {/* Image Part with Sticky Effect */}
            <div
              className={`h-auto w-full border border-gray-200 relative mt-5 lg:mt-0 ${
                index % 2 !== 0 ? "lg:order-first" : ""
              }`}
            >
              <div className="sticky top-0">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewProductSec;
