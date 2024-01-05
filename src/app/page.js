"use client";

import React, { useState, useEffect } from "react";

import Header from "@/components/Header/Header";
import SectionContact from "@/components/Sections/SectionContact/SectionContact";
import SectionExperience from "@/components/Sections/SectionExperience/SectionExperience";
import SectionHome from "@/components/Sections/SectionHome/SectionHome";
import SectionSkills from "@/components/Sections/SectionSkills/SectionSkills";
import SectionAbout from "@/components/Sections/SectionAbout/SectionAbout";
import HeaderMobile from "@/components/Header/HeaderMobile/HeaderMobile";
import HeaderIcons from "@/components/Header/HeaderIcon/HeaderIcons";
import LoadingAnimation from "@/components/LoadingAnimation/LoadingAnimation";
import { motion } from "framer-motion";
import HeaderMail from "@/components/Header/HeaderMail/HeaderMail";

const boxVariants = {
  hidden: {
    opacity: 0,
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
      // Désactiver le défilement
      document.body.style.overflow = "hidden";
    } else {
      // Réactiver le défilement
      document.body.style.overflow = "";
    }
  }, [isAnimationComplete]);

  return (
    <div>
      {!isAnimationComplete && (
        <div style={{ position: "absolute", zIndex: 10, overflowY: "none" }}>
          <LoadingAnimation onDone={() => setIsAnimationComplete(true)} />
        </div>
      )}

      <motion.div
        variants={boxVariants}
        initial='hidden'
        animate='visible'
        style={{ zIndex: isAnimationComplete ? 1 : -1 }}
      >
        <Header />
        <HeaderIcons />
        <HeaderMail />
        <HeaderMobile />
        <SectionHome />
        <SectionAbout />
        <SectionSkills />
        <SectionExperience />
        <SectionContact />
      </motion.div>
    </div>
  );
};

export default Home;
