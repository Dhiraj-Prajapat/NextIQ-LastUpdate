import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const HorizontalLine = () => {
  const pathRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;

    gsap.fromTo(
      path,
      { strokeDasharray: path.getTotalLength(), strokeDashoffset: path.getTotalLength() },
      {
        strokeDashoffset: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 1440 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={pathRef}
        d="M-40 64L69.6988 63L117.004 5H722.59L762.963 54.5H1359.99L1400.36 5H1528"
        stroke="#45108A"
        strokeWidth="10"
      />
    </svg>
  );
};

export default HorizontalLine;
