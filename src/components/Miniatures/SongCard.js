import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function SongCard({
  name,
  lastname,
  transitionDelay,
  username,
  phone,
  website,
  link,
}) {
  return (
    <Link to={link}>
      <motion.div
        className="m-card-wrapper"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: transitionDelay }}
      >
        <p>
          <span>First Name: </span>
          {name}
        </p>
        <p>
          <span>Last Name: </span>
          {lastname}
        </p>
        <p>
          <span>User Name: </span>
          {username}
        </p>
      </motion.div>
    </Link>
  );
}
