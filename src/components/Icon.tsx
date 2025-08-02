import { FC } from "react";
import { motion } from "framer-motion";

const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
  },
};

const Icon: FC = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 4,
        repeat: 2,
        ease: "linear"
      }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="192"
        height="192"
        viewBox="0 0 100 100"
        style={{
          stroke: "#9ca3af",
          strokeWidth: 1.5,
          strokeLinejoin: "round",
          strokeLinecap: "round",
          fill: "none",
        }}
      >
        {/* Globe outline */}
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeIn" },
          }}
        />
        
        {/* Longitude lines (meridians) */}
        <motion.ellipse
          cx="50"
          cy="50"
          rx="0"
          ry="40"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 1.5, ease: "easeIn" },
            delay: 0.3,
          }}
        />
        <motion.ellipse
          cx="50"
          cy="50"
          rx="20"
          ry="40"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 1.5, ease: "easeIn" },
            delay: 0.5,
          }}
        />
        <motion.ellipse
          cx="50"
          cy="50"
          rx="35"
          ry="40"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 1.5, ease: "easeIn" },
            delay: 0.7,
          }}
        />
        
        {/* Latitude lines (parallels) */}
        <motion.ellipse
          cx="50"
          cy="50"
          rx="40"
          ry="0"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 1.8, ease: "easeIn" },
            delay: 0.9,
          }}
        />
        <motion.ellipse
          cx="50"
          cy="50"
          rx="35"
          ry="20"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 1.3, ease: "easeIn" },
            delay: 1.1,
          }}
        />
        <motion.ellipse
          cx="50"
          cy="50"
          rx="28"
          ry="30"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 1.3, ease: "easeIn" },
            delay: 1.3,
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default Icon;