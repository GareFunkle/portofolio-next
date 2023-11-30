"use client";

import React, { useState } from "react";

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
      ) : (
        <LoadingAnimation onDone={() => setIsAnimationDone(true)} />
      )}
    </div>
  );
};

export default Home;
