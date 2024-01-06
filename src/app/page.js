"use client";

import React, { useState, useEffect } from "react";
import LoadingAnimation from "@/components/LoadingAnimation/LoadingAnimation";
import Sections from "@/components/Sections/Sections";
import { motion } from "framer-motion";

const boxVariants = {
  hidden: {
    opacity: 0.1,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  useEffect(() => {
    if (!isAnimationComplete) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isAnimationComplete]);

  return (
    <div>
      {!isAnimationComplete && (
        <div style={{ position: "absolute", zIndex: 10 }}>
          <LoadingAnimation onDone={() => setIsAnimationComplete(true)} />
        </div>
      )}

      <motion.div
        variants={boxVariants}
        initial='hidden'
        animate='visible'
        style={{ zIndex: isAnimationComplete ? 1 : -1 }}
      >
        <Sections />
      </motion.div>
    </div>
  );
};

export default Home;
