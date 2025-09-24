import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation();
  const products = [
    {
      title: "Firecast.ai",
      route: "/firecast.ai",
    },
    {
      title: "BizPulse",
      route: "/bizpulse",
    },
    {
      title: "Taskwrap.ai",
      route: "/taskwrap.ai",
    },
    {
      title: "DocIQ",
      route: "/dociq",
    },
    {
      title: "AI Sphere",
      route: "/aisphere",
    },
    {
      title: "Adulate.ai",
      route: "/adulate.ai",
    },
    {
      title: "BizVista.ai",
      route: "/bizvista.ai",
    },
    {
      title: "AutoGenix.ai",
      route: "/autogenix.ai",
    },
    {
      title: "Crexa.ai",
      route: "/crexa.ai",
    },
  ];
  const useCase = [
    {
      title: "Sales",
      route: "/",
    },
    {
      title: "Recruiting",
      route: "/",
    },
    {
      title: "Engineering",
      route: "/",
    },
    {
      title: "Marketing",
      route: "/",
    },
    {
      title: "Management",
      route: "/",
    },
    {
      title: "Consulting",
      route: "/",
    },
  ];
  const company = [
    {
      title: "About Us",
      route: "/about",
    },
    {
      title: "Careers",
      route: "/",
    },
    {
      title: "Blog",
      route: "/",
    },
    {
      title: "Help",
      route: "/",
    },
    {
      title: "Terms & Services",
      route: "/",
    },
    {
      title: "Privacy Policy",
      route: "/",
    },
  ];

  // Hide footer on the "Explore More" route
  if (location.pathname === "/explore-more") return null;
  return (
    <footer className="h-full w-full bg-gradient-to-tr from-[#1F0419] to-[#050424] text-gray-300">
      {/* Our Website Branding Logo */}
      <div className="flex justify-center items-center py-[45px] sm:py-[70px] mx-auto border-b border-gray-700">
        <img
          src="/New-Images/NextIQ-white-logo.png"
          className="h-[80%] w-[50%] sm:w-[20%] xl:w-[10%]"
        />
      </div>
      <div className="max-w-7xl px-4 lg:px-12 poppins-regular text-left mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-[35px] sm:pt-[50px]">
        {/* Products Section */}
        <div className="max-w-5xl">
          <h3 className="text-white font-semibold text-[16px] sm:text-lg mb-4">Products</h3>
          {products.map((item, index) => (
            <ul className="text-[14px] sm:text-sm paragraph" key={index}>
              <li className="my-2">
                <Link
                  to={`solutions${item.route}`}
                  className="hover:text-white transition-colors"
                >
                  {item.title}
                </Link>
              </li>
            </ul>
          ))}
        </div>

        {/* Use Case Section */}
        <div className="">
          <h3 className="text-white font-semibold text-[16px] sm:text-lg mb-4">Use Case</h3>
          {useCase.map((item, index) => (
            <ul className="text-[14px] sm:text-sm paragraph" key={index}>
              <li className="my-2">
                <a
                  href={item.route}
                  className="hover:text-white transition-colors"
                >
                  {item.title}
                </a>
              </li>
            </ul>
          ))}
        </div>

        {/* Company Section */}
        <div className="">
          <h3 className="text-white font-semibold text-[16px] sm:text-lg mb-4">Company</h3>
          {company.map((item, index) => (
            <ul className="text-[14px] sm:text-sm paragraph" key={index}>
              <li className="my-2">
                <a
                  href={item.route}
                  className="hover:text-white transition-colors"
                >
                  {item.title}
                </a>
              </li>
            </ul>
          ))}
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-white font-semibold text-[16px] sm:text-lg mb-2">Contact Us</h3>
          <ul className="space-y-4 text-[14px] sm:text-sm paragraph pt-2">
            <li className="flex flex-col items-start gap-2">
              <p className="flex gap-2">
                <Mail size={18} /> Email
              </p>
              <a
                href="mailto:info@9abusiness.com"
                className="text-white transition-colors"
              >
                amit.b@9abusiness.com
              </a>
            </li>
            <li className="flex flex-col items-start gap-2">
              <p className="flex gap-2">
                <Phone size={18} /> Phone
              </p>
              <a
                href="tel:+16127037976"
                className="text-white transition-colors"
              >
                +16127037976
              </a>
            </li>
            <li className="flex flex-col items-start gap-2">
              <p className="flex gap-2">
                <MapPin size={20} /> Location
              </p>
              <p className="text-white ">
                1815, Switch Grass Lane, Shakopee, Minneapolis MN, 55379 USA.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mx-auto px-4 mt-[48px] sm:mt-[68px] pt-[30px] pb-[80px] sm:py-[40px] border-t border-gray-700 text-center">
        <div className="max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6 mx-auto lg:px-12">
          <p className="text-sm paragraph">
            Copyright 2024. 9A Business All Rights Reserved |{" "}
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </p>

          {/* Social Media Links */}
          <div className="flex gap-7">
            <a href="#" className="transition-colors">
              <FaFacebookF
                size={20}
                className="hover:text-[#1877F2] text-white"
              />
            </a>
            <a href="#" className="transition-colors">
              <FaInstagram
                size={20}
                className="hover:text-[#E1306C] text-white"
              />
            </a>
            <a href="#" className="transition-colors">
              <FaTwitter
                size={20}
                className="hover:text-[#1DA1F2] text-white"
              />
            </a>
            <a href="#" className="transition-colors">
              <FaLinkedinIn
                size={20}
                className="hover:text-[#0A66C2] text-white"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
