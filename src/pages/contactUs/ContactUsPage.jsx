// ContactUs.jsx
import React, { useState } from "react";
import "./ContactUsPage.css";
import { motion } from "framer-motion";
import "../home/Ceosec.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 2000);
  };

  // Base classes for styling
  const fieldWrapperClasses =
    "relative border-2 border-gray-200 rounded-xl transition-all duration-300";
  const inputClasses = "w-full p-3 bg-transparent outline-none rounded-xl";
  const placeholderClasses =
    "absolute left-3 top-3 transition-all duration-300 pointer-events-none";

  return (
    <div className="contact-page  overflow-hidden">
      {/* Header Section with purple gradient background */}
      <section className="relative z-0 bg-gradient-to-br from-[#770664] to-[#7c1dc9] overflow-hidden min-h-[429px] sm:min-h-[429px]  flex items-center">
        {/*top Grid Line Animated Boxes */}
        <div className="overlay_cc overflow-hidden">
          <div className="gridLine_cc">
            <div className="grid-fade_cc"></div>
            <div className="grid-lines_cc"></div>
          </div>
        </div>
        {/* Background Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          src="/New-Images/ContactUsImg/contactUs-bg-gradient.png"
          alt="Background"
        />

        {/* Content Wrapper */}
        <div className="relative max-w-7xl mx-auto px-4 lg:px-12 flex flex-col md:flex-row items-center justify-between w-full">
          {/* Left Side - Text */}
          <motion.div
            className="w-full md:w-1/2 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="res-heading text-white text-[38px] sm:text-[42px] lg:text-[48px] xl:text-[52px] font-semibold leading-tight">
              Contact <span className="text-pink-300">Us</span>
            </h1>

            {/* Breadcrumb */}
            <motion.div
              className="res-desc flex items-center space-x-2 mt-3 text-white text-[16px] xl:text-[18px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <span className="opacity-80">Home</span>
              <img
                className="h-3 w-3 sm:h-4 sm:w-4"
                src="/New-Images/ContactUsImg/breadcrumbs.png"
                alt="Breadcrumb"
              />
              <span className="underline font-medium">Contact Us</span>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="hidden md:flex w-full md:w-1/2 absolute  right-0  justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <img
              src="/New-Images/ContactUsImg/contactUs-girl-img.png"
              alt="Contact Us"
              className="max-w-[300px] sm:max-w-[350px] md:max-w-[400px]  lg:max-w-[480px] xl:max-w-[550px] absolute top-[-50px]  lg:top-[-140px] xl:top-[-150px]  lg:-left-[16px] xl:left-23  right-[60px] object-cover"
            />
          </motion.div>
        </div>
      </section>
      {/* -------------------------------------------------------------------------------- */}

      <section className="max-w-7xl mx-auto relative">
        <div className=" grid lg:grid-cols-2 gap-6 md:gap-12 max-w-7xl mx-auto pt-[150px] relative second_section second-section">
          {/* Left Section */}
          <div
            className="contact_content w-full flex flex-col left-0 lg:-left-[-30px] -top-20 sm:px-5 relative"
            data-aos="fade-up"
          >
            <p className="text-black have-questions text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-9">
              Have Questions? We&apos;re Here To Help!
            </p>

            {/* Contact Details */}
            <div className="mt-4 md:mt-6 contact-details contact_details sm:m-0  flex flex-col items-left md:items-start md:justify-start md:flex-row gap-4 xl:flex-row xl:gap-[125px]">
              <div className="flex items-center gap-2">
                <img src="/Images/phone.png" className="h-10 w-10" />
                <div className="flex flex-col leading-tight">
                  <p className="text-[#6E7984] text-[16px] sm:text-[18px] poppins-medium">
                    Phone
                  </p>
                  <p className="text-black font-medium text-[14px] sm:text-[16px]">
                    16127037976
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <img src="/Images/mail.png" className="h-10 w-10" />
                <div className="flex flex-col leading-tight">
                  <p className="text-[#6E7984] text-[16px] sm:text-[18px] poppins-medium">
                    Email
                  </p>
                  <p className="text-black font-medium text-[14px] sm:text-[16px]">
                    amit.b@9abusiness.com
                  </p>
                </div>
              </div>
            </div>

            {/* Image Row */}
            <div className="mt-10 w-full max-w-7xl px-4 flex justify-center items-center mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.70177016655!2d72.71412588306335!3d19.082482209464203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1742447360007!5m2!1sen!2sin"
                className="w-full h-60 lg:h-96 rounded-xl shadow-lg"
                style={{
                  border: "none",
                  WebkitMaskImage:
                    "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)",
                  maskImage:
                    "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          {/* ---------------------------------- */}

          {/* Right Section - Contact Form */}
          <div className="w-full flex justify-center max-w-3xl mx-auto">
            <div className="contact_form-section form_align w-full sm:w-[70%] md:relative md:top-0 sm:-left-22 sm:-top-16 md:-left-1   lg:-left-[16px] xl:left-23 lg:-top-[202px] 2xl:left-36 xl:-top-[200px]  ">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="bg-white rounded-md relative z-2 p-6 text-left form_container w-full mx-auto lg:max-w-[473px]"
              >
                <h3 className="text:[14px] md:text-[16px] font-semibold text-gray-500 mb-8">
                  Please fill the below form to connect us.
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div
                    className={`text-black ${fieldWrapperClasses} ${
                      focusedField === "name" || formData.name
                        ? "border-blue-600"
                        : "border-gray-200"
                    }`}
                  >
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className={inputClasses}
                      required
                    />
                    <span
                      className={`${placeholderClasses} text-[14px] ${
                        focusedField === "name" || formData.name
                          ? "-translate-y-6 -translate-x-4 scale-75 text-blue-600 bg-gray-100/50 px-2"
                          : "text-gray-500"
                      }`}
                    >
                      Enter Your Name
                    </span>
                  </div>

                  {/* Email Field */}
                  <div
                    className={`text-black ${fieldWrapperClasses} ${
                      focusedField === "email" || formData.email
                        ? "border-blue-600"
                        : "border-gray-200"
                    }`}
                  >
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className={inputClasses}
                      required
                    />
                    <span
                      className={`${placeholderClasses} text-[14px] ${
                        focusedField === "email" || formData.email
                          ? "-translate-y-6 -translate-x-4 scale-75 text-blue-600 bg-gray-100/50 px-2"
                          : "text-gray-500"
                      }`}
                    >
                      Enter Your Email
                    </span>
                  </div>

                  {/* Message Field */}
                  <div
                    className={`text-black ${fieldWrapperClasses} ${
                      focusedField === "message" || formData.message
                        ? "border-blue-600"
                        : "border-gray-200"
                    }`}
                  >
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      className={`${inputClasses} min-h-[120px]`}
                      required
                    />
                    <span
                      className={`${placeholderClasses} text-[14px] ${
                        focusedField === "message" || formData.message
                          ? "-translate-y-6 -translate-x-4 scale-75 text-blue-600 bg-gray-100/50 px-2"
                          : "text-gray-500"
                      }`}
                    >
                      Write A Message
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className={`primary-btn transition-all duration-300
            hover:bg-blue-700 ${
              submitted ? "bg-green-600 hover:bg-green-700" : ""
            }`}
                    disabled={submitted}
                  >
                    {submitted ? "Submitted!" : "Submit Now"}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
        {/* Right Side Image - Fixed at End */}
      </section>
      <div className="hidden md:block  ">
        <img
          className=" absolute right-0 top-[75%] h-[220px] object-contain"
          src="/New-Images/ContactUsImg/second-section-design.png"
          alt="second-section-design"
        />
      </div>

      {/* ---------------------------------------------------------------------------- */}

      {/* Offices Section */}
      <section className="w-full relative bg-[#f9f9f9]">
        <div className="offices_section  max-w-7xl mx-auto">
          <h2 className="text-[30px] sm:text-[42px]" data-aos="fade-up">
            Our <span>offices</span>
          </h2>

          <div className="offices-grid offices_grid" data-aos="fade-up">
            <div className="office_card">
              <div className="office-icon">
                <img
                  src="/New-Images/ContactUsImg/vector.png"
                  alt="Location Icon"
                  className="h-12 w-12"
                />
              </div>
              <h3 className="text-[18px] sm:text-[20px]">
                Head Quarter: Mumbai
              </h3>
              <p className="text-[14px] sm:text-[16px]">
                Unit No-904, Lodha Supremus Building, Opp Sakivihar Telephone
                Exchange, Sakivihar Road, Powai, Mumbai- 400072, India
              </p>
            </div>

            <div className="office_card">
              <div className="office-icon">
                <img
                  src="/New-Images/ContactUsImg/vector.png"
                  alt="Location Icon"
                  className="h-12 w-12"
                />
              </div>
              <h3 className="text-[18px] sm:text-[20px]">
                Regional Office: Delhi-NCR
              </h3>
              <p className="text-[14px] sm:text-[16px]">
                Regal Business Center, JMD Square, MG Road, Gurgaon, Haryana
              </p>
            </div>

            <div className="office_card">
              <div className="office-icon">
                <img
                  src="/New-Images/ContactUsImg/vector.png"
                  alt="Location Icon"
                  className="h-12 w-12"
                />{" "}
              </div>
              <h3 className="text-[18px] sm:text-[20px]">
                Offshore Office : US
              </h3>
              <p className="text-[14px] sm:text-[16px]">
                1815, Switch Grass Lane, Shakopee, Minneapolis MN, 55379 USA
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-10 relative">
        {/* Map Image */}
        <div
          className="relative w-full"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          <img
            src="/New-Images/ContactUsImg/world-map.png"
            alt="Office Locations Map"
            className="w-full h-auto object-cover"
          />

          {/* pulse1 circles */}
          <div className="absolute top-1/4 left-1/6">
            <div className="circle1 pulse1 blue1"></div>
          </div>
          <div className="absolute top-1/2 right-2/5">
            <div className="circle1 pulse1 blue1"></div>
          </div>
          <div className="absolute bottom-2/4 right-2/8">
            <div className="circle1 pulse1 blue1"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
