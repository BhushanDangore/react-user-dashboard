import React from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const variants = {
  hidden: { x: 15, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export default function DiscoverHeader({ title }) {
  return (
    <header className="header">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.8 }}
      >
        {title}
      </motion.h1>
      <div className="text-area">
        <motion.h2
          className="heading"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Your favorite tunes
        </motion.h2>
        <motion.p
          className="support-text"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          All
          <FontAwesomeIcon icon={faSun} />
          and all night
          <FontAwesomeIcon icon={faMoon} />
        </motion.p>
      </div>
    </header>
  );
}
