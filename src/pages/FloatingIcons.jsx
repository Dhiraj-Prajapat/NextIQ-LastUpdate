import { motion } from "framer-motion";

const icons = [
  { IconPath: "/FloatingIcons/FileIcon.png", position: "top-30 left-50 lg:top-40 lg:left-30" },
  { IconPath: "/FloatingIcons/Icon2.png", position: "top-40 right-55 lg:top-35 lg:right-45" },
  { IconPath: "/FloatingIcons/Icon4.png", position: "top-65 left-50 lg:top-70 lg:left-15" },
  { IconPath: "/FloatingIcons/Icon3.png", position: "top-70 right-30 lg:top-65 lg:right-5" },
  { IconPath: "/FloatingIcons/Icon6.png", position: "top-105 left-40 lg:top-100 lg:left-25" },
  { IconPath: "/FloatingIcons/Icon5.png", position: "top-110 right-45 lg:top-108 lg:right-25" },
];

export function FloatingIcons() {
  return (
    <>
      {icons.map(({ IconPath, position }, index) => (
        <motion.div
          key={index}
          className={`lg:max-w-fit absolute ${position} rounded-full hidden lg:block -mx-[7%]`}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: index * 0.5,
          }}
          whileHover={{ scale: 1.2 }}
        >
          {/* <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" /> */}
          <img
            src={IconPath}
            alt="Icons"
            className="w-10 h-10 sm:w-18 sm:h-18 text-white"
          />
        </motion.div>
      ))}
    </>
  );
}
