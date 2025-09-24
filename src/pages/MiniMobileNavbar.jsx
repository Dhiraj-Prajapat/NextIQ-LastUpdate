import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const MiniMobileNavbar = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(location.pathname);
  // const [showSolutions, setShowSolutions] = useState(false);

  useEffect(() => {
    setActiveSection(location.pathname);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", icon: "fa-solid fa-house", path: "/" },
    { name: "About", icon: "fa-solid fa-address-card", path: "/about" },
    { name: "Services", icon: "fa-brands fa-servicestack", path: "/services" },
    { name: "Products", icon: "fa-solid fa-graduation-cap", path: "/products" },
    { name: "Help", icon: "fa-solid fa-handshake-angle", path: "/contactus" },
    // { name: "FAQ", icon: "fa-solid fa-person-circle-question", path: "/faq" },
  ];

  // const solutionPages = [
  //   "/solutions/firecast.ai",
  //   "/solutions/bizpulse",
  //   "/solutions/taskwrap.ai",
  //   "/solutions/dociq",
  //   "/solutions/aisphere",
  //   "/solutions/adulate.ai",
  //   "/solutions/bizvista.ai",
  //   "/solutions/autogenix.ai",
  //   "/solutions/crexa.ai",
  // ];

  // const isSolutionPage = solutionPages.includes(location.pathname);

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] pb-2 px-1 z-50 backdrop-blur-xs bg-black/10 text-white rounded-full flex justify-around items-center h-12 lg:hidden">
      {navItems.map((item, index) => (
        <div key={index} className="relative">
          {item.name === "Services" ? (
            // <>
            //   <button
            //     onClick={() => setShowSolutions(!showSolutions)}
            //     className={`flex flex-col items-center justify-center text-[12px] poppins-regular transition-colors duration-200 cursor-pointer relative group ${
            //       showSolutions || isSolutionPage
            //         ? "text-[#fa4aa8]"
            //         : "text-[#464646]"
            //     }`}
            //   >
            //     <i
            //       className={`fa-brands fa-servicestack text-lg ${
            //         showSolutions || isSolutionPage
            //           ? "text-[#fa4aa8] scale-110"
            //           : "hover:text-[#fa4aa8] hover:-translate-y-1"
            //       }`}
            //     ></i>
            //     <span className="absolute top-4 left-1/2 transform -translate-x-1/2 text-[#000000] text-[7px] tracking-[1.5px] rounded px-2 py-1 group-hover:visible">
            //       {item.name}
            //     </span>
            //   </button>

            //   {/* Dropdown */}
            //   {/* <div
            //     className={`absolute bottom-8 left-1/2 -translate-x-1/2 w-[250px] bg-white shadow-md rounded-lg transition-all duration-300 overflow-hidden ${
            //       showSolutions
            //         ? "translate-y-0 opacity-100 visible"
            //         : "translate-y-10 opacity-0 invisible"
            //     }`}
            //   >
            //     <ul className="p-2 grid grid-cols-2">
            //       {solutionPages.map((route, i) => (
            //         <li key={i} className="border-b last:border-0">
            //           <Link
            //             to={route}
            //             className={`block py-2 px-4 text-black hover:bg-gray-200 text-sm text-center ${
            //               location.pathname === route
            //                 ? "text-[#fa4aa8] font-bold"
            //                 : ""
            //             }`}
            //             onClick={() => setShowSolutions(false)}
            //           >
            //             {route.replace("/solutions/", "").toUpperCase()}
            //           </Link>
            //         </li>
            //       ))}
            //     </ul>
            //   </div> */}
            // </>
            <Link
              to={item.path}
              className={`flex flex-col items-center justify-center text-[12px] poppins-regular transition-colors duration-200 cursor-pointer relative group ${
                activeSection === item.path
                  ? "text-[#fa4aa8]"
                  : "text-[#464646]"
              }`}
            >
              <i
                className={`${
                  item.icon
                } text-lg transition-colors duration-200 transform ${
                  activeSection === item.path
                    ? "text-[#fa4aa8] scale-110"
                    : "hover:text-[#fa4aa8] hover:-translate-y-1"
                }`}
              ></i>
              <span
                className={`absolute top-4 left-1/2 transform -translate-x-1/2 text-[#000000] text-[7px] tracking-[1.5px] rounded px-2 py-1 group-hover:visible ${
                  activeSection === item.path
                    ? "text-[#fa4aa8] scale-110"
                    : "hover:text-[#fa4aa8] hover:-translate-y-1"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ) : (
            <Link
              to={item.path}
              className={`flex flex-col items-center justify-center text-[12px] poppins-regular transition-colors duration-200 cursor-pointer relative group ${
                activeSection === item.path
                  ? "text-[#fa4aa8]"
                  : "text-[#464646]"
              }`}
            >
              <i
                className={`${
                  item.icon
                } text-lg transition-colors duration-200 transform ${
                  activeSection === item.path
                    ? "text-[#fa4aa8] scale-110"
                    : "hover:text-[#fa4aa8] hover:-translate-y-1"
                }`}
              ></i>
              <span
                className={`absolute top-4 left-1/2 transform -translate-x-1/2 text-[#000000] text-[7px] tracking-[1.5px] rounded px-2 py-1 group-hover:visible ${
                  activeSection === item.path
                    ? "text-[#fa4aa8] scale-110"
                    : "hover:text-[#fa4aa8] hover:-translate-y-1"
                }`}
              >
                {item.name}
              </span>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default MiniMobileNavbar;
