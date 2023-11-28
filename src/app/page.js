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

const Home = () => {
  const [isAnimationDone, setIsAnimationDone] = useState(false);
  return (
    <div>
      {isAnimationDone ? (
        <>
          <Header />
          <HeaderIcons />
          <HeaderMobile />
          <SectionHome />
          <SectionAbout />
          <SectionSkills />
          <SectionExperience />
          <SectionContact />
        </>
      ) : (
        <LoadingAnimation onDone={() => setIsAnimationDone(true)} />
      )}
    </div>
  );
};

export default Home;
