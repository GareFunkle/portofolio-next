"use client";

import React, { useState } from "react";
import LoadingAnimation from "@/components/LoadingAnimation/LoadingAnimation";
import Sections from "@/components/Sections/Sections";
import { motion } from "framer-motion";

const boxVariants = {
  hidden: {
    opacity: 0.2,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  const [isAnimationDone, setIsAnimationDone] = useState(false);
  return (
    <div>
      {isAnimationDone ? (
        <motion.div
          variants={boxVariants}
          initial={"hidden"}
          animate={"visible"}
        >
          <Sections />
        </motion.div>
      ) : (
        <LoadingAnimation onDone={() => setIsAnimationDone(true)} />
      )}
    </div>
  );
};

export default Home;
