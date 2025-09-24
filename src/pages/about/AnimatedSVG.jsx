import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedSVG = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const paths = svgRef.current.querySelectorAll("path");

    paths.forEach((path) => {
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 5,
        scrollTrigger: {
          trigger: path,
          start: "top 85%",
          end: "bottom 10%",
          scrub: 1,
          once: true, // Ensures the animation runs only once
        },
      });
    });
  }, []);

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="1024"
      viewBox="0 0 33 1024"
      fill="none"
    >
      <path
         d="M21.5 0.5V42.5074L2 72.9627V131.773L21.5 152.252V275.123L2 300.328V401.67L31 432.126V474.133
             L2 515.39V573.764L21.5 594.091V716.052L2 741.07V841.662L31 871.892V913.588L9.5 936"
        stroke="#350C6B"
        strokeWidth="3"
      />
    </svg>
  );
};

export default AnimatedSVG;