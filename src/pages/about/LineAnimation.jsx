import { useEffect, useRef } from "react";
import "./lineAnimation.css"; // Import CSS for styling

const LineAnimation = () => {
  const linesRef = useRef([]); // Create a ref to store the lines

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add("animate");
  //         }
  //       });
  //     },
  //     { threshold: 0.5 } // Triggers when 50% of the element is visible
  //   );

  //   linesRef.current.forEach((line) => observer.observe(line));

  //   return () => {
  //     linesRef.current.forEach((line) => observer.unobserve(line));
  //   };
  // }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="1024"
      viewBox="0 0 33 1024"
      fill="none"
    >
      <path
        d="M21.5 0.5V42.5074L2 72.9627V131.773L21.5 152.252V275.123L2 300.328V401.67L31 432.126V474.133"
        stroke="#350C6B"
        strokeWidth="3"
        strokeDasharray="500"
        strokeDashoffset="500"
        className="line"
        ref={(el) => linesRef.current.push(el)}
      />
      <path
        d="M31 472.558L2 515.39V573.764L21.5 594.091V716.052L2 741.07V841.662L31 871.892V913.588L9.5 936"
        stroke="#350C6B"
        strokeWidth="3"
        strokeDasharray="500"
        strokeDashoffset="500"
        className="line"
        ref={(el) => linesRef.current.push(el)}
      />
    </svg>
  );
};

export default LineAnimation;