import Slider from "react-slick";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../pages/components/ui/Card";
import { Button } from "../../pages/components/ui/Button";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

// Custom arrow components
const PrevArrow = ({ onClick }) => (
  <Button
    variant="outline"
    size="icon"
    onClick={onClick}
    className="border-none absolute left-[45%] lg:left-[48%] -bottom-[10%] -translate-y-1/2 -translate-x-1/2 z-10 cursor-pointer hover:text-[#3572EF]"
  >
    <FaCaretLeft className="h-8 w-8 text-[#6F7C8E] hover:text-[#3572EF]" />
  </Button>
);

const NextArrow = ({ onClick }) => (
  <Button
    variant="outline"
    size="icon"
    onClick={onClick}
    className="p-0 border-none absolute right-[45%] lg:right-[48%] -bottom-[10%] -translate-y-1/2 translate-x-1/2 z-10 cursor-pointer hover:text-[#3572EF]"
  >
    <FaCaretRight className="h-8 w-8 text-[#6F7C8E] hover:text-[#3572EF]" />
  </Button>
);

const IndustryDemo = () => {
  // const industries = [
  //   {
  //     title: "Healthcare",
  //     services: [
  //       {
  //         name: "Patient & Visitor Information",
  //         description:
  //           "Display appointment schedules, doctor availability, and health tips on digital screens.",
  //       },
  //       {
  //         name: "Emergency Alerts",
  //         description: "Provide quick updates on emergencies, staff call-outs, and protocol changes.",
  //       },
  //       {
  //         name: "Internal Communication",
  //         description: "Notify staff about policy updates, medical research, and team meetings.",
  //       },
  //       {
  //         name: "Healthcare Metrics Dashboard",
  //         description:
  //           "Showcase hospital occupancy, treatment data, and patient flow insights.",
  //       },
  //       {
  //         name: "Employee Recognition",
  //         description:
  //           "Highlight achievements, training sessions, and wellness programs for medical staff.",
  //       },
  //     ],
  //     img: "/New-Images/doctors.png",
  //   },
  //   {
  //     title: "Hospitality",
  //     services: [
  //       {
  //         name: "Personalized Guest Experiences",
  //         description:
  //           "Display welcome messages, event schedules, and room service updates.",
  //       },
  //       {
  //         name: "Live Promotions & Offers",
  //         description:
  //           "Advertise spa deals, restaurant specials, and seasonal discounts.",
  //       },
  //       {
  //         name: "Employee Communication",
  //         description:
  //           "Stream housekeeping schedules, staff duty rosters, and SOPs on back-office screens.",
  //       },
  //       {
  //         name: "Wayfinding & Navigation",
  //         description:
  //           "Guide guests through resorts, hotels, and conference venues.",
  //       },
  //       {
  //         name: "Event & Conference Announcements ",
  //         description:
  //           "Display agendas, speaker details, and live updates in business centers.",
  //       },
  //     ],
  //     img: "/New-Images/hospitality-1.png",
  //   },
  //   {
  //     title: "Tours & Travels",
  //     services: [
  //       {
  //         name: "Live Travel Updates",
  //         description:
  //           "Display flight, train, and bus schedules with instant status updates.",
  //       },
  //       {
  //         name: "Security & Emergency Alerts",
  //         description:
  //           "Notify passengers about delays, security procedures, and urgent announcements.",
  //       },
  //       {
  //         name: "Advertising & Promotions",
  //         description:
  //           "Monetize digital displays with targeted travel-related ads and offers.",
  //       },
  //       {
  //         name: "Staff Communication",
  //         description:
  //           "Update airport and transport teams on shift schedules and passenger flow data.",
  //       },
  //       {
  //         name: "Wayfinding & Navigation",
  //         description: "Guide travelers to gates, terminals, baggage claims, and lounges.",
  //       },
  //     ],
  //     img: "/New-Images/travals.png",
  //   },
  //   {
  //     title: "Manufacturing",
  //     services: [
  //       {
  //         name: "Automated Workflow & Approvals",
  //         description:
  //           "Display live dashboards for output targets, machine status, and downtime alerts.",
  //       },
  //       {
  //         name: "Workplace Safety Alerts ",
  //         description:
  //           "Notify employees about hazards, safety drills, and compliance guidelines.",
  //       },
  //       {
  //         name: "Shift Schedules & Workforce Management",
  //         description:
  //           "Automate work rosters and team assignments.",
  //       },
  //       {
  //         name: "Training & Compliance",
  //         description:
  //           "Stream instructional videos and process guidelines across factories.",
  //       },
  //       {
  //         name: "Supply Chain Visibility",
  //         description:
  //           "Provide real-time logistics updates, stock levels, and supplier performance data.",
  //       },
  //     ],
  //     img: "/New-Images/manufacturing.png",
  //   },
  //   {
  //     title: "Automobile Industry",
  //     services: [
  //       {
  //         name: "Digital Showroom Displays",
  //         description:
  //           "Showcase car specifications, features, and promotional videos.",
  //       },
  //       {
  //         name: "Employee Training & SOPs",
  //         description:
  //           "Display technical manuals, safety procedures, and new vehicle launch training.",
  //       },
  //       {
  //         name: "Real-Time Production Updates",
  //         description:
  //           "Track assembly line performance, defect rates, and quality control alerts.",
  //       },
  //       {
  //         name: "Dealer & Franchise Communication",
  //         description:
  //           "Share real-time stock availability, pricing changes, and sales targets.",
  //       },
  //     ],
  //     img: "/New-Images/automobile.png",
  //   },
  // ];

  const industries = [
    {
      title: "Healthcare",
      services: [
        {
          name: "AI-Powered Medical Knowledge Bank",
          description: "Enhance healthcare decision-making with AI-driven insights.",
        },
        {
          name: "Patient Report Analysis & Diagnosis Support",
          description: "Upload medical reports and receive AI-driven insights.",
        },
        {
          name: "AI Chatbots for Patient Support",
          description: "Improve patient engagement and response times.",
        },
        {
          name: "Patient Data Unification & Insights",
          description: "Consolidate scattered health records for a 360-degree view of patient history.",
        },
        {
          name: "AI-Based Task & Workflow Management",
          description: "Automate scheduling, task tracking, and approvals for hospital staff & management.",
        },
      ],
      img: "/New-Images/doctors.png",
    },
    {
      title: "Hospitality",
      services: [
        {
          name: "AI-Based Virtual Concierge & Chatbots",
          description: "24/7 automated guest support for bookings, FAQs, and personalized recommendations.",
        },
        {
          name: "Automated Inventory & Supply Chain Optimization",
          description: "Smart automation to manage food, beverages, and room supplies.",
        },
        {
          name: "Smart Event Planning & Guest Management",
          description: "AI-powered event management with attendee tracking, scheduling, secured interface for sharing details, photos and more.",
        },
        {
          name: "Smart Meeting & Event Management",
          description: "Enables seamless guest interaction, track event schedules, quick updates, media sharing and more.",
        },
        {
          name: "Automated Invoice Processing & Reconciliation",
          description: "AI-powered matching of invoices, expenses, and vendor payments for financial accuracy.",
        },
      ],
      img: "/New-Images/hospitality-1.png",
    },
    {
      title: "Tours & Travels",
      services: [
        {
          name: "AI Chatbots for Customer & Partner Support",
          description: "24/7 virtual assistants handle inquiries, bookings, and real-time assistance.",
        },
        {
          name: "Invoice Processing & Reconciliation",
          description: "AI verifies transactions, matches invoices, and ensures error-free accounting.",
        },
        {
          name: "Revenue & Profitability Analytics",
          description: "AI-powered dashboards track earnings, cost centers, and profitability trends.",
        },
        {
          name: "Behavioural Insights for Loyalty Programs",
          description: "Tracks engagement levels to optimize rewards and retention strategies.",
        },
        {
          name: "Tourism Trend Analysis",
          description: "AI-driven insights for travel campaigns.",
        },
      ],
      img: "/New-Images/travals.png",
    },
    {
      title: "Manufacturing",
      services: [
        {
          name: "Automated Workflow & Approvals",
          description: "AI streamlines production approvals, reducing manual intervention.",
        },
        {
          name: "Computer Vision-Based Defect Detection",
          description: "AI scans products on the assembly line and flags defects in real-time.",
        },
        {
          name: "Automated Inventory Management",
          description: "AI tracks stock levels and triggers restocking approvals automatically.",
        },
        {
          name: "AI-Powered Safety Monitoring",
          description: "AI-driven cameras detect potential safety violations and prevent workplace hazards.",
        },
        {
          name: "AI-Based Supplier Selection & Risk Prediction",
          description: "AI evaluates supplier performance and predicts disruptions.",
        },
      ],
      img: "/New-Images/manufacturing.png",
    },
    {
      title: "Automobile Industry",
      services: [
        {
          name: "AI-Powered Fleet Tracking & Route Optimization",
          description: "Real-time analytics help optimize routes, reduce fuel costs, and improve efficiency.",
        },
        {
          name: "Chatbots & AI Assistants for Dealerships",
          description: "AI-driven chatbots handle customer inquiries, financing options, and test drive bookings.",
        },
        {
          name: "Automated After-Sales Service Management",
          description: "AI schedules servicing, sends reminders, and manages warranty claims.",
        },
        {
          name: "Sales Trend Analysis",
          description: "Smart analysis of customer demand for specific vehicle models, helping dealers optimize inventory.",
        },
        {
          name: "Service Request Prioritization",
          description: "AI categorizes vehicle service requests and routes approvals based on urgency.",
        },
      ],
      img: "/New-Images/automobile.png",
    },
  ];
  

  const settings = {
    dots: false,
    Autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl m-auto space-y-10 text-black">
      {/* main slider box */}
      <div className="lg:px-6 lg:py-6 relative">
        {/* cards container here */}
        <Slider {...settings}>
          {industries.map((industry, index) => (
            <Card
              key={index}
              // className="pt-5 lg:pt-10 px-1 relative h-[770px] sm:h-[760px] lg:h-[800px] text-black transition-all duration-300 "
              className="pt-5 lg:pt-10 px-1 relative 3xs:h-[860px] 2xs:h-[790px] xs:h-[750px] h-[850px] sm:h-[860px] md:h-[760px] lg:h-[800px] text-black transition-all duration-300 "
              data-aos="fade-up"
              data-aos-delay={`${500 * (index + 1)}`}
            >
              <div className="relative h-full py-7 border border-gray-400 rounded-lg bg-gradient-to-b from-white to-white/80">
                <CardHeader className="relative overflow-visible z-10">
                  <CardTitle className="text-center text-nowrap text-[14px] sm:text-[16px] text-white py-2 poppins-semibold gap-2 bg-[#6F7C8E] rounded-lg w-[75%] absolute -top-11 left-0 right-0 mx-auto tracking-wider">
                    {industry.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="">
                  <ul className="px-2 flex flex-col justify-between ">
                    {industry.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start">
                        <div className="mt-4 pr-2">
                          {/* <img src="/New-Images/right-arrow.png" className="h-3 w-4"/> */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                            viewBox="0 0 12 12"
                            fill="none"
                          >
                            <path
                              d="M6.00644 12.0065C5.83615 12.0075 5.66942 11.9578 5.52751 11.8637C5.38561 11.7695 5.27495 11.6352 5.20964 11.478C5.14434 11.3207 5.12736 11.1475 5.16085 10.9806C5.19435 10.8136 5.27681 10.6604 5.39772 10.5405L9.94168 6.00509L5.39772 1.46971C5.25727 1.3057 5.18387 1.09472 5.19221 0.878947C5.20054 0.663173 5.28999 0.458489 5.44268 0.3058C5.59537 0.15311 5.80005 0.0636613 6.01583 0.0553269C6.2316 0.0469925 6.44257 0.120387 6.60659 0.260843L11.7507 5.40495C11.9104 5.56558 12 5.78288 12 6.00938C12 6.23588 11.9104 6.45318 11.7507 6.61381L6.60659 11.7579C6.4469 11.9163 6.23136 12.0056 6.00644 12.0065Z"
                              fill="#45108A"
                            />
                            <path
                              d="M0.862337 12.0064C0.692046 12.0074 0.525318 11.9577 0.383409 11.8635C0.241501 11.7694 0.130842 11.6351 0.0655401 11.4778C0.000238442 11.3206 -0.016747 11.1474 0.0167494 10.9804C0.0502458 10.8135 0.132706 10.6603 0.253618 10.5403L4.79758 6.00496L0.253618 1.46958C0.0921755 1.30814 0.00147809 1.08917 0.0014781 0.860859C0.0014781 0.632545 0.0921755 0.413582 0.253618 0.25214C0.41506 0.0906974 0.634023 1.70107e-09 0.862337 0C1.09065 -1.70107e-09 1.30961 0.0906974 1.47106 0.25214L6.61516 5.39624C6.77484 5.55688 6.86447 5.77418 6.86447 6.00067C6.86447 6.22717 6.77484 6.44447 6.61516 6.60511L1.47106 11.7492C1.39165 11.8302 1.29696 11.8947 1.19247 11.9388C1.08798 11.983 0.97577 12.0059 0.862337 12.0064Z"
                              fill="#45108A"
                            />
                          </svg>
                        </div>
                        <div className="flex items-start poppins-regular text-[14px]">
                          <div
                            className={`py-[6px] ${
                              serviceIndex !== industry.services.length - 1
                                ? "border-b border-gray-300"
                                : ""
                            }`}
                          >
                            <p className="text-black font-medium mt-1">
                              {service.name}:
                            </p>
                            <p className="text-[#6F7C8E] text-[14px]">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <div className="absolute bottom-0 left-0 right-0">
                  <img
                    src={industry.img}
                    alt={industry.title}
                    className="rounded-b-lg w-full mx-auto"
                  />
                </div>
              </div>
            </Card>
          ))}
        </Slider>

        {/* main paragraph box */}
        <div className="w-full max-w-7xl px-4 lg:px-26 m-auto mt-20 sm:mt-32 md:mt-30 " data-aos="fade-up">
          <p className="poppins-medium text-[16px] sm:text-[20px] xl:text-[24px] text-center">
            At NEXTIQ.AI, We Combine Al-Driven Intelligence With Visionary
            Thinking To Create Tools That Inspire Growth, Collaboration, And
            Transformation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndustryDemo;
