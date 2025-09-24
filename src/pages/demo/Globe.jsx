// import React, { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";

// // Satellite Component (Now supports different models)
// const Satellite = ({ modelPath, radius, speed, angleOffset, scale }) => {
//   const ref = useRef();
//   const { scene } = useGLTF(modelPath); // Load different models

//   useFrame(({ clock }) => {
//     const t = clock.getElapsedTime() * speed + angleOffset;
//     if (ref.current) {
//       ref.current.position.set(
//         Math.cos(t) * radius,
//         Math.sin(t * 0.5) * 0.3,
//         Math.sin(t) * radius
//       );
//       ref.current.rotation.y += 0.02;
//     }
//   });

//   return <primitive ref={ref} object={scene.clone()} scale={scale} />;
// };

// // Black Stars Component
// const BlackStars = () => {
//   const starRef = useRef();
//   const starCount = 5000;
//   const positions = new Float32Array(starCount * 3);

//   for (let i = 0; i < starCount * 3; i++) {
//     positions[i] = (Math.random() - 0.5) * 100;
//   }

//   return (
//     <points ref={starRef}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           count={positions.length / 3}
//           array={positions}
//           itemSize={3}
//         />
//       </bufferGeometry>
//       <pointsMaterial color="black" size={0.5} />
//     </points>
//   );
// };

// // Globe Component
// const FuturisticGlobe = ({ size = 1.2 }) => {
//   const globeRef = useRef();

//   useFrame(({ clock }) => {
//     if (globeRef.current) {
//       globeRef.current.rotation.y = clock.getElapsedTime() * 0.1;
//     }
//   });

//   // ✅ 4 different 3D models for satellites
//   const satellites = [
//     {
//       modelPath: "/models/free_ai.glb",
//       radius: 2,
//       speed: 0.5,
//       angleOffset: 0,
//       scale: 0.03, // ✅ Default size
//     },
//     {
//       modelPath: "/models/stylized_crystal_cluster.glb",
//       radius: 2,
//       speed: 0.5,
//       angleOffset: Math.PI / 2,
//       scale: 0.3, // ✅ Increased size
//     },
//     {
//       modelPath: "/models/material_ball_in_3d-coat.glb",
//       radius: 2,
//       speed: 0.5,
//       angleOffset: Math.PI,
//       scale: 0.03, // ✅ Default size
//     },
//     {
//       modelPath: "/models/accountancy_icon.glb",
//       radius: 2,
//       speed: 0.5,
//       angleOffset: (3 * Math.PI) / 2,
//       scale: 0.03, // ✅ Default size
//     },
//   ];

//   return (
//     <group position={[0, 0, 0]}>
//       <mesh ref={globeRef}>
//         <sphereGeometry args={[size, 12, 12]} />
//         <meshStandardMaterial color="black" wireframe />
//       </mesh>
//       {satellites.map((props, i) => (
//         <Satellite key={i} {...props} />
//       ))}
//     </group>
//   );
// };

// // Scene Component
// export default function FuturisticGlobeScene() {
//   return (
//     <div
//       style={{
//         width: "100vw",
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         position: "relative",
//         background: "transparent",
//       }}
//       className="!bg-transparent"
//     >
//       <Canvas
//         camera={{ position: [0, 0, 7], fov: 45 }}
//         gl={{ alpha: true, antialias: true }}
//         style={{
//           position: "absolute",
//           width: "100%",
//           height: "100%",
//           top: 0,
//           left: 0,
//           background: "transparent",
//         }}
//       >
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 2, 5]} intensity={2} />
//         <BlackStars />
//         <FuturisticGlobe />
//         <OrbitControls target={[0, 0, 0]} />
//       </Canvas>
//     </div>
//   );
// }


import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Globe = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const width = 470;
    const height = 490;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const dark = "rgba(35,55,70,1)";
    const light = "rgba(167,175,181,1)";
    const gold = "rgba(141,116,75,1)";

    let points = [
      { x: 216, originX: 216, y: 49, originY: 49, rad: 4, color: dark },
      { x: 125, originX: 125, y: 95, originY: 95, rad: 4, color: dark },
      { x: 250, originX: 250, y: 100, originY: 100, rad: 10, color: dark },
      { x: 346, originX: 346, y: 80, originY: 80, rad: 4, color: dark },
      { x: 51, originX: 51, y: 182, originY: 182, rad: 4, color: dark },
      { x: 120, originX: 120, y: 205, originY: 205, rad: 6, color: dark },
      { x: 380, originX: 380, y: 165, originY: 165, rad: 4, color: dark },
      { x: 420, originX: 420, y: 190, originY: 190, rad: 6, color: dark },
      { x: 50, originX: 50, y: 270, originY: 270, rad: 3, color: dark },
      { x: 293, originX: 293, y: 260, originY: 260, rad: 12, color: dark },
      { x: 65, originX: 65, y: 320, originY: 320, rad: 3, color: dark },
      { x: 170, originX: 170, y: 350, originY: 350, rad: 9, color: dark },
      { x: 400, originX: 400, y: 300, originY: 300, rad: 4, color: dark },
      { x: 100, originX: 100, y: 370, originY: 370, rad: 4, color: dark },
      { x: 290, originX: 290, y: 380, originY: 380, rad: 6, color: dark },
      { x: 370, originX: 370, y: 370, originY: 370, rad: 3, color: dark },
      { x: 175, originX: 175, y: 400, originY: 400, rad: 4, color: dark },
      { x: 270, originX: 270, y: 415, originY: 415, rad: 4, color: dark },
      { x: 314, originX: 314, y: 184, originY: 184, rad: 4, color: light },
      { x: 235, originX: 235, y: 270, originY: 270, rad: 6, color: light },
      { x: 112, originX: 112, y: 315, originY: 315, rad: 5, color: light },
      { x: 140, originX: 140, y: 150, originY: 150, rad: 4, color: light },
    ];

    points.forEach((p) => {
      p.jointo = [];
      p.length = getRandomInt(16, 35);
      p.seperation = getRandomInt(500, 1300);
      p.offset = getRandomInt(100, 1000);
    });

    // Define connections between points
    points[0].jointo.push(points[1], points[2], points[3]);
    points[1].jointo.push(points[4], points[2], points[5]);
    points[2].jointo.push(points[3], points[5], points[6], points[9]);
    points[3].jointo.push(points[6], points[7]);
    points[4].jointo.push(points[5], points[8], points[10]);
    points[5].jointo.push(points[9], points[10], points[11]);
    points[6].jointo.push(points[7], points[9], points[12]);
    points[7].jointo.push(points[12]);
    points[8].jointo.push(points[10]);
    points[9].jointo.push(points[11], points[12], points[14]);
    points[10].jointo.push(points[11], points[13], points[16]);
    points[11].jointo.push(points[14], points[16]);
    points[12].jointo.push(points[14], points[15]);
    points[13].jointo.push(points[16]);
    points[14].jointo.push(points[15], points[16], points[17]);
    points[15].jointo.push(points[17]);
    points[16].jointo.push(points[17]);
    points[18].jointo.push(points[2], points[7], points[19]);
    points[19].jointo.push(points[12], points[17], points[4], points[20]);
    points[20].jointo.push(points[8], points[16]);
    points[21].jointo.push(points[18], points[4], points[0]);

    points.forEach((p) => {
      p.circle = new Circle(p, p.rad, p.color);
    });

    function initAnimation() {
      render();
      points.forEach((p) => shiftPoint(p));
    }

    function render() {
      ctx.clearRect(0, 0, width, height); // Clear the canvas without filling the background
      points.forEach((p) => {
        if (p.color === light) {
          drawLines(p);
          drawTransit(p);
          p.circle.draw();
        }
      });
      points.forEach((p) => {
        if (p.color === dark) {
          drawLines(p);
          drawTransit(p);
          p.circle.draw();
        }
      });
      requestAnimationFrame(render);
    }

    function shiftPoint(p) {
      gsap.to(p, {
        duration: 1 + 2 * Math.random(),
        x: getRandomInt(p.originX - 8, p.originX + 8),
        y: getRandomInt(p.originY - 8, p.originY + 8),
        ease: "circ.out",
        onComplete: () => shiftPoint(p),
      });
    }

    function drawLines(p) {
      if (p.jointo) {
        p.jointo.forEach((joint) => {
          if (joint && joint.x !== undefined && joint.y !== undefined) {
            ctx.setLineDash([]);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(joint.x, joint.y);
            ctx.strokeStyle = p.color;
            ctx.stroke();
          } else {
            console.error("Joint is undefined or missing coordinates:", joint);
          }
        });
      } else {
        console.error("Jointo is undefined for point:", p);
      }
    }

    function drawTransit(p) {
      if (p.offset != null && p.jointo && p.jointo[0]) {
        ctx.save();
        ctx.setLineDash([p.length, p.seperation]);
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.jointo[0].x, p.jointo[0].y);
        ctx.strokeStyle = p.color === light ? light : gold;
        ctx.lineDashOffset = p.offset;
        ctx.stroke();
        ctx.restore();
        p.offset += 0.2 + 0.4 * Math.random();
      }
    }

    function Circle(pos, rad, color) {
      this.draw = function () {
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, rad, 0, 2 * Math.PI, false);
        ctx.fillStyle = color;
        ctx.fill();
      };
    }

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    canvas.width = width;
    canvas.height = height;
    initAnimation();

    // Cleanup function to stop the animation
    return () => {
      // You might want to add cleanup logic here if needed
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="max-w-full mx-auto block bg-transparent"
    />
  );
};

export default Globe;
