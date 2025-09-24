import { useState } from "react";
import { motion } from "framer-motion";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    topic: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(formData);
    alert("form submitted successfully.");
  };

  const fieldWrapperClasses = "relative border-2 rounded-lg p-4 transition-all";
  const inputClasses = "w-full outline-none text-black text-[16px]";
  const placeholderClasses = "absolute left-4 top-4 transition-all";
  return (
    <motion.div
      className="flex items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className="w-full relative mx-auto">
        <div className="pt-26 pb-80 lg:pb-46 px-4 text-center mb-8  bg-gradient-to-r from-[#130845] to-[#440436] -z-1">
          <div className="max-h-fit space-y-6 relative -z-0">
            <motion.h1
              className="poppins-bold text-[32px] sm:text-[38px] lg:text-[52px]/[62px] z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              Want to Learn More About <br className="hidden lg:block" />{" "}
              NextIQ.ai and{" "}
              <span className="gradient-text-3">Our Products?</span>
            </motion.h1>

            <motion.p
              className="text-white text-medium text-[18px]/[26px] max-w-3xl mx-auto z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
            >
              Complete the form below to gain in-depth insights about our
              products and services, and seamlessly connect with our AI
              assistant for personalized assistance and support.
            </motion.p>

            <motion.div
              className="flex justify-center z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              <span className="inline-block z-10">
                <img src="/Images/bright-star.png" className="h-14 w-12" />
              </span>
            </motion.div>

            <motion.div
            className="max-w-5xl absolute md:-bottom-5 xl:-bottom-7 left-0 right-0 mx-auto -z-1 hidden md:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <img
              src="/New-Images/2-pink-moon.png"
              alt=""
              className="mx-auto max-w-[75%] lg:max-w-[65%] object-contain"
            />
          </motion.div>
          </div>
        </div>

        <motion.div
          className="max-w-4xl absolute bottom-24 left-0 right-0 mx-4 lg:mx-auto bg-white text-black rounded-2xl p-8 shadow-xl z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <h2 className="poppins-regular text-[16px] text-gray-500 mb-6">
            Please fill the below form to connect us.
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 grid grid-cols-1 lg:grid-cols-2 gap-x-6"
          >
            {/* Name Field */}
            <div
              className={`${fieldWrapperClasses} ${
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
                className={`poppins-regular ${placeholderClasses} text-[14px] ${
                  focusedField === "name" || formData.name
                    ? "-translate-y-7 scale-75 text-blue-600 bg-white px-2"
                    : "text-gray-500"
                }`}
              >
                Enter Your Name
              </span>
            </div>

            {/* Phone Field */}
            <div
              className={`${fieldWrapperClasses} ${
                focusedField === "phone" || formData.phone
                  ? "border-blue-600"
                  : "border-gray-200"
              }`}
            >
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField(null)}
                className={inputClasses}
                required
              />
              <span
                className={`poppins-regular ${placeholderClasses} text-[14px] ${
                  focusedField === "phone" || formData.phone
                    ? "-translate-y-7 scale-75 text-blue-600 bg-white px-2"
                    : "text-gray-500"
                }`}
              >
                Your Phone Number
              </span>
            </div>

            {/* Email Field */}
            <div
              className={`${fieldWrapperClasses} ${
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
                className={`poppins-regular ${placeholderClasses} text-[14px] ${
                  focusedField === "email" || formData.email
                    ? "-translate-y-7 scale-75 text-blue-600 bg-white px-2"
                    : "text-gray-500"
                }`}
              >
                Enter Your Email
              </span>
            </div>

            {/* Topic Selection */}
            <div className={fieldWrapperClasses}>
              <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="" disabled>
                  Select A Topic
                </option>
                <option value="support">Support</option>
                <option value="sales">Sales</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>

            {/* Message Field */}
            <div
              className={`lg:col-span-2 ${fieldWrapperClasses} ${
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
                className={`poppins-regular ${placeholderClasses} text-[14px] ${
                  focusedField === "message" || formData.message
                    ? "-translate-y-7 scale-75 text-blue-600 bg-white px-2"
                    : "text-gray-500"
                }`}
              >
                Write A Message
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`lg:col-span-2 mx-auto primary-btn hover:scale-105 transition-all duration-300 ${
                submitted ? "bg-green-600 hover:bg-green-700" : ""
              }`}
              disabled={submitted}
            >
              {submitted ? "Submitted!" : "Submit Now"}
            </button>
          </form>
        </motion.div>

        <img
          src="/New-Images/form-bt-img.png"
          alt=""
          className="w-[732px] h-[201px] mx-auto mt-66 animate-pulse -z-1"
        />
      </div>
    </motion.div>
  );
};

// Add these styles to your tailwind.css or add them inline for the demo
const StyleSheet = () => (
  <style>{`
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    
    @keyframes twinkle {
      0% { opacity: 0.2; transform: scale(0.8); }
      50% { opacity: 1; transform: scale(1.1); }
      100% { opacity: 0.2; transform: scale(0.8); }
    }
    
    .animate-fadeIn {
      animation: fadeIn 0.8s ease-in-out;
    }
    
    .animate-slideUp {
      animation: slideUp 0.5s ease-out;
    }
    
    .animate-twinkle {
      animation: twinkle 2s infinite;
    }
    
    .delay-100 {
      animation-delay: 0.3s;
    }
    
    .delay-200 {
      animation-delay: 0.6s;
    }
  `}</style>
);

const ExploreMore = () => {
  return (
    <>
      <StyleSheet />
      <ContactForm />
    </>
  );
};

export default ExploreMore;
