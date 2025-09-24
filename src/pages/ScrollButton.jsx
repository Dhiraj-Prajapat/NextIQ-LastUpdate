import { useState, useEffect } from "react";
import { MoveDown, MoveUp } from "lucide-react";
import { motion } from "framer-motion";

const ScrollButton = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [showScrollToBottom, setShowScrollToBottom] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setShowScrollToTop(scrollY > 500);
    setShowScrollToBottom(scrollY > 10 && scrollY <= 500);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (showScrollToTop) {
      scrollToSmoothly(0, 1000);
    } else if (showScrollToBottom) {
      const viewportHeight = window.innerHeight;
      const newScrollPosition = window.scrollY + viewportHeight;
      scrollToSmoothly(newScrollPosition, 1000);
    }
  };

  const scrollToSmoothly = (to, duration) => {
    const start = window.scrollY;
    const change = to - start;
    const startTime = performance.now();

    function animateScroll(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      window.scrollTo(0, start + change * progress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  };

  return (
    <>
      {showScrollToBottom && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-18 sm:bottom-16 right-6 sm:right-12 md:bottom-10 z-50"
        >
          <button
            onClick={handleClick}
            className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/70 backdrop-blur-sm shadow-lg hover:bg-white hover:scale-103 cursor-pointer transition-all duration-300"
            aria-label="Scroll to Bottom"
          >
            <MoveDown className="h-8 w-8 text-black" />
          </button>
        </motion.div>
      )}
      {showScrollToTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-18 sm:bottom-16 right-6 sm:right-12 md:bottom-10 z-50"
        >
          <button
            onClick={handleClick}
            className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/70 backdrop-blur-sm shadow-lg hover:bg-white hover:scale-103 cursor-pointer transition-all duration-300"
            aria-label="Scroll to Top"
          >
            <MoveUp className="h-6 sm:h-8 w-6 sm:w-8 text-black" />
          </button>
        </motion.div>
      )}
    </>
  );
};

export default ScrollButton;
