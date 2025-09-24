import { useEffect } from "react";
import Navbar from "./pages/Navbar";
import MiniMobileNavbar from "./pages/MiniMobileNavbar";
import Footer from "./pages/Footer";
import "./commonStyle.css";
import "./styles/slick-custom.css";

// route
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import ExploreMore from "./pages/ExploreMore";
// import SolutionsAI from "./pages/solutions/Solutions";
import About from "./pages/about/About";
import ContactUsPage from "./pages/contactUs/ContactUsPage";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
      mirror: true,
      offset: 250,
      delay: 200,
    });
  }, []);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // const solutionPages = [
  //   {
  //     title: " ",
  //     route: "/firecast.ai",
  //   },
  //   {
  //     title: "BizPulse",
  //     route: "/bizpulse",
  //   },
  //   {
  //     title: "Taskwrap.ai",
  //     route: "/taskwrap.ai",
  //   },
  //   {
  //     title: "DocIQ",
  //     route: "/dociq",
  //   },
  //   {
  //     title: "AI Sphere",
  //     route: "/aisphere",
  //   },
  //   {
  //     title: "Adulate.ai",
  //     route: "/adulate.ai",
  //   },
  //   {
  //     title: "BizVista.ai",
  //     route: "/bizvista.ai",
  //   },
  //   {
  //     title: "AutoGenix.ai",
  //     route: "/autogenix.ai",
  //   },
  //   {
  //     title: "Crexa.ai",
  //     route: "/crexa.ai",
  //   },
  // ];

  return (
    <>
      <header className="z-200 absolute lg:fixed lg:top-0 left-0 right-0 mx-auto ">
        <Navbar
          scrollToSection={scrollToSection}
        />
      </header>
      <MiniMobileNavbar
        scrollToSection={scrollToSection}
      />

      <Routes>
        {/* Home link */}
        <Route path="/" element={<Home />} />

        {/* About link */}
        <Route path="/about" element={<About />} />

        {/* Contact Us link */}
        <Route path="/contactus" element={<ContactUsPage />} />

        {/* Product Portfolio link*/}
        <Route path="/products" element={<Product />} />

        {/* Solutions and all page link*/}
        <Route path="/services" element={
          <div className="h-screen w-screen flex items-center justify-center">
            <h1 className="text-4xl text-black poppins-bold heading-text gradient-text">Services</h1>
          </div>
        } />
        {/* <Route path="/solutions/firecast.ai" element={<SolutionsAI />} />
        {solutionPages.map((item, index) => (
          <Route
            path={`/solutions${item.route}`}
            key={index}
            element={
              <div className="h-screen w-screen flex items-center justify-center text-black poppins-bold">
                <h1 className="text-[8rem] gradient-text-2">{item.title}</h1>
              </div>
            }
          />
        ))} */}

        {/* Explore More link*/}
        <Route path="/explore-more" element={<ExploreMore />} />
      </Routes>

      <section className="main_container w-full mx-auto overflow-hidden">
        <Footer />
      </section>
    </>
  );
};

export default App;
