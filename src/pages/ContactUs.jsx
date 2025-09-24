import React, { useState } from "react";

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
    <div className="h-full max-w-7xl pt-[120px] sm:pt-[150px] m-auto relative">
      {/* top light images */}
      <div
        className="absolute top-0 right-0 md:right-10"
        data-aos="fade-left"
      >
        <img src="/Images/contact-light.png" className="w-[100px] sm:w-[140px] h-[96px] sm:h-[136px]" />
      </div>
      <div
        className="absolute top-0 left-0 md:left-10"
        data-aos="fade-right"
      >
        <img
          src="/Images/contact-light-reverse.png"
          className="w-[100px] sm:w-[140px] h-[96px] sm:h-[136px]"
        />
      </div>

      <div className="flex flex-col items-center md:flex-row px-4 lg:px-12">
        {/* Left Section */}
        <div
          className="w-full md:max-w-[50%] mx-auto flex flex-col md:text-left leading-14 relative"
          data-aos="fade-up"
        >
          <div className="absolute -bottom-30 -left-80">
            <img
              src="/Images/blog-bg-gradient.png"
              className="object-contain"
            />
          </div>
          <h2 className="res-heading leading-[34px] text-[32px]/[42px] md:text-[38px]/[48px] lg:text-[42px]/[52px] font-bold text-black poppins-bold">
            Contact Us For <br className="hidden sm:block" /> More
            <span className="gradient-text-2"> Information</span>
          </h2>
          <p className="text-black mt-4 text-[16px]/[26px] sm:text-[20px]/[32px] lg:text-[24px]">
            Have Questions? We&apos;re Here To Help!
          </p>
          <div className="mt-8 sm:mt-16 flex flex-col lg:flex-row gap-6 sm:gap-8">
            <div className="flex items-center gap-2">
              <span className="text-blue-500">
                <img src="/Images/phone.png" className="h-8 w-8 sm:h-10 sm:w-10" />
              </span>
              <div className="flex flex-col gap-2">
                <p className="text-[#6E7984] text-[14px]/[18px] sm:text-[18px]/[24px] poppins-medium pl-1">
                  Phone
                </p>
                <p className="text-black font-medium text-[14px]/[18px] sm:text-[18px]/[24px]">
                  +16127037976
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-blue-500 text-xl">
                <img src="/Images/mail.png" className="h-8 w-8 sm:h-10 sm:w-10" />
              </span>
              <div className="flex flex-col gap-2">
                <p className="text-[#6E7984] text-[14px]/[18px] sm:text-[18px]/[24px] poppins-medium pl-1">
                  Email
                </p>
                <p className="text-black font-medium text-[14px]/[18px] sm:text-[18px]/[24px]">
                  amit.b@9abusiness.com
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 hidden md:block">
            <img
              src="/Images/contactus.png"
              alt=""
              className="h-full sm:w-[55%]"
            />
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="lg:w-1/2 lg:px-16 mt-10 sm:mt-12 lg:mt-0 ">
          <div
            className="w-full p-4 sm:p-6 rounded-xl border border-gray-200 shadow-lg"
            data-aos="fade-up"
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
          </div>
        </div>
      </div>

      <div className="mt-10 block md:hidden px-4 sm:px-0">
        <img src="/Images/contactus.png" alt="" className="h-full sm:w-[55%]" />
      </div>
    </div>
  );
};

export default ContactUs;
