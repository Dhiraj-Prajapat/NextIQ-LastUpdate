import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isExplorePage = location.pathname === "/explore-more";

  // const solutionPages = [
  //   { title: "Firecast.ai", route: "/firecast.ai" },
  //   { title: "BizPulse", route: "/bizpulse" },
  //   { title: "Taskwrap.ai", route: "/taskwrap.ai" },
  //   { title: "DocIQ", route: "/dociq" },
  //   { title: "AI Sphere", route: "/aisphere" },
  //   { title: "Adulate.ai", route: "/adulate.ai" },
  //   { title: "BizVista.ai", route: "/bizvista.ai" },
  //   { title: "AutoGenix.ai", route: "/autogenix.ai" },
  //   { title: "Crexa.ai", route: "/crexa.ai" },
  // ];

  if (isExplorePage) {
    return (
      <motion.div
        className="w-full bg-white py-3 px-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-1/3"></div>
          <div className="w-1/3 flex justify-center">
            <img src="/New-Images/nextIQ-logo.png" alt="NextIQ.ai" className="h-10" />
          </div>
          <div className="w-1/3 block lg:hidden"></div>
          <div className="w-1/3 items-center justify-end gap-4 hidden lg:flex">
            <span className="text-black poppins-normal text-[14px] whitespace-nowrap">
              Back To Home
            </span>
            <Link
              to="/"
              className="primary-nav-btn rounded-md hover:scale-105 transition-all duration-300"
            >
              Home
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="h-full mx-auto lg:w-screen rounded-b-xl bg-white shadow-[0px_6px_10px_2px_rgba(0,0,0,0.25)]"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
    >
      <nav className="nav-content lg:max-w-7xl max-h-full">
        <div>
          <div className="nav_logo z-40 h-14 flex flex-wrap items-center gap-10 lg:gap-0">
            <Link to="/">
              <img
                src="/New-Images/nextIQ-logo.png"
                alt="Logo"
                className="w-[100px] lg:w-[120px] cursor-pointer"
              />
            </Link>
            <div className="flex flex-wrap ml-auto">
              <div className="hidden lg:flex flex-wrap mr-2">
                <ul className="flex flex-wrap items-center gap-6 poppins-light px-2.5 text-[16px]">
                  <li>
                    <Link
                      to="/"
                      className={`transition-all duration-300 cursor-pointer ${
                        location.pathname === "/"
                          ? "text-[#6E50FF] font-semibold"
                          : "text-black hover:text-[#6E50FF]"
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className={`transition-all duration-300 cursor-pointer ${
                        location.pathname === "/about"
                          ? "text-[#6E50FF] font-semibold"
                          : "text-black hover:text-[#6E50FF]"
                      }`}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products"
                      className={`transition-all duration-300 cursor-pointer ${
                        location.pathname === "/products"
                          ? "text-[#6E50FF] font-semibold"
                          : "text-black hover:text-[#6E50FF]"
                      }`}
                    >
                      Product Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      className={`transition-all duration-300 cursor-pointer ${
                        location.pathname === "/services"
                          ? "text-[#6E50FF] font-semibold"
                          : "text-black hover:text-[#6E50FF]"
                      }`}
                    >
                      Services
                    </Link>
                  </li>
                  {/* Dropdown Fix */}
                  {/* <li
                    // className="relative"
                    // onMouseEnter={() => setDropdownOpen(true)}
                    // onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      // onClick={() => setDropdownOpen((prev) => !prev)}
                      // className={`solution-dropdown transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${
                      //   location.pathname.startsWith("/solutions")
                      //     ? "text-[#6E50FF] font-semibold"
                      //     : "text-black hover:text-[#6E50FF]"
                      // }`}
                    >
                      Services
                      {/* <motion.span
                        animate={{ rotate: dropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-1"
                      >
                        <ChevronDown />
                      </motion.span> 
                    </button>

                    {/* {dropdownOpen && (
                      <motion.ul
                        className="absolute -left-[150px] pt-6 bg-white shadow-lg rounded-md w-[400px] z-50 grid grid-cols-3"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {solutionPages.map((item, index) => (
                          <li key={index}>
                            <Link
                              to={`/solutions${item.route}`}
                              className={`block px-4 py-2 text-black hover:text-[#6E50FF] transition-all duration-300 ${
                                location.pathname === `/solutions${item.route}`
                                  ? "text-[#6E50FF]"
                                  : ""
                              }`}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )} 
                  </li> */}
                  <li>
                    <Link
                      to="/contactus"
                      className={`transition-all duration-300 cursor-pointer ${
                        location.pathname === "/contactus"
                          ? "text-[#6E50FF] font-semibold"
                          : "text-black hover:text-[#6E50FF]"
                      }`}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
