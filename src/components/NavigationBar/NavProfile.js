import React from "react";
import { motion } from "framer-motion";

import musicAvatar from "../../assets/icons/music.svg";

const variants = {
  hidden: { scale: 0.5, opacity: 0.5 },
  visible: { scale: 1, opacity: 1 },
};

export default function NavProfile({ avatar = musicAvatar, name }) {
  return (
    <div className="nav-profile-wrapper">
      <motion.div
        className="image-wrapper"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.8 }}
      >
        <img src={avatar} alt="Profile" />
      </motion.div>
      <h2 className="avatar-name">{name}</h2>
    </div>
  );
}
