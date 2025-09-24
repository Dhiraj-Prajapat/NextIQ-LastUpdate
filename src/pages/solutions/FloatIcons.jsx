import { motion } from "framer-motion";

const icons = [
  { IconPath: "/New-Images/f-icon-1.png", position: "  lg:top-80 lg:left-0  xl:top-70 xl:left-8  2xl:top-60 2xl:left-16" },
  { IconPath: "/New-Images/f-icon-2.png", position: "  lg:top-40 lg:left-15  xl:top-26 xl:left-30  2xl:top-6 2xl:left-40" },
  { IconPath: "/New-Images/f-icon-3.png", position: "  lg:top-30 lg:right-55  xl:top-22 xl:right-45  2xl:top-2 2xl:right-40" },
  { IconPath: "/New-Images/f-icon-4.png", position: "  lg:top-70 lg:right-30  xl:top-60 xl:right-12  2xl:top-40 2xl:right-10" },
];

export function FloatIcons() {
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
            className="w-10 h-10 sm:w-22 sm:h-22"
          />
        </motion.div>
      ))}
    </>
  );
}
